import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection'; // Manteremos AboutSection para o "Quem Somos"
import MenuSection from './components/MenuSection/MenuSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <MenuSection /> {/* ORDEM ALTERADA: Cardápio vem antes do Sobre Nós */}
        <AboutSection /> {/* ORDEM ALTERADA: Sobre Nós (Quem Somos) vem depois do Cardápio */}
        {/* REMOVIDO: <TestimonialsSlider /> */} {/* Remova esta linha */}
      </main>
      <Footer />
    </div>
  );
}

export default App;