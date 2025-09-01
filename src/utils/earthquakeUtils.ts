import { MagnitudeFilter } from '../types/earthquake';

export const getMagnitudeColor = (magnitude: number): string => {
  if (magnitude >= 7) return '#8B5CF6'; // Purple for major
  if (magnitude >= 6) return '#EF4444'; // Red for strong
  if (magnitude >= 5) return '#F97316'; // Orange for moderate
  if (magnitude >= 4) return '#EAB308'; // Yellow for light
  if (magnitude >= 3) return '#84CC16'; // Green for minor
  return '#6B7280'; // Gray for micro
};

export const getMagnitudeLabel = (magnitude: number): string => {
  if (magnitude >= 7) return 'Major';
  if (magnitude >= 6) return 'Strong';
  if (magnitude >= 5) return 'Moderate';
  if (magnitude >= 4) return 'Light';
  if (magnitude >= 3) return 'Minor';
  return 'Micro';
};

export const getMagnitudeSize = (magnitude: number): number => {
  return Math.max(6, Math.min(30, magnitude * 4));
};

export const magnitudeFilters: MagnitudeFilter[] = [
  { min: 0, max: 10, label: 'All Earthquakes', color: '#6B7280' },
  { min: 7, max: 10, label: 'Major (7.0+)', color: '#8B5CF6' },
  { min: 6, max: 6.9, label: 'Strong (6.0-6.9)', color: '#EF4444' },
  { min: 5, max: 5.9, label: 'Moderate (5.0-5.9)', color: '#F97316' },
  { min: 4, max: 4.9, label: 'Light (4.0-4.9)', color: '#EAB308' },
  { min: 3, max: 3.9, label: 'Minor (3.0-3.9)', color: '#84CC16' },
];

export const formatDateTime = (timestamp: number): string => {
  return new Date(timestamp).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });
};

export const formatTimeAgo = (timestamp: number): string => {
  const now = Date.now();
  const diff = now - timestamp;
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  return 'Just now';
};