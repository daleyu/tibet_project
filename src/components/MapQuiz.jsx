import React, { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl = "/map-with-lakes.json";

const TIBET_CENTER = [91.1318, 29.65285];
const DEFAULT_ZOOM = 2;

const MapQuiz = ({ quizId }) => {
  const [position, setPosition] = useState({
    coordinates: TIBET_CENTER,
    zoom: DEFAULT_ZOOM,
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [attempts, setAttempts] = useState(2);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const fetchMarkers = async () => {
      try {
        const response = await fetch(`/quiz-data/quiz${quizId}.json`);
        if (!response.ok) {
          throw new Error("Failed to fetch quiz data");
        }
        const data = await response.json();
        setMarkers(data.markers);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMarkers();
  }, [quizId]);

  const handleMarkerClick = (markerName) => {
    if (markerName === markers[currentQuestion].name) {
      setScore(score + 1);
      alert("Correct!");
      setCurrentQuestion((prev) => (prev + 1) % markers.length);
      setAttempts(2);
      setShowHint(false);
    } else {
      setAttempts((prev) => prev - 1);
      if (attempts <= 1) {
        alert("You have no more attempts left!");
        setCurrentQuestion((prev) => (prev + 1) % markers.length);
        setAttempts(2);
        setShowHint(false);
      } else {
        alert("Wrong! You have " + (attempts - 1) + " attempts left.");
      }
    }
  };

  const handleHint = () => {
    setShowHint(true);
  };

  const handleSkip = () => {
    setCurrentQuestion((prev) => (prev + 1) % markers.length);
    setAttempts(2);
    setShowHint(false);
  };

  const handleZoomIn = () => {
    if (position.zoom >= 8) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.5 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 0.2) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.5 }));
  };

  if (loading) return <div className="text-white">Loading quiz data...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!markers.length)
    return <div className="text-white">No locations found for this quiz.</div>;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-4">
        <p className="mb-2">
          Select the location of:{" "}
          <strong>{markers[currentQuestion].name}</strong>
        </p>
        <p className="mb-4">
          Score: {score} | Attempts left: {attempts}
        </p>
        <div className="flex justify-between items-center">
          {/* Left side buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleHint}
              className="px-4 py-2 bg-gray-700 text-white rounded"
            >
              Hint?
            </button>
            <button
              onClick={handleSkip}
              className="px-4 py-2 bg-gray-700 text-white rounded"
            >
              Skip Current Location
            </button>
          </div>
          {/* Right side zoom controls */}
          <div className="flex gap-2">
            <button
              onClick={handleZoomIn}
              className="px-4 py-2 bg-gray-700 text-white rounded"
            >
              +
            </button>
            <button
              onClick={handleZoomOut}
              className="px-4 py-2 bg-gray-700 text-white rounded"
            >
              -
            </button>
          </div>
        </div>
      </div>

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 600,
          center: TIBET_CENTER,
        }}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          maxZoom={8}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#ECEFF1",
                      stroke: "#000",
                      strokeWidth: 0.8,
                    },
                    hover: { fill: "#CFD8DC" },
                    pressed: { fill: "#FF5722" },
                  }}
                />
              ))
            }
          </Geographies>
          {markers.map(({ name, coordinates }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle
                r={2}
                fill={
                  showHint && name === markers[currentQuestion].name
                    ? "#00A36C"
                    : "#F53"
                }
                stroke={
                  showHint && name === markers[currentQuestion].name
                    ? "#00A36C"
                    : "#FFF"
                }
                strokeWidth={
                  showHint && name === markers[currentQuestion].name ? 2 : 2
                }
                onClick={() => handleMarkerClick(name)}
              />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapQuiz;
