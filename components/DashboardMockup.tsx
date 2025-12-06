import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Bell } from 'lucide-react';

const DashboardMockup: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full max-w-2xl mx-auto"
      style={{ perspective: '1000px' }}
    >
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden transform md:rotate-y-[-5deg] md:rotate-x-[5deg]">
        {/* Header */}
        <div className="h-12 border-b border-slate-100 flex items-center justify-between px-4 bg-slate-50/50">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="flex gap-4 items-center">
             <div className="h-2 w-20 bg-slate-200 rounded-full"></div>
             <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center">
                <Bell size={12} className="text-slate-400"/>
             </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex h-[380px]">
          {/* Sidebar */}
          <div className="w-48 border-r border-slate-100 p-4 hidden sm:block bg-slate-50/30">
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`h-8 rounded-md w-full ${i === 1 ? 'bg-navy/10' : 'bg-transparent'} flex items-center px-2`}>
                   <div className={`w-4 h-4 rounded ${i === 1 ? 'bg-navy' : 'bg-slate-300'} mr-2`}></div>
                   <div className={`h-2 w-16 rounded-full ${i === 1 ? 'bg-navy/50' : 'bg-slate-200'}`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 bg-white">
            <div className="flex justify-between items-center mb-6">
               <div>
                  <div className="h-4 w-32 bg-slate-800 rounded mb-2"></div>
                  <div className="h-3 w-20 bg-slate-300 rounded"></div>
               </div>
               <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                 +28% este mês
               </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
               <div className="p-4 rounded-lg border border-slate-100 bg-slate-50">
                  <div className="flex justify-between items-start mb-2">
                     <DollarSign className="text-gold w-5 h-5" />
                     <span className="text-xs text-green-600 font-bold">+12%</span>
                  </div>
                  <div className="text-xl font-bold text-navy">R$ 42.500</div>
                  <div className="text-xs text-slate-400">Vendas fidelizadas</div>
               </div>
               <div className="p-4 rounded-lg border border-slate-100 bg-slate-50">
                  <div className="flex justify-between items-start mb-2">
                     <Users className="text-navy w-5 h-5" />
                     <span className="text-xs text-green-600 font-bold">+5%</span>
                  </div>
                  <div className="text-xl font-bold text-navy">854</div>
                  <div className="text-xs text-slate-400">Clientes ativos</div>
               </div>
            </div>

            {/* Fake Chart */}
            <div className="h-32 w-full flex items-end justify-between gap-2 px-2">
               {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                    className={`w-full rounded-t-sm ${i === 5 ? 'bg-gold' : 'bg-slate-100'}`}
                  ></motion.div>
               ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Badge */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="absolute -right-4 top-20 bg-white p-3 rounded-lg shadow-xl border border-slate-100 flex items-center gap-3 z-10"
      >
         <div className="bg-green-100 p-2 rounded-full">
            <TrendingUp size={20} className="text-green-600" />
         </div>
         <div>
            <div className="text-sm font-bold text-navy">Retenção Up!</div>
            <div className="text-xs text-slate-500">2.4x mais retorno</div>
         </div>
      </motion.div>
    </motion.div>
  );
};

export default DashboardMockup;