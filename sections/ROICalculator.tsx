import React, { useState } from 'react';
import {
    Users,
    AlertTriangle,
    Sparkles,
    Trophy,
    Target,
    Zap,
    ArrowRight,
    Calculator,
    Info,
    TrendingDown,
    TrendingUp,
    Repeat,
    DollarSign,
    PiggyBank,
    Calendar,
    Clock
} from 'lucide-react';

const ROICalculator: React.FC = () => {
    // Estados dos sliders
    const [faturamento, setFaturamento] = useState(40000);
    const [taxaRetornoAtual, setTaxaRetornoAtual] = useState(15);
    const [taxaRetornoFidelify, setTaxaRetornoFidelify] = useState(45);

    // Constantes
    const INVESTIMENTO_MENSAL = 397;
    const CUSTO_AQUISICAO = 30;
    const CLIENTES_BASE = 100;

    // Cálculos
    const ticketMedio = faturamento / CLIENTES_BASE;
    const clientesQueVoltam = Math.round(CLIENTES_BASE * (taxaRetornoAtual / 100));
    const clientesQueSomem = CLIENTES_BASE - clientesQueVoltam;
    const perdaMensal = clientesQueSomem * ticketMedio;

    // Com Fidelify
    const clientesRecorrentes = Math.round(CLIENTES_BASE * (taxaRetornoFidelify / 100));
    const clientesRecuperados = clientesRecorrentes - clientesQueVoltam;
    const novaReceita = clientesRecuperados * ticketMedio;
    const aumentoReceita = novaReceita;

    // ROI
    const lucroMensal = novaReceita - INVESTIMENTO_MENSAL;
    const roiPercentual = Math.round((lucroMensal / INVESTIMENTO_MENSAL) * 100);
    const ganho12Meses = lucroMensal * 12;
    const paybackDias = lucroMensal > 0 ? Math.max(1, Math.round((INVESTIMENTO_MENSAL / lucroMensal) * 30)) : 999;

    // Formatação de moeda
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        }).format(value);
    };

    // Componente de Tooltip/Legenda
    const Tooltip: React.FC<{ text: string }> = ({ text }) => (
        <div className="group relative inline-flex items-center ml-1">
            <Info size={14} className="text-slate-400 cursor-help" />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-800 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 shadow-lg">
                {text}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800" />
            </div>
        </div>
    );

    return (
        <section id="calculadora" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-sm font-semibold mb-6 gap-2">
                        <Calculator size={16} />
                        Calculadora Interativa de ROI
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
                        Veja quanto você está <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">perdendo</span> e quanto pode <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">ganhar</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Ajuste os valores e veja em tempo real o impacto no seu negócio
                    </p>
                </div>

                {/* Sliders Section */}
                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-8 mb-8 animate-slide-up">
                    <h3 className="text-lg font-bold text-navy mb-2 flex items-center gap-2">
                        <Target className="text-blue-600" size={20} />
                        Configure o cenário da sua empresa
                    </h3>
                    <p className="text-sm text-slate-500 mb-6">Arraste os controles para simular diferentes cenários</p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Slider 1: Faturamento */}
                        <div className="space-y-4 p-4 bg-slate-50 rounded-2xl">
                            <div className="flex justify-between items-start">
                                <div>
                                    <label className="text-sm font-semibold text-slate-700 flex items-center">
                                        <DollarSign size={16} className="text-blue-500 mr-1" />
                                        Faturamento Mensal
                                        <Tooltip text="Quanto sua empresa fatura por mês em vendas" />
                                    </label>
                                    <p className="text-xs text-slate-500 mt-1">Receita total mensal da sua loja</p>
                                </div>
                                <span className="text-lg font-bold text-navy bg-white px-3 py-1 rounded-lg shadow-sm">{formatCurrency(faturamento)}</span>
                            </div>
                            <input
                                type="range"
                                min="10000"
                                max="500000"
                                step="5000"
                                value={faturamento}
                                onChange={(e) => setFaturamento(Number(e.target.value))}
                                className="w-full h-3 rounded-full appearance-none cursor-pointer slider-blue"
                                style={{
                                    background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((faturamento - 10000) / (500000 - 10000)) * 100}%, #e2e8f0 ${((faturamento - 10000) / (500000 - 10000)) * 100}%, #e2e8f0 100%)`
                                }}
                            />
                            <div className="flex justify-between text-xs text-slate-400">
                                <span>R$ 10k</span>
                                <span>R$ 500k</span>
                            </div>
                        </div>

                        {/* Slider 2: Taxa de Retorno Atual */}
                        <div className="space-y-4 p-4 bg-red-50 rounded-2xl border border-red-100">
                            <div className="flex justify-between items-start">
                                <div>
                                    <label className="text-sm font-semibold text-slate-700 flex items-center">
                                        <TrendingDown size={16} className="text-red-500 mr-1" />
                                        Taxa de Retorno Atual
                                        <Tooltip text="% de clientes que voltam a comprar hoje, sem programa de fidelidade" />
                                    </label>
                                    <p className="text-xs text-red-500 mt-1">Clientes que voltam HOJE (sem Fidelify)</p>
                                </div>
                                <span className="text-lg font-bold text-red-500 bg-white px-3 py-1 rounded-lg shadow-sm">{taxaRetornoAtual}%</span>
                            </div>
                            <input
                                type="range"
                                min="5"
                                max="40"
                                step="1"
                                value={taxaRetornoAtual}
                                onChange={(e) => setTaxaRetornoAtual(Number(e.target.value))}
                                className="w-full h-3 rounded-full appearance-none cursor-pointer slider-red"
                                style={{
                                    background: `linear-gradient(to right, #ef4444 0%, #ef4444 ${((taxaRetornoAtual - 5) / (40 - 5)) * 100}%, #fecaca ${((taxaRetornoAtual - 5) / (40 - 5)) * 100}%, #fecaca 100%)`
                                }}
                            />
                            <div className="flex justify-between text-xs text-slate-400">
                                <span>5% (muito baixo)</span>
                                <span>40% (bom)</span>
                            </div>
                        </div>

                        {/* Slider 3: Projeção com Fidelify */}
                        <div className="space-y-4 p-4 bg-green-50 rounded-2xl border border-green-100">
                            <div className="flex justify-between items-start">
                                <div>
                                    <label className="text-sm font-semibold text-slate-700 flex items-center">
                                        <TrendingUp size={16} className="text-green-500 mr-1" />
                                        Projeção com Fidelify
                                        <Tooltip text="% esperado de clientes que voltam COM programa de cashback" />
                                    </label>
                                    <p className="text-xs text-green-600 mt-1">Clientes que vão voltar COM Fidelify</p>
                                </div>
                                <span className="text-lg font-bold text-green-500 bg-white px-3 py-1 rounded-lg shadow-sm">{taxaRetornoFidelify}%</span>
                            </div>
                            <input
                                type="range"
                                min="30"
                                max="70"
                                step="1"
                                value={taxaRetornoFidelify}
                                onChange={(e) => setTaxaRetornoFidelify(Number(e.target.value))}
                                className="w-full h-3 rounded-full appearance-none cursor-pointer slider-green"
                                style={{
                                    background: `linear-gradient(to right, #22c55e 0%, #22c55e ${((taxaRetornoFidelify - 30) / (70 - 30)) * 100}%, #bbf7d0 ${((taxaRetornoFidelify - 30) / (70 - 30)) * 100}%, #bbf7d0 100%)`
                                }}
                            />
                            <div className="flex justify-between text-xs text-slate-400">
                                <span>30% (conservador)</span>
                                <span>70% (otimista)</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cards de Comparação */}
                <div className="grid lg:grid-cols-3 gap-6">

                    {/* Card 1: Sua Situação Hoje (Negativo) */}
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl border-2 border-red-100 p-6 md:p-8 relative overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl animate-slide-left">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-100/50 rounded-full -translate-y-16 translate-x-16" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                                    <AlertTriangle className="text-red-500" size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-red-700">SUA SITUAÇÃO HOJE</h3>
                                    <p className="text-xs text-red-500">Sem programa de fidelidade</p>
                                </div>
                            </div>

                            {/* Resumo Atual */}
                            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-red-100">
                                <p className="text-xs text-slate-500 uppercase tracking-wide mb-3 flex items-center gap-1">
                                    <Info size={12} />
                                    Resumo dos seus números atuais
                                </p>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-slate-600 flex items-center gap-1">
                                        <DollarSign size={14} className="text-slate-400" />
                                        Faturamento mensal
                                    </span>
                                    <span className="font-bold text-navy">{formatCurrency(faturamento)}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-slate-600 flex items-center gap-1">
                                        <Repeat size={14} className="text-slate-400" />
                                        Taxa de retorno atual
                                    </span>
                                    <span className="font-bold text-red-500">{taxaRetornoAtual}%</span>
                                </div>
                            </div>

                            {/* Clientes que voltam */}
                            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-red-100">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-slate-600 font-medium flex items-center gap-1">
                                        <Users size={14} className="text-green-500" />
                                        Clientes que voltam a comprar
                                        <Tooltip text="De cada 100 clientes, quantos fazem uma segunda compra" />
                                    </span>
                                    <span className="font-bold text-navy text-lg">{clientesQueVoltam}</span>
                                </div>
                                <div className="w-full bg-red-200 rounded-full h-4 overflow-hidden mb-2">
                                    <div
                                        className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                                        style={{ width: `${Math.max(taxaRetornoAtual, 10)}%` }}
                                    >
                                        <span className="text-[10px] text-white font-bold">{taxaRetornoAtual}%</span>
                                    </div>
                                </div>
                                <p className="text-xs text-red-500 flex items-center gap-1 font-medium">
                                    <TrendingDown size={12} />
                                    {clientesQueSomem} clientes somem todo mês e nunca mais voltam
                                </p>
                            </div>

                            {/* Perda Mensal */}
                            <div className="bg-red-100/80 rounded-2xl p-5 border border-red-200">
                                <p className="text-xs text-red-600 uppercase tracking-wide mb-1 font-semibold flex items-center gap-1">
                                    <AlertTriangle size={12} />
                                    Perda Mensal Estimada
                                    <Tooltip text="Dinheiro que você deixa de ganhar por não fidelizar clientes" />
                                </p>
                                <p className="text-3xl md:text-4xl font-bold text-red-600 transition-all duration-300">
                                    {formatCurrency(perdaMensal)}
                                </p>
                                <p className="text-xs text-red-500 mt-2">
                                    💸 Valor deixado na mesa por não fidelizar seus {clientesQueSomem} clientes perdidos
                                </p>
                            </div>

                            {/* Alerta */}
                            <div className="mt-4 p-3 bg-yellow-50 rounded-xl border border-yellow-200 flex items-start gap-2">
                                <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                                <p className="text-xs text-yellow-700">
                                    <strong>Custo de aquisição:</strong> Você paga <strong className="text-red-600">{formatCurrency(CUSTO_AQUISICAO)}</strong> para trazer cada cliente novo. Se ele não volta, esse dinheiro é jogado fora.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Com Fidelify (Positivo) */}
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl border-2 border-emerald-200 p-6 md:p-8 relative overflow-hidden lg:scale-105 lg:shadow-2xl lg:z-10 transform transition-all duration-500 hover:shadow-3xl animate-slide-up-delay">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-full -translate-y-16 translate-x-16" />
                        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-teal-100/50 rounded-full" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                                    <Sparkles className="text-emerald-600" size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-emerald-700">COM FIDELIFY</h3>
                                    <p className="text-xs text-emerald-600">Com programa de cashback</p>
                                </div>
                            </div>

                            {/* Projeção de Retorno */}
                            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-emerald-100">
                                <div className="flex justify-between items-center mb-2">
                                    <p className="text-xs text-slate-500 uppercase tracking-wide flex items-center gap-1">
                                        <TrendingUp size={12} className="text-emerald-500" />
                                        Nova Taxa de Retorno
                                        <Tooltip text="Projeção de clientes que voltam com cashback ativo" />
                                    </p>
                                    <span className="text-2xl font-bold text-emerald-600">{taxaRetornoFidelify}%</span>
                                </div>
                                <p className="text-xs text-slate-500">Arraste o slider verde acima para simular cenários</p>
                            </div>

                            {/* Aumento de Clientes Fiéis */}
                            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-emerald-100">
                                <p className="text-xs text-slate-500 uppercase tracking-wide mb-4 flex items-center gap-1">
                                    <Users size={12} className="text-emerald-500" />
                                    Comparativo: Clientes que Voltam
                                    <Tooltip text="Barra vermelha = hoje | Barra verde = com Fidelify" />
                                </p>

                                <div className="space-y-4">
                                    {/* Barra SEM Fidelify */}
                                    <div>
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-xs text-red-600 font-medium">❌ Sem Fidelify (hoje)</span>
                                            <span className="text-xs font-bold text-red-600">{clientesQueVoltam} clientes</span>
                                        </div>
                                        <div className="w-full bg-slate-200 rounded-full h-5 overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                                                style={{ width: `${taxaRetornoAtual}%` }}
                                            >
                                                <span className="text-[10px] text-white font-bold">{taxaRetornoAtual}%</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Barra COM Fidelify */}
                                    <div>
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-xs text-emerald-600 font-medium">✅ Com Fidelify</span>
                                            <span className="text-xs font-bold text-emerald-600">{clientesRecorrentes} clientes</span>
                                        </div>
                                        <div className="w-full bg-slate-200 rounded-full h-5 overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                                                style={{ width: `${taxaRetornoFidelify}%` }}
                                            >
                                                <span className="text-[10px] text-white font-bold">{taxaRetornoFidelify}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 p-3 bg-emerald-100 rounded-xl text-center">
                                    <p className="text-emerald-700 font-bold text-lg">
                                        +{clientesRecuperados} clientes voltando 🎉
                                    </p>
                                    <p className="text-xs text-emerald-600">Clientes recuperados todo mês</p>
                                </div>
                            </div>

                            {/* Nova Receita Recorrente */}
                            <div className="bg-emerald-100/80 rounded-2xl p-5 border border-emerald-200">
                                <p className="text-xs text-emerald-700 uppercase tracking-wide mb-1 font-semibold flex items-center gap-1">
                                    <DollarSign size={12} />
                                    Nova Receita Mensal
                                    <Tooltip text="Faturamento extra gerado pelos clientes que voltaram" />
                                </p>
                                <p className="text-3xl md:text-4xl font-bold text-emerald-600 transition-all duration-300">
                                    {formatCurrency(novaReceita)}
                                </p>
                                <p className="text-xs text-emerald-600 mt-2">
                                    📈 Aumento de <strong className="text-emerald-700">+{formatCurrency(aumentoReceita)}</strong> no faturamento
                                </p>
                            </div>

                            {/* CTA no card central */}
                            <a href="#pricing">
                                <button className="w-full mt-4 py-3 px-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                                    Quero Esses Resultados
                                    <ArrowRight size={18} />
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Card 3: Retorno (ROI) */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border-2 border-blue-100 p-6 md:p-8 relative overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl animate-slide-right">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full -translate-y-16 translate-x-16" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <Trophy className="text-blue-600" size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-blue-700">RETORNO (ROI)</h3>
                                    <p className="text-xs text-blue-500">Seu lucro com a Fidelify</p>
                                </div>
                            </div>

                            {/* Resultado Líquido */}
                            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-blue-100">
                                <p className="text-xs text-slate-500 uppercase tracking-wide mb-3 flex items-center gap-1">
                                    <Calculator size={12} />
                                    Cálculo do Lucro Mensal
                                </p>
                                <div className="flex justify-between items-center text-sm mb-2">
                                    <span className="text-slate-600 flex items-center gap-1">
                                        <TrendingUp size={14} className="text-emerald-500" />
                                        Receita extra gerada
                                        <Tooltip text="Faturamento adicional dos clientes recuperados" />
                                    </span>
                                    <span className="font-bold text-emerald-600">{formatCurrency(novaReceita)}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm mb-2">
                                    <span className="text-slate-600 flex items-center gap-1">
                                        <PiggyBank size={14} className="text-red-500" />
                                        Investimento Fidelify
                                        <Tooltip text="Valor do plano mensal da Fidelify" />
                                    </span>
                                    <span className="font-bold text-red-500">- {formatCurrency(INVESTIMENTO_MENSAL)}</span>
                                </div>
                                <div className="border-t-2 border-dashed border-blue-200 pt-3 mt-3">
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-navy flex items-center gap-1">
                                            💰 LUCRO MENSAL LÍQUIDO
                                        </span>
                                        <span className={`text-xl font-bold transition-all duration-300 ${lucroMensal > 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                                            {formatCurrency(lucroMensal)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* ROI Percentual */}
                            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-5 mb-4 text-center text-white">
                                <p className="text-xs uppercase tracking-wide mb-1 opacity-90 flex items-center justify-center gap-1">
                                    🚀 Retorno sobre Investimento (ROI)
                                </p>
                                <p className="text-5xl font-bold transition-all duration-300">
                                    {roiPercentual > 0 ? roiPercentual.toLocaleString('pt-BR') : 0}%
                                </p>
                                <p className="text-xs opacity-75 mt-1">Para cada R$1 investido, você ganha R${(roiPercentual / 100).toFixed(0)}</p>
                            </div>

                            {/* Badge de destaque */}
                            {roiPercentual >= 1000 && (
                                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold py-2 px-4 rounded-xl mb-4 flex items-center justify-center gap-2 animate-pulse">
                                    <Zap size={14} />
                                    RETORNO EXCEPCIONAL! Multiplique por {Math.floor(roiPercentual / 100)}x seu investimento
                                </div>
                            )}

                            {/* Projeção 12 Meses */}
                            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-blue-100">
                                <div className="flex justify-between items-center mb-3">
                                    <p className="text-xs text-slate-500 uppercase tracking-wide flex items-center gap-1">
                                        <Calendar size={12} className="text-blue-500" />
                                        Projeção Anual (12 meses)
                                        <Tooltip text="Lucro acumulado se mantiver a Fidelify por 1 ano" />
                                    </p>
                                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-medium">Acumulado</span>
                                </div>

                                {/* Mini gráfico visual */}
                                <div className="h-16 flex items-end gap-1 mb-3">
                                    {[...Array(12)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm transition-all duration-500 relative group"
                                            style={{
                                                height: `${20 + i * 7}%`,
                                                transitionDelay: `${i * 50}ms`
                                            }}
                                        >
                                            <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[8px] text-slate-400 opacity-0 group-hover:opacity-100">
                                                {i + 1}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[10px] text-slate-400 text-center mb-2">Meses →</p>

                                <div className="text-center p-3 bg-blue-50 rounded-xl">
                                    <p className="text-xs text-slate-500">🎯 Ganho acumulado em 1 ano:</p>
                                    <p className="text-2xl font-bold text-emerald-600 transition-all duration-300">
                                        {formatCurrency(ganho12Meses)}
                                    </p>
                                </div>
                            </div>

                            {/* Payback */}
                            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-blue-100 flex items-center justify-between">
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wide flex items-center gap-1">
                                        <Clock size={12} className="text-blue-500" />
                                        Tempo de Payback
                                        <Tooltip text="Quantos dias leva para recuperar seu investimento" />
                                    </p>
                                    <p className="text-sm text-slate-600">Retorno do investimento</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-emerald-600 transition-all duration-300">
                                        {paybackDias} {paybackDias === 1 ? 'dia' : 'dias'}
                                    </p>
                                    <span className="text-xs text-emerald-500 flex items-center gap-1 justify-end">
                                        <Zap size={12} />
                                        Retorno imediato!
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12 animate-fade-in-delay">
                    <p className="text-slate-600 mb-4">
                        📊 Resultados baseados em dados reais do varejo brasileiro
                    </p>
                    <a href="#pricing">
                        <button className="py-4 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/25 text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
                            Começar a Fidelizar Agora
                        </button>
                    </a>
                </div>
            </div>

            {/* Custom styles */}
            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-fade-in-delay {
          animation: fadeIn 0.6s ease-out 0.5s forwards;
          opacity: 0;
        }
        .animate-slide-up {
          animation: slideUp 0.6s ease-out 0.1s forwards;
          opacity: 0;
        }
        .animate-slide-up-delay {
          animation: slideUp 0.6s ease-out 0.3s forwards;
          opacity: 0;
        }
        .animate-slide-left {
          animation: slideLeft 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }
        .animate-slide-right {
          animation: slideRight 0.6s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: white;
          border: 4px solid #3b82f6;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 6px 16px rgba(0,0,0,0.2);
        }
        input[type="range"]::-moz-range-thumb {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: white;
          border: 4px solid #3b82f6;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .slider-red::-webkit-slider-thumb {
          border-color: #ef4444;
        }
        .slider-red::-moz-range-thumb {
          border-color: #ef4444;
        }
        .slider-green::-webkit-slider-thumb {
          border-color: #22c55e;
        }
        .slider-green::-moz-range-thumb {
          border-color: #22c55e;
        }
      `}</style>
        </section>
    );
};

export default ROICalculator;
