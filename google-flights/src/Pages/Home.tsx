import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!from || !to || !date) {
      toast({
        title: "Missing Fields",
        description: "Please fill out all fields to search for flights.",
        variant: "destructive",
      });
      return;
    }

    navigate(`/results?from=${from}&to=${to}&date=${date}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-start p-4 bg-slate-700">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center  text-blue-600">
          Search Flights
        </h1>
        <form onSubmit={handleSearch} className="space-y-4">
          <div>
            <Label
              htmlFor="from"
              className="block text-sm font-medium text-gray-700"
            >
              From (Origin)
            </Label>
            <Input
              type="text"
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Enter origin airport code (e.g., JFK)"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <Label
              htmlFor="to"
              className="block text-sm font-medium text-gray-700"
            >
              To (Destination)
            </Label>
            <Input
              type="text"
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Enter destination airport code (e.g., LAX)"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <Label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </Label>
            <Input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search Flights
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Home;
