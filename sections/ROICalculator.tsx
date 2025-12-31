import React, { useState } from 'react';
import { Calculator, TrendingDown, TrendingUp, ArrowRight, Calendar } from 'lucide-react';
import { useScheduleMeeting } from '../contexts/ScheduleMeetingContext';

const ROICalculator: React.FC = () => {
    const { openModal } = useScheduleMeeting();

    // Estados dos sliders
    const [faturamento, setFaturamento] = useState(50000);
    const [taxaRetornoAtual, setTaxaRetornoAtual] = useState(15);
    const [taxaRetornoFidelify, setTaxaRetornoFidelify] = useState(45);

    // Constantes
    const CLIENTES_BASE = 100;

    // Cálculos
    const ticketMedio = faturamento / CLIENTES_BASE;
    const clientesQueVoltam = Math.round(CLIENTES_BASE * (taxaRetornoAtual / 100));
    const clientesQueSomem = CLIENTES_BASE - clientesQueVoltam;
    const perdaMensal = clientesQueSomem * ticketMedio;
    const perdaAnual = perdaMensal * 12;

    // Com Fidelify
    const clientesRecorrentes = Math.round(CLIENTES_BASE * (taxaRetornoFidelify / 100));
    const clientesRecuperados = clientesRecorrentes - clientesQueVoltam;
    const novaReceitaMensal = clientesRecuperados * ticketMedio;
    const ganhoAnual = novaReceitaMensal * 12;

    // Formatação de moeda
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    };

    return (
        <section id="calculadora" className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6 gap-2">
                        <Calculator size={16} />
                        Calculadora de Resultados
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                        Descubra quanto você está deixando de ganhar
                    </h2>
                    <p className="text-lg text-slate-600">
                        Ajuste os valores abaixo e veja o impacto real no seu faturamento
                    </p>
                </div>

                {/* Sliders Section */}
                <div className="bg-slate-50 rounded-2xl p-6 md:p-8 mb-10">
                    <div className="grid md:grid-cols-3 gap-8">

                        {/* Slider 1: Faturamento */}
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-medium text-slate-700">
                                    Faturamento Mensal
                                </label>
                                <span className="text-lg font-bold text-navy">{formatCurrency(faturamento)}</span>
                            </div>
                            <input
                                type="range"
                                min="10000"
                                max="500000"
                                step="5000"
                                value={faturamento}
                                onChange={(e) => setFaturamento(Number(e.target.value))}
                                className="w-full h-2 rounded-full appearance-none cursor-pointer bg-slate-200"
                                style={{
                                    background: `linear-gradient(to right, #1E293B 0%, #1E293B ${((faturamento - 10000) / (500000 - 10000)) * 100}%, #e2e8f0 ${((faturamento - 10000) / (500000 - 10000)) * 100}%, #e2e8f0 100%)`
                                }}
                            />
                            <div className="flex justify-between text-xs text-slate-400">
                                <span>R$ 10mil</span>
                                <span>R$ 500mil</span>
                            </div>
                            {/* Legenda explicativa */}
                            <p className="text-xs text-slate-500 bg-white rounded-lg p-3 border border-slate-200">
                                💡 <strong>Sua situação:</strong> Você fatura <span className="font-semibold text-navy">{formatCurrency(faturamento)}</span> por mês
                            </p>
                        </div>

                        {/* Slider 2: Taxa de Retorno Atual */}
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-medium text-slate-700">
                                    Clientes que voltam hoje
                                </label>
                                <span className="text-lg font-bold text-red-500">{taxaRetornoAtual}%</span>
                            </div>
                            <input
                                type="range"
                                min="5"
                                max="40"
                                step="1"
                                value={taxaRetornoAtual}
                                onChange={(e) => setTaxaRetornoAtual(Number(e.target.value))}
                                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                                style={{
                                    background: `linear-gradient(to right, #ef4444 0%, #ef4444 ${((taxaRetornoAtual - 5) / (40 - 5)) * 100}%, #fecaca ${((taxaRetornoAtual - 5) / (40 - 5)) * 100}%, #fecaca 100%)`
                                }}
                            />
                            <div className="flex justify-between text-xs text-slate-400">
                                <span>5%</span>
                                <span>40%</span>
                            </div>
                            {/* Legenda explicativa */}
                            <p className="text-xs text-slate-500 bg-red-50 rounded-lg p-3 border border-red-100">
                                ⚠️ <strong>O problema:</strong> Apenas <span className="font-semibold text-red-600">{clientesQueVoltam} de cada 100</span> clientes voltam. Os outros <span className="font-semibold text-red-600">{clientesQueSomem} vão embora</span> e nunca mais compram.
                            </p>
                        </div>

                        {/* Slider 3: Projeção com Fidelify */}
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-medium text-slate-700">
                                    Clientes com Fidelify
                                </label>
                                <span className="text-lg font-bold text-green-600">{taxaRetornoFidelify}%</span>
                            </div>
                            <input
                                type="range"
                                min="30"
                                max="70"
                                step="1"
                                value={taxaRetornoFidelify}
                                onChange={(e) => setTaxaRetornoFidelify(Number(e.target.value))}
                                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                                style={{
                                    background: `linear-gradient(to right, #16a34a 0%, #16a34a ${((taxaRetornoFidelify - 30) / (70 - 30)) * 100}%, #bbf7d0 ${((taxaRetornoFidelify - 30) / (70 - 30)) * 100}%, #bbf7d0 100%)`
                                }}
                            />
                            <div className="flex justify-between text-xs text-slate-400">
                                <span>30%</span>
                                <span>70%</span>
                            </div>
                            {/* Legenda explicativa */}
                            <p className="text-xs text-slate-500 bg-green-50 rounded-lg p-3 border border-green-100">
                                ✅ <strong>A solução:</strong> Com cashback, <span className="font-semibold text-green-600">{clientesRecorrentes} de cada 100</span> clientes voltam. Isso significa <span className="font-semibold text-green-600">+{clientesRecuperados} clientes</span> todo mês.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Results - Two Big Cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">

                    {/* Card: O que você PERDE */}
                    <div className="bg-white border-2 border-red-100 rounded-2xl p-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                <TrendingDown className="w-6 h-6 text-red-500" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                                    O que você perde
                                </p>
                                <p className="text-xs text-slate-500">Sem programa de fidelidade</p>
                            </div>
                        </div>

                        <div className="bg-red-50 rounded-xl py-6 px-4 text-center mb-4">
                            <p className="text-4xl md:text-5xl font-bold text-red-600">
                                {formatCurrency(perdaAnual)}
                            </p>
                            <p className="text-sm text-red-500 mt-2 font-medium">
                                por ano
                            </p>
                        </div>

                        <div className="space-y-2 text-sm text-slate-600">
                            <p>📉 <strong>{clientesQueSomem} clientes</strong> compram uma vez e nunca mais voltam</p>
                            <p>💸 Você deixa <strong>{formatCurrency(perdaMensal)}/mês</strong> na mesa</p>
                            <p>❌ Esse dinheiro vai pro seu concorrente</p>
                        </div>
                    </div>

                    {/* Card: O que você GANHA */}
                    <div className="bg-white border-2 border-green-200 rounded-2xl p-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                <TrendingUp className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-green-700 uppercase tracking-wide">
                                    O que você pode ganhar
                                </p>
                                <p className="text-xs text-slate-500">Com a Fidelify</p>
                            </div>
                        </div>

                        <div className="bg-green-50 rounded-xl py-6 px-4 text-center mb-4">
                            <p className="text-4xl md:text-5xl font-bold text-green-600">
                                +{formatCurrency(ganhoAnual)}
                            </p>
                            <p className="text-sm text-green-600 mt-2 font-medium">
                                por ano
                            </p>
                        </div>

                        <div className="space-y-2 text-sm text-slate-600">
                            <p>📈 <strong>+{clientesRecuperados} clientes</strong> voltam todo mês para comprar</p>
                            <p>💰 Você adiciona <strong>+{formatCurrency(novaReceitaMensal)}/mês</strong> ao faturamento</p>
                            <p>✅ Seu cliente gasta com você, não com o concorrente</p>
                        </div>
                    </div>
                </div>

                {/* Summary & CTA */}
                <div className="bg-navy rounded-2xl p-8 text-center text-white">
                    <p className="text-lg mb-2">
                        Resumindo: se você fatura <span className="text-gold font-semibold">{formatCurrency(faturamento)}/mês</span> e apenas <span className="text-red-400 font-semibold">{taxaRetornoAtual}%</span> dos clientes voltam...
                    </p>
                    <p className="text-2xl md:text-3xl font-bold mb-4">
                        Você poderia faturar <span className="text-gold">+{formatCurrency(ganhoAnual)}</span> por ano com a Fidelify
                    </p>
                    <p className="text-slate-300 text-sm mb-6">
                        Agende uma demonstração gratuita e descubra o plano ideal para o seu negócio
                    </p>
                    <button
                        onClick={openModal}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-amber-500 text-white font-semibold rounded-xl transition-colors"
                    >
                        <Calendar size={20} />
                        Agendar Demonstração Gratuita
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>

            {/* Custom slider styles */}
            <style>{`
                input[type="range"]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: white;
                    border: 3px solid #1E293B;
                    cursor: pointer;
                    box-shadow: 0 2px 6px rgba(0,0,0,0.15);
                }
                input[type="range"]::-moz-range-thumb {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: white;
                    border: 3px solid #1E293B;
                    cursor: pointer;
                }
            `}</style>
        </section>
    );
};

export default ROICalculator;
