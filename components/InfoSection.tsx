import React from 'react';
import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';

export const InfoSection: React.FC = () => {
  return (
    <section id="contact" className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-sm border border-slate-100 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-lumina-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
             <h2 className="text-3xl font-extrabold text-lumina-dark mb-4">Visit Us Today</h2>
             <p className="text-slate-500 font-medium">We are conveniently located to serve all your daily needs.</p>
          </div>

          <div className="space-y-6">
            <InfoItem 
              icon={<MapPin size={24} />} 
              label="Location" 
              value="Shop No. 12, Market Complex, Main Road, City Center"
            />
            <InfoItem 
              icon={<Clock size={24} />} 
              label="Opening Hours" 
              value="Mon - Sat: 9:00 AM - 9:00 PM"
              sub="Sunday Closed"
            />
            <InfoItem 
              icon={<Phone size={24} />} 
              label="Call Us" 
              value="+91 98765 43210"
              action
            />
          </div>

          <div className="pt-4">
            <a 
              href="https://wa.me/1234567890" 
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#20bd5a] transition-colors shadow-lg shadow-green-500/20 w-full justify-center sm:w-auto"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Simulated Map/Visual */}
        <div className="relative h-full min-h-[300px] bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 flex items-center justify-center group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577086664693-894553052526?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"></div>
          <div className="relative bg-white/90 backdrop-blur px-6 py-4 rounded-2xl shadow-lg text-center transform group-hover:scale-105 transition-transform">
             <div className="w-12 h-12 bg-lumina-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-rose-500/30">
               <MapPin size={24} fill="currentColor" />
             </div>
             <p className="font-bold text-slate-800">Puthawala Stores</p>
             <p className="text-xs text-slate-500 font-bold mt-1 uppercase tracking-wide">Here for you</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ icon, label, value, sub, action }: { icon: React.ReactNode, label: string, value: string, sub?: string, action?: boolean }) => (
  <div className="flex gap-4 items-start">
    <div className="w-12 h-12 bg-slate-50 text-slate-600 rounded-xl flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">{label}</p>
      <p className={`text-lg font-bold ${action ? 'text-lumina-primary' : 'text-slate-800'}`}>{value}</p>
      {sub && <p className="text-sm text-slate-500 mt-1">{sub}</p>}
    </div>
  </div>
);