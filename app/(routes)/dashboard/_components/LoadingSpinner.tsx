import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[600px]">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        <div className="text-gray-600 font-medium animate-pulse">
          Loading your dashboard...
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;