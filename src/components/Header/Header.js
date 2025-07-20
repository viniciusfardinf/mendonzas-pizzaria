// src/components/Header/Header.js

import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.mainHeader}>
      <div className={`${styles.container} ${styles.headerContainer}`}>
        {/* LOGO DA PIZZARIA - Clicável para voltar ao topo (Hero Section) */}
      
        
        <nav className={styles.mainNav}>
          <ul>        
            <li><a href="#biografia" className={styles.navButton}>Biografia</a></li> {/* Botão Biografia */}
            <li><a href="#menu" className={styles.navButton}>Cardápio</a></li>
            <li><a href="#contato" className={styles.navButton}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;