import React from 'react';
import { Store, ShoppingBag, Coffee, Pill } from 'lucide-react';

const SocialProof: React.FC = () => {
  const stats = [
    { label: "+100 Lojistas", value: "Trust" },
    { label: "25% Mais vendas", value: "Growth" },
    { label: "Setup em 5min", value: "Speed" },
  ];

  return (
    <section className="py-10 bg-[#F9FAFB] border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 opacity-80">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider text-center md:text-left">
            Confiado por varejistas em todo o Brasil
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
             {/* Fake Logos using Icons and Text */}
             <div className="flex items-center gap-2 text-slate-600 font-bold text-lg">
                <Store className="text-navy"/> MercadoEx
             </div>
             <div className="flex items-center gap-2 text-slate-600 font-bold text-lg">
                <Pill className="text-navy"/> FarmaVida
             </div>
             <div className="flex items-center gap-2 text-slate-600 font-bold text-lg">
                <Coffee className="text-navy"/> CaféCentral
             </div>
             <div className="flex items-center gap-2 text-slate-600 font-bold text-lg">
                <ShoppingBag className="text-navy"/> ModasBoutique
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;