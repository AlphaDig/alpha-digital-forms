'use client';

import { useState, ChangeEvent } from 'react';
import { LocationCoordinatesProps } from '@/types/form';

export default function LocationCoordinates({ onCoordinatesChange }: LocationCoordinatesProps) {
  const [coordinates, setCoordinates] = useState<string>('');

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const coords = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
          setCoordinates(coords);
          onCoordinatesChange(coords);
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to get your location. Please enter manually.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCoordinates(value);
    onCoordinatesChange(value);
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input
          type="text"
          value={coordinates}
          onChange={handleInputChange}
          placeholder="Enter coordinates"
          className="flex-1 border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500"
          required
        />
        <button
          type="button"
          onClick={getCurrentLocation}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 whitespace-nowrap text-sm"
        >
          Get Location
        </button>
      </div>
      <div className="text-xs text-gray-500">
        Example: 101.1234, 3.123456
      </div>
    </div>
  );
}