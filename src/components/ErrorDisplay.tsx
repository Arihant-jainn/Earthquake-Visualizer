import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorDisplayProps {
  error: string;
  onRetry: () => void;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error, onRetry }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-md w-full mx-4">
        <div className="flex items-center space-x-3 mb-4">
          <AlertTriangle className="text-red-500 w-8 h-8" />
          <h2 className="text-xl font-bold text-white">Error Loading Data</h2>
        </div>
        <p className="text-gray-300 mb-6">{error}</p>
        <button
          onClick={onRetry}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <RefreshCw className="w-5 h-5" />
          <span>Try Again</span>
        </button>
      </div>
    </div>
  );
};

export default ErrorDisplay;