import React from 'react';
import { MagnitudeFilter } from '../types/earthquake';
import { magnitudeFilters } from '../utils/earthquakeUtils';

interface MagnitudeFilterProps {
  selectedFilter: MagnitudeFilter;
  onFilterChange: (filter: MagnitudeFilter) => void;
  earthquakeCounts: Record<string, number>;
}

const MagnitudeFilterComponent: React.FC<MagnitudeFilterProps> = ({
  selectedFilter,
  onFilterChange,
  earthquakeCounts
}) => {
  return (
    <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
      <h3 className="text-white font-medium mb-3">Filter by Magnitude</h3>
      <div className="flex flex-wrap gap-2">
        {magnitudeFilters.map((filter) => {
          const count = earthquakeCounts[filter.label] || 0;
          const isSelected = selectedFilter.label === filter.label;
          
          return (
            <button
              key={filter.label}
              onClick={() => onFilterChange(filter)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: filter.color }}
              ></div>
              <span>{filter.label}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded ${
                isSelected ? 'bg-blue-500' : 'bg-gray-600'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MagnitudeFilterComponent;