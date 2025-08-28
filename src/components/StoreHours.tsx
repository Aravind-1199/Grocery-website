import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Phone, Calendar } from 'lucide-react';

const StoreHours = () => {
  const hours = [
    { day: 'Monday', time: '7:00 AM - 10:00 PM' },
    { day: 'Tuesday', time: '7:00 AM - 10:00 PM' },
    { day: 'Wednesday', time: '7:00 AM - 10:00 PM' },
    { day: 'Thursday', time: '7:00 AM - 10:00 PM' },
    { day: 'Friday', time: '7:00 AM - 11:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 11:00 PM' },
    { day: 'Sunday', time: '8:00 AM - 9:00 PM' },
  ];

  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };

  const currentDay = getCurrentDay();

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Store Hours</h1>
          <p className="text-lg text-gray-600">
            We're here to serve you 7 days a week with convenient hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Hours Table */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 ml-4">Weekly Hours</h2>
            </div>
            
            <div className="space-y-4">
              {hours.map((schedule, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center p-4 rounded-lg transition-colors ${
                    schedule.day === currentDay
                      ? 'bg-emerald-50 border-2 border-emerald-200'
                      : 'bg-gray-50 border border-gray-200'
                  }`}
                >
                  <span className={`font-semibold ${
                    schedule.day === currentDay ? 'text-emerald-800' : 'text-gray-700'
                  }`}>
                    {schedule.day}
                    {schedule.day === currentDay && (
                      <span className="ml-2 text-xs bg-emerald-600 text-white px-2 py-1 rounded-full">
                        Today
                      </span>
                    )}
                  </span>
                  <span className={`font-medium ${
                    schedule.day === currentDay ? 'text-emerald-700' : 'text-gray-600'
                  }`}>
                    {schedule.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Store Information */}
          <div className="space-y-6">
            {/* Location */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 ml-4">Location</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Bus Stand Opposite<br />
                Melmalayanur(PT&TK)<br />
                Villupuram(DT),604204
              </p>
<div className="text-center">
  <Link to="/location">
    <button
      className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-all"
    >
      View Store Location
    </button>
  </Link>
</div>




            </div>

            {/* Contact */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 ml-4">Contact</h3>
              </div>
 <div className="space-y-2 text-gray-600">
  <p>
    Phone:{' '}
    <a href="tel:+919443541763" className="text-emerald-600 hover:underline">
      +91 94435 41763
    </a>
  </p>
  <p>
    Email:{' '}
    <a
      href="mailto:angalammanstore2025@gmail.com"
      className="text-emerald-600 hover:underline"
    >
      angalammanstore2025@gmail.com
    </a>
  </p>
</div>


            </div>

            {/* Special Hours */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 ml-4">Holiday Hours</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span>New Year's Day</span>
                  <span className="font-medium">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span>Thanksgiving</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Christmas Eve</span>
                  <span className="font-medium">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Christmas Day</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                * Holiday hours may vary. Please call ahead to confirm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreHours;