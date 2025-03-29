
import { lazy, Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import axios from "axios";

// Lazy load components
const HeroBanner = lazy(() => import("../components/HeroBanner.jsx"));
const StrategyVision = lazy(() => import("../components/StrategyVision"));
const WhatWeDo = lazy(() => import("../pages/WhatWeDo.jsx"));
const Footer = lazy(() => import("../components/Footer.jsx"));

// Fallback component with visible styling
function LoadingFallback() {
  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        height: "100px",
        background: "#f0f0f0"
      }}
    >
      Loading...
    </div>
  );
}

function ErrorFallback({error}) {
  return (
    <div style={{ padding: "20px", color: "red" }}>
      Something went wrong: {error.message}
    </div>
  );
}

function Home() {
  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requirement: "",
    subject: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    try {
          const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/send-email`,
            formData,
            {
              headers: { "Content-Type": "application/json" }, // Explicitly setting headers
            }
          );
  
      // console.log("Full response:", response);
  
      if (response.status === 200) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", requirement: "", subject: "" });
        setIsModalOpen(false);
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      // console.error("Detailed error:", error.response ? error.response.data : error.message);
      alert("An error occurred. Please check the console for details.");
    }
  };

  return (
    <main className="min-h-screen relative">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingFallback />}>
          <HeroBanner />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingFallback />}>
          <WhatWeDo />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingFallback />}>
          <StrategyVision />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingFallback />}>
          <Footer />
        </Suspense>
      </ErrorBoundary>

      {/* Contact Icon */}
      <span
        className="fixed bottom-6 right-6 w-12 h-12 md:w-20 md:h-20 bg-blue-500 text-white flex items-center justify-center rounded-full shadow-lg cursor-pointer z-50 custom-bounce"
        onClick={() => setIsModalOpen(true)}
      >
        📞
      </span>

      {/* Modal */}
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
                  Your Email:
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
    </main>
  );
}

export default Home;