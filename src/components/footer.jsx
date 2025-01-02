import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
      <div className="text-sm">
        <span>Tibet Map Quiz For Columbia University</span>
        <span className="ml-2 text-gray-400">|</span>
        <span className="text-gray-400 ml-2">
          Dale Yu (Columbia University, Class of '25)
        </span>
      </div>
      <ul className="flex space-x-4 text-sm">
        <li>
          <a href="#field1">Home</a>
        </li>
        <li>
          <a href="https://github.com/daleyu/tibet_project">Open Source Repo</a>
        </li>
        <li>
          <a href="https://treasuryoflives.org/map#9.74/30.986/96.9345">
            Other Resources
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
