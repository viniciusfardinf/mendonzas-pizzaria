import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import ChefBiography from './components/ChefBiography/ChefBiography'; // Importa o novo componente ChefBiography
import MenuSection from './components/MenuSection/MenuSection';
import AboutSection from './components/AboutSection/AboutSection'; // Seção "Sobre Nós" simplificada
import Footer from './components/Footer/Footer';

// Observação: Não há necessidade de importar App.css se você usa GlobalStyles.css e CSS Modules
// import './App.css'; 

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <ChefBiography />   {/* Seção da biografia do chef, antes do cardápio */}
        <MenuSection />     {/* Seção do Cardápio */}
        <AboutSection />   {/* Seção "Sobre Nós" (apenas o texto) */}
      </main>
      <Footer />
    </div>
  );
}

export default App;