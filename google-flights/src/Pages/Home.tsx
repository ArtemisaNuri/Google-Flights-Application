import React from "react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Card } from "@/components/ui/card";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="w-full h-screen">
        <HeroCarousel />
      </div>

      <div className="w-full max-w-6xl mx-auto px-6 text-center mt-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to Our Application
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Discover a world of seamless experiences with our innovative platform.
          Explore, engage, and enjoy the journey!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 px-6 max-w-6xl mx-auto">
        <Card className="h-64 w-64 pb-4 p-6">Card 1 Content</Card>
        <Card className="h-64 w-64 p-6">Card 2 Content</Card>
        <Card className="h-64 w-64 p-6">Card 3 Content</Card>
      </div>
    </div>
  );
};

export default HomePage;
