import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';

interface RoutePoint {
  day: number;
  name: string;
  lat: number;
  lng: number;
  order: number;
}

interface RouteMapProps {
  locations: RoutePoint[];
}

// Custom Leaflet DivIcon for Route numbered stops
const createCustomMarker = (day: number) => {
  return L.divIcon({
    className: 'custom-route-marker',
    html: `
      <div style="
        background-color: #164B35;
        color: #D6A84F;
        border: 2px solid white;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        border-radius: 50%;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        font-size: 13px;
        font-family: sans-serif;
      ">
        D${day}
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -18]
  });
};

// Component to dynamically fit map bounds to route
const FitBounds: React.FC<{ locations: RoutePoint[] }> = ({ locations }) => {
  const map = useMap();

  useEffect(() => {
    if (locations.length === 0) return;
    const bounds = L.latLngBounds(locations.map(loc => [loc.lat, loc.lng]));
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 10 });
  }, [locations, map]);

  return null;
};

export const RouteMap: React.FC<RouteMapProps> = ({ locations }) => {
  if (!locations || locations.length === 0) return null;

  const polylineCoords: [number, number][] = locations.map(l => [l.lat, l.lng]);
  const defaultCenter: [number, number] = [locations[0].lat, locations[0].lng];

  return (
    <div className="bg-white rounded-3xl border border-forest-800/15 overflow-hidden shadow-soft">
      <div className="p-4 sm:p-5 bg-cream-50 border-b border-forest-800/10 flex items-center justify-between">
        <div>
          <h4 className="font-serif font-bold text-lg text-forest-900">
            Interactive Journey Route Map
          </h4>
          <p className="text-xs text-charcoal-500">
            Numbered stops correspond to each day’s destination stopover.
          </p>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-forest-800 text-cream-50">
          {locations.length} {locations.length === 1 ? 'Destination' : 'Destinations Connected'}
        </span>
      </div>

      <div className="h-80 sm:h-96 w-full relative z-10">
        <MapContainer
          center={defaultCenter}
          zoom={8}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <FitBounds locations={locations} />

          {/* Polyline Route */}
          {polylineCoords.length > 1 && (
            <Polyline
              positions={polylineCoords}
              pathOptions={{ color: '#164B35', weight: 4, dashArray: '6, 8', opacity: 0.8 }}
            />
          )}

          {/* Destination Markers */}
          {locations.map((loc, idx) => (
            <Marker
              key={idx}
              position={[loc.lat, loc.lng]}
              icon={createCustomMarker(loc.day)}
            >
              <Popup>
                <div className="p-1">
                  <div className="font-bold text-xs text-forest-900">Day {loc.day}: {loc.name}</div>
                  <div className="text-[11px] text-charcoal-600">Stop #{loc.order} in your circuit</div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

