// src/pages/InfoPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer.jsx";
import Header from "../components/header.jsx";
import { useLocations } from "../hooks/useLocations";

const InfoPage = () => {
  const { locations, loading, error } = useLocations();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading location data</div>;

  return (
    <div className="w-screen min-h-screen bg-slate-800 flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center px-8 pt-8 pb-8">
        <div className="container mx-auto">
          <h1 className="text-3xl mb-8 text-center text-white">
            Learning Tibetan Landmarks
          </h1>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {Object.values(locations).map((location) => (
              <div
                key={location.id}
                className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition-colors"
              >
                <h2 className="text-xl font-bold mb-2 text-white">
                  {location.name}
                </h2>
                <p className="text-gray-300">{location.full_description}</p>
                <Link
                  to={`/locations/${location.id}`}
                  className="text-blue-400 hover:text-blue-300 text-sm mt-4 block"
                  onClick={(e) => {
                    if (e.metaKey || e.ctrlKey) {
                      window.open(`/locations/${location.id}`, "_blank");
                      e.preventDefault();
                    }
                  }}
                >
                  Learn More →
                </Link>
                {location.infoLink && (
                  <a
                    href={location.infoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm mt-4 block"
                  >
                    See External Resource →
                  </a>
                )}
                <div className="mt-4 text-sm text-gray-400">
                  Coordinates: {location.coordinates[0]},{" "}
                  {location.coordinates[1]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InfoPage;
