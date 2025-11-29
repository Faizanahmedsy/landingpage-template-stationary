import React from 'react';
import { ArrowRight, CheckCircle2, Printer, Smartphone, Watch } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Content */}
        <div className="space-y-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-lumina-primary text-sm font-bold shadow-sm">
             <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lumina-primary"></span>
            </span>
            Shop Open: 9:00 AM - 9:00 PM
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-lumina-dark leading-[1.1]">
            Your Daily <br/>
            <span className="text-lumina-primary">Essentials.</span> <br/>
            Sorted.
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
            From mobile recharges and urgent xerox copies to thoughtful gifts and expert watch repair. Demo Puthawala Stores is your friendly neighborhood one-stop shop.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-lumina-primary rounded-full hover:bg-rose-600 transition-all shadow-lg hover:shadow-rose-500/30"
            >
              Visit Store
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all hover:border-slate-300"
            >
              View Services <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Content - Conceptual "Receipt" Card */}
        <div className="relative mt-12 lg:mt-0 flex justify-center lg:justify-end perspective-1000">
          
          {/* Decorative Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100/50 via-purple-100/30 to-rose-100/40 rounded-full blur-3xl -z-10"></div>

          {/* The "Receipt" Card - Mimicking the Lumina Med Card Style */}
          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-slate-100 transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
            {/* Header */}
            <div className="border-b-2 border-dashed border-slate-100 pb-6 mb-6">
              <h3 className="text-2xl font-black text-slate-800 uppercase tracking-widest text-center">Demo Puthawala Stores</h3>
              <p className="text-center text-xs font-bold text-slate-400 mt-1 tracking-widest uppercase">Official Service Receipt</p>
            </div>

            {/* Line Items */}
            <div className="space-y-4 mb-8">
              <ReceiptItem 
                icon={<Smartphone size={18} className="text-blue-500" />}
                label="Mobile Recharge"
                sub="Plan activated"
                price="Done"
              />
              <ReceiptItem 
                icon={<Printer size={18} className="text-indigo-500" />}
                label="Urgent Xerox"
                sub="10 Pages • Color"
                price="Ready"
              />
              <ReceiptItem 
                icon={<Watch size={18} className="text-amber-500" />}
                label="Watch Battery"
                sub="Replacement"
                price="Fixed"
              />
            </div>

            {/* Total / Stamp Area */}
            <div className="relative mt-8 pt-6 border-t-2 border-slate-900">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Customer Status</p>
                  <p className="text-3xl font-black text-slate-900 mt-1">HAPPY</p>
                </div>
                
                {/* The "Stamp" */}
                <div className="transform rotate-[-12deg] border-4 border-green-500 text-green-500 px-4 py-1 rounded-lg text-xl font-black uppercase opacity-80 mask-stamp">
                  COMPLETE
                </div>
              </div>
            </div>

            {/* Bottom jagged edge simulation (CSS trick) */}
            <div className="absolute -bottom-2 left-0 right-0 h-4 bg-transparent bg-[radial-gradient(circle,transparent_50%,#fff_50%)] bg-[length:16px_16px] rotate-180"></div>
          </div>

          {/* Floating Bubble */}
           <div className="absolute -right-4 top-20 bg-white p-4 rounded-2xl shadow-xl animate-bounce duration-[3000ms]">
              <div className="flex items-center gap-3">
                 <div className="h-10 w-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-500 font-bold text-xl">
                   ♥
                 </div>
                 <div>
                   <p className="text-xs text-slate-400 font-bold uppercase">Community</p>
                   <p className="text-sm font-bold text-slate-800">Trusted by Locals</p>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
};

const ReceiptItem = ({ icon, label, sub, price }: { icon: React.ReactNode, label: string, sub: string, price: string }) => (
  <div className="flex items-center justify-between group cursor-default">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
        {icon}
      </div>
      <div>
        <p className="font-bold text-slate-700">{label}</p>
        <p className="text-xs text-slate-400 font-medium">{sub}</p>
      </div>
    </div>
    <div className="text-right">
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-50 text-green-600">
        <CheckCircle2 size={10} className="mr-1" /> {price}
      </span>
    </div>
  </div>
);