import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/openlayers/openlayers/refs/heads/main/examples/data/topojson/world-110m.json";

const markers = [
  { name: "Lhasa", coordinates: [2.3522, 48.8566] },
  { name: "Zhigatse", coordinates: [-74.006, 40.7128] },
  { name: "Chamdo", coordinates: [31.14336, 97.17725] },
];

const MapQuiz = ({ quizId }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerClick = (markerName) => {
    if (markerName === markers[currentQuestion].name) {
      setScore(score + 1); // Increase score if correct
      alert("Correct!");
    } else {
      alert("Wrong!");
    }
    setCurrentQuestion((prev) => (prev + 1) % markers.length);
  };

  return (
    <div>
      <h1>Map Quiz</h1>
      <p>
        Select the location of: <strong>{markers[currentQuestion].name}</strong>
      </p>
      <p>Score: {score}</p>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: "#ECEFF1", stroke: "#607D8B" },
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
              r={5}
              fill="#F53"
              stroke="#FFF"
              strokeWidth={2}
              onClick={() => handleMarkerClick(name)}
            />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default MapQuiz;
