import React,{ useState, useEffect } from 'react';
import image1 from '../components/images/aisle-3105629_1280.jpg';
import image2 from '../components/images/nathalia-rosa-rWMIbqmOxrY-unsplash.jpg';
import image3 from '../components/images/pexels-pixabay-264636.jpg';
import { Link } from 'react-router-dom';
import { ShoppingCart, Clock, MapPin, Star, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-emerald-600" />,
      title: 'Fresh Products Daily',
      description: 'Locally sourced produce and quality groceries delivered fresh every day.'
    },
    {
      icon: <Clock className="h-8 w-8 text-emerald-600" />,
      title: 'Convenient Hours',
      description: 'Open 7 days a week with extended hours to fit your schedule.'
    },
    {
      icon: <MapPin className="h-8 w-8 text-emerald-600" />,
      title: 'Local Community',
      description: 'Proudly serving our neighborhood for over 15 years with personalized service.'
    },
    {
      icon: <Star className="h-8 w-8 text-emerald-600" />,
      title: 'Quality Guarantee',
      description: 'We stand behind every product with our satisfaction guarantee.'
    }
  ];



  const sliderImages = [
    image1,
    image2,
    image3
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % sliderImages.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-green-100 py-20 lg:py-32 bg-cover"
        style={{
        backgroundImage: `url(${sliderImages[currentImage]})`
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Welcome to <span className="text-emerald-600">Angalamman Maligai Store</span>
            </h1><data value=""></data>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your friendly neighborhood Maligai Store for quality provisions, pantry staples, snacks, household essentials, and more — all under one roof.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transform hover:scale-105 transition-all shadow-lg"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/deals"
                className="inline-flex items-center px-8 py-4 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-600 hover:text-white transition-all"
              >
                Weekly Deals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Why Choose FreshFields?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're more than just a grocery store - we're your trusted partner in healthy living.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-white border border-gray-100 hover:shadow-xl hover:border-emerald-200 transition-all transform hover:-translate-y-1"
              >
                <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Store Hours</h3>
              <p className="text-gray-600 mb-6">Find out when we're open and plan your visit.</p>
              <Link
                to="/hours"
                className="text-emerald-600 font-semibold hover:text-emerald-700 inline-flex items-center"
              >
                View Hours
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Weekly Specials</h3>
              <p className="text-gray-600 mb-6">Don't miss out on our amazing weekly deals and discounts.</p>
              <Link
                to="/deals"
                className="text-emerald-600 font-semibold hover:text-emerald-700 inline-flex items-center"
              >
                See Deals
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h3>
              <p className="text-gray-600 mb-6">Get in touch with our friendly team for any questions.</p>
              <Link
                to="/contact"
                className="text-emerald-600 font-semibold hover:text-emerald-700 inline-flex items-center"
              >
                Contact
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;