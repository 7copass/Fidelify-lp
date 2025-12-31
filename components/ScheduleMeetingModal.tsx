import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Building2, Mail, Phone, User, Store, Tag } from 'lucide-react';
import { useScheduleMeeting } from '../contexts/ScheduleMeetingContext';

interface FormData {
    nome: string;
    email: string;
    telefone: string;
    empresa: string;
    quantidadeLojas: string;
    segmento: string;
}

interface FormErrors {
    nome?: string;
    email?: string;
    telefone?: string;
    empresa?: string;
    quantidadeLojas?: string;
    segmento?: string;
}

const SEGMENTOS = [
    'Acessórios',
    'Alimentos e Bebidas',
    'Artigos Esportivos',
    'Automotivo',
    'Bares e Restaurantes',
    'Calçados',
    'Celular e Eletrônicos',
    'Decoração',
    'Farmácia',
    'Infantil',
    'Joalheria',
    'Moda Departamento',
    'Moda Feminina',
    'Moda Masculina',
    'Moda Praia',
    'Moda Íntima',
    'Moda em geral',
    'Perfumaria e Cosméticos',
    'Pet Shop',
    'Saúde e Beleza',
    'Supermercados',
    'Outros'
];

const QUANTIDADE_LOJAS = [
    '1 loja',
    'Entre 2 e 5 lojas',
    'Entre 6 e 10 lojas',
    'Mais do que 10 lojas'
];

