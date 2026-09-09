"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Phone,
  Mic,
  MapPin,
  ChevronDown,
  HeartPulse,
  Brain,
  Wind,
  Droplet,
  Flame,
  ShieldAlert,
  Plus,
} from "lucide-react";

// Set this to the emergency number relevant to your primary user base.
// In production this should be resolved from the user's detected location.
const EMERGENCY_NUMBER = "999";

type FirstAidItem = {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  steps: string[];
};

const FIRST_AID: FirstAidItem[] = [
  {
    id: "chest-pain",
    icon: HeartPulse,
    title: "Chest pain or suspected heart attack",
    subtitle: "Pressure, tightness, or pain spreading to arm, jaw, or back",
    steps: [
      "Call emergency services immediately — do not drive yourself.",
      "Have the person sit down, stay calm, and loosen tight clothing.",
      "If they take prescribed heart medication (e.g. aspirin or nitroglycerin), help them take it as directed by their doctor.",
      "If they become unresponsive and stop breathing normally, begin CPR: push hard and fast in the center of the chest, about twice per second.",
    ],
  },
  {
    id: "stroke",
    icon: Brain,
    title: "Suspected stroke",
    subtitle: "Sudden confusion, slurred speech, one-sided weakness",
    steps: [
      "Use the FAST check: Face drooping, Arm weakness, Speech difficulty, Time to call for help.",
      "Note the time symptoms started — this changes what treatment is possible.",
      "Call emergency services right away, even if symptoms fade.",
      "Keep the person still. Do not give food, water, or medication.",
    ],
  },
  {
    id: "breathing",
    icon: Wind,
    title: "Trouble breathing or severe allergic reaction",
    subtitle: "Wheezing, swelling of face or throat, gasping",
    steps: [
      "Call emergency services immediately.",
      "If they carry an epinephrine auto-injector, help them use it right away.",
      "Help them sit upright, leaning slightly forward — do not let them lie flat.",
      "Stay with them until help arrives; a second reaction can follow the first.",
    ],
  },
  {
    id: "bleeding",
    icon: Droplet,
    title: "Severe bleeding",
    subtitle: "Bleeding that won't stop or is spurting",
    steps: [
      "Call emergency services.",
      "Press a clean cloth firmly on the wound and keep steady pressure — don't lift it to check.",
      "Keep adding layers on top if it soaks through, rather than removing the first one.",
      "Raise the injured area above heart level if possible, and keep the person warm and lying down.",
    ],
  },
  {
    id: "burns",
    icon: Flame,
    title: "Severe burns",
    subtitle: "Deep, large, or on the face, hands, or joints",
    steps: [
      "Call emergency services for anything larger than a small patch or involving the face, hands, or airway.",
      "Cool the burn under cool (not icy) running water for 20 minutes.",
      "Remove tight clothing or jewelry near the burn before swelling starts, but don't peel off stuck fabric.",
      "Cover loosely with clean, non-fluffy material. Don't apply creams, ice, or burst blisters.",
    ],
  },
  {
    id: "unresponsive",
    icon: ShieldAlert,
    title: "Unresponsive or not breathing normally",
    subtitle: "No response, no normal breathing",
    steps: [
      "Call emergency services immediately and put the call on speaker.",
      "Check for normal breathing. If absent, begin CPR: 30 chest compressions to 2 rescue breaths, and keep going.",
      "If untrained in rescue breaths, hands-only CPR — continuous chest compressions — is still effective.",
      "If an AED (defibrillator) is nearby, ask someone to bring it and follow its voice prompts.",
    ],
  },
];

const HOSPITALS = [
  { name: "Dhaka Medical College Hospital", distance: "2.1 km" },
  { name: "Square Hospital", distance: "3.4 km" },
  { name: "United Hospital", distance: "5.8 km" },
];

