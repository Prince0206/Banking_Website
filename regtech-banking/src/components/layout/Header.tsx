import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/products", label: "Products & Services" },
    { path: "/compliance", label: "Compliance & Security" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled ? "glass-panel-solid shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-navy-600 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">RT</span>
            </div>
            <span className="text-xl font-bold text-navy-800">
              RegTech Bank
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded px-2 py-1 ${
                  location.pathname === link.path
                    ? "text-teal-600"
                    : "text-navy-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/portal">
              <Button variant="accent">Login</Button>
            </Link>
          </div>

          <button
            className="md:hidden text-navy-700 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 px-4 text-sm font-medium transition-colors hover:bg-navy-50 rounded ${
                  location.pathname === link.path
                    ? "text-teal-600 bg-navy-50"
                    : "text-navy-700"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Link to="/portal" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="accent" className="w-full">
                  Login
                </Button>
              </Link>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};
