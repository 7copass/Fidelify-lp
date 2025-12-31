import React from 'react';
import { Calendar } from 'lucide-react';
import Button from '../components/ui/Button';
import { useScheduleMeeting } from '../contexts/ScheduleMeetingContext';

const CallToAction: React.FC = () => {
  const { openModal } = useScheduleMeeting();

  return (
    <section className="py-24 bg-navy text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Comece a fidelizar hoje mesmo
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Agende uma reunião com nossos especialistas e descubra como aumentar o seu faturamento.
        </p>

        <div className="flex flex-col items-center">
          <Button
            className="bg-gold hover:bg-amber-500 text-white text-lg h-14 px-10 shadow-lg shadow-gold/20 gap-2"
            onClick={openModal}
          >
            <Calendar size={20} />
            Agendar uma Reunião
          </Button>

          <p className="mt-6 text-sm text-slate-400">
            Junte-se a <span className="text-white font-bold">+100 lojistas</span> que já estão faturando mais
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;