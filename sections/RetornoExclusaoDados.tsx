import React from 'react';
import { Link } from 'react-router-dom';

const RetornoExclusaoDados: React.FC = () => {
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

            {/* Conteúdo */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="prose prose-slate max-w-none">
                    <h1 className="text-4xl font-bold text-navy mb-6">Retorno de Chamada para Exclusão de Dados – Fidelify</h1>

                    <p className="text-slate-700 leading-relaxed text-lg mb-8">
                        O Fidelify disponibiliza este canal para atender solicitações de exclusão de dados pessoais oriundas de plataformas integradas como <strong>Facebook</strong>, <strong>Instagram</strong> e <strong>WhatsApp</strong>, conforme exigido pelas legislações de proteção de dados (LGPD e GDPR) e pelas Políticas da Meta.
                    </p>

                    {/* Como Funciona */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Como Funciona</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            Quando um usuário solicitar a exclusão de seus dados através de plataformas da Meta, a solicitação será automaticamente encaminhada para o Fidelify por meio deste canal.
                        </p>
                        <p className="text-slate-700 leading-relaxed mb-4">O Fidelify irá:</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700">
                            <li>Identificar o titular dos dados</li>
                            <li>Localizar os dados vinculados</li>
                            <li>Executar a exclusão total ou parcial dos dados pessoais</li>
                            <li>Anonimizar registros mantidos por obrigação legal</li>
                            <li>Confirmar a execução da solicitação</li>
                        </ul>
                    </section>

                    {/* Prazo de Atendimento */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Prazo de Atendimento</h2>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <p className="text-slate-700 leading-relaxed">
                                As solicitações de exclusão são processadas em até <strong>15 dias úteis</strong>, conforme legislação vigente.
                            </p>
                        </div>
                    </section>

                    {/* Quais Dados São Excluídos */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Quais Dados São Excluídos</h2>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700">
                            <li>Nome</li>
                            <li>Telefone</li>
                            <li>E-mail</li>
                            <li>Endereço</li>
                            <li>Dados de perfil</li>
                            <li>Mensagens</li>
                            <li>Histórico de interações</li>
                            <li>Consentimentos</li>
                            <li>Cookies</li>
                        </ul>
                    </section>

                    {/* Quais Dados São Mantidos (Anonimizados) */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Quais Dados São Mantidos (Anonimizados)</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            Alguns dados poderão ser mantidos de forma anonimizada por obrigação legal, segurança e prevenção a fraudes, incluindo:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700">
                            <li>Registros exigidos por lei</li>
                            <li>Logs de segurança</li>
                            <li>Dados de auditoria</li>
                            <li>Registros de prevenção a fraudes</li>
                        </ul>
                    </section>

                    {/* Confirmação */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Confirmação</h2>
                        <p className="text-slate-700 leading-relaxed">
                            Após a conclusão do processo de exclusão, o titular receberá uma confirmação por meio dos canais cadastrados.
                        </p>
                    </section>

                    {/* Contato do Encarregado de Dados (DPO) */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Contato do Encarregado de Dados (DPO)</h2>
                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                            <p className="text-slate-700 mb-2">
                                📧 <a href="mailto:dpo@fidelify.com.br" className="text-blue-600 hover:underline">dpo@fidelify.com.br</a>
                            </p>
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

export default RetornoExclusaoDados;
