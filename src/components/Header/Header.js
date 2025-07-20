// src/components/Header/Header.js

import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.mainHeader}>
      <div className={`${styles.container} ${styles.headerContainer}`}>
        {/* LOGO DA PIZZARIA - Clicável para voltar ao topo (Hero Section) */}
        {/* O título foi removido daqui. Se tiver uma imagem de logo, adicione-a aqui. */}
        <a href="#hero" className={styles.logo}></a> 
        
        <nav className={styles.mainNav}>
          <ul>        
            <li><a href="#biografia" className={styles.navButton}>Biografia</a></li>
            <li><a href="#menu" className={styles.navButton}>Cardápio</a></li>
            {/* O botão de Contato agora também tem o estilo navButton */}
            <li><a href="#contato" className={styles.navButton}>Contato</a></li> 
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;