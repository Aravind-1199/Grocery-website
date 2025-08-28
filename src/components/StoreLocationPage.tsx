import React from 'react';
import { useNavigate } from 'react-router-dom';

const StoreLocationPage = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/hours'); // Redirects to the store hours page
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center w-full">Our Store Location</h1>
        <button style={{marginTop: "50px"}}
          onClick={handleClose}
          className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all"
        >
          Close
        </button>
      </div>

      <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d474862.17918115127!2d78.71603628906253!3d12.340162500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baccc67b769eff9%3A0x5cb5b3f3ad1325ff!2sAngalamman%20Maligai!5e1!3m2!1sen!2sin!4v1756112360582!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default StoreLocationPage;
