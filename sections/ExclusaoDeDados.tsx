import React from 'react';
import { Link } from 'react-router-dom';

const ExclusaoDeDados: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header com logo e navegação */}
            <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link to="/" className="inline-flex items-center text-navy hover:text-blue-600 transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Voltar para o site
                    </Link>
                </div>
            </header>

            {/* Conteúdo da Exclusão de Dados */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="prose prose-slate max-w-none">
                    <h1 className="text-4xl font-bold text-navy mb-6">Exclusão de Dados – Fidelify</h1>

                    <p className="text-slate-700 leading-relaxed text-lg mb-4">
                        O Fidelify respeita o direito do titular à exclusão de seus dados pessoais conforme a <strong>LGPD</strong> e <strong>GDPR</strong>.
                    </p>
                    <p className="text-slate-700 leading-relaxed text-lg mb-8">
                        Você pode solicitar a exclusão total ou parcial dos seus dados a qualquer momento.
                    </p>

                    {/* Quais Dados Podem Ser Excluídos */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Quais Dados Podem Ser Excluídos</h2>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700">
                            <li>Nome</li>
                            <li>Telefone</li>
                            <li>E-mail</li>
                            <li>Endereço</li>
                            <li>Dados de perfil</li>
                            <li>Preferências</li>
                            <li>Histórico de interações</li>
                            <li>Mensagens</li>
                            <li>Cookies</li>
                            <li>Consentimentos de marketing</li>
                        </ul>
                    </section>

                    {/* Como Solicitar */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Como Solicitar</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">Envie um e-mail para:</p>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                            <p className="text-slate-700 text-lg">
                                📧 <a href="mailto:privacidade@fidelify.com.br?subject=Exclusão%20de%20Dados" className="text-blue-600 hover:underline font-semibold">privacidade@fidelify.com.br</a>
                            </p>
                            <p className="text-slate-600 mt-2">Assunto: <strong>Exclusão de Dados</strong></p>
                        </div>

                        <p className="text-slate-700 leading-relaxed mb-4">No corpo do e-mail informe:</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700">
                            <li>Nome completo</li>
                            <li>CPF (ou CNPJ)</li>
                            <li>Telefone</li>
                            <li>E-mail</li>
                            <li>Qual exclusão deseja (total ou parcial)</li>
                        </ul>
                    </section>

                    {/* Prazo */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Prazo</h2>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <p className="text-slate-700 leading-relaxed">
                                Sua solicitação será processada em até <strong>15 dias úteis</strong>.
                            </p>
                        </div>
                    </section>

                    {/* Dados Que Não São Excluídos */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Dados Que Não São Excluídos</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            Alguns dados são mantidos por obrigação legal, segurança e prevenção a fraudes, sendo anonimizados sempre que possível:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700">
                            <li>Registros exigidos por lei</li>
                            <li>Logs de segurança</li>
                            <li>Dados de auditoria</li>
                            <li>Registros antifraude</li>
                        </ul>
                    </section>

                    {/* Confirmação */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Confirmação</h2>
                        <p className="text-slate-700 leading-relaxed">
                            Após a exclusão, você receberá uma confirmação por e-mail.
                        </p>
                    </section>

                    {/* Contato */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Contato</h2>
                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                            <p className="text-slate-700 mb-2">
                                📧 <a href="mailto:privacidade@fidelify.com.br" className="text-blue-600 hover:underline">privacidade@fidelify.com.br</a>
                            </p>
                            <p className="text-slate-700">
                                📍 Fidelify – Plataforma de Cashback e Fidelização
                            </p>
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-slate-50 border-t border-slate-200 mt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
                    <p className="text-slate-600 text-sm">
                        © 2026 Fidelify. Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default ExclusaoDeDados;
