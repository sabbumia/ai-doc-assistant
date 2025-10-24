import React from "react";
import AddNewSessionDialog from "./AddNewSessionDialog";

const DashboardHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
          Medical Dashboard
        </h1>
        <p className="text-gray-600">
          Welcome back! Manage your AI medical consultations
        </p>
      </div>
      <div className="transform hover:scale-105 transition-all duration-200 mt-2">
        <AddNewSessionDialog />
      </div>
    </div>
  );
};

export default DashboardHeader;