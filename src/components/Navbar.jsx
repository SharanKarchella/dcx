import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // React Router Link
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "WHO ARE WE", href: "/who-we-are" },
  { name: "WHAT WE DO", href: "/what-we-do" },
  // { name: "NEWS", href: "/news" },
  // { name: "CAREERS", href: "/careers" },
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo.svg" // Replace with actual logo
            alt=" Logo"
            className="h-12 w-12 object-contain mr-2"
          />
          <span className="text-xl font-bold text-blue-600">DCX</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                activeItem === item.name
                  ? scrolled
                    ? "text-black"
                    : "text-white"
                  : scrolled
                  ? "text-gray-800"
                  : "text-white"
              }`}
              onClick={() => setActiveItem(item.name)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="lg:hidden text-white hover:text-amber-500 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeItem === item.name ? "text-blue-600" : "text-gray-800"
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
