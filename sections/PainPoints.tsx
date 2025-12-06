import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, UserX, HelpCircle } from 'lucide-react';

const PainPoints: React.FC = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Investe em tráfego, mas o cliente não volta",
      desc: "Você gasta R$2.000/mês em anúncios para trazer gente nova, mas eles compram uma vez e somem."
    },
    {
      icon: UserX,
      title: "Perde vendas para a concorrência",
      desc: "Seu concorrente tem programa de pontos ou clube de vantagens, e você está ficando para trás."
    },
    {
      icon: HelpCircle,
      title: "Não conhece seus melhores clientes",
      desc: "Você não sabe quem são os 20% dos clientes que trazem 80% do seu faturamento."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Cliente compra uma vez e nunca mais volta?
          </h2>
          <p className="text-lg text-slate-600">
            O varejo tradicional está sangrando margem tentando atrair novos clientes enquanto ignora os atuais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <problem.icon className="text-red-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{problem.title}</h3>
              <p className="text-slate-600 leading-relaxed">{problem.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;