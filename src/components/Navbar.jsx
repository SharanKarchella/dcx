import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

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

  // Determine if the current page is "What We Do" or "Contact Us"
  const isSpecialPage =
    location.pathname === "/what-we-do" || location.pathname === "/contact-us";

  // Set the current active item based on location
  useEffect(() => {
    const currentPath = location.pathname;
    const currentNav = navItems.find(item => item.href === currentPath);
    if (currentNav) {
      setActiveItem(currentNav.name);
    } else {
      setActiveItem("HOME");
    }
  }, [location.pathname]);

  return (
    <>
      {/* Add a spacer div to prevent content from being hidden behind the navbar */}
      <div className="h-24 md:h-28 w-full"></div>
      
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen ? "bg-white shadow-md" : "bg-transparent"
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
              className="h-16 w-16 md:h-20 md:w-20 items-center object-contain mr-2 md:mr-4 rounded-lg"
            />
            <span
              className={`text-xl md:text-3xl font-bold ${
                isSpecialPage || scrolled || isOpen ? "text-black" : "text-white"
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
                  hover:text-amber-600 
                  ${
                    activeItem === item.name
                      ? "text-amber-600 font-bold"
                      : scrolled || isSpecialPage
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
            className="lg:hidden p-2 rounded-md text-gray-800 hover:text-amber-500 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-lg">
            <div className="container mx-auto px-4 py-2">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium py-2 px-3 rounded-md transition-all duration-300
                      hover:bg-amber-100 hover:text-amber-600
                      ${
                        activeItem === item.name
                          ? "bg-amber-500 text-white"
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
    </>
  );
}