import React from 'react';
import styles from './Header.module.css';
// REMOVIDO: import logo from '../../assets/logo.webp'; // Não precisamos mais importar o logo se ele for removido

function Header() {
  return (
    <header className={styles.mainHeader}>
      <div className={`${styles.container} ${styles.headerContainer}`}>
        {/* REMOVIDO: <img src={logo} alt="Logo Mendonza’s Pizzaria" className={styles.logo} /> */}
        <nav className={styles.mainNav}>
          <ul>
            <li><a href="#sobre-carousel">Sobre Nós</a></li>
            <li><a href="#menu">Cardápio</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;