import React from "react";
import Footer from "../components/footer.jsx";
import Header from "../components/header.jsx";

const InfoPage = () => {
  return (
    <div className="w-screen min-h-screen bg-slate-800 flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center px-8 pt-8 pb-8">
        <div className="container mx-auto">
          <h1 className="text-3xl mb-8 text-center text-white">
            Learning Tibetan Landmarks
          </h1>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-2">Lhasa</h2>
              <div className="rounded-l bg-gray-700 h-40 w-full mb-4"></div>
              <p className="text-white">
                Lhasa is the capital of the Tibet Autonomous Region of the
                People's Republic of China. It is located at an altitude of
                3,490 meters (11,450 feet) and is one of the highest cities in
                the world. The city has a rich history and is known for its many
                Buddhist temples and monasteries.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-2">Potala Palace</h2>
              <div className="rounded-full bg-gray-700 h-40 w-full mb-4"></div>
              <p className="text-white">
                The Potala Palace is a historic fortress and palace located in
                Lhasa. It was the winter residence of the Dalai Lama and is now
                a museum and World Heritage Site. The palace is known for its
                stunning architecture and beautiful views of the city.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-2">Jokhang Temple</h2>
              <div className="rounded-full bg-gray-700 h-40 w-full mb-4"></div>
              <p className="text-white">
                The Jokhang Temple is a Buddhist temple located in the heart of
                Lhasa. It is one of the holiest sites in Tibetan Buddhism and is
                a popular pilgrimage destination. The temple is known for its
                beautiful architecture and sacred statues.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InfoPage;
