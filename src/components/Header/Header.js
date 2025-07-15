import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.mainHeader}>
      <div className={`${styles.container} ${styles.headerContainer}`}>
        <nav className={styles.mainNav}>
          <ul>
            <li><a href="#sobre-carousel">Sobre Nós</a></li>
            <li><a href="#biografia">Biografia</a></li> {/* Botão Biografia */}
            <li><a href="#menu">Cardápio</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;