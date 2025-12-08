import React from 'react';
import { Link } from 'react-router-dom';

const TermosDeServico: React.FC = () => {
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

            {/* Conteúdo dos Termos */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="prose prose-slate max-w-none">
                    <h1 className="text-4xl font-bold text-navy mb-2">Termos de Serviço - Fidelify</h1>
                    <p className="text-slate-600 mb-8">
                        <strong>Última atualização:</strong> 08 de dezembro de 2025<br />
                        <strong>Versão:</strong> 1.0
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">1. Aceitação dos Termos</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            Ao acessar e utilizar a plataforma Fidelify ("Plataforma"), disponível em fidelify.com.br, você ("Usuário", "Lojista" ou "você") concorda em cumprir e estar vinculado a estes Termos de Serviço ("Termos").
                        </p>
                        <p className="text-slate-700 leading-relaxed">
                            Se você não concorda com estes Termos, não utilize a Plataforma.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">2. Sobre o Serviço</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            O Fidelify é uma plataforma SaaS (Software as a Service) que oferece ferramentas de cashback e fidelização para pequenos e médios varejistas brasileiros.
                        </p>
                        <p className="text-slate-700 font-semibold mb-2">Funcionalidades principais:</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700">
                            <li>Sistema de cashback configurável</li>
                            <li>Gestão de clientes e transações</li>
                            <li>Notificações automatizadas via WhatsApp</li>
                            <li>Notificações por e-mail</li>
                            <li>Relatórios e análises de desempenho</li>
                            <li>Dashboard com métricas de fidelização</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">3. Cadastro e Conta</h2>
                        <p className="text-slate-700 leading-relaxed mb-2"><strong>3.1</strong> Para utilizar o Fidelify, você deve criar uma conta fornecendo informações verdadeiras, completas e atualizadas.</p>
                        <p className="text-slate-700 leading-relaxed mb-2"><strong>3.2</strong> Você é responsável por manter a confidencialidade de suas credenciais de acesso (usuário e senha).</p>
                        <p className="text-slate-700 leading-relaxed mb-2"><strong>3.3</strong> Você é responsável por todas as atividades realizadas em sua conta.</p>
                        <p className="text-slate-700 leading-relaxed mb-2"><strong>3.4</strong> Você deve notificar imediatamente o Fidelify sobre qualquer uso não autorizado de sua conta.</p>
                        <p className="text-slate-700 leading-relaxed"><strong>3.5</strong> O Fidelify se reserva o direito de recusar o cadastro ou suspender contas que violem estes Termos.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">4. Planos e Pagamento</h2>
                        <p className="text-slate-700 font-semibold mb-2"><strong>4.1</strong> Planos Disponíveis:</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                            <li>Plano Mensal: R$ 397,00 por mês</li>
                            <li>Plano Trimestral: R$ 297,00 por mês (cobrança trimestral de R$ 891,00)</li>
                            <li>Planos anuais: consultar valores diretamente na plataforma</li>
                        </ul>
                        <p className="text-slate-700 leading-relaxed mb-2"><strong>4.2</strong> Os valores podem ser reajustados mediante notificação prévia de 30 (trinta) dias.</p>
                        <p className="text-slate-700 leading-relaxed mb-2"><strong>4.3</strong> O pagamento deve ser realizado nas formas disponibilizadas na Plataforma (cartão de crédito, Pix, boleto bancário).</p>
                        <p className="text-slate-700 leading-relaxed mb-2"><strong>4.4</strong> O acesso à Plataforma será liberado após confirmação do pagamento.</p>
                        <p className="text-slate-700 leading-relaxed mb-2"><strong>4.5</strong> Em caso de inadimplência, o acesso à Plataforma será suspenso automaticamente após 5 (cinco) dias do vencimento.</p>
                        <p className="text-slate-700 leading-relaxed"><strong>4.6</strong> Não há reembolso de valores já pagos, exceto em casos de falha técnica comprovada do Fidelify que impeça totalmente o uso da Plataforma por período superior a 7 (sete) dias consecutivos.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">5. Uso Adequado da Plataforma</h2>
                        <p className="text-slate-700 leading-relaxed mb-2"><strong>5.1</strong> Você concorda em utilizar a Plataforma apenas para fins legais e de acordo com estes Termos.</p>
                        <p className="text-slate-700 font-semibold mb-2"><strong>5.2</strong> É expressamente proibido:</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                            <li>Violar qualquer lei ou regulamento aplicável</li>
                            <li>Utilizar a Plataforma para fins fraudulentos ou enganosos</li>
                            <li>Tentar acessar áreas não autorizadas da Plataforma</li>
                            <li>Interferir ou interromper o funcionamento da Plataforma</li>
                            <li>Copiar, modificar, distribuir ou fazer engenharia reversa da Plataforma</li>
                            <li>Utilizar robôs, scripts ou meios automatizados não autorizados</li>
                            <li>Enviar spam, mensagens não solicitadas ou conteúdo ofensivo através da Plataforma</li>
                            <li>Revender ou sublicenciar o acesso à Plataforma sem autorização expressa</li>
                        </ul>
                        <p className="text-slate-700 leading-relaxed"><strong>5.3</strong> O Fidelify se reserva o direito de suspender ou encerrar contas que violem estas regras.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">6. Proteção de Dados e LGPD</h2>
                        <p className="text-slate-700 font-semibold mb-2"><strong>6.1</strong> Papéis e Responsabilidades:</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                            <li>O Fidelify atua como <strong>OPERADOR</strong> de dados pessoais, conforme Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</li>
                            <li>O Lojista atua como <strong>CONTROLADOR</strong> de dados pessoais de seus clientes finais</li>
                        </ul>

                        <p className="text-slate-700 font-semibold mb-2"><strong>6.2</strong> Responsabilidades do Lojista (Controlador):</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                            <li>Obter consentimento válido de seus clientes para coleta e tratamento de dados pessoais</li>
                            <li>Informar aos clientes sobre o uso de seus dados no programa de cashback</li>
                            <li>Garantir a base legal adequada para o tratamento dos dados</li>
                            <li>Responder a solicitações de titulares (acesso, correção, exclusão de dados)</li>
                            <li>Manter registro das atividades de tratamento de dados</li>
                        </ul>

                        <p className="text-slate-700 font-semibold mb-2"><strong>6.3</strong> Responsabilidades do Fidelify (Operador):</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                            <li>Tratar os dados pessoais apenas conforme instruções do Lojista</li>
                            <li>Implementar medidas de segurança técnicas e organizacionais adequadas</li>
                            <li>Auxiliar o Lojista no cumprimento de obrigações da LGPD</li>
                            <li>Notificar o Lojista sobre incidentes de segurança em até 24 horas</li>
                            <li>Não compartilhar dados com terceiros sem autorização</li>
                        </ul>

                        <p className="text-slate-700 leading-relaxed mb-2"><strong>6.4</strong> Ao excluir sua conta, seus dados e os dados de seus clientes serão removidos de nossos servidores em até 30 (trinta) dias, exceto dados que devamos manter por obrigação legal.</p>
                        <p className="text-slate-700 leading-relaxed"><strong>6.5</strong> Para mais detalhes sobre como tratamos dados, consulte nossa Política de Privacidade.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">7. Propriedade Intelectual</h2>
                        <p className="text-slate-700 leading-relaxed mb-2"><strong>7.1</strong> Todos os direitos de propriedade intelectual sobre a Plataforma, incluindo código, design, marcas e conteúdo, pertencem ao Fidelify ou seus licenciadores.</p>
                        <p className="text-slate-700 leading-relaxed mb-2"><strong>7.2</strong> Você mantém todos os direitos sobre os dados que insere na Plataforma (dados de clientes, transações, etc.).</p>
                        <p className="text-slate-700 leading-relaxed"><strong>7.3</strong> Você concede ao Fidelify uma licença limitada para usar seus dados apenas para fornecer os serviços contratados.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">8. Disponibilidade e Suporte</h2>
                        <p className="text-slate-700 leading-relaxed mb-2"><strong>8.1</strong> O Fidelify se esforça para manter a Plataforma disponível 24/7, mas não garante disponibilidade ininterrupta.</p>
                        <p className="text-slate-700 leading-relaxed mb-2"><strong>8.2</strong> Manutenções programadas serão comunicadas com antecedência mínima de 24 horas.</p>
                        <p className="text-slate-700 leading-relaxed mb-4"><strong>8.3</strong> Suporte técnico está disponível por e-mail em contato@fidelify.com.br com prazo de resposta de até 24 horas úteis.</p>
                        <p className="text-slate-700 font-semibold mb-2"><strong>8.4</strong> O Fidelify não se responsabiliza por:</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700">
                            <li>Indisponibilidade de serviços de terceiros (WhatsApp, provedores de e-mail, internet)</li>
                            <li>Falhas causadas por ações do Usuário</li>
                            <li>Casos de força maior (desastres naturais, ataques cibernéticos, etc.)</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">9. Limitação de Responsabilidade</h2>
                        <p className="text-slate-700 font-semibold mb-2"><strong>9.1</strong> O Fidelify não se responsabiliza por:</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                            <li>Resultados específicos de vendas ou fidelização obtidos pelo Lojista</li>
                            <li>Decisões comerciais tomadas com base nas informações da Plataforma</li>
                            <li>Relacionamento entre o Lojista e seus clientes finais</li>
                            <li>Danos indiretos, lucros cessantes ou perda de dados</li>
                        </ul>
                        <p className="text-slate-700 leading-relaxed mb-2"><strong>9.2</strong> Em caso de falha comprovada, a responsabilidade do Fidelify está limitada ao valor pago pelo Lojista nos últimos 3 (três) meses.</p>
                        <p className="text-slate-700 font-semibold mb-2"><strong>9.3</strong> O Lojista é exclusivamente responsável por:</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700">
                            <li>Cumprimento das leis de defesa do consumidor em relação a seus clientes</li>
                            <li>Honrar os compromissos de cashback assumidos com seus clientes</li>
                            <li>Comunicação adequada das regras do programa de cashback aos clientes</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">10. Cancelamento</h2>
                        <p className="text-slate-700 font-semibold mb-2"><strong>10.1</strong> Cancelamento pelo Lojista:</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                            <li>Você pode cancelar sua assinatura a qualquer momento através da Plataforma</li>
                            <li>O cancelamento terá efeito ao final do período já pago</li>
                            <li>Não há reembolso proporcional de valores já pagos</li>
                        </ul>

                        <p className="text-slate-700 font-semibold mb-2"><strong>10.2</strong> Cancelamento pelo Fidelify:</p>
                        <p className="text-slate-700 leading-relaxed mb-2">Podemos encerrar sua conta imediatamente em caso de:</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                            <li>Violação destes Termos</li>
                            <li>Atividades fraudulentas ou ilegais</li>
                            <li>Inadimplência superior a 30 dias</li>
                            <li>Uso que comprometa a segurança da Plataforma</li>
                        </ul>

                        <p className="text-slate-700 font-semibold mb-2"><strong>10.3</strong> Após o cancelamento:</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700">
                            <li>Você terá 30 dias para exportar seus dados</li>
                            <li>Após 30 dias, seus dados serão permanentemente excluídos</li>
                            <li>Você permanece responsável por quaisquer valores devidos</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">11. Integrações com Terceiros</h2>
                        <p className="text-slate-700 font-semibold mb-2"><strong>11.1</strong> O Fidelify utiliza serviços de terceiros, incluindo:</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                            <li>WhatsApp Business API (Meta)</li>
                            <li>Serviços de envio de e-mail</li>
                            <li>Processadores de pagamento</li>
                        </ul>
                        <p className="text-slate-700 leading-relaxed mb-2"><strong>11.2</strong> O uso desses serviços está sujeito aos termos e políticas desses terceiros.</p>
                        <p className="text-slate-700 leading-relaxed"><strong>11.3</strong> O Fidelify não se responsabiliza por falhas, mudanças ou descontinuação desses serviços terceiros.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">12. Alterações nos Termos</h2>
                        <p className="text-slate-700 leading-relaxed mb-2"><strong>12.1</strong> O Fidelify se reserva o direito de modificar estes Termos a qualquer momento.</p>
                        <p className="text-slate-700 leading-relaxed mb-2"><strong>12.2</strong> Alterações significativas serão comunicadas por e-mail com 30 (trinta) dias de antecedência.</p>
                        <p className="text-slate-700 leading-relaxed mb-2"><strong>12.3</strong> Seu uso continuado da Plataforma após as alterações constitui aceitação dos novos Termos.</p>
                        <p className="text-slate-700 leading-relaxed"><strong>12.4</strong> Se você não concordar com as alterações, deverá cancelar sua conta antes da data de vigência dos novos Termos.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">13. Lei Aplicável e Foro</h2>
                        <p className="text-slate-700 leading-relaxed mb-2"><strong>13.1</strong> Estes Termos são regidos pelas leis da República Federativa do Brasil.</p>
                        <p className="text-slate-700 leading-relaxed"><strong>13.2</strong> Fica eleito o foro da comarca de Belém, Pará, para dirimir quaisquer controvérsias decorrentes destes Termos.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">14. Disposições Gerais</h2>
                        <p className="text-slate-700 leading-relaxed mb-2"><strong>14.1</strong> Se qualquer disposição destes Termos for considerada inválida, as demais disposições permanecerão em vigor.</p>
                        <p className="text-slate-700 leading-relaxed mb-2"><strong>14.2</strong> A não exigência de qualquer direito previsto nestes Termos não constitui renúncia.</p>
                        <p className="text-slate-700 leading-relaxed"><strong>14.3</strong> Estes Termos constituem o acordo integral entre você e o Fidelify.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy mt-8 mb-4">15. Contato</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            Para dúvidas, sugestões ou solicitações relacionadas a estes Termos, entre em contato:
                        </p>
                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                            <p className="text-slate-700 mb-2"><strong>E-mail:</strong> contato@fidelify.com.br</p>
                            <p className="text-slate-700 mb-2"><strong>Telefone:</strong> +55 91 98161-7148</p>
                            <p className="text-slate-700"><strong>Endereço:</strong> Passagem Isabel, 206, Pedreira, Belém - PA</p>
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-slate-50 border-t border-slate-200 mt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
                    <p className="text-slate-600 text-sm">
                        © 2025 Fidelify. Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default TermosDeServico;
