import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import ChefBiography from './components/ChefBiography/ChefBiography';
import MenuSection from './components/MenuSection/MenuSection';
import AboutSection from './components/AboutSection/AboutSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <ChefBiography />
        <MenuSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;