import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Users } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Demo Banner */}
      <div className="bg-slate-900 text-white text-[11px] uppercase font-bold py-2 text-center tracking-wider w-full">
        This is for demo purpose only by Faizan
      </div>

      <div className="bg-lumina-bg/80 backdrop-blur-md border-b border-slate-200/50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-lumina-dark rounded-xl flex items-center justify-center text-white">
                <ShoppingBag size={20} strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold tracking-tight text-lumina-dark">Demo Puthawala Stores</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center">
              <a 
                href="https://wa.me/1234567890" 
                className="bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#20bd5a] transition-all flex items-center gap-2 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:-translate-y-0.5"
              >
                <Users size={18} strokeWidth={2.5} />
                Join our WhatsApp Community
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
            <div className="p-4">
              <a 
                href="https://wa.me/1234567890" 
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white px-4 py-4 rounded-xl text-base font-bold shadow-md active:scale-95 transition-transform"
              >
                <Users size={20} strokeWidth={2.5} />
                Join our WhatsApp Community
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};