import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-navy pr-8">{question}</span>
        <span className={`flex-shrink-0 text-gold transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          {isOpen ? <Minus /> : <Plus />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-slate-600 pb-6 pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Posso contratar apenas o cashback ou a automação de forma separada?",
      a: "Nossa plataforma foi desenhada para funcionar de forma integrada. O maior resultado vem quando todas as ferramentas trabalham juntas — cashback, CRM e automação. Por isso, oferecemos sempre a solução completa."
    },
    {
      q: "Qual o investimento para usar a Fidelify?",
      a: "Trabalhamos com planos personalizados de acordo com o tamanho e necessidade do seu negócio. A partir de menos de R$ 7 por dia você já tem acesso a todas as funcionalidades. Agende uma conversa para descobrir o melhor plano para você."
    },
    {
      q: "Consigo configurar cashback diferente por produto ou categoria?",
      a: "Com certeza! Você tem total liberdade para definir percentuais de cashback por produto, categoria ou até criar campanhas sazonais para datas especiais. Nossa equipe te ajuda a encontrar a configuração ideal para maximizar seus resultados."
    },
    {
      q: "Como funciona a regra de resgate do cashback?",
      a: "Você tem autonomia para definir o valor mínimo de compra para liberação do saldo acumulado. Nosso time de especialistas orienta você a criar políticas que protejam sua margem e incentivem compras maiores."
    },
    {
      q: "Vocês oferecem período de teste gratuito?",
      a: "Entendemos que fidelização é um processo que leva tempo para mostrar resultados reais. Por isso, ao invés de um teste curto, oferecemos uma demonstração personalizada onde mostramos na prática como a Fidelify pode funcionar especificamente para o seu negócio."
    },
    {
      q: "As mensagens automáticas respondem os clientes?",
      a: "A automação cuida do disparo das mensagens de forma inteligente e no momento certo. Quando um cliente responde, sua equipe assume o atendimento — o que gera mais oportunidades de venda e fortalece o relacionamento."
    },
    {
      q: "Em quanto tempo consigo começar a usar o sistema?",
      a: "Logo após a contratação você já recebe acesso à plataforma. Em até 48 horas úteis, nosso time de Sucesso do Cliente entra em contato para fazer todo o onboarding e os treinamentos necessários."
    },
    {
      q: "O cashback não utilizado tem validade?",
      a: "Sim, você define o prazo de validade do saldo. Após esse período, o cashback expira automaticamente e não pode mais ser resgatado pelo cliente."
    },
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
          Perguntas frequentes
        </h2>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 px-8">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;