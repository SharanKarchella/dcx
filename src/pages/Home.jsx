import Navbar from "../components/Navbar.jsx";
import HeroBanner from "../components/HeroBanner.jsx";
import StrategyVision from "../components/StrategyVision";
import WhatWeDo from "../pages/WhatWeDo.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroBanner />
      <StrategyVision />
      <WhatWeDo />
      <Footer />
    </main>
  );
}

export default Home;
