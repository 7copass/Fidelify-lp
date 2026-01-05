import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import SocialProof from './sections/SocialProof';
import PainPoints from './sections/PainPoints';
import HowItWorks from './sections/HowItWorks';
import Features from './sections/Features';
import ROICalculator from './sections/ROICalculator';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';
import FAQ from './sections/FAQ';
import CallToAction from './sections/CallToAction';
import Footer from './sections/Footer';
import TermosDeServico from './sections/TermosDeServico';
import PoliticaDePrivacidade from './sections/PoliticaDePrivacidade';
import ExclusaoDeDados from './sections/ExclusaoDeDados';
import RetornoExclusaoDados from './sections/RetornoExclusaoDados';
import ThankYou from './sections/ThankYou';
import { ScheduleMeetingProvider } from './contexts/ScheduleMeetingContext';
import ScheduleMeetingModal from './components/ScheduleMeetingModal';

// Componente da página principal (landing page)
const HomePage = () => (
  <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-gold/30 selection:text-navy">
    <Navbar />
    <main>
      <Hero />
      <SocialProof />
      <PainPoints />
      <HowItWorks />
      <Features />
      <ROICalculator />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CallToAction />
    </main>
    <Footer />
    <ScheduleMeetingModal />
  </div>
);

function App() {
  return (
    <ScheduleMeetingProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/termos-de-servico" element={<TermosDeServico />} />
          <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
          <Route path="/exclusao-de-dados" element={<ExclusaoDeDados />} />
          <Route path="/retorno-exclusao-dados" element={<RetornoExclusaoDados />} />
          <Route path="/obrigado" element={<ThankYou />} />
        </Routes>
      </Router>
    </ScheduleMeetingProvider>
  );
}

export default App;