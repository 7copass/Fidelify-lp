import React from 'react';
import { Link } from 'react-router-dom';

const PoliticaDePrivacidade: React.FC = () => {
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

            {/* Conteúdo da Política de Privacidade */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="prose prose-slate max-w-none">
                    <h1 className="text-4xl font-bold text-navy mb-2">Política de Privacidade – Fidelify</h1>
                    <p className="text-slate-600 mb-8">
                        <strong>Última atualização:</strong> 05 de janeiro de 2026
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-8">
                        O Fidelify é uma plataforma de fidelização e cashback automatizado. Esta Política descreve como coletamos, usamos, armazenamos, compartilhamos e protegemos os dados pessoais de usuários, clientes e parceiros.
                    </p>

                    {/* Seção 1: Definições */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">1. Definições</h2>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700">
                            <li><strong>Titular:</strong> Pessoa física a quem se referem os dados pessoais.</li>
                            <li><strong>Controlador:</strong> Fidelify.</li>
                            <li><strong>Operador:</strong> Prestadores de serviço que tratam dados sob nossas instruções.</li>
                            <li><strong>Dados pessoais:</strong> Informações que identificam ou podem identificar uma pessoa.</li>
                        </ul>
                    </section>

                    {/* Seção 2: Dados Coletados */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">2. Dados Coletados</h2>

                        <h3 className="text-xl font-semibold text-navy mt-6 mb-3">2.1 Dados fornecidos</h3>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700">
                            <li>Nome completo</li>
                            <li>CPF ou CNPJ</li>
                            <li>Telefone (WhatsApp)</li>
                            <li>E-mail</li>
                            <li>Endereço</li>
                            <li>Dados de login</li>
                            <li>Informações fornecidas em formulários, campanhas e atendimentos</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-navy mt-6 mb-3">2.2 Dados automáticos</h3>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700">
                            <li>IP</li>
                            <li>Navegador/dispositivo</li>
                            <li>Páginas acessadas</li>
                            <li>Cookies e pixels (Meta, Google, TikTok etc.)</li>
                            <li>Dados de interação com anúncios</li>
                        </ul>
                    </section>

                    {/* Seção 3: Finalidades do Tratamento */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">3. Finalidades do Tratamento</h2>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700">
                            <li>Criação e gestão de contas</li>
                            <li>Operação de cashback e fidelização</li>
                            <li>Comunicação via WhatsApp, e-mail e notificações</li>
                            <li>Envio de campanhas, cupons e benefícios</li>
                            <li>Melhoria de performance de anúncios</li>
                            <li>Prevenção de fraudes</li>
                            <li>Cumprimento legal</li>
                            <li>Personalização de experiências</li>
                        </ul>
                    </section>

                    {/* Seção 4: Base Legal (LGPD) */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">4. Base Legal (LGPD)</h2>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700">
                            <li>Consentimento</li>
                            <li>Execução de contrato</li>
                            <li>Obrigação legal</li>
                            <li>Legítimo interesse</li>
                        </ul>
                    </section>

                    {/* Seção 5: Compartilhamento */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">5. Compartilhamento</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">Podemos compartilhar dados com:</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                            <li>Meta (WhatsApp, Facebook, Instagram)</li>
                            <li>Plataformas de automação, CRM e analytics</li>
                            <li>Autoridades quando exigido por lei</li>
                            <li>Parceiros operacionais</li>
                        </ul>
                        <p className="text-slate-700 leading-relaxed font-semibold">
                            ⚠️ Não vendemos dados.
                        </p>
                    </section>

                    {/* Seção 6: Marketing, Cookies e Pixels */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">6. Marketing, Cookies e Pixels</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">Usamos tecnologias como:</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                            <li>Meta Pixel</li>
                            <li>Google Ads</li>
                            <li>Cookies de remarketing</li>
                            <li>APIs de conversão</li>
                        </ul>
                        <p className="text-slate-700 leading-relaxed mb-4">Para:</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                            <li>Mensurar campanhas</li>
                            <li>Criar públicos</li>
                            <li>Personalizar anúncios</li>
                            <li>Exibir ofertas relevantes</li>
                        </ul>
                        <p className="text-slate-700 leading-relaxed">
                            O usuário pode optar por não participar a qualquer momento.
                        </p>
                    </section>

                    {/* Seção 7: WhatsApp & Mensageria */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">7. WhatsApp & Mensageria</h2>
                        <p className="text-slate-700 leading-relaxed">
                            O usuário autoriza receber comunicações automatizadas após consentimento explícito (opt-in), podendo cancelar a qualquer momento digitando <strong>SAIR</strong> ou solicitando atendimento.
                        </p>
                    </section>

                    {/* Seção 8: Segurança */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">8. Segurança</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">Implementamos medidas de segurança incluindo:</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700">
                            <li>Criptografia</li>
                            <li>Firewalls</li>
                            <li>Controle de acesso</li>
                            <li>Logs</li>
                            <li>Backups</li>
                            <li>Políticas internas de compliance</li>
                        </ul>
                    </section>

                    {/* Seção 9: Retenção */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">9. Retenção</h2>
                        <p className="text-slate-700 leading-relaxed">
                            Dados mantidos enquanto houver relação contratual ou exigência legal.
                        </p>
                    </section>

                    {/* Seção 10: Direitos do Titular */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">10. Direitos do Titular</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">Você tem direito a:</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                            <li>Acesso</li>
                            <li>Correção</li>
                            <li>Portabilidade</li>
                            <li>Exclusão</li>
                            <li>Revogação de consentimento</li>
                        </ul>
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                            <p className="text-slate-700">
                                📧 Para exercer seus direitos, entre em contato: <a href="mailto:privacidade@fidelify.com.br" className="text-blue-600 hover:underline">privacidade@fidelify.com.br</a>
                            </p>
                        </div>
                    </section>

                    {/* Seção 11: Transferência Internacional */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">11. Transferência Internacional</h2>
                        <p className="text-slate-700 leading-relaxed">
                            Dados podem ser armazenados em servidores fora do Brasil, sempre com proteção adequada.
                        </p>
                    </section>

                    {/* Seção 12: Incidentes */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">12. Incidentes</h2>
                        <p className="text-slate-700 leading-relaxed">
                            O Fidelify notificará usuários e autoridades em caso de incidentes relevantes.
                        </p>
                    </section>

                    {/* Seção 13: Alterações */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">13. Alterações</h2>
                        <p className="text-slate-700 leading-relaxed">
                            Atualizações nesta política podem ocorrer a qualquer momento. Recomendamos que você revise esta página periodicamente.
                        </p>
                    </section>

                    {/* Seção 14: Contato */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">14. Contato</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            Para dúvidas sobre esta Política de Privacidade, entre em contato:
                        </p>
                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                            <p className="text-slate-700 mb-2"><strong>E-mail:</strong> <a href="mailto:privacidade@fidelify.com.br" className="text-blue-600 hover:underline">privacidade@fidelify.com.br</a></p>
                            <p className="text-slate-700"><strong>Plataforma:</strong> Fidelify — Plataforma de Cashback e Fidelização</p>
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

export default PoliticaDePrivacidade;
