import React from 'react';
import { Tag, Percent, Calendar, Clock } from 'lucide-react';

const WeeklyDeals = () => {
  const deals = [
    {
      id: 1,
      name: 'Organic Bananas',
      originalPrice: 3.49,
      salePrice: 1.99,
      discount: 43,
      category: 'Produce',
      image: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Fresh, ripe organic bananas perfect for snacking or smoothies.',
      validUntil: 'Sunday, December 15th'
    },
    {
      id: 2,
      name: 'Ground Beef 80/20',
      originalPrice: 12.99,
      salePrice: 9.99,
      discount: 23,
      category: 'Meat',
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Premium ground beef, perfect for burgers and family meals.',
      validUntil: 'Wednesday, December 18th'
    },
    {
      id: 3,
      name: 'Farm Fresh Eggs',
      originalPrice: 5.99,
      salePrice: 3.99,
      discount: 33,
      category: 'Dairy',
      image: 'https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Grade A large eggs from local farms. Rich in protein and nutrients.',
      validUntil: 'Saturday, December 21st'
    },
    {
      id: 4,
      name: 'Artisan Sourdough Bread',
      originalPrice: 6.99,
      salePrice: 4.99,
      discount: 29,
      category: 'Bakery',
      image: 'https://images.pexels.com/photos/209196/pexels-photo-209196.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Handcrafted sourdough bread made with traditional methods.',
      validUntil: 'Thursday, December 19th'
    },
    {
      id: 5,
      name: 'Mixed Berry Blend',
      originalPrice: 7.99,
      salePrice: 5.49,
      discount: 31,
      category: 'Frozen',
      image: 'https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Frozen mixed berries - blueberries, strawberries, and raspberries.',
      validUntil: 'Friday, December 20th'
    },
    {
      id: 6,
      name: 'Greek Yogurt Multi-Pack',
      originalPrice: 8.99,
      salePrice: 6.49,
      discount: 28,
      category: 'Dairy',
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Creamy Greek yogurt in assorted flavors. High in protein.',
      validUntil: 'Sunday, December 22nd'
    }
  ];

  const featuredDeal = deals[0];
  const regularDeals = deals.slice(1);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Weekly Deals</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't miss out on these amazing savings! Fresh deals updated every week with the best prices on your favorite products.
          </p>
        </div>

        {/* Deal Period Info */}
        <div className="bg-emerald-600 text-white rounded-xl p-6 mb-8 text-center">
          <div className="flex items-center justify-center mb-2">
            <Calendar className="h-6 w-6 mr-2" />
            <h2 className="text-xl font-semibold">This Week's Deals</h2>
          </div>
          <p className="text-emerald-100">
            Valid December 12 - December 22, 2025 • While supplies last
          </p>
        </div>

        {/* Featured Deal */}
        <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-8 mb-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-white bg-opacity-20 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Tag className="h-4 w-4 mr-1" />
                Featured Deal of the Week
              </div>
              <h2 className="text-3xl font-bold mb-4">{featuredDeal.name}</h2>
              <p className="text-emerald-100 mb-6 text-lg">{featuredDeal.description}</p>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-center">
                  <div className="text-sm text-emerald-200">Was</div>
                  <div className="text-lg font-semibold line-through">${featuredDeal.originalPrice}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-emerald-200">Now</div>
                  <div className="text-3xl font-bold">${featuredDeal.salePrice}</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <div className="text-sm text-emerald-200">Save</div>
                  <div className="text-xl font-bold">{featuredDeal.discount}%</div>
                </div>
              </div>
              
              <div className="flex items-center text-emerald-100">
                <Clock className="h-4 w-4 mr-2" />
                Valid until {featuredDeal.validUntil}
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-xl p-4 shadow-lg inline-block">
                <img
                  src={featuredDeal.image}
                  alt={featuredDeal.name}
                  className="w-64 h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Regular Deals Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Percent className="h-6 w-6 text-emerald-600 mr-2" />
            More Great Deals
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularDeals.map(deal => (
              <div
                key={deal.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {deal.discount}% OFF
                  </div>
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-2 py-1 rounded text-xs">
                    {deal.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{deal.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{deal.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg text-gray-400 line-through">${deal.originalPrice}</span>
                      <span className="text-2xl font-bold text-emerald-600">${deal.salePrice}</span>
                    </div>
                    <div className="text-green-600 font-semibold">
                      Save ${(deal.originalPrice - deal.salePrice).toFixed(2)}
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-500 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Valid until {deal.validUntil}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Don't Miss Out!</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            These deals are available for a limited time and while supplies last. Visit us in-store to take advantage of these incredible savings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <div className="font-semibold text-emerald-800">Store Hours</div>
              <div className="text-emerald-600 text-sm">Mon-Fri: 7 AM - 10 PM</div>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <div className="font-semibold text-emerald-800">Location</div>
              <div className="text-emerald-600 text-sm">123 Fresh Avenue, Green Valley</div>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <div className="font-semibold text-emerald-800">Questions?</div>
              <div className="text-emerald-600 text-sm">(555) 123-4567</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyDeals;