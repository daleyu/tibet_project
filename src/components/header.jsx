import Fuse from "fuse.js";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocations } from "../hooks/useLocations";

const Header = () => {
  const { locations, loading, error } = useLocations();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [fuse, setFuse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !error) {
      const locationArray = Object.values(locations);
      const fuseInstance = new Fuse(locationArray, {
        keys: ["name", "id"],
        threshold: 0.5,
        includeScore: true,
      });
      setFuse(fuseInstance);
    }
  }, [locations, loading, error]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!value) {
      setSearchResults([]);
      return;
    }

    if (fuse) {
      const results = fuse.search(value);
      setSearchResults(results.slice(0, 5));
    }
  };

  const handleSelect = (locationId) => {
    navigate(`/locations/${locationId}`);
    setSearchTerm("");
    setSearchResults([]);
  };

  return (
    <header className="w-full bg-slate-700 py-4 px-8 flex justify-between items-center">
      <nav>
        <ul className="flex space-x-4 text-white">
          <li>
            <Link to="/home" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/locations" className="hover:text-gray-300">
              Locations
            </Link>
          </li>
        </ul>
      </nav>
      <div className="relative w-64">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search A Specific Location"
          className="w-full px-3 py-2 rounded focus:outline-none focus:ring"
        />
        {searchResults.length > 0 && (
          <div className="absolute w-full mt-1 bg-slate-600 rounded-md shadow-lg max-h-60 overflow-auto z-50">
            {searchResults.map(({ item, score }) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
              >
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-gray-500">
                  Match: {((1 - score) * 100).toFixed(0)}%
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
