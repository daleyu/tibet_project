import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocations } from "../hooks/useLocations";

const InfoPopup = ({ location, onClose }) => {
  const { locations, loading, error } = useLocations();
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading location data</div>;
  if (!location || !locations[location]) return null;

  const info = locations[location];

  const handleReadMore = () => {
    window.open(`/locations/${info.id}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="mt-6 w-96">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10"
        >
          ✕
        </button>

        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={info.imageUrl}
            alt={info.name}
            className="w-full h-full object-cover"
          />
        </CardHeader>

        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {info.name}
          </Typography>
          <Typography>{info.description}</Typography>
        </CardBody>

        <CardFooter className="pt-0">
          <Button onClick={handleReadMore} className="px-4">
            Read More
          </Button>
          <a
            href={info.infoLink}
            target="_blank"
            color="blue-gray"
            className="px-1"
          >
            <Button>See External Resource</Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default InfoPopup;
