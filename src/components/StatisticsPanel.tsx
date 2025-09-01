import React from 'react';
import { EarthquakeFeature, MagnitudeFilter } from '../types/earthquake';
import { getMagnitudeLabel, getMagnitudeColor } from '../utils/earthquakeUtils';
import { Activity, TrendingUp, AlertTriangle } from 'lucide-react';

interface StatisticsPanelProps {
  earthquakes: EarthquakeFeature[];
  selectedFilter: MagnitudeFilter;
}

const StatisticsPanel: React.FC<StatisticsPanelProps> = ({ earthquakes, selectedFilter }) => {
  const getMagnitudeStats = () => {
    const stats = {
      total: earthquakes.length,
      major: earthquakes.filter(eq => eq.properties.mag >= 7).length,
      strong: earthquakes.filter(eq => eq.properties.mag >= 6 && eq.properties.mag < 7).length,
      moderate: earthquakes.filter(eq => eq.properties.mag >= 5 && eq.properties.mag < 6).length,
      light: earthquakes.filter(eq => eq.properties.mag >= 4 && eq.properties.mag < 5).length,
      minor: earthquakes.filter(eq => eq.properties.mag >= 3 && eq.properties.mag < 4).length,
      micro: earthquakes.filter(eq => eq.properties.mag < 3).length,
    };
    
    const maxMagnitude = Math.max(...earthquakes.map(eq => eq.properties.mag));
    const avgMagnitude = earthquakes.length > 0 
      ? earthquakes.reduce((sum, eq) => sum + eq.properties.mag, 0) / earthquakes.length 
      : 0;
    
    return { ...stats, maxMagnitude, avgMagnitude };
  };

  const stats = getMagnitudeStats();
  const recentEarthquakes = earthquakes
    .sort((a, b) => b.properties.time - a.properties.time)
    .slice(0, 5);

  return (
    <div className="w-80 bg-gray-800 border-l border-gray-700 overflow-y-auto">
      <div className="p-6">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
          <Activity className="w-6 h-6 text-blue-500" />
          <span>Statistics</span>
        </h2>
        
        {/* Summary Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-gray-300 text-sm">Total Events</span>
            </div>
            <p className="text-2xl font-bold text-white">{stats.total}</p>
          </div>
          
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <span className="text-gray-300 text-sm">Max Magnitude</span>
            </div>
            <p className="text-2xl font-bold text-white">{stats.maxMagnitude.toFixed(1)}</p>
          </div>
        </div>

        {/* Magnitude Breakdown */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">Magnitude Breakdown</h3>
          <div className="space-y-2">
            {[
              { label: 'Major (7.0+)', count: stats.major, color: '#8B5CF6' },
              { label: 'Strong (6.0-6.9)', count: stats.strong, color: '#EF4444' },
              { label: 'Moderate (5.0-5.9)', count: stats.moderate, color: '#F97316' },
              { label: 'Light (4.0-4.9)', count: stats.light, color: '#EAB308' },
              { label: 'Minor (3.0-3.9)', count: stats.minor, color: '#84CC16' },
              { label: 'Micro (<3.0)', count: stats.micro, color: '#6B7280' },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-gray-300 text-sm">{item.label}</span>
                </div>
                <span className="text-white font-medium">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Earthquakes */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Recent Activity</h3>
          <div className="space-y-3">
            {recentEarthquakes.map((earthquake) => (
              <div key={earthquake.id} className="bg-gray-700 p-3 rounded-lg">
                <div className="flex items-start space-x-2">
                  <div
                    className="w-3 h-3 rounded-full mt-1 flex-shrink-0"
                    style={{ backgroundColor: getMagnitudeColor(earthquake.properties.mag) }}
                  ></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium text-sm truncate">
                      M{earthquake.properties.mag.toFixed(1)} - {earthquake.properties.place}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {new Date(earthquake.properties.time).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPanel;