import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ThemeProvider from "./components/ThemeProvider";
import Home from "./pages/Home";
import WhoWeAre from "./pages/WhoWeAre";
import WhatWeDo from "./pages/WhatWeDo";
import News from "./pages/News";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import ServiceDetail from "./pages/ServiceDetail";
import "./globals.css";

// Layout Component to include Navbar
function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/who-we-are" element={<Layout><WhoWeAre /></Layout>} />
          <Route path="/what-we-do" element={<Layout><WhatWeDo /></Layout>} />
          <Route path="/news" element={<Layout><News /></Layout>} />
          <Route path="/careers" element={<Layout><Careers /></Layout>} />
          <Route path="/contact-us" element={<Layout><ContactUs /></Layout>} />
          {/* Dynamic Route for Service Detail Page */}
          <Route path="/service/:id" element={<Layout><ServiceDetail /></Layout>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;