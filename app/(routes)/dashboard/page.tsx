"use client";

import React, { useEffect, useState } from "react";
import HistoryList from "./_components/HistoryList";
import DoctorAgentList from "./_components/DoctorAgentList";
import LoadingSpinner from "./_components/LoadingSpinner";
import LimitReachedScreen from "./_components/LimitReachedScreen";
import DashboardHeader from "./_components/DashboardHeader";
import StatsGrid from "./_components/StatsGrid";
import UsageProgress from "./_components/UsageProgress";
import axios from "axios";

// Define types based on your HistoryTable structure
type Report = {
  agent: string;
  chiefComplaint: string;
  duration: string;
  medicationsMentioned: string[];
  recommendations: string[];
  sessionId: string;
  severity: string;
  summary: string;
  symptoms: string[];
  timestamp: string;
  user: string;
};

type DoctorAgent = {
  specialist: string;
};

type SessionDetail = {
  id: number;
  notes: string;
  sessionId: string;
  report: Report | string | null;
  selectedDoctor: DoctorAgent;
  createdOn: string;
};

const MAX_REPORTS = 15;

function Dashboard() {
  const [reportCount, setReportCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [totalSessions, setTotalSessions] = useState(0);

  useEffect(() => {
    checkReportCount();
  }, []);

  const checkReportCount = async () => {
    try {
      const result = await axios.get("/api/session-chat?sessionId=all");
      const sessions: SessionDetail[] = result.data || [];

      console.log("All sessions:", sessions);
      setTotalSessions(sessions.length);

      // Count sessions that have reports generated
      const completedReports = sessions.filter((session: SessionDetail) => {
        if (!session.report) return false;

        if (typeof session.report === "string") {
          return session.report.trim() !== "";
        }

        if (typeof session.report === "object") {
          return true;
        }

        return false;
      });

      console.log("Completed reports:", completedReports);
      console.log("Report count:", completedReports.length);

      setReportCount(completedReports.length);
    } catch (error) {
      console.error("Error checking report count:", error);
      setReportCount(0);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = () => {
    window.location.href = "/sign-up";
  };

  // Loading state
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Limit reached state
  if (reportCount >= MAX_REPORTS) {
    return (
      <LimitReachedScreen
        reportCount={reportCount}
        maxReports={MAX_REPORTS}
        onSignOut={handleSignOut}
      />
    );
  }

  // Main dashboard
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
        <DashboardHeader />
        
        {/* Stats Grid */}
        <StatsGrid totalSessions={totalSessions} reportCount={reportCount} />

        {/* Usage Progress */}
        <UsageProgress reportCount={reportCount} maxReports={MAX_REPORTS} />
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        <div className="transform transition-all duration-500 hover:translate-y-[-2px]">
          <HistoryList />
        </div>

        <div className="transform transition-all duration-500 hover:translate-y-[-2px]">
          <DoctorAgentList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;