// src/App.js

import React from 'react';
import {
  Header,
  HeroSection,
  ChefBiography,
  MenuSection,
  Footer
} from './components'; 

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <ChefBiography />
        <MenuSection />
        {/* <AboutSection /> Removido: A seção "Quem Somos" */}
      </main>
      <Footer />
    </div>
  );
}

export default App;