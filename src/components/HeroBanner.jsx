import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/Button.jsx";

export default function HeroBanner() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = [
    '/images/HeroSection/heroBg1.webp',
    '/images/HeroSection/heroBg2.jpeg',
    '/images/whatwedo/transport/car1.jpeg',
  ];

  // Automatic image transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 6000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative h-[500px] md:h-[600px] w-full overflow-hidden"
    >
      {/* Dynamic Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${image}')`,
            filter: "brightness(0.7)"
          }}
        />
      ))}

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
        <div>Live the Swiss Dream,</div> <span>Where Luxury Meets Perfection.</span>
        </h1>
        <Button
          onClick={() => navigate("/contact-us")}
          className="bg-[#0a2a3b] hover:bg-blue-800 text-white px-8 py-6 text-sm !rounded-full"
        >
          Contact Now
        </Button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${index === currentImageIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}