import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeProvider from "./components/ThemeProvider";
import Home from "./pages/Home";
import WhoWeAre from "./pages/WhoWeAre";
import WhatWeDo from "./pages/WhatWeDo";
import News from "./pages/News";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import ServiceDetail from "./pages/ServiceDetail";
import "./globals.css";

function App() {
  return (
    <ThemeProvider>
      
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/news" element={<News />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact-us" element={<ContactUs />} />
            {/* Dynamic Route for Service Detail Page */}
            <Route path="/service/:id" element={<ServiceDetail />} />
          </Routes>
          
      </Router>
    </ThemeProvider>
  );
}

export default App;
