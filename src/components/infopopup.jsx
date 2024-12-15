import React from "react";

const InfoPopup = ({ location, onClose }) => {
  if (!location) return null;
  const info = locationInfo[location];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="bg-white p-6 max-w-md mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h3 className="text-xl font-bold mb-2">{location}</h3>
        <p className="mb-4">{info.description}</p>
        <a href={info.readMoreUrl} className="text-blue-600 hover:underline">
          Read more
        </a>
      </Card>
    </div>
  );
};

export default InfoPopup;
