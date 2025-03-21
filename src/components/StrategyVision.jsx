import { useState, useEffect } from "react";

export default function StrategyVision() {
  const images = [
    
    "/images/StrategyVision/image.png",
    "/images/StrategyVision/image2.png",
    "/images/StrategyVision/team.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Strategy & Vision Text Section */}
          <div className="space-y-12">
            {/* Strategy */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Strategy</h2>
              <p className="text-gray-700 leading-relaxed">
                DCX Group invests selectively to acquire, manage, and sell private equities and real estate
                in domestic and international businesses. Its strategic emphasis is on identifying the
                optimal investment opportunities and maximizing the value of its assets globally.
              </p>
            </div>
  
            {/* Vision */}
            <div className="border-t pt-6">
              <div className="flex items-start gap-6">
                <div className="text-red-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-lightbulb"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Vision</h2>
                  <p className="text-gray-700 leading-relaxed">
                    To become one of the most diverse business groups and investment companies, DCX aims
                    to develop a strong, cohesive vision to lead its current and future investment strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Image Carousel Section */}
          <div className="bg-[#0a2a3b] rounded-lg p-6 flex items-center justify-center overflow-hidden w-full max-w-[800px] h-[450px]">
            <div className="relative w-full h-full">
              <img
                src={images[currentIndex]}
                alt="DCX Strategy Compass"
                className="object-cover w-full h-full transition-opacity duration-1000"
              />
            </div>
          </div>
  
        </div>
      </div>
    </section>
  );
}