import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ImageGallery from './components/ImageGallery';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <ImageGallery />
      <OrderForm />
      <Footer />
      <AIChat />
    </div>
  );
};

export default App;