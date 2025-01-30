
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PlaneTakeoff, Calendar, Users, ArrowRight } from "lucide-react";

interface Airport {
  id: string; 
  code: string; 
  name: string; 
  countryName: string; 
}

export const SearchForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    originSkyId: "",
    destinationSkyId: "",
    originEntityId: "",
    destinationEntityId: "",
    date: "2025-01-29",
    returnDate: "2025-03-20",
    adults: "1",
    cabinClass: "economy",
  });

  const [originSearch, setOriginSearch] = useState("");
  const [destinationSearch, setDestinationSearch] = useState("");

  const [airports, setAirports] = useState<Airport[]>([]);


  const searchAirports = async (query: string) => {
    if (query.length < 2) {
      setAirports([]);
      return;
    }

    const options = {
      method: "GET",
      url: "https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport",
      params: {
        query,
        locale: "en-US",
      },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
        "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const data = response.data?.data || []; 

      const filtered = data
        .filter((item: any) => item.navigation.entityType === "AIRPORT")
        .map((item: any) => ({
          id: item.entityId,
          code: item.skyId,
          name: item.presentation.title,
          countryName: item.presentation.subtitle,
        }));

      setAirports(filtered);
    } catch (error) {
      console.error("Error fetching airports:", error);
      setAirports([]);
    }
  };

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const queryString = new URLSearchParams(formData).toString();
    navigate(`/results?${queryString}`);
  };

  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 px-4 py-8">
      <Card className="max-w-3xl w-full mx-auto backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl">
        <CardHeader className="border-b border-white/10 py-4">
          <CardTitle className="text-xl md:text-2xl text-center flex items-center text-white justify-center gap-3">
            <PlaneTakeoff className="w-6 h-6 text-emerald-400" />
            Find Your Perfect Flight
          </CardTitle>
        </CardHeader>
        <CardContent className="mt-4 px-4 md:px-6 pb-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 space-y-2">
                <Label className="text-white">From</Label>
                <Input
                  type="text"
                  placeholder="Type an airport..."
                  value={originSearch}
                  onChange={(e) => {
                    setOriginSearch(e.target.value);
                    searchAirports(e.target.value);
                  }}
                  className="bg-white/20 border-white/20 text-white focus-visible:ring-emerald-400 h-10"
                />

                {/* Suggestions list for "From" */}
                {airports.length > 0 && originSearch.length >= 2 && (
                  <ul className="mt-2 bg-white/90 text-black rounded shadow-md max-h-64 overflow-auto">
                    {airports.map((airport) => (
                      <li
                        key={airport.id}
                        className="px-2 py-1 cursor-pointer hover:bg-gray-200"
                        onClick={() => {
                          setFormData({
                            ...formData,
                            originSkyId: airport.code,
                            originEntityId: airport.id,
                          });
                          // Show the user a nice label
                          setOriginSearch(`${airport.name} (${airport.code})`);
                          // Optionally clear suggestions after selecting
                          setAirports([]);
                        }}
                      >
                        {airport.name} ({airport.code}){" "}
                        {airport.countryName && `- ${airport.countryName}`}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* DESTINATION - "To" */}
              <div className="flex-1 space-y-2">
                <Label className="text-white">To</Label>
                <Input
                  type="text"
                  placeholder="Type an airport..."
                  value={destinationSearch}
                  onChange={(e) => {
                    setDestinationSearch(e.target.value);
                    searchAirports(e.target.value);
                  }}
                  className="bg-white/20 border-white/20 text-white focus-visible:ring-emerald-400 h-10"
                />

                {/* Suggestions list for "To" */}
                {airports.length > 0 && destinationSearch.length >= 2 && (
                  <ul className="mt-2 bg-white/90 text-black rounded shadow-md max-h-64 overflow-auto">
                    {airports.map((airport) => (
                      <li
                        key={airport.id}
                        className="px-2 py-1 cursor-pointer hover:bg-gray-200"
                        onClick={() => {
                          setFormData({
                            ...formData,
                            destinationSkyId: airport.code,
                            destinationEntityId: airport.id,
                          });
                          setDestinationSearch(
                            `${airport.name} (${airport.code})`
                          );
                          setAirports([]);
                        }}
                      >
                        {airport.name} ({airport.code}){" "}
                        {airport.countryName && `- ${airport.countryName}`}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 space-y-2">
                <Label
                  htmlFor="date"
                  className="flex items-center gap-2 text-white"
                >
                  <Calendar className="w-4 h-4" />
                  Departure
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="bg-white/20 border-white/20 text-white focus-visible:ring-emerald-400 h-10"
                />
              </div>
              <div className="flex-1 space-y-2">
                <Label
                  htmlFor="returnDate"
                  className="flex items-center gap-2 text-white"
                >
                  <Calendar className="w-4 h-4" />
                  Return
                </Label>
                <Input
                  id="returnDate"
                  type="date"
                  value={formData.returnDate}
                  onChange={(e) =>
                    setFormData({ ...formData, returnDate: e.target.value })
                  }
                  className="bg-white/20 border-white/20 text-white focus-visible:ring-emerald-400 h-10"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 space-y-2">
                <Label
                  htmlFor="adults"
                  className="flex items-center gap-2 text-white"
                >
                  <Users className="w-4 h-4" />
                  Passengers
                </Label>
                <Input
                  id="adults"
                  type="number"
                  min="1"
                  max="9"
                  value={formData.adults}
                  onChange={(e) =>
                    setFormData({ ...formData, adults: e.target.value })
                  }
                  className="bg-white/20 border-white/20 text-white focus-visible:ring-emerald-400 h-10"
                />
              </div>
              <div className="flex-1 space-y-2">
                <Label htmlFor="cabinClass" className="text-white">
                  Class
                </Label>
                <select
                  id="cabinClass"
                  value={formData.cabinClass}
                  onChange={(e) =>
                    setFormData({ ...formData, cabinClass: e.target.value })
                  }
                  className="w-full h-10 bg-white/20 border border-white/20 text-white px-2 rounded"
                >
                  <option value="economy">Economy</option>
                  <option value="premiumEconomy">Premium Economy</option>
                  <option value="business">Business</option>
                  <option value="first">First</option>
                </select>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-base h-10 mt-4 shadow-lg"
            >
              Search Flights
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchForm;
