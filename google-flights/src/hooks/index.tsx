import { useState, useEffect } from "react";
import axios from "axios";
import { FlightApiResponse } from "@/Interface";

interface UseFetchFlightsParams {
  from: string; // Origin airport code
  to: string; // Destination airport code
  date: string; // Travel date in YYYY-MM-DD format
}

interface UseFetchFlightsResult {
  flights: FlightApiResponse | null; // The fetched flight data
  loading: boolean; // Loading state
  error: string | null; // Error message (if any)
  refetch: () => void; // Function to refetch flights
}

const useFetchFlights = ({
  from,
  to,
  date,
}: UseFetchFlightsParams): UseFetchFlightsResult => {
  const [flights, setFlights] = useState<FlightApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFlights = async () => {
    if (!from || !to || !date) {
      setError("Please provide all required fields: from, to, and date.");
      return;
    }

    setLoading(true);
    setError(null);
try {
  const response = await axios.get<FlightApiResponse>(
    "https://sky-scanner3.p.rapidapi.com/flights/search-everywhere",
    {
      params: { origin: from, destination: to, date },
      headers: {
        "X-RapidAPI-Key": "a324b021a6msh6963bf84d4dc9cfp1f1591jsn4b2b44352d52", // Replace with your actual API key
        "X-RapidAPI-Host": "sky-scanner3.p.rapidapi.com",
      },
    }
  );

  console.log(response);

  setFlights(response.data);
} catch (err) {
  setError(
    err instanceof Error
      ? err.message
      : "An error occurred while fetching flights."
  );
} finally {
  setLoading(false);
}
  }

  // Refetch function
  const refetch = () => {
    fetchFlights();
  };

  // Fetch data on mount or when parameters change
  useEffect(() => {
    fetchFlights();
  }, [from, to, date]);

  return { flights, loading, error, refetch };
};

export default useFetchFlights;
