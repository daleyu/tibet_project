import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl = "https://code.highcharts.com/mapdata/custom/asia.topo.json";
// const geoUrl = "/tibet_1155.geojson";

const markers = [
  {
    name: "Lhasa,  ལྷ་ས་གཙུག་ལག་ཁང་། Lhasa Tsuklakhang ",
    coordinates: [91.1318, 29.65285],
  },
  { name: "Yamdrok Lake ཡར་འབྲོག་མཚོ།", coordinates: [90.749149, 28.978275] },
  { name: "Chamdo", coordinates: [97.17725, 31.14336] },
];

// Center coordinates for Tibet region
const TIBET_CENTER = [91.1318, 29.65285];
const DEFAULT_ZOOM = 1.66;

const MapQuiz = ({ quizId }) => {
  const [position, setPosition] = useState({
    coordinates: TIBET_CENTER,
    zoom: DEFAULT_ZOOM,
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerClick = (markerName) => {
    if (markerName === markers[currentQuestion].name) {
      setScore(score + 1);
      alert("Correct!");
    } else {
      alert("Wrong!");
    }
    setCurrentQuestion((prev) => (prev + 1) % markers.length);
  };

  const handleZoomIn = () => {
    if (position.zoom >= 8) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.5 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 0.5) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.5 }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex justify-between mb-4">
        <div>
          <p>
            Select the location of:{" "}
            <strong>{markers[currentQuestion].name}</strong>
          </p>
          <p>Score: {score}</p>
        </div>
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
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapQuiz;
