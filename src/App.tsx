import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import ProductCatalog from './components/ProductCatalog';
import StoreHours from './components/StoreHours';
import Contact from './components/Contact';
import WeeklyDeals from './components/WeeklyDeals';
import Footer from './components/Footer';
import StoreLocationPage from './components/StoreLocationPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductCatalog />} />
            <Route path="/hours" element={<StoreHours />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/deals" element={<WeeklyDeals />} />
            <Route path="/location" element={<StoreLocationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;