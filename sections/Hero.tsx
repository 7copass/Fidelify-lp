import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import DashboardMockup from '../components/DashboardMockup';
import { CheckCircle, PlayCircle, Calendar } from 'lucide-react';
import { useScheduleMeeting } from '../contexts/ScheduleMeetingContext';

const Hero: React.FC = () => {
  const { openModal } = useScheduleMeeting();

  return (
    <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-white">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
              Plataforma #1 para Varejo
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.15] mb-6 tracking-tight">
              Fidelize seus clientes e fature de <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-blue-600">20% a 30% a mais</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
              Sem investir em tráfego pago. Cashback automatizado que transforma compradores eventuais em clientes recorrentes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
              <Button size="lg" className="w-full sm:w-auto shadow-xl shadow-blue-900/10 gap-2" onClick={openModal}>
                <Calendar size={20} />
                Agendar uma Reunião
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                <PlayCircle size={20} />
                Ver demonstração
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
              <CheckCircle size={16} className="text-green-500" />
              <span>Fácil implementação</span>
              <span className="mx-2 text-slate-300">|</span>
              <CheckCircle size={16} className="text-green-500" />
              <span>Suporte dedicado</span>
            </div>
          </motion.div>

          {/* Hero Image / Mockup */}
          <div className="lg:col-span-5 w-full">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;