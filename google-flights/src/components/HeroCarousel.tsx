"use client";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const IMAGES = [
  "src/assets/Images/island-7058873_1280.jpg",
  "src/assets/Images/rome.webp",
  "src/assets/Images/fishes.png",
  "src/assets/Images/maldi.jpg",
  "src/assets/Images/mount.jpg",
  "src/assets/Images/fantasy-3502188_1280.jpg",

  // "src/assets/Images/dubai.jpg",
];

const CAPTIONS = [
  "Discover magical destinations",
  "Paradise awaits on distant shores",
  "Experience the wonders of the sea",
  "Discover ancient ruins of Maldives",
  "Savor the beauty of the mountains",
  "Take flight to your next adventure",

  // "Experience the breathtaking views of Dubai",
];

export const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative w-full h-screen">
      <Carousel className="w-full h-full">
        <CarouselContent
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: "transform 1s ease-in-out",
          }}
        >
          {IMAGES.map((src, index) => (
            <CarouselItem key={index} className="w-full h-screen flex-shrink-0">
              <Card className="border-0 h-full">
                <CardContent className="relative p-0 h-full">
                  <div className="relative w-full h-full">
                    <img
                      src={src}
                      alt={`Travel destination ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

                    <div className="absolute bottom-16 left-8 md:left-16 text-white max-w-xl">
                      <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        {CAPTIONS[index]}
                      </h2>
                      <p className="text-lg md:text-xl text-gray-200">
                        {`Destination ${index + 1} of ${IMAGES.length}`}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <CarouselPrevious
            className="bg-white/30 hover:bg-white/50 text-black p-3 rounded-full"
            onClick={() =>
              setActiveIndex((prevIndex) =>
                prevIndex === 0 ? IMAGES.length - 1 : prevIndex - 1
              )
            }
          />
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <CarouselNext
            className="bg-white/30 hover:bg-white/50 text-black p-3 rounded-full"
            onClick={() =>
              setActiveIndex((prevIndex) => (prevIndex + 1) % IMAGES.length)
            }
          />
        </div>
      </Carousel>
    </div>
  );
};
