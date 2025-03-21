import { useNavigate } from "react-router-dom";
import { Button } from "./ui/Button.jsx"; // Adjust the path if needed

export default function HeroBanner() {
  const navigate = useNavigate();
  return (
    <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">

      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/griddy.jpg?height=600&width=1200')",
          filter: "brightness(0.7)",
        }}
      ></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
          {/* Experience and innovation in a single touch. */}
          Transforming Industries, Elevating Experiences.
        </h1>
        <Button onClick={()=> navigate("/contact-us")} className="bg-[#0a2a3b] hover:bg-[#0000FF]/60 text-white px-8 py-6 text-lg !rounded-full">
          Contact Now
        </Button>
      </div>

    </section>
  );
}
