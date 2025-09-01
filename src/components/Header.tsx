import React from 'react';
import { Globe, RefreshCw } from 'lucide-react';
import { formatTimeAgo } from '../utils/earthquakeUtils';

interface HeaderProps {
  earthquakeCount: number;
  lastUpdated: number | null;
  onRefresh: () => void;
  isLoading: boolean;
}

const Header: React.FC<HeaderProps> = ({ earthquakeCount, lastUpdated, onRefresh, isLoading }) => {
  return (
    <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Globe className="text-blue-500 w-8 h-8" />
          <div>
            <h1 className="text-2xl font-bold text-white">Earthquake Visualizer</h1>
            <p className="text-gray-400 text-sm">
              Global seismic activity monitor
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-white font-medium">{earthquakeCount} earthquakes</p>
            {lastUpdated && (
              <p className="text-gray-400 text-sm">
                Updated {formatTimeAgo(lastUpdated)}
              </p>
            )}
          </div>
          
          <button
            onClick={onRefresh}
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white p-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
          >
            <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;