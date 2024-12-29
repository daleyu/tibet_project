import { Button } from "@material-tailwind/react";
import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import { useLocations } from "../hooks/useLocations";

const LocationPage = () => {
  const { locationid } = useParams();
  const { locations, loading, error } = useLocations();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading location data</div>;
  console.log(locationid);

  const location = locations[locationid];
  if (!location) return <div>Location not found</div>;

  return (
    <div className="w-screen min-h-screen bg-slate-800 flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center px-8 py-12">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-white">
            {location.name}
          </h1>

          <div className="mb-8">
            <img
              src={location.imageUrl}
              alt={location.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {location.full_description}
            </p>
          </div>
          <a
            href={location.infoLink}
            target="_blank"
            color="blue-gray"
            className="px-1"
          >
            <Button className="bg-grey-600">See External Resource</Button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LocationPage;
