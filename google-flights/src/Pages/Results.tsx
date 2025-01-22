import React from "react";
import { useLocation } from "react-router-dom";
import FlightCard from "../components/FlightCard";
import useFetchFlights from "@/hooks";

const ResultsPage: React.FC = () => {
  const location = useLocation();

  // Extract query parameters
  const params = new URLSearchParams(location.search);
  const from = params.get("from") || "";
  const to = params.get("to") || "";
  const date = params.get("date") || "";

  // Fetch flights using the custom hook
  const { flights, loading, error, refetch } = useFetchFlights({
    from,
    to,
    date,
  });

  // Safely access itineraries
  const itineraries = flights?.data?.itineraries || [];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-blue-600 text-center mb-6">
        Flight Results
      </h1>

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

      {/* Loading State */}
      {loading && <p className="text-center">Loading flights...</p>}

      {/* Error State */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Results */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {itineraries.length > 0
          ? itineraries.map((flight, index) => (
              <FlightCard key={index} flight={flight} />
            ))
          : !loading &&
            !error && (
              <p className="text-center col-span-full">No flights found.</p>
            )}
      </div>
    </div>
  );
};

export default ResultsPage;
