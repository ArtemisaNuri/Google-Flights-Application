import React from "react";
import { useLocation } from "react-router-dom";
import FlightCard from "../components/FlightCard";
import useFetchFlights from "@/hooks";

const ResultsPage: React.FC = () => {
  const location = useLocation();

  // Parse query parameters from URL
  const params = new URLSearchParams(location.search);
  const from = params.get("from") || "";
  const to = params.get("to") || "";
  const date = params.get("date") || "";

  // Use custom hook to fetch flights
  const { flights, loading, error, refetch } = useFetchFlights({
    from,
    to,
    date,
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-blue-600 text-center mb-6">
        Flight Results
      </h1>

      {/* Show search details */}
      <div className="text-center mb-4">
        <p>
          Searching for flights from <span className="font-bold">{from}</span>{" "}
          to <span className="font-bold">{to}</span> on{" "}
          <span className="font-bold">{date}</span>.
        </p>
        <button
          onClick={refetch}
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Refresh Results
        </button>
      </div>

      {/* Show loading state */}
      {loading && <p className="text-center">Loading flights...</p>}

      {/* Show error state */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Show results */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {flights && flights.data.itineraries.length > 0
          ? flights.data.itineraries.map((flight, index) => (
              <FlightCard key={index} flight={flight} />
            ))
          : !loading &&
            !error && <p className="text-center">No flights found.</p>}
      </div>
    </div>
  );
};

export default ResultsPage;
