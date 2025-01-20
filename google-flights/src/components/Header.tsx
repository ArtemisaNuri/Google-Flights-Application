import { Car, Globe2, Hotel, Luggage, Plane, PlaneTakeoff } from "lucide-react";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full p-4 fixed bg-slate-900 text-white shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 text-emerald-500 font-bold text-lg">
          <Plane aria-label="Smart Flights Logo" />
          <span>Smart Flights</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <a
            href="#travel"
            className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
          >
            <Luggage aria-label="Travel Icon" />
            Travel
          </a>
          <a
            href="#flights"
            className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
          >
            <PlaneTakeoff aria-label="Flights Icon" />
            Flights
          </a>
          <a
            href="#explore"
            className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
          >
            <Globe2 aria-label="Explore Icon" />
            Explore
          </a>
          <a
            href="#hotels"
            className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
          >
            <Hotel size={20} aria-label="Hotels Icon" />
            Hotels
          </a>
          <a
            href="#vacation-rentals"
            className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
          >
            <Car aria-label="Vacation Rentals Icon" />
            Vacation Rentals
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
