import React, { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import InfoPopup from "./infopopup";

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
  const [showInfoPopup, setShowInfoPopup] = useState(false);

  useEffect(() => {
    const fetchMarkers = async () => {
      try {
        const response = await fetch(`/quiz-data/locations.json`);
        if (!response.ok) {
          throw new Error("Failed to fetch quiz data");
        }
        const data = await response.json();
        const filteredMarkers = data.markers.filter((marker) =>
          marker.quizIds.includes(parseInt(quizId))
        );
        setMarkers(filteredMarkers);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMarkers();
  }, [quizId]);

  const handleMarkerClick = (markerId) => {
    if (markerId === markers[currentQuestion].id) {
      setScore(score + 1);
      setShowInfoPopup(true);
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

  const handleClosePopup = () => {
    setShowInfoPopup(false);
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
          {markers.map(({ id, name, coordinates }) => (
            <Marker key={id} coordinates={coordinates}>
              <circle
                r={2}
                fill={
                  showHint && id === markers[currentQuestion].id
                    ? "#00A36C"
                    : "#F53"
                }
                stroke={
                  showHint && id === markers[currentQuestion].id
                    ? "#00A36C"
                    : "#FFF"
                }
                strokeWidth={
                  showHint && id === markers[currentQuestion].id ? 2 : 2
                }
                onClick={() => handleMarkerClick(id)}
              />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
      {showInfoPopup && (
        <InfoPopup
          location={markers[currentQuestion].id}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default MapQuiz;
