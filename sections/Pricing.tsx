import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Mensal',
      price: '147',
      period: '/mês',
      description: 'Ideal para lojas que querem testar o poder de um programa de fidelidade automatizado.',
      features: [
        'Cashback automatizado via WhatsApp',
        'Lembretes para clientes não retornarem à loja do concorrente',
        'Pesquisa de NPS e Google Review automatizada',
        'Relatórios de desempenho e ROI',
        'Suporte dedicado'
      ],
      link: 'https://buy.stripe.com/6oUcN45jSdF6coP8xTf3a05',
      highlighted: false,
    },
    {
      name: 'Trimestral',
      price: '297',
      originalPrice: '441',
      period: '/trimestre',
      description: 'A escolha mais inteligente. Economize mais de 30% e solidifique sua base de clientes fiéis.',
      features: [
        'Tudo do plano Mensal',
        'Preço fixo com +30% de desconto',
        'Acesso prioritário a novas funcionalidades',
        'Consultoria estratégica a cada trimestre',
        'Maior compromisso e mais resultados de longo prazo'
      ],
      link: 'https://buy.stripe.com/9B69AS13CeJagF5bK5f3a06',
      highlighted: true,
      badge: 'MAIS POPULAR'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 mb-6">
              <Sparkles size={16} />
              <span className="text-sm font-medium">Planos Flexíveis</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
              Investimento que <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">se paga</span> desde o primeiro mês
            </h2>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600">
              Escolha o plano ideal e comece a ver seus clientes voltarem e comprarem novamente na sua loja.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 bg-white border-2 shadow-xl ${
                plan.highlighted 
                  ? 'border-blue-500 shadow-blue-500/10 md:-translate-y-4' 
                  : 'border-slate-100 text-slate-900 mt-4'
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-navy mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm h-10">{plan.description}</p>
              </div>

              <div className="mb-8 flex flex-col">
                {plan.originalPrice && (
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl text-slate-400 font-bold line-through decoration-red-500/50 decoration-2">
                      De R$ {plan.originalPrice}
                    </span>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Você economiza R$ 144
                    </span>
                  </div>
                )}
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-navy">
                    R${plan.price}
                  </span>
                  <span className="text-lg text-slate-500 font-medium">{plan.period}</span>
                </div>
              </div>

              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-slate-100 hover:bg-slate-200 text-navy'
                }`}
              >
                Assinar Agora
                <ArrowRight size={20} />
              </a>

              <div className="mt-8 space-y-4">
                <p className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
                  O que está incluso:
                </p>
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className={`w-5 h-5 shrink-0 ${plan.highlighted ? 'text-blue-500' : 'text-slate-400'}`} />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Pricing;