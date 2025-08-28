import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Produce', 'Dairy', 'Meat', 'Bakery', 'Pantry', 'Frozen'];

  const products = [
    // Produce
    { id: 1, name: 'Fresh Bananas', category: 'Produce', price: 2.49, unit: 'per lb', image: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 2, name: 'Organic Spinach', category: 'Produce', price: 4.99, unit: 'per bag', image: 'https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 3, name: 'Red Bell Peppers', category: 'Produce', price: 3.99, unit: 'per lb', image: 'https://images.pexels.com/photos/594137/pexels-photo-594137.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 4, name: 'Fresh Tomatoes', category: 'Produce', price: 3.49, unit: 'per lb', image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=300' },
    
    // Dairy
    { id: 5, name: 'Organic Milk', category: 'Dairy', price: 5.99, unit: 'per gallon', image: 'https://images.pexels.com/photos/416479/pexels-photo-416479.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 6, name: 'Farm Fresh Eggs', category: 'Dairy', price: 4.49, unit: 'per dozen', image: 'https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 7, name: 'Greek Yogurt', category: 'Dairy', price: 6.99, unit: 'per container', image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=300' },
    
    // Meat
    { id: 8, name: 'Ground Beef', category: 'Meat', price: 8.99, unit: 'per lb', image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 9, name: 'Chicken Breast', category: 'Meat', price: 7.49, unit: 'per lb', image: 'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=300' },
    
    // Bakery
    { id: 10, name: 'Artisan Bread', category: 'Bakery', price: 4.99, unit: 'per loaf', image: 'https://images.pexels.com/photos/209196/pexels-photo-209196.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 11, name: 'Fresh Croissants', category: 'Bakery', price: 7.99, unit: 'per 6-pack', image: 'https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg?auto=compress&cs=tinysrgb&w=300' },
    
    // Pantry
    { id: 12, name: 'Olive Oil', category: 'Pantry', price: 12.99, unit: 'per bottle', image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=300' },
    { id: 13, name: 'Pasta', category: 'Pantry', price: 2.99, unit: 'per box', image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=300' },
    
    // Frozen
    { id: 14, name: 'Frozen Berries', category: 'Frozen', price: 5.49, unit: 'per bag', image: 'https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=300' },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our wide selection of fresh, quality products sourced locally and from trusted suppliers.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-gray-400 h-5 w-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden group"
            >
              <div className="aspect-w-4 aspect-h-3 bg-gray-200 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-emerald-600">${product.price}</span>
                    <span className="text-sm text-gray-500 ml-1">{product.unit}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-gray-600">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCatalog;