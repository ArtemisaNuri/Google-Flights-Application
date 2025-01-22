import { useState, useEffect } from "react";
import axios from "axios";
import { FlightApiResponse } from "@/Interface";
import { toast } from "./use-toast";

interface UseFetchFlightsParams {
  from: string;
  to: string;
  date: string;
}

interface UseFetchFlightsResult {
  flights: FlightApiResponse | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
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
      const response = await axios.get(
        "https://sky-scanner3.p.rapidapi.com/flights/search-everywhere",
        {
          params: {
            fromEntityId: from, // Map `from` to `fromEntityId`
            toEntityId: to, // Map `to` to `toEntityId`
            date, // `date` remains the same
          },
          headers: {
            "X-RapidAPI-Key":
              "a324b021a6msh6963bf84d4dc9cfp1f1591jsn4b2b44352d52",
            "X-RapidAPI-Host": "sky-scanner3.p.rapidapi.com",
          },
        }
      );

      if (response.data && response.data.status) {
        setFlights(response.data);
      } else {
        setError(response.data.message || "No flights found.");
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while fetching flights."
      );
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    fetchFlights();
  };

  useEffect(() => {
    fetchFlights();
  }, [from, to, date]);

  return { flights, loading, error, refetch };
};

export default useFetchFlights;
