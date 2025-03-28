import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const services = [
  {
    id: "1",
    title: "Tourism",
    descriptions: [
      "Explore breathtaking landscapes and cultural wonders with our guided tourism services.",
      "From historical sites to exotic beaches, we ensure an unforgettable travel experience.",
      "Visit iconic European landmarks like the Eiffel Tower and the Colosseum with expert guides.",
      "Enjoy curated tours through Switzerland’s stunning Alps and charming villages.",
    ],
    images: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", // Paris (Eiffel Tower)
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", // Swiss Alps
    ],
  },
  {
    id: "2",
    title: "Hospitality",
    descriptions: [
      "Luxury accommodations and world-class hospitality services tailored for your comfort.",
      "Experience the best in fine dining, spa services, and personalized guest experiences.",
      "Stay in elegant European hotels with rich history and modern amenities.",
      "Relax in Swiss-inspired retreats with unparalleled views and exceptional service.",
    ],
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    ],
  },
  {
    id: "3",
    title: "Transportation",
    descriptions: [
      "Reliable and efficient transportation solutions for both personal and commercial needs.",
      "Seamless logistics and ride-sharing options ensuring timely and safe travel.",
      "Travel Europe with high-speed trains like the Swiss Glacier Express.",
      "Experience scenic routes and eco-friendly transport across Switzerland and beyond.",
    ],
    images: [
      "/images/ServiceDetail/Transport/transport1.jpeg", // Local image
      "/images/ServiceDetail/Transport/transport2.jpeg", // Local image
    ],
  },
  {
    id: "4",
    title: "Accommodation",
    descriptions: [
      "Offering a variety of stay options, from luxury hotels to budget-friendly lodgings.",
      "Ensuring comfort and convenience for all types of travelers worldwide.",
      "Choose from cozy Swiss chalets or modern European apartments.",
      "Enjoy authentic hospitality in the heart of Switzerland’s picturesque towns.",
    ],
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    ],
  },
  {
    id: "5",
    title: "Real Estate",
    descriptions: [
      "Helping clients buy, sell, and invest in prime real estate properties.",
      "Ensuring profitable and secure deals with expert real estate guidance.",
      "Discover properties in vibrant European cities like Zurich and Milan.",
      "Invest in Swiss chalets or urban flats with stunning mountain views.",
    ],
    images: [
      "/images/ServiceDetail/RealEstate/House.jpeg", // Local image
      "/images/ServiceDetail/RealEstate/House2.jpeg", // Local image
      "/images/ServiceDetail/RealEstate/House3.jpeg", // Local image
    ],
  },
  {
    id: "6",
    title: "IT Tech Services",
    descriptions: [
      "Providing cutting-edge technology solutions, including software development, cloud computing, and cybersecurity.",
      "Offering expert IT support and innovative solutions to optimize business operations and security.",
      "Leverage Europe’s tech hubs for advanced digital infrastructure.",
      "Partner with Swiss precision for reliable and scalable IT services.",
    ],
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      "/images/ServiceDetail/It/image.png", // Local image
      "/images/ServiceDetail/It/it.jpeg", // Local image
    ],
  },
  {
    id: "7",
    title: "Pharmacy",
    descriptions: [
      "Ensuring access to high-quality medicines and healthcare products through well-stocked and trusted pharmacy services.",
      "Providing professional pharmaceutical care and personalized health advice for all your needs.",
      "Serving Europe with top-tier healthcare standards and Swiss quality.",
      "Offering wellness products inspired by Switzerland’s natural heritage.",
    ],
    images: [
      "/images/ServiceDetail/Pharma/Pharma1.jpeg", // Local image
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    ],
  },
  {
    id: "8",
    title: "Education Consultancy for Free in Europe",
    descriptions: [
      "Providing expert guidance and support for students seeking free education opportunities in Europe, including application assistance and career counseling.",
      "Helping students navigate scholarships, visas, and university admissions for a successful academic journey.",
      "Connecting you to prestigious institutions in Switzerland and across Europe.",
      "Offering tailored advice for studying in top European cities like Geneva and Berlin.",
    ],
    images: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    ],
  },
  {
    id: "9",
    title: "Media",
    descriptions: [
      "Creating impactful content and media strategies, including digital marketing, advertising, and public relations, to engage and grow audiences.",
      "Delivering creative solutions for branding, video production, and social media management.",
      "Producing content inspired by Europe’s rich cultural diversity.",
      "Leveraging Swiss precision for high-quality media campaigns.",
    ],
    images: [
      "/images/ServiceDetail/Media/media1.png", // Local image
      "/images/ServiceDetail/Media/media2.png", // Local image
      "/images/ServiceDetail/Media/media3.png", // Local image
    ],
  },
];

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  // State for rotating images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requirement: "",
    subject: "",
  });

  // Rotate images every 3 seconds
  useEffect(() => {
    if (!service) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === service.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Cleanup
  }, [service]);

  //handle Submit
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/send-email`,
        formData,
        {
          headers: { "Content-Type": "application/json" }, // Explicitly setting headers
        }
      );

      if (response.status === 200) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", requirement: "", subject:"" });
        setIsModalOpen(false);
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

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
          src={service.images[currentImageIndex]}
          alt={service.title}
          className="w-full h-72 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold tracking-wide drop-shadow-lg uppercase">
            {service.title}
          </h1>
        </div>
      </div>

      <div className="space-y-6">
        {/* Service Details 1 */}
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
          <img
            src={service.images[currentImageIndex]}
            alt={service.title}
            className="w-full md:w-1/2 rounded-lg shadow-md"
          />
          <div className="md:w-1/2 space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              {service.descriptions[0]}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              {service.descriptions[1]}
            </p>
          </div>
        </div>

        {/* Service Details 2 */}
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
          <img
            src={
              service.images[(currentImageIndex + 1) % service.images.length]
            }
            alt={service.title}
            className="w-full md:w-1/2 rounded-lg shadow-md"
          />
          <div className="md:w-1/2 space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              {service.descriptions[2]}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              {service.descriptions[3]}
            </p>
          </div>
        </div>
      </div>

      {/* Contact Icon */}
      <span
        className="fixed bottom-6 right-6 w-12 h-12 md:w-20 md:h-20 bg-blue-500 text-white flex items-center justify-center rounded-full shadow-lg cursor-pointer z-50 custom-bounce"
        onClick={() => setIsModalOpen(true)}
      >
        📞
      </span>

      {/* {Modal} */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[999]">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-6">Feel free to reach out to us!</p>

            {/* Input Fields */}
            <div className="space-y-4">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Nice Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="email@example.com"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="Enter the subject"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Requirement Field */}
              <div>
                <label
                  htmlFor="requirement"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Requirement:
                </label>
                <textarea
                  id="requirement"
                  value={formData.requirement}
                  onChange={(e) =>
                    setFormData({ ...formData, requirement: e.target.value })
                  }
                  placeholder="Describe your requirement so that we would schedule a call with you"
                  className="w-full border border-gray-300 rounded-lg p-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4 mt-6">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
