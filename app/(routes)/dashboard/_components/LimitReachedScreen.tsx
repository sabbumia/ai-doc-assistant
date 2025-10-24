import React from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, Mail } from "lucide-react";

interface LimitReachedScreenProps {
  reportCount: number;
  maxReports: number;
  onSignOut: () => void;
}

const LimitReachedScreen: React.FC<LimitReachedScreenProps> = ({
  reportCount,
  maxReports,
  onSignOut,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-2xl p-8 text-center border border-red-100 transform hover:scale-105 transition-all duration-300">
        <div className="relative">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
            <AlertCircle className="w-10 h-10 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-ping opacity-75"></div>
        </div>

        <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Limit Reached
        </h2>

        <p className="text-gray-600 mb-8 leading-relaxed">
          You've maximized your free consultations! Sign up with a new email to
          get 5 more AI medical consultations.
        </p>

        <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 mb-8 border border-red-100">
          <div className="text-sm text-gray-600 mb-2">Reports Generated</div>
          <div className="text-3xl font-bold text-red-600 mb-2">
            {reportCount}/{maxReports}
          </div>
          <div className="w-full bg-red-200 rounded-full h-3 overflow-hidden">
            <div className="bg-gradient-to-r from-red-400 to-red-600 h-3 rounded-full w-full animate-pulse"></div>
          </div>
        </div>

        <Button
          onClick={onSignOut}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          size="lg"
        >
          <Mail className="w-5 h-5 mr-2" />
          Get More Consultations
        </Button>

        <p className="text-xs text-gray-500 mt-4">
          New email • 5 free reports • Instant access
        </p>
      </div>
    </div>
  );
};

export default LimitReachedScreen;