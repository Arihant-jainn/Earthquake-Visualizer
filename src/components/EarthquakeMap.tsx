import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { EarthquakeFeature } from '../types/earthquake';
import { getMagnitudeColor, getMagnitudeSize, getMagnitudeLabel, formatDateTime } from '../utils/earthquakeUtils';
import { MapPin, Clock, Gauge, Globe } from 'lucide-react';

interface EarthquakeMapProps {
  earthquakes: EarthquakeFeature[];
}

const EarthquakeMap: React.FC<EarthquakeMapProps> = ({ earthquakes }) => {
  const center: LatLngExpression = [20, 0];

  return (
    <div className="flex-1 relative">
      <MapContainer
        center={center}
        zoom={2}
        className="w-full h-full"
        zoomControl={true}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        
        {earthquakes.map((earthquake) => {
          const [longitude, latitude, depth] = earthquake.geometry.coordinates;
          const magnitude = earthquake.properties.mag;
          const position: LatLngExpression = [latitude, longitude];

          return (
            <CircleMarker
              key={earthquake.id}
              center={position}
              radius={getMagnitudeSize(magnitude)}
              fillColor={getMagnitudeColor(magnitude)}
              color="#ffffff"
              weight={2}
              opacity={0.8}
              fillOpacity={0.6}
            >
              <Popup className="custom-popup">
                <div className="bg-gray-800 text-white p-4 rounded-lg min-w-64">
                  <div className="flex items-start space-x-3 mb-3">
                    <div
                      className="w-4 h-4 rounded-full mt-1 flex-shrink-0"
                      style={{ backgroundColor: getMagnitudeColor(magnitude) }}
                    ></div>
                    <div>
                      <h3 className="font-bold text-lg text-white mb-1">
                        {earthquake.properties.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {earthquake.properties.place}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Gauge className="w-4 h-4 text-blue-400" />
                      <span className="text-sm">
                        <strong>Magnitude:</strong> {magnitude.toFixed(1)} ({getMagnitudeLabel(magnitude)})
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-green-400" />
                      <span className="text-sm">
                        <strong>Time:</strong> {formatDateTime(earthquake.properties.time)}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-red-400" />
                      <span className="text-sm">
                        <strong>Coordinates:</strong> {latitude.toFixed(3)}°, {longitude.toFixed(3)}°
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">
                        <strong>Depth:</strong> {depth.toFixed(1)} km
                      </span>
                    </div>
                    
                    {earthquake.properties.tsunami === 1 && (
                      <div className="bg-red-900 text-red-200 px-2 py-1 rounded text-sm font-medium">
                        ⚠️ Tsunami Warning
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-gray-600">
                    <a
                      href={earthquake.properties.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm underline"
                    >
                      View detailed report →
                    </a>
                  </div>
                </div>
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default EarthquakeMap;