import React, { useState, useMemo } from 'react';
import { useEarthquakeData } from './hooks/useEarthquakeData';
import { MagnitudeFilter } from './types/earthquake';
import { magnitudeFilters } from './utils/earthquakeUtils';
import EarthquakeMap from './components/EarthquakeMap';
import Header from './components/Header';
import MagnitudeFilterComponent from './components/MagnitudeFilter';
import StatisticsPanel from './components/StatisticsPanel';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorDisplay from './components/ErrorDisplay';

function App() {
  const { earthquakes, loading, error, lastUpdated, refetch } = useEarthquakeData();
  const [selectedFilter, setSelectedFilter] = useState<MagnitudeFilter>(magnitudeFilters[0]);

  const filteredEarthquakes = useMemo(() => {
    if (selectedFilter.min === 0 && selectedFilter.max === 10) {
      return earthquakes;
    }
    
    return earthquakes.filter(earthquake => {
      const magnitude = earthquake.properties.mag;
      return magnitude >= selectedFilter.min && magnitude <= selectedFilter.max;
    });
  }, [earthquakes, selectedFilter]);

  const earthquakeCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    
    magnitudeFilters.forEach(filter => {
      if (filter.min === 0 && filter.max === 10) {
        counts[filter.label] = earthquakes.length;
      } else {
        counts[filter.label] = earthquakes.filter(eq => 
          eq.properties.mag >= filter.min && eq.properties.mag <= filter.max
        ).length;
      }
    });
    
    return counts;
  }, [earthquakes]);

  if (loading && earthquakes.length === 0) {
    return <LoadingSpinner />;
  }

  if (error && earthquakes.length === 0) {
    return <ErrorDisplay error={error} onRetry={refetch} />;
  }

  return (
    <div className="h-screen flex flex-col bg-gray-900">
      <Header
        earthquakeCount={filteredEarthquakes.length}
        lastUpdated={lastUpdated}
        onRefresh={refetch}
        isLoading={loading}
      />
      
      <MagnitudeFilterComponent
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
        earthquakeCounts={earthquakeCounts}
      />
      
      <div className="flex-1 flex">
        <EarthquakeMap earthquakes={filteredEarthquakes} />
        <StatisticsPanel 
          earthquakes={earthquakes}
          selectedFilter={selectedFilter}
        />
      </div>
      
      {error && earthquakes.length > 0 && (
        <div className="bg-red-900 text-red-200 px-6 py-2 text-sm">
          <span className="font-medium">Warning:</span> {error}
        </div>
      )}
    </div>
  );
}

export default App;