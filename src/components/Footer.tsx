import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, MapPin, Phone, Mail, Clock } from 'lucide-react';
import logoVideo from "../components/video/premium & Organic Fruit every day.mp4";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <video
    src={logoVideo} // replace with your video path or URL
    autoPlay
    loop
    muted
    playsInline
    className="h-16 w-16 object-contain rounded-lg transition-transform group-hover:scale-105"
  />

              <div>
                <h1 className="text-xl font-bold">Angalamman Maligai Store</h1>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted neighborhood grocery store, committed to bringing you the freshest produce, 
              quality products, and exceptional service for over 30 years.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span>Bus Stand Opposite,Melmalayanur(PT&TK),Villupuram(DT),604204</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span>91+ 9443541763</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-emerald-400" />
                <span>angalammanstore2025@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors">
                  Home 
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-emerald-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/deals" className="hover:text-emerald-400 transition-colors">
                  Weekly Deals
                </Link>
              </li>
              <li>
                <Link to="/hours" className="hover:text-emerald-400 transition-colors">
                  Store Hours
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Store Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Clock className="h-5 w-5 text-emerald-400 mr-2" />
              Store Hours
            </h3>
            <div className="space-y-1 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>Mon - Thu:</span>
                <span>7 AM - 10 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Fri - Sat:</span>
                <span>7 AM - 11 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>8 AM - 9 PM</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              Holiday hours may vary. Please call ahead to confirm.
            </p>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 Angalamman Maligai Store. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0 text-sm text-gray-400">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;