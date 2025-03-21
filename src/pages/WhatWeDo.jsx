import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function WhatWeDo() {
  const services = [
    { 
      id: 1, 
      title: "Tourism",
      images: [
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", // Swiss lake
        "https://images.unsplash.com/photo-1505765050516-f72dcacfa9e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", // Swiss Alps
        "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"  // Swiss mountain village
      ]
    },
    { 
      id: 2, 
      title: "Hospitality",
      images: [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", // Luxury hotel room
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", // Cozy hotel interior
        "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"  // Swiss hotel exterior
      ]
    },
    { 
      id: 3, 
      title: "Transportation",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", // Swiss train
        "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", // Scenic Swiss road
        "https://images.unsplash.com/photo-1542221080-a38376356b8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"  // Swiss cable car
      ]
    },
    { 
      id: 4, 
      title: "Accommodation",
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", // Modern hotel
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", // Scenic lodging (train view)
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"  // Swiss chalet interior
      ]
    },
    { 
      id: 5, 
      title: "Real Estate",
      images: [
        "https://images.unsplash.com/photo-1560518883-ce09059b512d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", // Modern building
        "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", // Swiss village homes
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"  // Scenic property (train view)
      ]
    },
    { 
      id: 6, 
      title: "IT Tech Services",
      images: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", // Tech hardware
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", // Coding setup
        "https://images.unsplash.com/photo-1531497861053-3ee3e01c7869?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"  // Data center
      ]
    },
    { 
      id: 7, 
      title: "Pharmacy",
      images: [
        "https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", // Pharmacy counter
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", // Medicine shelves
        "https://images.unsplash.com/photo-1607619056574-6dfaeec6c371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"  // Pharmacy interior
      ]
    },
    { 
      id: 8, 
      title: "Education Consultancy in European Union",
      images: [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", // University campus
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", // Classroom
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"  // Library
      ]
    },
    { 
      id: 9, 
      title: "Media",
      images: [
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", // Media meeting
        "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", // Video production
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"  // Creative workspace
      ]
    },
  ];

  // State to track image index for each service
  const [imageIndices, setImageIndices] = useState(services.map(() => 0));

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

  return (
    <section className="py-16 md:py-20 px-6 bg-gray-100">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-gray-900 tracking-tight">
          What We Do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              to={`/service/${service.id}`}
              key={service.id}
              className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden"
              style={{
                backgroundImage: `url(${service.images[imageIndices[index]]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300"></div>
              
              {/* Enhanced Title */}
              <h3 className="relative text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300 z-10 tracking-wide drop-shadow-lg uppercase">
                {service.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}