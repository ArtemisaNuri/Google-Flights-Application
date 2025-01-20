import { Itinerary } from "@/Interface";
import React from "react";

interface FlightCardProps {
  flight: Itinerary; // Props to accept a single flight
}

const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg border">
      {/* Airline and Logo */}
      <div className="flex items-center mb-4">
        {flight.logoUrl && (
          <img
            src={flight.logoUrl}
            alt={`${flight.carrier} logo`}
            className="w-12 h-12 mr-4"
          />
        )}
        <h3 className="text-lg font-bold">{flight.carrier}</h3>
      </div>

      {/* Flight Details */}
      <div className="space-y-2">
        <p>
          <span className="font-semibold">From:</span> {flight.origin}
        </p>
        <p>
          <span className="font-semibold">To:</span> {flight.destination}
        </p>
        <p>
          <span className="font-semibold">Departure:</span>{" "}
          {flight.departureTime}
        </p>
        <p>
          <span className="font-semibold">Arrival:</span> {flight.arrivalTime}
        </p>
      </div>

      {/* Additional Info */}
      <div className="mt-4 space-y-2">
        <p>
          <span className="font-semibold">Duration:</span> {flight.duration}
        </p>
        <p>
          <span className="font-semibold">Stops:</span> {flight.stops || 0}{" "}
          stop(s)
        </p>
        <p className="text-xl font-bold text-blue-600">
          Price: ${flight.price}
        </p>
      </div>
    </div>
  );
};

export default FlightCard;
