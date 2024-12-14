import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
        </ul>
      </nav>
      <input
        type="text"
        placeholder="Search A Specific Location"
        className="px-3 py-2 rounded focus:outline-none focus:ring"
      />
    </header>
  );
};

export default Header;
