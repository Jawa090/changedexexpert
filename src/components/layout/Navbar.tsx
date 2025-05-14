import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Mail, Phone } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Top Contact Bar with Message, Email, and Phone */}
      <div className="w-full bg-gradient-to-r from-brand-800 to-brand-600 text-white py-4 shadow-lg">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-base font-medium">
          <div className="mb-3 sm:mb-0">
            <span className="typewriter-message inline-block">
              We can help you to build your project!
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-3 group">
              <Mail size={20} className="text-yellow-300 group-hover:scale-110 transition-transform duration-300" />
              <a 
                href="mailto:info@decexperts.com" 
                className="typewriter hover:text-yellow-300 transition-colors duration-300"
              >
                info@decexperts.com
              </a>
            </div>
            <div className="flex items-center space-x-3 group">
              <Phone size={20} className="text-yellow-300 group-hover:scale-110 transition-transform duration-300" />
              <a 
                href="tel:+1234567890" 
                className="typewriter hover:text-yellow-300 transition-colors duration-300"
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/52ae9643-7094-4b5f-aa46-2fa4c721162c.png" 
                alt="Decexperts Logo" 
                className="h-10 w-auto" 
              />
              <span className="font-heading text-2xl font-bold">
                <span className="text-brand-800">Dec</span>
                <span className="text-[#FFD700]">experts</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`font-medium transition-colors hover:text-brand-600 ${
                  isActive('/') ? 'text-brand-600 font-semibold' : 'text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`font-medium transition-colors hover:text-brand-600 ${
                  isActive('/services') ? 'text-brand-600 font-semibold' : 'text-gray-700'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className={`font-medium transition-colors hover:text-brand-600 ${
                  isActive('/about') ? 'text-brand-600 font-semibold' : 'text-gray-700'
                }`}
              >
                About
              </Link>
              <Link 
                to="/testimonials" 
                className={`font-medium transition-colors hover:text-brand-600 ${
                  isActive('/testimonials') ? 'text-brand-600 font-semibold' : 'text-gray-700'
                }`}
              >
                Testimonials
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium transition-colors hover:text-brand-600 ${
                  isActive('/contact') ? 'text-brand-600 font-semibold' : 'text-gray-700'
                }`}
              >
                Contact
              </Link>
              <Link to="/virtual-bid-manager">
                <Button className="bg-brand-600 hover:bg-brand-700 text-white font-medium ml-4 shadow-sm">
                  Virtual Bid Manager
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMenu}
                className="p-2 text-gray-700 hover:text-brand-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className={`font-medium py-3 px-4 rounded-md transition-colors ${
                    isActive('/') ? 'bg-brand-50 text-brand-600 font-semibold' : 'text-gray-700 hover:bg-gray-50 hover:text-brand-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/services" 
                  className={`font-medium py-3 px-4 rounded-md transition-colors ${
                    isActive('/services') ? 'bg-brand-50 text-brand-600 font-semibold' : 'text-gray-700 hover:bg-gray-50 hover:text-brand-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  to="/about" 
                  className={`font-medium py-3 px-4 rounded-md transition-colors ${
                    isActive('/about') ? 'bg-brand-50 text-brand-600 font-semibold' : 'text-gray-700 hover:bg-gray-50 hover:text-brand-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/testimonials" 
                  className={`font-medium py-3 px-4 rounded-md transition-colors ${
                    isActive('/testimonials') ? 'bg-brand-50 text-brand-600 font-semibold' : 'text-gray-700 hover:bg-gray-50 hover:text-brand-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link 
                  to="/contact" 
                  className={`font-medium py-3 px-4 rounded-md transition-colors ${
                    isActive('/contact') ? 'bg-brand-50 text-brand-600 font-semibold' : 'text-gray-700 hover:bg-gray-50 hover:text-brand-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  to="/virtual-bid-manager"
                  className="bg-brand-600 hover:bg-brand-700 text-white font-medium w-full py-3 px-4 rounded-md text-center shadow-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Virtual Bid Manager
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;