export default function EmergencyPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="relative bg-white">
      {/* Spacer to clear the fixed Navbar (h-16 on mobile, h-18 on lg) */}
      <div className="h-16 lg:h-18" />

      {/* Full-bleed critical alert bar, pinned just under the fixed navbar */}
      <div className="sticky top-16 lg:top-18 z-40 w-full bg-red-600 text-white shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-3">
          <p className="text-sm font-medium">
            If this is life-threatening, don&apos;t wait — call for help now.
          </p>
          <a
            href={`tel:${EMERGENCY_NUMBER}`}
            className="flex items-center gap-2 rounded-md bg-white px-4 py-1.5 text-sm font-semibold text-red-600 transition-colors duration-300 hover:bg-red-50"
          >
            <Phone size={16} />
            Call {EMERGENCY_NUMBER}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 max-w-xl">
            Get help right away, or talk to someone now
          </h1>
          <p className="text-slate-600 max-w-md text-sm md:text-base">
            Choose what fits your situation. If you&apos;re not sure how
            serious it is, start with an AI voice consult — it will tell you
            immediately if you need to call for emergency help instead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={`tel:${EMERGENCY_NUMBER}`}
              className="flex items-center justify-center gap-2 rounded-lg bg-red-600 px-8 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-red-700"
            >
              <Phone size={20} />
              Call emergency services
            </a>
            <Link
              href="/dashboard"
              className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-8 py-4 text-base font-semibold text-slate-900 transition-colors duration-300 hover:border-blue-600 hover:text-blue-600"
            >
              <Mic size={20} />
              Start urgent AI voice consult
            </Link>
          </div>
        </motion.section>

        {/* Severity tiers */}
        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border-l-4 border-red-600 border-y border-r border-slate-200 p-5 space-y-2 bg-white">
            <p className="text-sm font-semibold text-red-600">Critical</p>
            <p className="text-sm text-slate-700">
              Chest pain, stroke signs, no breathing, severe bleeding,
              choking, major trauma.
            </p>
            <p className="text-sm font-medium text-slate-900">
              Call {EMERGENCY_NUMBER} now
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-amber-500 border-y border-r border-slate-200 p-5 space-y-2 bg-white">
            <p className="text-sm font-semibold text-amber-600">Urgent</p>
            <p className="text-sm text-slate-700">
              High fever, persistent vomiting, deep cuts, moderate burns,
              fractures.
            </p>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-slate-900 hover:text-blue-600"
            >
              Talk to an AI doctor now
            </Link>
          </div>
          <div className="rounded-lg border-l-4 border-blue-600 border-y border-r border-slate-200 p-5 space-y-2 bg-white">
            <p className="text-sm font-semibold text-blue-600">General</p>
            <p className="text-sm text-slate-700">
              Mild symptoms, ongoing conditions, questions about medication
              or recovery.
            </p>
            <Link
              href="/doctors"
              className="text-sm font-medium text-slate-900 hover:text-blue-600"
            >
              Book a regular AI consult
            </Link>
          </div>
        </section>

        {/* First aid accordion */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              While help is on the way
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Standard first-aid steps for common emergencies. These support
              professional care — they don&apos;t replace it.
            </p>
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {FIRST_AID.map((item) => {
              const Icon = item.icon;
              const isOpen = openId === item.id;
              return (
                <div key={item.id}>
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <Icon size={20} className="shrink-0 text-slate-500" />
                      <div>
                        <p className="font-medium text-slate-900">
                          {item.title}
                        </p>
                        <p className="text-sm text-slate-500">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      size={16}
                      className={`shrink-0 text-slate-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <ol className="pb-6 pl-9 space-y-2">
                      {item.steps.map((step, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm text-slate-700"
                        >
                          <span className="text-slate-400">{i + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Nearby hospitals */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">
              Nearest emergency rooms
            </h2>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline">
              Open map
            </button>
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {HOSPITALS.map((h) => (
              <div
                key={h.name}
                className="flex items-center justify-between py-4"
              >
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-slate-400" />
                  <span className="text-sm text-slate-800">{h.name}</span>
                </div>
                <span className="text-sm text-slate-500">{h.distance}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency contacts */}
        {/* <section className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-900">
            Your emergency contacts
          </h2>
          <div className="rounded-lg border border-dashed border-slate-300 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              Add someone we can notify with your location if you start an
              emergency consult.
            </p>
            <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 transition-colors duration-300 hover:border-blue-600 hover:text-blue-600 whitespace-nowrap">
              <Plus size={16} />
              Add contact
            </button>
          </div>
        </section> */}

        {/* Disclaimer */}
        <p className="text-xs text-slate-400 max-w-xl">
          This page and the AI assistant are not a substitute for
          professional emergency medical care. In any life-threatening
          situation, call {EMERGENCY_NUMBER} or your local emergency number
          directly.
        </p>
      </div>
    </div>
  );
}
