import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, BellRing, Repeat } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Cliente compra e ganha cashback",
      desc: "No momento do pagamento, você digita o celular do cliente. O sistema calcula o cashback automaticamente.",
      icon: ShoppingCart
    },
    {
      id: 2,
      title: "Notificação automática",
      desc: "Seu cliente recebe uma notificação via WhatsApp na hora avisando quanto ganhou de saldo para a próxima compra.",
      icon: BellRing
    },
    {
      id: 3,
      title: "Retorno garantido",
      desc: "Para usar o saldo, o cliente precisa voltar e gastar pelo menos 2x o valor do cashback. Você garante a margem.",
      icon: Repeat
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Fidelização automatizada em 3 passos
          </h2>
          <p className="text-lg text-slate-600">
            Simples para você, viciante para o seu cliente.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 md:-ml-[1px]"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Number Bubble */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-8 h-8 rounded-full bg-navy border-4 border-slate-50 z-10 flex items-center justify-center text-gold font-bold text-sm md:-ml-4">
                  {step.id}
                </div>

                {/* Content Side */}
                <div className="ml-12 md:ml-0 md:w-1/2 pl-0 md:px-12 text-left md:text-right">
                  <div className={`${index % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                </div>

                {/* Visual Side */}
                <div className="ml-12 md:ml-0 md:w-1/2 pl-0 md:px-12 w-full">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <step.icon className="text-gold w-6 h-6" />
                    </div>
                    <div className="h-2 w-2/3 bg-slate-100 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;