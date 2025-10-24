import { Heart, Brain, Shield, Activity, Apple, Moon, Star } from 'lucide-react';

export const healthTips = [
    {
        id: 1,
        title: "Stay Hydrated Throughout the Day",
        description: "Drinking adequate water helps maintain body temperature, joint lubrication, and nutrient transport.",
        category: "General Health",
        readTime: "3 min",
        difficulty: "Easy",
        rating: 4.9,
        image: "💧",
        tips: [
            "Drink 8-10 glasses of water daily",
            "Start your day with a glass of water",
            "Keep a water bottle nearby",
            "Add lemon or cucumber for flavor"
        ],
        benefits: ["Better skin health", "Improved digestion", "Enhanced energy levels"],
        isPopular: true,
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: 2,
        title: "Get Quality Sleep for Better Health",
        description: "7-9 hours of quality sleep is essential for physical recovery and mental well-being.",
        category: "Sleep & Recovery",
        readTime: "5 min",
        difficulty: "Medium",
        rating: 4.8,
        image: "😴",
        tips: [
            "Maintain consistent sleep schedule",
            "Create a relaxing bedtime routine",
            "Keep bedroom cool and dark",
            "Avoid screens 1 hour before bed"
        ],
        benefits: ["Better memory", "Stronger immunity", "Improved mood"],
        isPopular: true,
        color: "from-indigo-500 to-purple-500"
    },
    {
        id: 3,
        title: "Exercise Regularly for Heart Health",
        description: "Regular physical activity strengthens your heart and improves cardiovascular health.",
        category: "Fitness",
        readTime: "4 min",
        difficulty: "Medium",
        rating: 4.7,
        image: "💪",
        tips: [
            "Aim for 150 minutes moderate exercise weekly",
            "Include both cardio and strength training",
            "Start slowly and gradually increase",
            "Find activities you enjoy"
        ],
        benefits: ["Stronger heart", "Better circulation", "Weight management"],
        isPopular: false,
        color: "from-red-500 to-pink-500"
    },
    {
        id: 4,
        title: "Eat a Balanced Diet Rich in Nutrients",
        description: "A well-balanced diet provides essential nutrients for optimal body function.",
        category: "Nutrition",
        readTime: "6 min",
        difficulty: "Easy",
        rating: 4.9,
        image: "🥗",
        tips: [
            "Include fruits and vegetables in every meal",
            "Choose whole grains over refined",
            "Include lean proteins",
            "Limit processed foods"
        ],
        benefits: ["Better immunity", "Sustained energy", "Healthy weight"],
        isPopular: true,
        color: "from-green-500 to-emerald-500"
    },
    {
        id: 5,
        title: "Practice Stress Management Techniques",
        description: "Managing stress effectively improves both mental and physical health.",
        category: "Mental Health",
        readTime: "7 min",
        difficulty: "Medium",
        rating: 4.8,
        image: "🧘",
        tips: [
            "Practice deep breathing exercises",
            "Try meditation or mindfulness",
            "Maintain work-life balance",
            "Connect with friends and family"
        ],
        benefits: ["Reduced anxiety", "Better focus", "Lower blood pressure"],
        isPopular: true,
        color: "from-purple-500 to-indigo-500"
    },
    {
        id: 6,
        title: "Maintain Good Posture",
        description: "Proper posture prevents back pain and improves overall body alignment.",
        category: "Physical Health",
        readTime: "4 min",
        difficulty: "Easy",
        rating: 4.6,
        image: "🚶",
        tips: [
            "Keep shoulders back and relaxed",
            "Align ears over shoulders",
            "Take regular breaks from sitting",
            "Use ergonomic furniture"
        ],
        benefits: ["Reduced back pain", "Better breathing", "Increased confidence"],
        isPopular: false,
        color: "from-orange-500 to-yellow-500"
    },
    {
        id: 7,
        title: "Protect Your Eyes from Digital Strain",
        description: "Simple habits to reduce eye strain from prolonged screen use.",
        category: "Eye Health",
        readTime: "3 min",
        difficulty: "Easy",
        rating: 4.7,
        image: "👀",
        tips: [
            "Follow the 20-20-20 rule",
            "Adjust screen brightness",
            "Blink frequently",
            "Use artificial tears if needed"
        ],
        benefits: ["Reduced eye fatigue", "Better vision health", "Less headaches"],
        isPopular: false,
        color: "from-teal-500 to-green-500"
    },
    {
        id: 8,
        title: "Boost Your Immune System Naturally",
        description: "Natural ways to strengthen your body's defense system.",
        category: "Immunity",
        readTime: "5 min",
        difficulty: "Easy",
        rating: 4.8,
        image: "🛡️",
        tips: [
            "Eat vitamin C rich foods",
            "Get adequate sleep",
            "Exercise regularly",
            "Manage stress levels"
        ],
        benefits: ["Fewer illnesses", "Faster recovery", "Better overall health"],
        isPopular: true,
        color: "from-cyan-500 to-blue-500"
    }
];

export const categories = [
    { name: "All", icon: Star, count: healthTips.length },
    { name: "General Health", icon: Heart, count: healthTips.filter(tip => tip.category === "General Health").length },
    { name: "Nutrition", icon: Apple, count: healthTips.filter(tip => tip.category === "Nutrition").length },
    { name: "Fitness", icon: Activity, count: healthTips.filter(tip => tip.category === "Fitness").length },
    { name: "Mental Health", icon: Brain, count: healthTips.filter(tip => tip.category === "Mental Health").length },
    { name: "Sleep & Recovery", icon: Moon, count: healthTips.filter(tip => tip.category === "Sleep & Recovery").length },
    { name: "Physical Health", icon: Shield, count: healthTips.filter(tip => tip.category === "Physical Health").length }
];