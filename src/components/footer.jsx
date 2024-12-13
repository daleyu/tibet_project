import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
      <div className="text-sm">Tibet Map Quiz For Columbia University</div>
      <ul className="flex space-x-4 text-sm">
        <li>
          <a href="#field1">Home</a>
        </li>
        <li>
          <a href="#field2">Open Source Repo</a>
        </li>
        <li>
          <a href="#field3">Other Resources</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
