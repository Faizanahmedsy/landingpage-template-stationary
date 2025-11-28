import React from 'react';
import { Smartphone, Gift, PenTool, Clock, ShoppingBag, ChevronRight, Battery, Signal, Printer, Ruler, Layers, Star, Home, Box } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  color: 'blue' | 'indigo' | 'amber' | 'rose' | 'slate' | 'emerald';
  children?: React.ReactNode;
}

const ServiceCard = ({ title, icon, color, children }: ServiceCardProps) => {
  const colorMap = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-500', border: 'border-blue-100', dot: 'bg-blue-500' },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-500', border: 'border-indigo-100', dot: 'bg-indigo-500' },
    amber: { bg: 'bg-amber-50', text: 'text-amber-500', border: 'border-amber-100', dot: 'bg-amber-500' },
    rose: { bg: 'bg-rose-50', text: 'text-rose-500', border: 'border-rose-100', dot: 'bg-rose-500' },
    slate: { bg: 'bg-slate-100', text: 'text-slate-600', border: 'border-slate-200', dot: 'bg-slate-600' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-500', border: 'border-emerald-100', dot: 'bg-emerald-500' },
  };

  const c = colorMap[color];

  return (
    <div className="group bg-white rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 border border-slate-100 relative overflow-hidden flex flex-col h-full hover:-translate-y-1">
      {/* Decorative Background Blob */}
      <div className={`absolute -right-10 -top-10 w-40 h-40 ${c.bg} rounded-full opacity-50 blur-3xl group-hover:scale-150 transition-transform duration-700`}></div>

      <div className="relative z-10 mb-8 flex items-center justify-between">
        <div className={`w-14 h-14 ${c.bg} ${c.text} rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
          {icon}
        </div>
        <div className={`w-8 h-8 rounded-full border-2 ${c.border} ${c.bg} ${c.text} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
           <ChevronRight size={16} strokeWidth={3} />
        </div>
      </div>

      <h3 className="relative z-10 text-2xl font-black text-slate-800 mb-6 tracking-tight leading-tight">{title}</h3>
      
      {/* Skeleton UI Container */}
      <div className="relative z-10 mt-auto bg-slate-50/80 backdrop-blur-sm rounded-2xl p-5 border border-slate-100 group-hover:border-slate-200 group-hover:bg-white transition-colors duration-300">
         {children}
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-lumina-dark tracking-tight">Everything under one roof.</h2>
        <p className="text-slate-500 text-lg font-medium">Professional services and quality products, curated for your daily needs.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Mobile Recharge */}
        <ServiceCard 
          title="Mobile Recharge" 
          icon={<Smartphone size={28} strokeWidth={2.5} />}
          color="blue"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
               <div className="h-2 w-16 bg-slate-200 rounded-full"></div>
               <Signal size={14} className="text-blue-400" />
            </div>
            <div className="flex gap-2 items-baseline">
               <span className="text-3xl font-black text-slate-800 tracking-tighter">5G</span>
               <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full mb-1">Active</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                 <span>Daily Limit</span>
                 <span>1.2 GB</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                 <div className="h-full w-3/4 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </ServiceCard>

        {/* Xerox & Lamination */}
        <ServiceCard 
          title="Xerox & Lamination" 
          icon={<Printer size={28} strokeWidth={2.5} />}
          color="indigo"
        >
           <div className="space-y-4 relative">
             <div className="flex gap-4">
               {/* Document Icon */}
               <div className="w-12 h-14 bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col justify-center items-center gap-1.5 p-1 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-3 h-3 bg-slate-100 border-b border-l border-slate-200 rounded-bl-lg"></div>
                  <div className="w-8 h-1 bg-slate-100 rounded-full"></div>
                  <div className="w-8 h-1 bg-slate-100 rounded-full"></div>
                  <div className="w-5 h-1 bg-slate-100 rounded-full self-start ml-1"></div>
               </div>
               
               <div className="flex-1 space-y-2 py-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                    <div className="h-2 w-20 bg-slate-200 rounded-full"></div>
                  </div>
                  <div className="h-2 w-12 bg-slate-100 rounded-full"></div>
               </div>
             </div>
             
             {/* Lamination Badge */}
             <div className="bg-indigo-50 rounded-xl p-2.5 border border-indigo-100 flex items-center gap-2.5">
                <div className="p-1 bg-white rounded-md shadow-sm">
                  <Layers size={14} className="text-indigo-500" />
                </div>
                <div className="flex-1">
                   <div className="h-1.5 w-16 bg-indigo-200 rounded-full mb-1"></div>
                   <div className="h-1.5 w-10 bg-indigo-100 rounded-full"></div>
                </div>
             </div>
           </div>
        </ServiceCard>

        {/* Stationary */}
        <ServiceCard 
          title="Stationary Items" 
          icon={<PenTool size={28} strokeWidth={2.5} />}
          color="amber"
        >
          <div className="space-y-4">
            <div className="flex gap-[-8px]">
              {/* Overlapping Avatars/Items */}
              <div className="w-10 h-10 rounded-full bg-amber-100 border-2 border-white shadow-sm flex items-center justify-center relative z-10">
                <div className="w-1.5 h-5 bg-amber-400 rounded-full transform rotate-45"></div>
              </div>
              <div className="w-10 h-10 rounded-full bg-rose-100 border-2 border-white shadow-sm -ml-3 flex items-center justify-center relative z-20">
                 <div className="w-4 h-4 bg-rose-400 rounded-sm"></div>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white shadow-sm -ml-3 flex items-center justify-center relative z-30">
                 <Ruler size={16} className="text-blue-500" />
              </div>
            </div>
            
            <div className="space-y-2">
               <div className="flex items-center gap-2">
                 <div className="h-2 w-4 bg-amber-200 rounded-full"></div>
                 <div className="h-2 w-full bg-slate-100 rounded-full"></div>
               </div>
               <div className="flex items-center gap-2">
                 <div className="h-2 w-4 bg-rose-200 rounded-full"></div>
                 <div className="h-2 w-2/3 bg-slate-100 rounded-full"></div>
               </div>
               <div className="flex items-center gap-2">
                 <div className="h-2 w-4 bg-blue-200 rounded-full"></div>
                 <div className="h-2 w-1/2 bg-slate-100 rounded-full"></div>
               </div>
            </div>
          </div>
        </ServiceCard>

        {/* Gifts & Toys */}
        <ServiceCard 
          title="Gifts & Toys" 
          icon={<Gift size={28} strokeWidth={2.5} />}
          color="rose"
        >
          <div className="relative h-28 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-rose-50 to-white border border-rose-100">
             <div className="absolute top-3 left-3">
               <Star size={12} className="text-rose-300" />
             </div>
             <div className="absolute bottom-3 right-3">
               <Star size={16} className="text-rose-400 fill-rose-100" />
             </div>
             <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-rose-400 rounded-full opacity-50"></div>
             
             {/* 3D Box Representation */}
             <div className="bg-white p-3.5 rounded-2xl shadow-xl shadow-rose-200/50 transform -rotate-6 transition-transform group-hover:rotate-0">
                <Box size={32} className="text-rose-500" strokeWidth={2} />
             </div>
             
             <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
             <div className="absolute bottom-1.5 inset-x-0 text-center">
                <p className="text-[10px] font-black text-rose-400 uppercase tracking-widest">Surprise</p>
             </div>
          </div>
        </ServiceCard>

         {/* Watch Repair */}
        <ServiceCard 
          title="Watch Repair" 
          icon={<Clock size={28} strokeWidth={2.5} />}
          color="slate"
        >
           <div className="space-y-4">
             <div className="flex justify-between items-center pb-3 border-b border-dashed border-slate-200">
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Service ID #802</span>
             </div>
             <div className="flex items-center gap-4">
               {/* Watch Face UI */}
               <div className="relative w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-white shadow-lg">
                  <div className="absolute top-1 left-1/2 w-0.5 h-1.5 bg-slate-500 -translate-x-1/2"></div>
                  <div className="absolute bottom-1 left-1/2 w-0.5 h-1.5 bg-slate-500 -translate-x-1/2"></div>
                  <div className="absolute right-1 top-1/2 h-0.5 w-1.5 bg-slate-500 -translate-y-1/2"></div>
                  <div className="absolute left-1 top-1/2 h-0.5 w-1.5 bg-slate-500 -translate-y-1/2"></div>
                  
                  {/* Hands */}
                  <div className="w-0.5 h-3.5 bg-white absolute bottom-1/2 left-1/2 origin-bottom transform rotate-45 rounded-full"></div>
                  <div className="w-0.5 h-2.5 bg-slate-300 absolute bottom-1/2 left-1/2 origin-bottom transform -rotate-12 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-rose-500 rounded-full absolute z-10"></div>
               </div>
               
               <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-md">
                     <Battery size={10} strokeWidth={3} /> Done
                  </div>
                  <div className="h-1.5 w-16 bg-slate-200 rounded-full"></div>
               </div>
             </div>
           </div>
        </ServiceCard>

         {/* Household */}
         <ServiceCard 
          title="Household" 
          icon={<ShoppingBag size={28} strokeWidth={2.5} />}
          color="emerald"
        >
          <div className="grid grid-cols-2 gap-3">
             {/* Item 1 */}
             <div className="bg-emerald-50 rounded-xl p-2 h-16 flex flex-col justify-between border border-emerald-100/50">
                <div className="w-5 h-5 bg-emerald-200 rounded-full opacity-50 flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                </div>
                <div className="w-8 h-1.5 bg-emerald-300/50 rounded-full"></div>
             </div>
             
             {/* Item 2 */}
             <div className="bg-slate-50 rounded-xl p-2 h-16 flex flex-col justify-between border border-slate-100">
                <div className="w-6 h-6 rounded border-2 border-slate-200"></div>
                <div className="w-10 h-1.5 bg-slate-200 rounded-full"></div>
             </div>
             
             {/* Total Bar */}
             <div className="col-span-2 bg-white border border-slate-100 rounded-xl p-2.5 flex items-center gap-3 shadow-sm">
                <Home size={14} className="text-emerald-500" />
                <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                   <div className="w-2/3 h-full bg-emerald-400 rounded-full"></div>
                </div>
             </div>
          </div>
        </ServiceCard>

      </div>
    </section>
  );
};
