import { NextRequest, NextResponse } from "next/server";
import { openai } from "@/config/OpenAIModel";
import { AIDoctorAgents } from "@/shared/list";

// List of models to try in order
const MODELS = [
    "nvidia/nemotron-3.5-lightning:free",
    "nvidia/nemotron-3-ultra-550b-a55b:free",
    "nex-agi/nex-n2.5-mini:free",
    "inclusionai/ling-3.0-flash-sante:free",
    "poolside/laguna-s-2.1:free",
    "liquid/lfm-2.5-2.6b:free",
    "google/gemma-4-31b-it:free",
    "google/gemma-4-26b-a4b-it:free",
];

async function tryModelCompletion(model: string, messages: any[]) {
    try {
        const completion = await openai.chat.completions.create({
            model,
            messages,
        });
        
        const rawResp = completion.choices[0].message?.content;
        
        if (!rawResp) {
            throw new Error("No response from AI");
        }
        
        // Clean the response
        const cleanResp = rawResp.trim()
            .replace(/```json/g, '')
            .replace(/```/g, '')
            .trim();
        
        const JSONResp = JSON.parse(cleanResp);
        
        // Ensure we return an array
        if (Array.isArray(JSONResp)) {
            return JSONResp;
        } else if (JSONResp && Array.isArray(JSONResp.doctors)) {
            return JSONResp.doctors;
        } else if (JSONResp && Array.isArray(JSONResp.suggestedDoctors)) {
            return JSONResp.suggestedDoctors;
        } else {
            throw new Error("Unexpected response structure");
        }
        
    } catch (error) {
        console.error(`Model ${model} failed:`, error);
        throw error;
    }
}

export async function POST(req: NextRequest) {
    const { notes } = await req.json();
    
    const messages = [
        { role: 'system', content: JSON.stringify(AIDoctorAgents) },
        { 
            role: "user", 
            content: `User Notes/Symptoms: ${notes}. Based on user notes and symptoms, please suggest a list of doctors. Return the response as a JSON array of doctor objects only, with no additional text or formatting.` 
        }
    ];
    
    // Try each model in sequence until one succeeds
    for (let i = 0; i < MODELS.length; i++) {
        const model = MODELS[i];
        console.log(`Attempting with model ${i + 1}/${MODELS.length}: ${model}`);
        
        try {
            const result = await tryModelCompletion(model, messages);
            console.log(`Success with model: ${model}`);
            return NextResponse.json(result);
        } catch (error) {
            console.error(`Model ${model} failed, trying next model...`);
            
            // If this was the last model, return error
            if (i === MODELS.length - 1) {
                console.error("All models failed");
                return NextResponse.json(
                    { error: "Failed to get doctor suggestions from all available models" }, 
                    { status: 500 }
                );
            }
            // Otherwise, continue to next model
        }
    }
    
    // Fallback (should never reach here)
    return NextResponse.json(
        { error: "Failed to get doctor suggestions" }, 
        { status: 500 }
    );
}
