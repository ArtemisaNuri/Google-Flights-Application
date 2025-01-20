export interface Flight {
  id: string;
  airline: string;
  departure: {
    airport: string;
    time: string;
  };
  arrival: {
    airport: string;
    time: string;
  };
  price: {
    currency: string;
    amount: number;
  };
  duration: string;
  stops: number;
}

export interface FlightSearchParams {
  fromEntityId: string;          
  toEntityId: string;     // Example: "NYCA"
  originEntityId: string;       // Example: "27544008"
  destinationEntityId: string;  // Example: "27537542"
  date: string;                 // Example: "YYYY-MM-DD"
  returnDate?: string;          // Optional return date in "YYYY-MM-DD" format
  cabinClass?: "economy" | "premium_economy" | "business" | "first"; // Default: "economy"
  adults?: number;              // Default: 1, Adults 12+ years
  children?: number;            // Optional, Children 2-12 years
  infants?: number;             
  sortBy?: 
    | "best" 
    | "price_high" 
    | "fastest" 
    | "outbound_take_off_time" 
    | "outbound_landing_time" 
    | "return_take_off_time" 
    | "return_landing_time";    // Default: "best"
  limit?: number;               // Optional, limit the number of records
  carriersIds?: string;         // Optional, comma-separated carrier IDs
  currency?: string;            // Example: "USD", Default: "USD"
  market?: string;              // Example: "en-US", Default: "en-US"
  countryCode?: string;         // Example: "US", Default: "US"
}


// Root Response from API
export interface FlightApiResponse {
  status: boolean; // Indicates if the API call was successful
  timestamp: number; // Time of the response
  sessionId: string; // Unique session ID
  data: FlightData; // Main data object
}

// Core Flight Data
export interface FlightData {
  context: Context; // Metadata about the request
  itineraries: Itinerary[]; // List of flight results
  filterStats: FilterStats; // Stats for filtering options
  flightsSessionId: string; // Session ID for fetching flights
  destinationImageUrl: string; // URL for the destination image
}

// Context Metadata
export interface Context {
  status: string; // Status of the search ("complete", "incomplete", etc.)
  sessionId: string; // Session ID for tracking
  totalResults: number; // Total number of results returned
}

// Individual Flight Itinerary
export interface Itinerary {
  price: number; // Price of the flight
  duration: string; // Duration of the flight
  stops: number; // Number of stops
  carrier: string; // Airline carrier
  departureTime: string; // Departure time
  arrivalTime: string; // Arrival time
  origin: string; // Origin airport
  destination: string; // Destination airport
  cabinClass: string; // Cabin class (Economy, Business, etc.)
  flightNumber: string; // Flight number
  logoUrl?: string; // Airline logo URL (if provided)
}

// Filter Stats for UI Filtering
export interface FilterStats {
  duration: {
    min: number;
    max: number;
  };
  airports: {
    origin: string[];
    destination: string[];
  };
  carriers: string[]; // List of available carriers
  stopPrices: {
    nonstop: number;
    oneStop: number;
    twoPlusStops: number;
  };
}
