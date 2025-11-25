// Geolocation utilities for weather and frost alerts

export interface Coordinates {
  latitude: number;
  longitude: number;
  accuracy?: number;
  altitude?: number;
  altitudeAccuracy?: number;
  heading?: number;
  speed?: number;
}

export interface LocationError {
  code: number;
  message: string;
}

// Check if geolocation is available
export const isGeolocationAvailable = (): boolean => {
  return 'geolocation' in navigator;
};

// Get current position
export const getCurrentPosition = (
  options?: PositionOptions
): Promise<Coordinates> => {
  return new Promise((resolve, reject) => {
    if (!isGeolocationAvailable()) {
      reject({
        code: 0,
        message: 'Geolocation is not supported by this browser',
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          altitude: position.coords.altitude || undefined,
          altitudeAccuracy: position.coords.altitudeAccuracy || undefined,
          heading: position.coords.heading || undefined,
          speed: position.coords.speed || undefined,
        });
      },
      (error) => {
        reject({
          code: error.code,
          message: getGeolocationErrorMessage(error.code),
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000, // 5 minutes
        ...options,
      }
    );
  });
};

// Watch position (continuous tracking)
export const watchPosition = (
  callback: (coords: Coordinates) => void,
  errorCallback?: (error: LocationError) => void,
  options?: PositionOptions
): number | null => {
  if (!isGeolocationAvailable()) {
    return null;
  }

  return navigator.geolocation.watchPosition(
    (position) => {
      callback({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: position.coords.accuracy,
        altitude: position.coords.altitude || undefined,
        altitudeAccuracy: position.coords.altitudeAccuracy || undefined,
        heading: position.coords.heading || undefined,
        speed: position.coords.speed || undefined,
      });
    },
    (error) => {
      if (errorCallback) {
        errorCallback({
          code: error.code,
          message: getGeolocationErrorMessage(error.code),
        });
      }
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 60000, // 1 minute
      ...options,
    }
  );
};

// Clear position watch
export const clearWatch = (watchId: number): void => {
  if (isGeolocationAvailable()) {
    navigator.geolocation.clearWatch(watchId);
  }
};

// Get error message from error code
function getGeolocationErrorMessage(code: number): string {
  switch (code) {
    case 1:
      return 'Permission denied. Please allow location access to get frost alerts.';
    case 2:
      return 'Position unavailable. Unable to determine your location.';
    case 3:
      return 'Timeout. Location request took too long.';
    default:
      return 'An unknown error occurred while getting your location.';
  }
}

// Calculate distance between two coordinates (Haversine formula)
export const calculateDistance = (
  coords1: Coordinates,
  coords2: Coordinates
): number => {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRadians(coords2.latitude - coords1.latitude);
  const dLon = toRadians(coords2.longitude - coords1.longitude);
  
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(coords1.latitude)) *
      Math.cos(toRadians(coords2.latitude)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  
  return distance; // Distance in kilometers
};

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

// Get city/location name from coordinates (requires geocoding API)
export const getCityFromCoordinates = async (
  coords: Coordinates
): Promise<string> => {
  try {
    // Using OpenStreetMap Nominatim for reverse geocoding (free, no API key required)
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json`
    );
    
    if (!response.ok) {
      throw new Error('Geocoding request failed');
    }
    
    const data = await response.json();
    
    // Try to get city, town, or village name
    const city =
      data.address?.city ||
      data.address?.town ||
      data.address?.village ||
      data.address?.county ||
      'Unknown location';
    
    return city;
  } catch (error) {
    console.error('Error getting city from coordinates:', error);
    return 'Unknown location';
  }
};

// Format coordinates for display
export const formatCoordinates = (coords: Coordinates): string => {
  const latDirection = coords.latitude >= 0 ? 'N' : 'S';
  const lonDirection = coords.longitude >= 0 ? 'E' : 'W';
  
  const lat = Math.abs(coords.latitude).toFixed(6);
  const lon = Math.abs(coords.longitude).toFixed(6);
  
  return `${lat}°${latDirection}, ${lon}°${lonDirection}`;
};

// Check if coordinates are valid
export const areValidCoordinates = (coords: Coordinates): boolean => {
  return (
    coords.latitude >= -90 &&
    coords.latitude <= 90 &&
    coords.longitude >= -180 &&
    coords.longitude <= 180
  );
};

// Get coordinates from saved location (localStorage)
export const getSavedLocation = (): Coordinates | null => {
  const saved = localStorage.getItem('userLocation');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return null;
    }
  }
  return null;
};

// Save coordinates to localStorage
export const saveLocation = (coords: Coordinates): void => {
  localStorage.setItem('userLocation', JSON.stringify(coords));
};

// Clear saved location
export const clearSavedLocation = (): void => {
  localStorage.removeItem('userLocation');
};
