import React from 'react';
import styles from './HeroSection.module.css';
import carouselImg2 from '../../assets/carousel/2.jpg'; // Importa a imagem 2
import carouselImg7 from '../../assets/carousel/7.jpg'; // Importa a imagem 7

function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
      <img src={carouselImg2} alt="Pizzaiolo preparando pizza" className={styles.heroImageLeft} loading="lazy" />
      <div className={styles.heroContent}>
        <h1>Sabor Artesanal, Momentos Inesquecíveis!</h1>
        <p>Experimente a verdadeira pizza de fermentação natural. Feita com paixão, servida com carinho.</p>
        <a href="#menu" className="btn-primary">Ver Cardápio</a>
      </div>
      <img src={carouselImg7} alt="Pizzaiolo com pizza no forno" className={styles.heroImageRight} loading="lazy" />
    </section>
  );
}

export default HeroSection;