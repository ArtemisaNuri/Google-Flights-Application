import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-slate-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <div className="flex items-center gap-2 text-emerald-500 font-bold text-lg">
            <span>Smart Flights</span>
          </div>
          <p className="text-sm mt-2 text-gray-400">
            Explore the world with ease and comfort.
          </p>
        </div>

        <nav className="flex flex-col md:flex-row gap-4 text-sm">
          <a href="#about" className="hover:text-emerald-400 transition-colors">
            About Us
          </a>
          <a
            href="#contact"
            className="hover:text-emerald-400 transition-colors"
          >
            Contact
          </a>
          <a
            href="#privacy"
            className="hover:text-emerald-400 transition-colors"
          >
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-emerald-400 transition-colors">
            Terms of Service
          </a>
        </nav>

        <div className="flex gap-4">
          <a
            href="#facebook"
            aria-label="Facebook"
            className="hover:text-emerald-400 transition-colors"
          >
            <Facebook />
          </a>
          <a
            href="#twitter"
            aria-label="Twitter"
            className="hover:text-emerald-400 transition-colors"
          >
            <Twitter />
          </a>
          <a
            href="#instagram"
            aria-label="Instagram"
            className="hover:text-emerald-400 transition-colors"
          >
            <Instagram />
          </a>
          <a
            href="#linkedin"
            aria-label="LinkedIn"
            className="hover:text-emerald-400 transition-colors"
          >
            <Linkedin />
          </a>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Smart Flights. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
