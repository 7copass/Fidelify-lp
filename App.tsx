import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import SocialProof from './sections/SocialProof';
import PainPoints from './sections/PainPoints';
import HowItWorks from './sections/HowItWorks';
import Features from './sections/Features';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';
import FAQ from './sections/FAQ';
import CallToAction from './sections/CallToAction';
import Footer from './sections/Footer';
import TermosDeServico from './sections/TermosDeServico';

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
      <Testimonials />
      <Pricing />
      <FAQ />
      <CallToAction />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/termos-de-servico" element={<TermosDeServico />} />
      </Routes>
    </Router>
  );
}

export default App;