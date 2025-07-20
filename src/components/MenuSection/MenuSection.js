// src/components/MenuSection/MenuSection.js

import React, { useEffect, useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import menuData from '../../data/menu.json'; // Importa seu arquivo JSON de dados do menu
import styles from './MenuSection.module.css'; // Importa o CSS Module

// --- Mapeamento de Imagens (se estiver aqui ou em um arquivo auxiliar) ---
// Isso importa todas as imagens de src/assets/pizzas, pizzas_doces, etc.
const imageContext = require.context('../../assets/', true, /\.(png|jpe?g|svg)$/);
const imageMap = imageContext.keys().reduce((acc, item) => {
  acc[item.replace('./', '/assets/')] = imageContext(item); // Converte para '/assets/pizzas/frango_cremoso.jpg'
  return acc;
}, {});
// --- FIM DO Mapeamento de Imagens ---

function MenuSection() {
  const [menuCategories, setMenuCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    try {
      setMenuCategories(menuData);
      setLoading(false);
      if (menuData.length > 0) {
        setActiveCategory(menuData[0].category);
      }
    } catch (err) {
      console.error("[MenuSection] Erro fatal ao carregar ou processar o cardápio:", err);
      setError("Erro ao carregar o cardápio. Por favor, verifique o arquivo menu.json.");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <section id="menu" className={styles.menuSection}> {/* ID AQUI */}
        <p>Carregando cardápio...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="menu" className={styles.menuSection}> {/* ID AQUI */}
        <p className={styles.errorMessage}>Erro: {error}</p>
      </section>
    );
  }

  if (menuCategories.length === 0 || menuCategories.every(cat => !cat.items || cat.items.length === 0)) {
    return (
      <section id="menu" className={styles.menuSection}> {/* ID AQUI */}
        <p className={styles.noItemsMessage}>Nenhum item de cardápio disponível no momento.</p>
      </section>
    );
  }

  const allCategories = menuCategories.map(cat => cat.category);

  const filteredCategories = activeCategory
    ? menuCategories.filter(cat => cat.category === activeCategory)
    : menuCategories;

  return (
    <section id="menu" className={styles.menuSection}> {/* ID AQUI */}
      <div className={styles.categoryButtons}>
        {allCategories.map(category => (
          <button
            key={category}
            className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredCategories.length === 0 && activeCategory && (
        <p className={styles.noItemsMessage}>Nenhum item na categoria "{activeCategory}" no momento.</p>
      )}

      {filteredCategories.map(categoryData => (
        (activeCategory === categoryData.category || !activeCategory) && (
          <div key={categoryData.category} className={styles.menuCategory}>
            <h3 className={styles.categoryTitle}>{categoryData.category}</h3>
            <div className={styles.menuItemsGrid}>
              {categoryData.items.map(item => (
                <MenuItem
                  key={item.id}
                  item={{ ...item, imageUrl: imageMap[item.imageUrl] || item.imageUrl }} // Passa a URL resolvida
                />
              ))}
            </div>
          </div>
        )
      ))}
    </section>
  );
}

export default MenuSection;