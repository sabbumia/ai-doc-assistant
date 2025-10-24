import { Mail, Phone, MessageCircle, Video } from 'lucide-react';

export const contactMethods = [
    {
        id: 1,
        title: "Live Chat Support",
        description: "Get instant help from our AI assistants and support team",
        icon: MessageCircle,
        action: "Start Chat",
        availability: "24/7 Available",
        responseTime: "< 30 seconds",
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-50",
        iconColor: "text-blue-600",
        popular: true
    },
    {
        id: 2,
        title: "Video Consultation",
        description: "Schedule a video call with our healthcare experts",
        icon: Video,
        action: "Book Call",
        availability: "Sat-Thu 9AM-6PM",
        responseTime: "Same day",
        color: "from-purple-500 to-indigo-500",
        bgColor: "bg-purple-50",
        iconColor: "text-purple-600",
        popular: false
    },
    {
        id: 3,
        title: "Phone Support",
        description: "Speak directly with our customer care team",
        icon: Phone,
        action: "Call Now",
        availability: "24/7 Available",
        responseTime: "Immediate",
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-green-50",
        iconColor: "text-green-600",
        popular: false
    },
    {
        id: 4,
        title: "Email Support",
        description: "Send us detailed queries and get comprehensive responses",
        icon: Mail,
        action: "Send Email",
        availability: "Always Open",
        responseTime: "< 2 hours",
        color: "from-orange-500 to-red-500",
        bgColor: "bg-orange-50",
        iconColor: "text-orange-600",
        popular: false
    }
];

export const officeLocations = [
    {
        id: 1,
        city: "Dhaka",
        address: "123 Gulshan Avenue, Gulshan-1, Dhaka 1212",
        phone: "+880 2 9876543",
        hours: "Sat-Thu: 9AM-6PM",
        type: "Headquarters"
    },
    {
        id: 2,
        city: "Chittagong",
        address: "456 Agrabad Commercial Area, Chittagong 4100",
        phone: "+880 31 234567",
        hours: "Sat-Thu: 8AM-5PM",
        type: "Regional Office"
    },
    {
        id: 3,
        city: "Sylhet",
        address: "789 Zindabazar, Sylhet 3100",
        phone: "+880 821 123456",
        hours: "Sat-Thu: 9AM-5PM",
        type: "Branch Office"
    }
];

export const faqs = [
    {
        id: 1,
        question: "How quickly can I get medical advice?",
        answer: "Our AI doctors are available 24/7 and typically respond within 30 seconds. For specialized consultations, you can book appointments that are usually available within the same day."
    },
    {
        id: 2,
        question: "Is my health data secure and private?",
        answer: "Absolutely. We use end-to-end encryption and comply with international healthcare data protection standards. Your health information is never shared without your explicit consent and is stored securely."
    },
    {
        id: 3,
        question: "What types of medical conditions can you help with?",
        answer: "Our AI doctors cover a wide range of specialties including general medicine, pediatrics, dermatology, mental health, cardiology, and more. For serious emergencies, we'll direct you to appropriate emergency services."
    },
    {
        id: 4,
        question: "What are your payment options?",
        answer: "We accept various payment methods including bKash, Nagad, Rocket, bank transfers, and major credit/debit cards. We offer flexible pricing plans to make healthcare accessible to everyone."
    }
];