import { Zap, Crown, Heart } from 'lucide-react';

export const plans = [
    {
      name: "Free Plan",
      price: "$0",
      period: "/month",
      description: "Perfect for trying out our AI Doctor services",
      features: [
        "Access to General Physician",
        "5 medical reports per month",
        "Basic health consultations",
        "Email support",
        "Community access"
      ],
      buttonText: "Get Started Free",
      popular: false,
      color: "from-blue-500 to-cyan-500",
      icon: Heart
    },
    {
      name: "Pro Plan",
      price: "$29",
      period: "/month",
      description: "Ideal for regular health monitoring and consultations",
      features: [
        "Access to all 10 specialists",
        "Unlimited medical reports",
        "Priority AI consultations",
        "24/7 chat support",
        "Advanced health tracking",
        "Prescription management",
        "Health history analytics"
      ],
      buttonText: "Upgrade to Pro",
      popular: true,
      color: "from-purple-500 to-pink-500",
      icon: Zap
    },
    {
      name: "Premium Plan",
      price: "$59",
      period: "/month",
      description: "Complete healthcare solution for families",
      features: [
        "Everything in Pro Plan",
        "Family account (up to 6 members)",
        "Video consultations",
        "Personalized health plans",
        "Medicine delivery integration",
        "Emergency consultation priority",
        "Dedicated health coordinator",
        "Monthly health reports"
      ],
      buttonText: "Go Premium",
      popular: false,
      color: "from-amber-500 to-orange-500",
      icon: Crown
    }
  ];