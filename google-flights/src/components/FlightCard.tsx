// import { Itinerary } from "@/Interface";
// import React from "react";

// interface FlightCardProps {
//   flight: Itinerary; 
// }

// const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow-lg border">
//       <div className="flex items-center mb-4">
//         {flight.logoUrl && (
//           <img
//             src={flight.logoUrl}
//             alt={`${flight.carrier} logo`}
//             className="w-12 h-12 mr-4"
//           />
//         )}
//         <h3 className="text-lg font-bold">{flight.carrier}</h3>
//       </div>

//       <div className="space-y-2">
//         <p>
//           <span className="font-semibold">From:</span> {flight.origin}
//         </p>
//         <p>
//           <span className="font-semibold">To:</span> {flight.destination}
//         </p>
//         <p>
//           <span className="font-semibold">Departure:</span>{" "}
//           {flight.departureTime}
//         </p>
//         <p>
//           <span className="font-semibold">Arrival:</span> {flight.arrivalTime}
//         </p>
//       </div>

//       <div className="mt-4 space-y-2">
//         <p>
//           <span className="font-semibold">Duration:</span> {flight.duration}
//         </p>
//         <p>
//           <span className="font-semibold">Stops:</span> {flight.stops || 0}{" "}
//           stop(s)
//         </p>
//         <p className="text-xl font-bold text-blue-600">
//           Price: ${flight.price}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default FlightCard;
// FlightCard.tsx
import React from "react";

interface FlightCardProps {
  flight: {
    logoUrl?: string;
    carrier: string;
    origin: string;
    destination: string;
    departureTime: string;
    arrivalTime: string;
    duration: string;
    stops: number;
    price: number;
  };
}

const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg border">
      {/* Airline Logo and Carrier */}
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

      {/* Flight Information */}
      <div className="space-y-2">
        <p>
          <span className="font-semibold">From:</span> {flight.origin}
        </p>
        <p>
          <span className="font-semibold">To:</span> {flight.destination}
        </p>
        <p>
          <span className="font-semibold">Departure:</span> {flight.departureTime}
        </p>
        <p>
          <span className="font-semibold">Arrival:</span> {flight.arrivalTime}
        </p>
        <p>
          <span className="font-semibold">Duration:</span> {flight.duration || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Stops:</span> {flight.stops} stop(s)
        </p>
      </div>

      {/* Pricing */}
      <div className="mt-4">
        <p className="text-xl font-bold text-blue-600">
          Price: ${flight.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default FlightCard;
