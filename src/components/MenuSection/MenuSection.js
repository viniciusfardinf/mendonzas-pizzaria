// src/components/MenuSection/MenuSection.js
import React, { useState } from 'react'; // Importa useState
import styles from './MenuSection.module.css';
import MenuItem from '../MenuItem/MenuItem';
import menuItemsData from '../../data/menuData'; // Importa os dados do menu

function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('salgada'); // Estado para a categoria ativa, padrão 'salgada'

  const filteredItems = menuItemsData.filter(item => item.category === activeCategory);

  // Mapeamento de categorias para nomes exibíveis
  const categoryNames = {
    salgada: "Pizzas Salgadas",
    doce: "Pizzas Doces",
    bebida: "Bebidas"
  };

  return (
    <section id="menu" className={styles.menuSection}>
      <div className="container">
        <h2 className="section-title">Nosso Cardápio</h2>

        {/* Botões de Filtro */}
        <div className={styles.filterButtons}>
          <button
            className={`${styles.filterBtn} ${activeCategory === 'salgada' ? styles.active : ''}`}
            onClick={() => setActiveCategory('salgada')}
          >
            Salgadas
          </button>
          <button
            className={`${styles.filterBtn} ${activeCategory === 'doce' ? styles.active : ''}`}
            onClick={() => setActiveCategory('doce')}
          >
            Doces
          </button>
          <button
            className={`${styles.filterBtn} ${activeCategory === 'bebida' ? styles.active : ''}`}
            onClick={() => setActiveCategory('bebida')}
          >
            Bebidas
          </button>
        </div>

        {/* Título da Categoria Ativa */}
        <h3 className={styles.categoryTitle}>{categoryNames[activeCategory]}</h3>

        {/* Grid de Itens Filtrados */}
        <div className={styles.menuGrid}>
          {filteredItems.map((item) => (
            <MenuItem key={item.id} pizza={item} /> // Usando item.id como key, que é mais robusto
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className={styles.noItemsMessage}>Nenhum item nesta categoria por enquanto.</p>
        )}
      </div>
    </section>
  );
}

export default MenuSection;