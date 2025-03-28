import { useState, useEffect, useRef } from "react";

export default function WhoWeAre() {
  const founders = [
    {
      name: "Dhanush Chandra",
      title: "Founder's & CEO of DCX",
      details: [
        "A passionate entrepreneur dedicated to making Swiss luxury accessible to all. With a master's degree from the University of Zurich, I have honed my skills in business management and strategic leadership. At DCX, we are transforming luxury travel and lifestyle experiences. In addition to my role at DCX, I have a keen interest in investing in tech companies, particularly those innovating in AI and digital solutions. I am also passionate about event organizing, creating unforgettable experiences that bring people together"
      ],
      image: "images/whoAreWe/dhanush.png"
    },
    {
      name: "Munilal Jatavath",
      title: "Founder's & CTO of DCX",
      details: [
        "I handle all business operations and thrive across multiple domains. With experience as a tour guide and operational head, I bring a well-rounded perspective to every aspect of the company. My journey has shaped my ability to lead, innovate, and provide exceptional experiences in luxury travel and lifestyle."
      ],
      image: "images/whoAreWe/muni.png"
    }
  ];

  // State to track loaded images
  const [loadedImages, setLoadedImages] = useState({});
  // Refs for founder elements
  const founderRefs = useRef(founders.map(() => null));
  // Ref for background image
  const backgroundRef = useRef(null);

  // Function to preload an image
  const preloadImage = (url) => {
    if (!loadedImages[url] && url) {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        setLoadedImages(prev => ({
          ...prev,
          [url]: true
        }));
      };
    }
  };

  // Handle lazy loading with Intersection Observer
  useEffect(() => {
    // Background image URL
    const backgroundUrl = 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80';
    
    // Preload background when component mounts
    preloadImage(backgroundUrl);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          // Preload founder image
          preloadImage(founders[index].image);
          // Stop observing this element
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '100px' }); // Load when within 100px of viewport
    
    founderRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.dataset.index = index;
        observer.observe(ref);
      }
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const backgroundUrl = 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80';
  const isBackgroundLoaded = loadedImages[backgroundUrl];

  return (
    <section
      ref={backgroundRef}
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 bg-cover bg-center min-h-screen transition-all duration-500"
      style={{
        backgroundImage: isBackgroundLoaded ? `url('${backgroundUrl}')` : 'none',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 sm:mb-16 text-white drop-shadow-lg tracking-wide">
          Who Are We
        </h1>

        <div className="space-y-8 sm:space-y-10">
          {founders.map((founder, index) => {
            const isImageLoaded = loadedImages[founder.image];
            
            return (
              <div
                key={index}
                ref={el => founderRefs.current[index] = el}
                className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col md:flex-row gap-6 sm:gap-8 hover:shadow-2xl transition-all duration-300 border border-gray-100/50"
              >
                <div className="w-full md:w-1/2 h-80 sm:h-96 bg-gray-100 rounded-xl shadow-md overflow-hidden">
                  {isImageLoaded ? (
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-contain rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>
                <div className="md:w-1/2 space-y-4 sm:space-y-5">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{founder.name}</h2>
                  <h3 className="text-lg sm:text-xl font-medium text-indigo-600">{founder.title}</h3>
                  <p className="text-gray-800 leading-relaxed text-base sm:text-lg">{founder.details[0]}</p>
                  <p className="text-gray-800 leading-relaxed text-base sm:text-lg">{founder.details[1]}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}