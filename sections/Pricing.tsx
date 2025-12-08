import React from 'react';
import { Check } from 'lucide-react';
import Button from '../components/ui/Button';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Planos Disponíveis
          </h2>
          <p className="text-lg text-slate-600">
            Escolha o plano ideal para o seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          {/* Plano Mensal */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-navy">Plano Mensal</h3>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-bold text-navy">R$397</span>
              <span className="text-slate-500">/mês</span>
            </div>
            <p className="text-sm text-slate-500 mb-6">Cobrança mensal de R$ 397,00</p>
            <a href="https://buy.stripe.com/bJe4gybIg8kM0G79BXf3a00" target="_blank" rel="noopener noreferrer">
              <Button fullWidth variant="outline">Assinar Agora</Button>
            </a>

            <ul className="mt-8 space-y-4">
              {['Cashback automatizado', 'E-mail + SMS + WhatsApp', 'Dashboard completo', 'Matriz RFM', 'Curva ABC', 'Suporte Prioritário'].map(feat => (
                <li key={feat} className="flex items-center gap-3 text-sm text-slate-600">
                  <Check className="w-5 h-5 text-green-500" /> {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Plano Trimestral - Highlighted */}
          <div className="bg-white p-8 rounded-2xl border-2 border-gold relative shadow-xl scale-105 md:transform z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm">
              MAIS POPULAR
            </div>
            <h3 className="text-xl font-bold text-navy">Plano Trimestral</h3>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-bold text-navy">R$297</span>
              <span className="text-slate-500">/mês</span>
            </div>
            <p className="text-sm text-slate-500 mb-6">Cobrança trimestral de R$ 891,00</p>
            <a href="https://buy.stripe.com/bJefZg9A8dF6dsTg0lf3a04" target="_blank" rel="noopener noreferrer">
              <Button fullWidth variant="primary">Assinar Agora</Button>
            </a>

            <ul className="mt-8 space-y-4">
              {['Cashback automatizado', 'E-mail + SMS + WhatsApp', 'Dashboard completo', 'Matriz RFM', 'Curva ABC', 'Suporte Prioritário', 'Economia de R$ 300/trimestre'].map(feat => (
                <li key={feat} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                  <Check className="w-5 h-5 text-gold" /> {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600">
            <strong>Planos anuais:</strong> consultar valores diretamente na plataforma
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;