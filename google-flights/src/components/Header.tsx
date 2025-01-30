import { Globe2, Info, Plane, PlaneTakeoff } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full p-4 fixed top-0 bg-slate-900 text-white shadow-md z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-emerald-500 font-bold text-lg hover:text-emerald-400 transition-colors"
        >
          <Plane aria-label="Smart Flights Logo" />
          <span>Smart Flights</span>
        </NavLink>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `flex items-center gap-2 transition-colors ${
                isActive ? "text-emerald-400" : "hover:text-emerald-400"
              }`
            }
          >
            <PlaneTakeoff aria-label="Flights Icon" />
            Flights
          </NavLink>
          <NavLink
            to="/explore"
            className={({ isActive }) =>
              `flex items-center gap-2 transition-colors ${
                isActive ? "text-emerald-400" : "hover:text-emerald-400"
              }`
            }
          >
            <Globe2 aria-label="Explore Icon" />
            Explore
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center gap-2 transition-colors ${
                isActive ? "text-emerald-400" : "hover:text-emerald-400"
              }`
            }
          >
            <Info />
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
