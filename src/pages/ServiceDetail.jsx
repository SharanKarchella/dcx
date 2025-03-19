import { useParams } from "react-router-dom";

const services = [
  {
    id: "1",
    title: "Tourism",
    descriptions: [
      "Explore breathtaking landscapes and cultural wonders with our guided tourism services.",
      "From historical sites to exotic beaches, we ensure an unforgettable travel experience.",
    ],
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      "https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "2",
    title: "Hospitality",
    descriptions: [
      "Luxury accommodations and world-class hospitality services tailored for your comfort.",
      "Experience the best in fine dining, spa services, and personalized guest experiences.",
    ],
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "3",
    title: "Transportation",
    descriptions: [
      "Reliable and efficient transportation solutions for both personal and commercial needs.",
      "Seamless logistics and ride-sharing options ensuring timely and safe travel.",
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "4",
    title: "Accommodation",
    descriptions: [
      "Offering a variety of stay options, from luxury hotels to budget-friendly lodgings.",
      "Ensuring comfort and convenience for all types of travelers worldwide.",
    ],
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "5",
    title: "Real Estate",
    descriptions: [
      "Helping clients buy, sell, and invest in prime real estate properties.",
      "Ensuring profitable and secure deals with expert real estate guidance.",
    ],
    images: [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "6",
    title: "IT Tech Services",
    descriptions: [
      "Providing cutting-edge technology solutions, including software development, cloud computing, and cybersecurity.",
      "Offering expert IT support and innovative solutions to optimize business operations and security.",
    ],
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "7",
    title: "Pharmacy",
    descriptions: [
      "Ensuring access to high-quality medicines and healthcare products through well-stocked and trusted pharmacy services.",
      "Providing professional pharmaceutical care and personalized health advice for all your needs.",
    ],
    images: [
      "https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      "https://images.pexels.com/photos/355934/pexels-photo-355934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "8",
    title: "Education Consultant for Free in Europe",
    descriptions: [
      "Providing expert guidance and support for students seeking free education opportunities in Europe, including application assistance and career counseling.",
      "Helping students navigate scholarships, visas, and university admissions for a successful academic journey.",
    ],
    images: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "9",
    title: "Media",
    descriptions: [
      "Creating impactful content and media strategies, including digital marketing, advertising, and public relations, to engage and grow audiences.",
      "Delivering creative solutions for branding, video production, and social media management.",
    ],
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      "https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
];

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <section className="flex justify-center items-center h-screen">
        <p className="text-center text-gray-600 text-xl font-semibold">
          Service Not Found!
        </p>
      </section>
    );
  }

  return (
    <section className="py-12 px-6 bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative mb-8">
        <img
          src={service.images[0]}
          alt={service.title}
          className="w-full h-72 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
          <h1 className="text-white text-4xl font-bold">{service.title}</h1>
        </div>
      </div>

      <div className="space-y-6">
        {/* Service Details 1 */}
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
          <img
            src={service.images[0]}
            alt={service.title}
            className="w-full md:w-1/2 rounded-lg shadow-md"
          />
          <p className="text-lg text-gray-700 leading-relaxed md:w-1/2">
            {service.descriptions[0]}
          </p>
        </div>

        {/* Service Details 2 */}
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
          <img
            src={service.images[1]}
            alt={service.title}
            className="w-full md:w-1/2 rounded-lg shadow-md"
          />
          <p className="text-lg text-gray-700 leading-relaxed md:w-1/2">
            {service.descriptions[1]}
          </p>
        </div>
      </div>
    </section>
  );
}
