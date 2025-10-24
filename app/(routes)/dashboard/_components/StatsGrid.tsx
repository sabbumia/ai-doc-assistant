import React from "react";
import { Activity, Calendar, Users, TrendingUp } from "lucide-react";
import StatsCard from "./StatsCard";

interface StatsGridProps {
  totalSessions: number;
  reportCount: number;
}

const StatsGrid: React.FC<StatsGridProps> = ({
  totalSessions,
  reportCount,
}) => {
  const stats = [
    {
      title: "Total Consultations",
      value: totalSessions,
      icon: Activity,
      color: "from-blue-400 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      title: "Reports Generated",
      value: reportCount,
      icon: Calendar,
      color: "from-green-400 to-green-600",
      bgColor: "from-green-50 to-green-100",
    },
    {
      title: "AI Specialists",
      value: "10+",
      icon: Users,
      color: "from-purple-400 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
    },
    {
      title: "Success Rate",
      value: "98%",
      icon: TrendingUp,
      color: "from-pink-400 to-pink-600",
      bgColor: "from-pink-50 to-pink-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((stat, index) => (
        <StatsCard
          key={index}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          color={stat.color}
          bgColor={stat.bgColor}
        />
      ))}
    </div>
  );
};

export default StatsGrid;