import React from 'react';
import styles from './HeroSection.module.css';
import carouselImg2 from '../../assets/carousel/2.jpg'; // Imagem da esquerda
import carouselImg7 from '../../assets/carousel/7.jpg'; // Imagem da direita
import heroBgMobile from '../../assets/carousel/1.jpg'; // Imagem de fundo para mobile

function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Imagem principal de fundo para desktop/tablet, oculta em mobile se heroBgMobile for usado */}
      <img src={carouselImg2} alt="Pizzaiolo preparando pizza" className={styles.heroImageLeft} loading="lazy" />
      <img src={carouselImg7} alt="Pizzaiolo com pizza no forno" className={styles.heroImageRight} loading="lazy" />

      {/* Elemento para imagem de fundo exclusiva para mobile */}
      <div className={styles.heroBackgroundMobile} style={{ backgroundImage: `url(${heroBgMobile})` }}></div>

      <div className={styles.heroContent}>
        <h1>Sabor Artesanal, Momentos Inesquecíveis!</h1>
        <p>Experimente a verdadeira pizza de fermentação natural. Feita com paixão, servida com carinho.</p>
        <a href="#menu" className="btn-primary">Ver Cardápio</a>
      </div>
    </section>
  );
}

export default HeroSection;