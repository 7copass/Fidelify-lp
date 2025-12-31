import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });

  const testimonials = [
    {
      quote: "Faturei 28% a mais em apenas 2 meses de uso. O melhor é que não preciso ficar gastando com anúncios no Instagram o tempo todo.",
      author: "João Silva",
      role: "Mercado ABC",
      initials: "JS"
    },
    {
      quote: "Meus clientes adoram receber a notificação com o saldo. Eles voltam muito mais rápido para gastar o bônus. Recomendo demais!",
      author: "Maria Santos",
      role: "Farmácia Saúde",
      initials: "MS"
    },
    {
      quote: "Implementei em 10 minutos. A interface é muito simples, minhas funcionárias aprenderam na hora. O suporte também é nota 10.",
      author: "Pedro Costa",
      role: "Loja do Bairro",
      initials: "PC"
    },
    {
      quote: "O sistema de Curva ABC abriu meus olhos. Eu estava focando nos produtos errados. O Fidelify pagou a mensalidade na primeira semana.",
      author: "Ana Oliveira",
      role: "Moda & Estilo",
      initials: "AO"
    }
  ];

  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Lojistas que já aumentaram suas vendas
          </h2>
        </div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-4">
            {testimonials.map((t, i) => (
              <div key={i} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 text-gold fill-gold" />)}
                    </div>
                    <p className="text-slate-600 mb-6 italic">"{t.quote}"</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold text-navy">{t.author}</div>
                      <div className="text-xs text-slate-500 uppercase font-semibold">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;