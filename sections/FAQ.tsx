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
    { q: "Como funciona o período de teste?", a: "Você tem 7 dias de acesso total a todas as funcionalidades do plano escolhido. Não pedimos cartão de crédito no cadastro." },
    { q: "Preciso de equipamento especial?", a: "Não. O Fidelify funciona em qualquer computador, tablet ou celular com acesso à internet. Sem instalações complicadas." },
    { q: "Quanto tempo leva pra implementar?", a: "Em média, 5 minutos. Basta cadastrar sua loja, configurar a regra de cashback e começar a digitar o celular dos clientes." },
    { q: "Como cancelo se não gostar?", a: "O cancelamento é feito com um clique no painel, a qualquer momento. Sem multas, sem fidelidade e sem letras miúdas." },
    { q: "Vocês têm suporte?", a: "Sim! Temos suporte via chat e e-mail em horário comercial para te ajudar com qualquer dúvida estratégica ou técnica." },
    { q: "É seguro? Tem LGPD?", a: "Sim, somos 100% compliant com a LGPD. Seus dados e os dados dos seus clientes são criptografados e seguros." },
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