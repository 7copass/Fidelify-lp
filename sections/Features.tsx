import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, MessageSquare, BarChart3, Users, TrendingUp, ShieldCheck } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Wallet,
      title: "Cashback Inteligente",
      desc: "Configure regras de cashback que protegem sua margem de lucro automaticamente."
    },
    {
      icon: MessageSquare,
      title: "Notificações Automáticas",
      desc: "Envio de E-mail e WhatsApp sem intervenção manual para lembrar o cliente de voltar."
    },
    {
      icon: BarChart3,
      title: "Dashboard em Tempo Real",
      desc: "Acompanhe vendas, retenção e ticket médio com gráficos fáceis de entender."
    },
    {
      icon: Users,
      title: "Segmentação RFM",
      desc: "Saiba automaticamente quem são seus clientes VIP, Ativos e em Risco."
    },
    {
      icon: TrendingUp,
      title: "Curva ABC",
      desc: "Descubra quais produtos trazem mais retorno para o seu negócio."
    },
    {
      icon: ShieldCheck,
      title: "100% Seguro",
      desc: "Dados criptografados e totalmente adequados à LGPD brasileira."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Tudo que você precisa pra fidelizar
          </h2>
          <p className="text-lg text-slate-600">
            Ferramentas poderosas simplificadas para o pequeno e médio varejo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ translateY: -5 }}
              className="p-6 rounded-2xl border border-slate-100 hover:border-gold/30 hover:shadow-lg transition-all bg-white group"
            >
              <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                <feature.icon className="text-navy group-hover:text-gold w-6 h-6 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;