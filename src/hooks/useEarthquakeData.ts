import { useState, useEffect } from 'react';
import { EarthquakeResponse, EarthquakeFeature } from '../types/earthquake';

const EARTHQUAKE_API_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';

export const useEarthquakeData = () => {
  const [earthquakes, setEarthquakes] = useState<EarthquakeFeature[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<number | null>(null);

  const fetchEarthquakes = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(EARTHQUAKE_API_URL);
      if (!response.ok) {
        throw new Error(`Failed to fetch earthquake data: ${response.status}`);
      }
      
      const data: EarthquakeResponse = await response.json();
      setEarthquakes(data.features);
      setLastUpdated(Date.now());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch earthquake data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEarthquakes();
    
    // Auto-refresh every 5 minutes
    const interval = setInterval(fetchEarthquakes, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return {
    earthquakes,
    loading,
    error,
    lastUpdated,
    refetch: fetchEarthquakes
  };
};