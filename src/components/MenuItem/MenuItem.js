// src/components/MenuItem/MenuItem.js

import React from 'react';
import styles from './MenuItem.module.css';

// --- NOVO: Mapeamento de Imagens ---
// Isso importa todas as imagens de src/assets/pizzas, pizzas_doces, etc.
// Certifique-se de que os nomes dos arquivos JPG/PNG correspondam aos caminhos no seu menu.json
const imageContext = require.context('../../assets/', true, /\.(png|jpe?g|svg)$/);
const imageMap = imageContext.keys().reduce((acc, item) => {
  // A chave será o caminho relativo dentro de assets, ex: './pizzas/frango_cremoso.jpg'
  // O valor será a URL processada pelo Webpack
  acc[item.replace('./', '/assets/')] = imageContext(item); // Converte para '/assets/pizzas/frango_cremoso.jpg'
  return acc;
}, {});
// --- FIM DO NOVO: Mapeamento de Imagens ---


function MenuItem({ item }) {
  if (!item) {
    return <div className={styles.errorContainer}>Erro: Dados do item do cardápio estão faltando.</div>;
  }

  const { name, description, price, imageUrl, tags } = item;

  const itemName = name || 'Item Desconhecido';
  const itemDescription = description || 'Sem descrição disponível.';
  const itemPrice = price || 'Preço N/A';

  // --- NOVO: Obtém a imagem do mapa ---
  // Se imageUrl for "/assets/pizzas/frango_cremoso.jpg", ele procurará essa chave no imageMap
  const resolvedImageUrl = imageMap[imageUrl] || '/assets/placeholder-pizza.jpg'; // Adicione um placeholder em public/assets se não encontrar
  // --- FIM DO NOVO ---

  return (
    <div className={styles.menuItem}>
      <div className={styles.itemImageContainer}>
        <img
          src={resolvedImageUrl} // Usa a URL resolvida
          alt={itemName}
          className={styles.itemImage}
          loading="lazy"
        />
        {tags && tags.length > 0 && (
          <div className={styles.itemTags}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>
      <div className={styles.itemContent}>
        <div className={styles.itemHeader}>
          <h3 className={styles.itemName}>{itemName}</h3>
          <p className={styles.itemPrice}>{itemPrice}</p>
        </div>
        {itemDescription && (
          <p className={styles.itemDescription}>{itemDescription}</p>
        )}
      </div>
    </div>
  );
}

export default MenuItem;