import React from 'react';
import styles from './AboutSection.module.css';
// REMOVIDO: import TestimonialsSlider from '../TestimonialsSlider/TestimonialsSlider'; // NÃO importamos mais aqui

function AboutSection() {
  return (
    <section id="sobre-carousel" className={styles.aboutSection}>
      <div className={`${styles.container} container ${styles.aboutContainer}`}>
        <div className={styles.quemSomos}>
          <h2 className="section-title">Quem Somos</h2>
          <p>
            A <strong>Mendonza's Pizzaria</strong> traz para você a autêntica pizza com 🌿 fermentação natural,
            resultando em uma massa leve, crocante e incrivelmente saborosa que vai além do forno! Cada
            ingrediente é selecionado com carinho para garantir uma experiência única a cada mordida.
          </p>
          <p>
            Venha nos visitar ou faça seu pedido! Estamos abertos de ⏱️ <strong>Quarta a Domingo, das 19h às 22h</strong>.
            Encontre-nos em 📍 <strong>Rua Manoel Alonso Portela, Muniz Freire - ES</strong>.
          </p>
        </div>
        {/* TestimonialsSlider NÃO é mais renderizado AQUI */}
      </div>
       {/* TestimonialsSlider NÃO é mais renderizado AQUI também */}
    </section>
  );
}

export default AboutSection;