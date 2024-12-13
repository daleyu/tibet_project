import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-slate-700 py-4 px-8 flex justify-between items-center">
      <nav>
        <ul className="flex space-x-4 text-white">
          <li>
            <a href="/home" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-300">
              Contact
            </a>
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
