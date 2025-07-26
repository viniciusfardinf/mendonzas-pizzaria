import React, { useEffect, useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import styles from './MenuSection.module.css';

// --- Mapeamento de Imagens (mantém como está) ---
// Isso importa todas as imagens de src/assets/pizzas, pizzas_doces, etc.
const imageContext = require.context('../../assets/', true, /\.(png|jpe?g|svg)$/);
const imageMap = imageContext.keys().reduce((acc, item) => {
  acc[item.replace('./', '/assets/')] = imageContext(item); // Converte para '/assets/pizzas/presunto_queijo.jpg'
  return acc;
}, {});
// --- FIM DO Mapeamento de Imagens ---

function MenuSection() {
  const [menuCategories, setMenuCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        // SUBSTITUA ESTA URL PELA URL DE "Web app" QUE VOCÊ COPIOU DO APPS SCRIPT
        const appsScriptUrl = "https://script.google.com/macros/s/AKfycbz6gVwRAj391QEuUr19vUuD5zSpalwaxaD3pEq3X6dZSBHyAX-yIi3Qt0mqNsjK3sTO5A/exec";

        const response = await fetch(appsScriptUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // Já esperamos um JSON direto

        setMenuCategories(data);
        setLoading(false);
        if (data.length > 0) {
          setActiveCategory(data[0].category);
        }
      } catch (err) {
        console.error("[MenuSection] Erro ao carregar ou processar o cardápio do Apps Script:", err);
        setError("Erro ao carregar o cardápio. Por favor, verifique a URL do Apps Script ou a permissão da planilha.");
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  if (loading) {
    return (
      <section id="menu" className={styles.menuSection}>
        <p>Carregando cardápio...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="menu" className={styles.menuSection}>
        <p className={styles.errorMessage}>Erro: {error}</p>
      </section>
    );
  }

  if (menuCategories.length === 0 || menuCategories.every(cat => !cat.items || cat.items.length === 0)) {
    return (
      <section id="menu" className={styles.menuSection}>
        <p className={styles.noItemsMessage}>Nenhum item de cardápio disponível no momento.</p>
      </section>
    );
  }

  const allCategories = menuCategories.map(cat => cat.category);

  const filteredCategories = activeCategory
    ? menuCategories.filter(cat => cat.category === activeCategory)
    : menuCategories;

  return (
    <section id="menu" className={styles.menuSection}>
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
                  item={{ ...item, imageUrl: imageMap[item.imageUrl] || item.imageUrl }}
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