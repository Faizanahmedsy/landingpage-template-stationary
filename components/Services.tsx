import React from 'react';

interface ServiceCardProps {
  title: string;
  color: 'blue' | 'indigo' | 'amber' | 'rose' | 'slate' | 'emerald';
  children?: React.ReactNode;
}

const ServiceCard = ({ title, color, children }: ServiceCardProps) => {
  const colorMap = {
    blue: { border: 'border-blue-100', hoverBorder: 'group-hover:border-blue-300', title: 'text-blue-600', bg: 'bg-white', shadow: 'shadow-blue-200/50' },
    indigo: { border: 'border-indigo-100', hoverBorder: 'group-hover:border-indigo-300', title: 'text-indigo-600', bg: 'bg-white', shadow: 'shadow-indigo-200/50' },
    amber: { border: 'border-amber-100', hoverBorder: 'group-hover:border-amber-300', title: 'text-amber-600', bg: 'bg-white', shadow: 'shadow-amber-200/50' },
    rose: { border: 'border-rose-100', hoverBorder: 'group-hover:border-rose-300', title: 'text-rose-600', bg: 'bg-white', shadow: 'shadow-rose-200/50' },
    slate: { border: 'border-slate-100', hoverBorder: 'group-hover:border-slate-300', title: 'text-slate-600', bg: 'bg-white', shadow: 'shadow-slate-200/50' },
    emerald: { border: 'border-emerald-100', hoverBorder: 'group-hover:border-emerald-300', title: 'text-emerald-600', bg: 'bg-white', shadow: 'shadow-emerald-200/50' },
  };

  const c = colorMap[color];

  return (
    <div className={`group ${c.bg} rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl ${c.shadow} transition-all duration-500 border-2 ${c.border} ${c.hoverBorder} relative overflow-hidden flex flex-col h-[360px]`}>
      
      {/* Title Area */}
      <h3 className={`relative z-10 text-2xl font-black ${c.title} mb-8 tracking-tight text-center group-hover:scale-105 transition-transform duration-300`}>{title}</h3>
      
      {/* Visual Story Container */}
      <div className="flex-1 w-full relative flex items-center justify-center perspective-1000">
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
        <p className="text-slate-500 text-lg font-medium">Visual stories of what we do best, just for you.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Mobile Recharge */}
        <ServiceCard title="Mobile Recharge" color="blue">
           <div className="relative w-40 h-64 bg-slate-50 rounded-[2.5rem] border-[6px] border-slate-200 shadow-xl flex flex-col items-center justify-start pt-6 overflow-hidden transform group-hover:rotate-3 transition-transform duration-500">
              <div className="w-16 h-1 bg-slate-200 rounded-full mb-6"></div>
              
              {/* Screen Content */}
              <div className="w-full px-4 space-y-4">
                 <div className="flex justify-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-500 animate-bounce">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                 </div>
                 <div className="text-center">
                    <div className="h-2 w-20 bg-slate-200 rounded-full mx-auto mb-2"></div>
                    <div className="h-4 w-24 bg-blue-100 rounded-full mx-auto"></div>
                 </div>
                 
                 {/* Floating Badges */}
                 <div className="absolute top-1/2 -right-6 bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12">
                    5G Ready
                 </div>
                 <div className="absolute bottom-12 -left-4 bg-white border border-slate-100 text-slate-600 text-[10px] font-bold px-3 py-1 rounded-full shadow-lg transform -rotate-12">
                    Instant
                 </div>
              </div>
           </div>
        </ServiceCard>

        {/* Xerox & Lamination */}
        <ServiceCard title="Xerox & Lamination" color="indigo">
           <div className="relative w-full h-full flex items-center justify-center">
              {/* Paper Stack */}
              <div className="absolute w-32 h-44 bg-white border border-slate-200 rounded-lg shadow-sm transform -rotate-6 top-8 left-12"></div>
              <div className="absolute w-32 h-44 bg-white border border-slate-200 rounded-lg shadow-sm transform -rotate-3 top-8 left-12"></div>
              
              {/* Main Document being scanned */}
              <div className="relative w-32 h-44 bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden flex flex-col p-4 space-y-3 mx-auto z-10">
                 <div className="w-12 h-12 bg-indigo-50 rounded-full mb-2"></div>
                 <div className="w-full h-2 bg-slate-100 rounded-full"></div>
                 <div className="w-3/4 h-2 bg-slate-100 rounded-full"></div>
                 <div className="w-full h-2 bg-slate-100 rounded-full"></div>
                 <div className="w-1/2 h-2 bg-slate-100 rounded-full"></div>

                 {/* Scan Line */}
                 <div className="absolute top-0 left-0 w-full h-1 bg-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.5)] animate-scan opacity-50"></div>
              </div>

              {/* Lamination Layer */}
              <div className="absolute w-36 h-48 bg-indigo-200/20 backdrop-blur-[1px] border-2 border-indigo-200/50 rounded-xl z-20 flex items-end justify-center pb-2">
                 <span className="text-[10px] font-bold text-indigo-400 bg-white/80 px-2 py-0.5 rounded-full uppercase tracking-wider">Laminated</span>
              </div>
           </div>
        </ServiceCard>

        {/* Stationary */}
        <ServiceCard title="Stationary Items" color="amber">
           <div className="relative w-full h-full flex items-center justify-center">
              {/* Notebook */}
              <div className="absolute w-32 h-40 bg-amber-50 rounded-r-xl border-l-8 border-amber-200 shadow-md transform rotate-[-5deg] left-12 top-6 flex flex-col p-4 space-y-2">
                 <div className="w-full h-[1px] bg-amber-100"></div>
                 <div className="w-full h-[1px] bg-amber-100"></div>
                 <div className="w-full h-[1px] bg-amber-100"></div>
                 <div className="w-full h-[1px] bg-amber-100"></div>
                 <div className="w-full h-[1px] bg-amber-100"></div>
              </div>

              {/* Ruler */}
              <div className="absolute w-48 h-8 bg-white border border-slate-200 rounded-lg shadow-lg transform rotate-12 bottom-10 z-10 flex items-center justify-between px-2">
                  {[...Array(10)].map((_, i) => (
                     <div key={i} className={`w-[1px] bg-slate-300 ${i % 2 === 0 ? 'h-4' : 'h-2'}`}></div>
                  ))}
              </div>

              {/* Pencil */}
              <div className="absolute w-4 h-40 bg-yellow-400 rounded-full shadow-lg transform -rotate-12 right-16 top-0 z-20 border-r-4 border-yellow-500/20">
                 <div className="absolute top-0 left-0 w-full h-8 bg-pink-300 rounded-t-full border-b border-slate-200"></div>
                 <div className="absolute bottom-0 left-0 w-full h-6 bg-amber-100 rounded-b-full overflow-hidden">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[16px] border-t-slate-800"></div>
                 </div>
              </div>
           </div>
        </ServiceCard>

        {/* Gifts & Toys */}
        <ServiceCard title="Gifts & Toys" color="rose">
           <div className="relative w-full h-full flex items-center justify-center pt-8">
              {/* Gift Box */}
              <div className="relative w-32 h-32 bg-rose-100 rounded-xl shadow-xl transform group-hover:-translate-y-2 transition-transform duration-500">
                 {/* Ribbons */}
                 <div className="absolute left-1/2 -translate-x-1/2 w-8 h-full bg-rose-400/80"></div>
                 <div className="absolute top-1/2 -translate-y-1/2 w-full h-8 bg-rose-400/80"></div>
                 
                 {/* Bow */}
                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border-4 border-rose-500 transform rotate-45 mr-[-4px]"></div>
                    <div className="w-6 h-6 bg-rose-500 rounded-full z-10"></div>
                    <div className="w-8 h-8 rounded-full border-4 border-rose-500 transform -rotate-45 ml-[-4px]"></div>
                 </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-10 right-10 w-8 h-8 bg-yellow-200 rounded-full shadow-md animate-bounce"></div>
              <div className="absolute bottom-10 left-10 w-6 h-6 bg-blue-200 rounded-full shadow-md animate-pulse"></div>
              <div className="absolute top-20 left-8 text-2xl animate-float">🧸</div>
           </div>
        </ServiceCard>

         {/* Watch Repair */}
        <ServiceCard title="Watch Repair" color="slate">
           <div className="relative w-full h-full flex items-center justify-center">
             {/* Watch Face */}
             <div className="w-40 h-40 bg-white border-[6px] border-slate-700 rounded-full shadow-2xl relative flex items-center justify-center">
                {/* Ticks */}
                <div className="absolute w-1 h-3 bg-slate-300 top-2 left-1/2 -translate-x-1/2"></div>
                <div className="absolute w-1 h-3 bg-slate-300 bottom-2 left-1/2 -translate-x-1/2"></div>
                <div className="absolute h-1 w-3 bg-slate-300 right-2 top-1/2 -translate-y-1/2"></div>
                <div className="absolute h-1 w-3 bg-slate-300 left-2 top-1/2 -translate-y-1/2"></div>
                
                {/* Hands */}
                <div className="absolute w-1 h-14 bg-slate-800 bottom-1/2 left-1/2 origin-bottom rounded-full transform rotate-45 group-hover:rotate-[225deg] transition-transform duration-[2s] ease-in-out"></div>
                <div className="absolute w-1.5 h-10 bg-slate-600 bottom-1/2 left-1/2 origin-bottom rounded-full transform -rotate-45"></div>
                <div className="absolute w-3 h-3 bg-rose-500 rounded-full z-10 shadow-sm"></div>
             </div>

             {/* Tools */}
             <div className="absolute right-8 bottom-4 w-2 h-20 bg-slate-300 transform rotate-[-30deg] rounded-full shadow-lg">
                <div className="w-full h-6 bg-slate-400 rounded-t-full"></div>
             </div>
           </div>
        </ServiceCard>

         {/* Household */}
         <ServiceCard title="Household" color="emerald">
           <div className="relative w-full h-full flex items-end justify-center pb-8 gap-4">
              {/* Bottle */}
              <div className="w-16 h-32 bg-emerald-100 rounded-t-full rounded-b-xl border-2 border-emerald-200 relative shadow-lg">
                 <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white/50 rounded-full"></div>
                 <div className="absolute bottom-4 inset-x-2 h-12 bg-white rounded-lg flex flex-col justify-center px-2 space-y-1">
                    <div className="w-full h-1 bg-emerald-100 rounded-full"></div>
                    <div className="w-2/3 h-1 bg-emerald-100 rounded-full"></div>
                 </div>
              </div>
              
              {/* Box */}
              <div className="w-24 h-20 bg-amber-50 border-2 border-amber-200 rounded-lg shadow-lg relative flex items-center justify-center">
                 <div className="w-12 h-8 border-2 border-amber-200 rounded opacity-50"></div>
                 <div className="absolute -top-3 -right-3 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md">
                    %
                 </div>
              </div>
           </div>
        </ServiceCard>

      </div>
    </section>
  );
};