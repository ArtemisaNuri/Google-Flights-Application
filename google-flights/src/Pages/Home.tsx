// import React, { useState } from "react";
// import axios from "axios";
// import { FlightSearchParams } from "../Interface";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// export default function Home() {
//   const [formData, setFormData] = useState<FlightSearchParams>({
//     originSkyId: "",
//     destinationSkyId: "",
//     originEntityId: "",
//     destinationEntityId: "",
//     date: "",
//     returnDate: "",
//     cabinClass: "economy",
//     adults: 1,
//     children: 0,
//     infants: 0,
//     sortBy: "best",
//     currency: "USD",
//     market: "en-US",
//     countryCode: "US",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]:
//         name === "adults" || name === "children" || name === "infants"
//           ? Number(value)
//           : value,
//     }));
//   };

//   // const handleCabinClassChange = (value: string) => {
//   //   setFormData((prev) => ({
//   //      ...prev,
//   //       cabinClass: value,
  
//   //   }));
//   // };

//   const handleSearch = async () => {
//     if (!formData.originSkyId || !formData.destinationSkyId || !formData.date) {
//       console.error(
//         "Missing required parameters: originSkyId, destinationSkyId, or date"
//       );
//       return;
//     }

//     const options = {
//       method: "GET",
//       url: "https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights?",
//       params: {
//         ...formData,
//         returnDate: formData.returnDate || undefined,
//       },
//       headers: {
//         "X-RapidAPI-Key": "a324b021a6msh6963bf84d4dc9cfp1f1591jsn4b2b44352d52",
//         "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
//       },
//     };

//     try {
//       const response = await axios.request(options);
//       if (response.status === 200) {
//         console.log("Flights Data:", response.data);
//       } else {
//         console.error(
//           "API responded with an error:",
//           response.status,
//           response.data
//         );
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       if (axios.isAxiosError(error)) {
//         console.error("Axios error details:", error.response?.data);
//       }
//     }
//   };

//   function handleCabinClassChange(value: string): void {
//     throw new Error("Function not implemented.");
//   }

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle className="text-slate-800 bg-slate-400">
//           Fly Smarter, Travel Better
//         </CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="flex flex-row gap-4">
//           <Label className="text-gray-700 text-sm">
//             From:
//             <Input
//               type="text"
//               name="originSkyId"
//               value={formData.originSkyId}
//               onChange={handleChange}
//               required
//             />
//           </Label>
//           <Label className="text-gray-700 text-sm">
//             To:
//             <Input
//               type="text"
//               name="destinationSkyId"
//               value={formData.destinationSkyId}
//               onChange={handleChange}
//               required
//             />
//           </Label>
//         </div>
//         <div className="flex flex-row gap-4">
//           <Label className="text-gray-700 text-sm">
//             Departure Date:
//             <Input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               required
//             />
//           </Label>
//           <Label className="text-gray-700 text-sm">
//             Return Date:
//             <Input
//               type="date"
//               name="returnDate"
//               value={formData.returnDate}
//               onChange={handleChange}
//             />
//           </Label>
//         </div>
//         <div className="flex flex-col gap-4">
//           <Label className="text-gray-700 text-sm">
//             Cabin Class:
//             <Select onValueChange={handleCabinClassChange}>
//               <SelectTrigger className="w-full">
//                 <SelectValue placeholder="Select a cabin class" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectGroup>
//                   <SelectLabel>Cabin Classes</SelectLabel>
//                   <SelectItem value="economy">Economy</SelectItem>
//                   <SelectItem value="premium_economy">
//                     Premium Economy
//                   </SelectItem>
//                   <SelectItem value="business">Business</SelectItem>
//                   <SelectItem value="first">First</SelectItem>
//                 </SelectGroup>
//               </SelectContent>
//             </Select>
//           </Label>
//         </div>
//         <Button className="mt-4" onClick={handleSearch}>
//           Search Flights
//         </Button>
//       </CardContent>
//     </Card>
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure fields are filled before navigating
    if (!from || !to || !date) {
      alert("Please fill out all fields to search for flights.");
      return;
    }

    // Navigate to the results page with search parameters
    navigate(`/results?from=${from}&to=${to}&date=${date}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Search Flights
        </h1>
        <form onSubmit={handleSearch} className="space-y-4">
          {/* Origin Input */}
          <div>
            <label
              htmlFor="from"
              className="block text-sm font-medium text-gray-700"
            >
              From (Origin)
            </label>
            <input
              type="text"
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Enter origin airport code (e.g., JFK)"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Destination Input */}
          <div>
            <label
              htmlFor="to"
              className="block text-sm font-medium text-gray-700"
            >
              To (Destination)
            </label>
            <input
              type="text"
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Enter destination airport code (e.g., LAX)"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Date Input */}
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search Flights
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
