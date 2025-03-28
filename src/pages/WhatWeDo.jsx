import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function WhatWeDo() {
  const services = [
    { 
      id: 1, 
      title: "Tourism",
      images: [
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        "/images/HeroSection/heroBg2.jpeg",
      ]
    },
    { 
      id: 2, 
      title: "Hospitality",
      images: [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      ]
    },
    { 
      id: 3, 
      title: "Transportation",
      images: [
        "/images/whatwedo/transport/TRANS$.webp",
        "/images/whatwedo/transport/car1.jpeg",
        "/images/whatwedo/transport/car2.jpeg",
      ]
    },
    { 
      id: 4, 
      title: "Accommodation",
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
      ]
    },
    { 
      id: 5, 
      title: "Real Estate",
      images: [
        "images/ServiceDetail/RealEstate/House.jpeg",
        "images/ServiceDetail/RealEstate/House2.jpeg",
        "images/ServiceDetail/RealEstate/House3.jpeg",
      ]
    },
    { 
      id: 6, 
      title: "IT Tech Services",
      images: [
        "images/ServiceDetail/It/image.png",
        "images/ServiceDetail/It/it.jpeg",
      ]
    },
    { 
      id: 7, 
      title: "Pharmacy",
      images: [
        "https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        "/images/ServiceDetail/Pharma/Pharma1.jpeg",
      ]
    },
    { 
      id: 8, 
      title: "Education Consultancy in European Union",
      images: [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
      ]
    },
    { 
      id: 9, 
      title: "Media",
      images: [
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
      ]
    },
  ]; 
  
  // State to track image index for each service
  const [imageIndices, setImageIndices] = useState(services.map(() => 0));
  // State to track active card (for both hover and tap)
  const [activeCard, setActiveCard] = useState(null);
  // State to track loaded images
  const [loadedImages, setLoadedImages] = useState({});
  // Ref for intersection observer
  const cardRefs = useRef(services.map(() => null));
  
  // Function to preload an image
  const preloadImage = (url) => {
    if (!loadedImages[url]) {
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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          // Preload first image of this service
          preloadImage(services[index].images[0]);
          // Stop observing this element
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '200px' }); // Load when within 200px of viewport
    
    cardRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.dataset.index = index;
        observer.observe(ref);
      }
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  // Preload next image when current one changes
  useEffect(() => {
    imageIndices.forEach((currentIndex, serviceIndex) => {
      const service = services[serviceIndex];
      const nextIndex = (currentIndex + 1) % service.images.length;
      preloadImage(service.images[nextIndex]);
    });
  }, [imageIndices]);

  // Rotate images every 3 seconds for each service
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices((prevIndices) =>
        prevIndices.map((index, i) => 
          index === services[i].images.length - 1 ? 0 : index + 1
        )
      );
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Cleanup
  }, [services]);

  // Handle touch/click toggle for mobile
  const handleCardInteraction = (id) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 md:py-20 px-6 bg-blue-100">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-gray-900 tracking-tight">
          What We Do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const currentImageUrl = service.images[imageIndices[index]];
            const isImageLoaded = loadedImages[currentImageUrl];
            
            return (
              <Link
                to={`/service/${service.id}`}
                key={service.id}
                ref={el => cardRefs.current[index] = el}
                className="group relative bg-white rounded-xl shadow-md flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden h-64 transform transition-all duration-500 ease-in-out"
                style={{
                  backgroundImage: isImageLoaded ? `url(${currentImageUrl})` : 'none',
                  backgroundColor: !isImageLoaded ? '#f0f0f0' : 'transparent',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transform: activeCard === service.id ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: activeCard === service.id 
                    ? '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)' 
                    : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
                onMouseEnter={() => {
                  setActiveCard(service.id);
                  // Preload all images for this service on hover
                  service.images.forEach(url => preloadImage(url));
                }}
                onMouseLeave={() => setActiveCard(null)}
                onTouchStart={() => handleCardInteraction(service.id)}
              >
                {/* Overlay gradient effect */}
                <div 
                  className="absolute inset-0 transition-all duration-500 ease-in-out"
                  style={{
                    background: activeCard === service.id 
                      ? 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.1) 100%)' 
                      : 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%)'
                  }}
                ></div>
                
                {/* Title with slide-up animation */}
                <div 
                  className="relative z-10 w-full px-6 transition-all duration-500 ease-in-out"
                  style={{
                    transform: activeCard === service.id ? 'translateY(-10px)' : 'translateY(0)'
                  }}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-wide drop-shadow-lg uppercase">
                    {service.title}
                  </h3>
                  
                  {/* Additional content revealed on active state */}
                  <div 
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                      maxHeight: activeCard === service.id ? '100px' : '0',
                      opacity: activeCard === service.id ? 1 : 0,
                      marginTop: activeCard === service.id ? '12px' : '0'
                    }}
                  >
                    <div className="h-1 w-16 bg-blue-400 mx-auto mb-3"></div>
                    <p className="text-white text-sm">Explore our {service.title.toLowerCase()} services</p>
                  </div>
                </div>
                
                {/* Animated border accent on active state */}
                <div 
                  className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transition-all duration-500 ease-in-out"
                  style={{
                    transform: activeCard === service.id ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'center'
                  }}
                ></div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}