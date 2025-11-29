import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { InfoSection } from './components/InfoSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-lumina-primary selection:text-white overflow-x-hidden">
      <Navbar />
      {/* Increased top padding to account for the demo banner in navbar */}
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
        <Hero />
        <Services />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;