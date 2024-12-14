import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const InfoPage = () => {
  const informationSections = [
    {
      title: "Lhasa",
      description: "Description for Landmark 1",
      image: "",
    },
  ];

  return (
    <div className="w-screen min-h-screen bg-slate-800 flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center px-8 pt-8 pb-8">
        <div className="container mx-auto">
          <h1 className="text-3xl mb-8 text-center text-white">
            Learning Tibetan Landmarks
          </h1>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {informationSections.map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-2">{section.title}</h2>
                <div className="rounded-full bg-gray-300 h-40 w-full mb-4"></div>
                <p className="text-gray-700">{section.description}</p>
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