const ScheduleMeetingModal: React.FC = () => {
    const { isOpen, closeModal } = useScheduleMeeting();
    const [formData, setFormData] = useState<FormData>({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        quantidadeLojas: '',
        segmento: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Close modal on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, closeModal]);

    const formatPhone = (value: string) => {
        const numbers = value.replace(/\D/g, '');
        if (numbers.length <= 2) return numbers;
        if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
        if (numbers.length <= 11) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === 'telefone') {
            setFormData(prev => ({ ...prev, [name]: formatPhone(value) }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }

        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório';
        if (!formData.email.trim()) {
            newErrors.email = 'E-mail é obrigatório';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'E-mail inválido';
        }
        if (!formData.telefone.trim()) {
            newErrors.telefone = 'Telefone é obrigatório';
        } else if (formData.telefone.replace(/\D/g, '').length < 10) {
            newErrors.telefone = 'Telefone inválido';
        }
        if (!formData.empresa.trim()) newErrors.empresa = 'Nome da empresa é obrigatório';
        if (!formData.quantidadeLojas) newErrors.quantidadeLojas = 'Selecione a quantidade de lojas';
        if (!formData.segmento) newErrors.segmento = 'Selecione o segmento';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            // Send data to webhook
            const response = await fetch('https://editor.leaderaperformance.com.br/webhook/agendamento-fidelify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome: formData.nome,
                    email: formData.email,
                    telefone: formData.telefone,
                    empresa: formData.empresa,
                    quantidade_lojas: formData.quantidadeLojas,
                    segmento: formData.segmento,
                    data_envio: new Date().toISOString(),
                    origem: 'landing-page-fidelify'
                }),
            });

            if (response.ok) {
                // Success - reset form and redirect to thank you page
                setFormData({
                    nome: '',
                    email: '',
                    telefone: '',
                    empresa: '',
                    quantidadeLojas: '',
                    segmento: ''
                });
                closeModal();
                // Redirect to thank you page
                window.location.href = '/obrigado';
            } else {
                throw new Error('Erro ao enviar dados');
            }
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            alert('Ocorreu um erro ao agendar. Por favor, tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
                        onClick={closeModal}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="relative bg-gradient-to-r from-navy to-slate-800 px-6 py-8 text-white">
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
                            >
                                <X size={20} />
                            </button>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-gold/20 rounded-lg">
                                    <Calendar className="w-6 h-6 text-gold" />
                                </div>
                                <h2 className="text-2xl font-bold">Agende uma Reunião</h2>
                            </div>
                            <p className="text-slate-300 text-sm">
                                Preencha os campos abaixo e nossa equipe entrará em contato para agendar.
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            {/* Nome */}
                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1.5">
                                    <User size={16} className="text-slate-400" />
                                    Nome completo
                                </label>
                                <input
                                    type="text"
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    placeholder="Seu nome completo"
                                    className={`w-full px-4 py-3 rounded-xl border-2 bg-slate-50 transition-all focus:bg-white focus:outline-none ${errors.nome
                                        ? 'border-red-300 focus:border-red-500'
                                        : 'border-slate-200 focus:border-gold'
                                        }`}
                                />
                                {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome}</p>}
                            </div>

                            {/* Email & Telefone - Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1.5">
                                        <Mail size={16} className="text-slate-400" />
                                        E-mail
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="seu@email.com"
                                        className={`w-full px-4 py-3 rounded-xl border-2 bg-slate-50 transition-all focus:bg-white focus:outline-none ${errors.email
                                            ? 'border-red-300 focus:border-red-500'
                                            : 'border-slate-200 focus:border-gold'
                                            }`}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>
                                <div>
                                    <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1.5">
                                        <Phone size={16} className="text-slate-400" />
                                        Telefone
                                    </label>
                                    <input
                                        type="tel"
                                        name="telefone"
                                        value={formData.telefone}
                                        onChange={handleChange}
                                        placeholder="(00) 00000-0000"
                                        className={`w-full px-4 py-3 rounded-xl border-2 bg-slate-50 transition-all focus:bg-white focus:outline-none ${errors.telefone
                                            ? 'border-red-300 focus:border-red-500'
                                            : 'border-slate-200 focus:border-gold'
                                            }`}
                                    />
                                    {errors.telefone && <p className="text-red-500 text-xs mt-1">{errors.telefone}</p>}
                                </div>
                            </div>

                            {/* Empresa */}
                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1.5">
                                    <Building2 size={16} className="text-slate-400" />
                                    Nome da empresa
                                </label>
                                <input
                                    type="text"
                                    name="empresa"
                                    value={formData.empresa}
                                    onChange={handleChange}
                                    placeholder="Nome da sua empresa"
                                    className={`w-full px-4 py-3 rounded-xl border-2 bg-slate-50 transition-all focus:bg-white focus:outline-none ${errors.empresa
                                        ? 'border-red-300 focus:border-red-500'
                                        : 'border-slate-200 focus:border-gold'
                                        }`}
                                />
                                {errors.empresa && <p className="text-red-500 text-xs mt-1">{errors.empresa}</p>}
                            </div>

                            {/* Quantidade de Lojas & Segmento - Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1.5">
                                        <Store size={16} className="text-slate-400" />
                                        Quantidade de lojas
                                    </label>
                                    <select
                                        name="quantidadeLojas"
                                        value={formData.quantidadeLojas}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-xl border-2 bg-slate-50 transition-all focus:bg-white focus:outline-none appearance-none cursor-pointer ${errors.quantidadeLojas
                                            ? 'border-red-300 focus:border-red-500'
                                            : 'border-slate-200 focus:border-gold'
                                            } ${!formData.quantidadeLojas ? 'text-slate-400' : 'text-slate-900'}`}
                                    >
                                        <option value="">Selecione</option>
                                        {QUANTIDADE_LOJAS.map(opcao => (
                                            <option key={opcao} value={opcao}>{opcao}</option>
                                        ))}
                                    </select>
                                    {errors.quantidadeLojas && <p className="text-red-500 text-xs mt-1">{errors.quantidadeLojas}</p>}
                                </div>
                                <div>
                                    <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1.5">
                                        <Tag size={16} className="text-slate-400" />
                                        Segmento
                                    </label>
                                    <select
                                        name="segmento"
                                        value={formData.segmento}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-xl border-2 bg-slate-50 transition-all focus:bg-white focus:outline-none appearance-none cursor-pointer ${errors.segmento
                                            ? 'border-red-300 focus:border-red-500'
                                            : 'border-slate-200 focus:border-gold'
                                            } ${!formData.segmento ? 'text-slate-400' : 'text-slate-900'}`}
                                    >
                                        <option value="">Selecione</option>
                                        {SEGMENTOS.map(seg => (
                                            <option key={seg} value={seg}>{seg}</option>
                                        ))}
                                    </select>
                                    {errors.segmento && <p className="text-red-500 text-xs mt-1">{errors.segmento}</p>}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full mt-6 py-4 px-6 bg-gradient-to-r from-gold to-amber-500 text-white font-semibold rounded-xl shadow-lg shadow-gold/25 hover:shadow-xl hover:shadow-gold/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Enviando...
                                    </span>
                                ) : (
                                    'Agendar uma Reunião'
                                )}
                            </motion.button>

                            {/* Privacy Note */}
                            <p className="text-xs text-slate-400 text-center mt-4">
                                Ao preencher este formulário, você concorda com nossa{' '}
                                <a href="/termos-de-servico" className="text-gold hover:underline">
                                    política de privacidade
                                </a>.
                            </p>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScheduleMeetingModal;
