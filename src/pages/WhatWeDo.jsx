import { Link } from "react-router-dom";

export default function WhatWeDo() {
  const services = [
    { id: 1, title: "Tourism", description: "Offering exceptional travel experiences, from guided tours to adventure trips, ensuring memorable journeys." },
    { id: 2, title: "Hospitality", description: "Delivering exceptional hospitality services, including luxury hotels, fine dining, and personalized guest experiences to ensure comfort and satisfaction." },
    { id: 3, title: "Transportation", description: "Delivering reliable and efficient transportation solutions, including logistics, ride-sharing, and freight services." },
    { id: 4, title: "Accommodation", description: "Offering a variety of stay options, from luxury hotels to budget-friendly lodgings, ensuring comfort for all travelers." },
    { id: 5, title: "Real Estate", description: "Helping clients buy, sell, and invest in prime real estate properties, ensuring profitable and secure deals." },
    { id: 6, title: "IT Tech Services", description: "Providing cutting-edge technology solutions, including software development, cloud computing, and cybersecurity." },
    { id: 7, title: "Pharmacy", description: "Ensuring access to high-quality medicines and healthcare products through well-stocked and trusted pharmacy services." },
    { id: 8, title: "Education Consultancy in European Union", description: "Providing expert guidance and support for students seeking free education opportunities in Europe, including application assistance and career counseling." },
    { id: 9, title: "Media", description: "Creating impactful content and media strategies, including digital marketing, advertising, and public relations, to engage and grow audiences." },
  ];

  return (
    <section className="py-16 md:py-20 px-6 bg-gradient-to-b from-blue-500 to-blue-200">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-gray-800 tracking-tight">
          What We Do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                {service.description}
              </p>
              <Link
                to={`/service/${service.id}`}
                className="inline-block bg-blue-600 text-white py-2 px-5 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 transform group-hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}