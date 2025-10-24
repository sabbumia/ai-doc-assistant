import React from "react";
import { AlertCircle } from "lucide-react";

interface UsageProgressProps {
  reportCount: number;
  maxReports: number;
}

const UsageProgress: React.FC<UsageProgressProps> = ({
  reportCount,
  maxReports,
}) => {
  const percentage = (reportCount / maxReports) * 100;
  const isNearLimit = reportCount >= maxReports - 1;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-blue-800">
            Free Plan Usage
          </span>
        </div>
        <span className="text-sm font-medium text-blue-600 bg-white px-3 py-1 rounded-full">
          {reportCount}/{maxReports} reports
        </span>
      </div>

      <div className="relative">
        <div className="w-full bg-blue-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
            style={{ width: `${percentage}%` }}
          >
            <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>

      {isNearLimit && (
        <div className="flex items-center mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <AlertCircle className="w-4 h-4 text-amber-600 mr-2 animate-bounce" />
          <p className="text-xs text-amber-700 font-medium">
            Almost at your limit! Consider upgrading for unlimited access.
          </p>
        </div>
      )}
    </div>
  );
};

export default UsageProgress;