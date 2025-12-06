import React from 'react';
import { Logo } from '../components/Logo';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F2937] text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="bg-white inline-block p-2 rounded-lg mb-4">
                <Logo />
            </div>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              Plataforma de fidelização inteligente para o pequeno e médio varejo brasileiro. Aumente suas vendas com cashback automatizado.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Produto</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#how-it-works" className="hover:text-gold transition-colors">Como funciona</a></li>
              <li><a href="#pricing" className="hover:text-gold transition-colors">Planos</a></li>
              <li><a href="#features" className="hover:text-gold transition-colors">Benefícios</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Demonstração</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Privacidade</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© 2024 Fidelify. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-gold transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-gold transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;