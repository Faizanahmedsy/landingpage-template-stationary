import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-100 bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="font-black text-xl text-lumina-dark mb-4">Demo Puthawala Stores</p>
        <div className="flex justify-center gap-6 mb-8 text-sm font-medium text-slate-500">
          <a href="#" className="hover:text-lumina-primary">Services</a>
          <a href="#" className="hover:text-lumina-primary">Privacy</a>
          <a href="#" className="hover:text-lumina-primary">Contact</a>
        </div>
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Demo Puthawala Stores. All rights reserved.</p>
      </div>
    </footer>
  );
};