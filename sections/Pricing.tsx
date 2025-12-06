import React from 'react';
import { Check } from 'lucide-react';
import Button from '../components/ui/Button';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Planos que cabem no seu bolso
          </h2>
          <p className="text-lg text-slate-600">
            Comece grátis. Evolua conforme você cresce.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Essencial */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-navy">Essencial</h3>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-bold text-navy">R$297</span>
              <span className="text-slate-500">/mês</span>
            </div>
            <p className="text-sm text-slate-500 mb-6">Ideal para começar a fidelizar.</p>
            <Button fullWidth variant="outline">Começar teste grátis</Button>
            
            <ul className="mt-8 space-y-4">
              {['Até 1.000 clientes', 'Cashback automatizado', 'E-mail + SMS', 'Dashboard básico'].map(feat => (
                <li key={feat} className="flex items-center gap-3 text-sm text-slate-600">
                  <Check className="w-5 h-5 text-green-500" /> {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Profissional - Highlighted */}
          <div className="bg-white p-8 rounded-2xl border-2 border-gold relative shadow-xl scale-105 md:transform z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm">
              MAIS POPULAR
            </div>
            <h3 className="text-xl font-bold text-navy">Profissional</h3>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-bold text-navy">R$397</span>
              <span className="text-slate-500">/mês</span>
            </div>
            <p className="text-sm text-slate-500 mb-6">Para quem quer crescer rápido.</p>
            <Button fullWidth variant="primary">Começar teste grátis</Button>
            
            <ul className="mt-8 space-y-4">
              {['Até 5.000 clientes', 'Tudo do Essencial', 'Matriz RFM', 'Curva ABC', 'Suporte Prioritário'].map(feat => (
                <li key={feat} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                  <Check className="w-5 h-5 text-gold" /> {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Premium */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-navy">Premium</h3>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-bold text-navy">R$597</span>
              <span className="text-slate-500">/mês</span>
            </div>
            <p className="text-sm text-slate-500 mb-6">Automação total e escala.</p>
            <Button fullWidth variant="outline">Falar com vendas</Button>
            
            <ul className="mt-8 space-y-4">
              {['Clientes Ilimitados', 'Tudo do Profissional', 'WhatsApp API Oficial', 'Campanhas por IA', 'Success Manager'].map(feat => (
                <li key={feat} className="flex items-center gap-3 text-sm text-slate-600">
                  <Check className="w-5 h-5 text-green-500" /> {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;