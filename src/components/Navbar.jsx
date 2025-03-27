import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "WHO ARE WE", href: "/who-we-are" },
  { name: "WHAT WE DO", href: "/what-we-do" },
  { name: "CONTACT US", href: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("HOME");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle logo click with page refresh
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo with click handler */}
        <div 
          onClick={handleLogoClick} 
          className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
        >
          <img 
            src="/images/Logo/dcxlogo.jpeg"
            alt="Logo" 
            className="h-8 w-10 object-contain mr-2 rounded-lg"
          />
          <span 
            className={`text-2xl font-bold ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            DCX
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.href} 
              className={`text-md font-medium transition-colors 
                hover:text-blue-600 
                ${activeItem === item.name 
                  ? (scrolled ? "text-black" : "text-white") 
                  : (scrolled ? "text-gray-800" : "text-white")
                }`}
              onClick={() => setActiveItem(item.name)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="lg:hidden text-blue-900 hover:text-amber-500 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.href} 
                  className={`
                    text-sm font-medium 
                    py-2 px-3 rounded-md 
                    transition-all duration-300
                    hover:bg-blue-100 hover:text-blue-600
                    active:bg-blue-200 active:text-blue-700
                    ${activeItem === item.name 
                      ? "bg-blue-600 text-white" 
                      : "text-gray-800"
                    }`}
                  onClick={() => {
                    setActiveItem(item.name);
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}