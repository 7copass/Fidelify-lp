import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, ArrowRight, Phone } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from '../components/ui/Button';

const ThankYou: React.FC = () => {
    useEffect(() => {
        // Scroll to top when page loads
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Navbar />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-20 bg-gradient-to-br from-navy via-slate-800 to-navy overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

                    {/* Decorative Blurs */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        {/* Success Icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 0.2
                            }}
                            className="mx-auto w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-green-500/30"
                        >
                            <CheckCircle className="w-12 h-12 text-white" />
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
                        >
                            A Fidelify agradece{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-400">
                                seu contato!
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl text-slate-300 max-w-2xl mx-auto"
                        >
                            Sua solicitação foi recebida com sucesso.
                        </motion.p>
                    </div>
                </section>

                {/* Info Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Important Notice Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="bg-gradient-to-r from-amber-50 to-gold/10 border border-gold/20 rounded-2xl p-8 mb-12"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gold/20 rounded-xl">
                                    <Phone className="w-6 h-6 text-gold" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-navy mb-2 flex items-center gap-2">
                                        <span className="text-gold">Importante:</span>
                                    </h3>
                                    <p className="text-slate-600 text-lg leading-relaxed">
                                        Em breve um especialista entrará em contato no seu número de telefone cadastrado para agendar uma reunião e apresentar a Fidelify.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Next Steps */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-2xl font-bold text-navy mb-8">O que acontece agora?</h2>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                    <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <span className="text-xl font-bold text-navy">1</span>
                                    </div>
                                    <h3 className="font-semibold text-navy mb-2">Análise do Perfil</h3>
                                    <p className="text-sm text-slate-500">Nossa equipe vai analisar o perfil do seu negócio</p>
                                </div>

                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                    <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <span className="text-xl font-bold text-navy">2</span>
                                    </div>
                                    <h3 className="font-semibold text-navy mb-2">Contato em 24h</h3>
                                    <p className="text-sm text-slate-500">Um especialista entrará em contato por telefone</p>
                                </div>

                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                    <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <span className="text-xl font-bold text-navy">3</span>
                                    </div>
                                    <h3 className="font-semibold text-navy mb-2">Demonstração</h3>
                                    <p className="text-sm text-slate-500">Apresentaremos a plataforma e como ela pode ajudar</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="text-center"
                        >
                            <a href="/">
                                <Button size="lg" className="gap-2">
                                    <ArrowRight className="w-5 h-5" />
                                    Voltar para o Início
                                </Button>
                            </a>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ThankYou;
