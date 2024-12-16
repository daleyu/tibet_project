import { useEffect, useState } from "react";

export const useLocations = () => {
  const [locations, setLocations] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch("/quiz-data/locations.json");
        const data = await response.json();
        const locationMap = data.markers.reduce((acc, marker) => {
          acc[marker.id] = marker;
          return acc;
        }, {});
        setLocations(locationMap);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchLocations();
  }, []);

  return { locations, loading, error };
};
