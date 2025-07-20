// src/components/HeroSection/HeroSection.js

import React from 'react';
import styles from './HeroSection.module.css';
import carouselImg2 from '../../assets/carousel/2.jpg';
import carouselImg7 from '../../assets/carousel/7.jpg';
import heroBgMobile from '../../assets/carousel/1.jpg';

function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
      <img src={carouselImg2} alt="Pizzaiolo preparando pizza" className={styles.heroImageLeft} loading="lazy" />
      <img src={carouselImg7} alt="Pizzaiolo com pizza no forno" className={styles.heroImageRight} loading="lazy" />

      <div className={styles.heroBackgroundMobile} style={{ backgroundImage: `url(${heroBgMobile})` }}></div>

      <div className={styles.heroContent}>
        <h1>A Mendonza's Pizzaria traz para você a autêntica pizza com fermentação natural.</h1>
        <p>Resultando em uma massa leve, crocante e incrivelmente saborosa que vai além do forno! Cada ingrediente é selecionado com carinho para garantir uma experiência única a cada mordida.</p>
        <a href="#menu" className={styles.heroButton}>Ver Cardápio</a> {/* Usando styles.heroButton */}
      </div>
    </section>
  );
}

export default HeroSection;