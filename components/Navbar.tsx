import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-lumina-bg/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-lumina-dark rounded-xl flex items-center justify-center text-white">
              <ShoppingBag size={20} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold tracking-tight text-lumina-dark">Lumina Store</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-lumina-dark transition-colors">Services</a>
            <a href="#store" className="text-sm font-medium text-slate-600 hover:text-lumina-dark transition-colors">Stationary & Gifts</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-lumina-dark transition-colors">Contact</a>
            
            <a 
              href="https://wa.me/1234567890" 
              className="bg-lumina-dark text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              WhatsApp Us <Phone size={14} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-lumina-dark p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#services" className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Services</a>
            <a href="#store" className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Items</a>
            <a href="#contact" className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Contact</a>
            <a href="https://wa.me/1234567890" className="block px-3 py-3 rounded-md text-base font-medium text-lumina-primary font-bold">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};