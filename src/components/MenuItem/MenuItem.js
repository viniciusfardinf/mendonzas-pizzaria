// src/components/MenuItem/MenuItem.jsx
import React from 'react';
import styles from './MenuItem.module.css';

function MenuItem({ item }) {
  if (!item) {
    return <div className={styles.errorContainer}>Erro: Dados do item do cardápio estão faltando.</div>;
  }

  const { name, description, priceP, priceG, price, imageUrl } = item; 

  const itemName = name || 'Item Desconhecido';
  const itemDescription = description || 'Sem descrição disponível.';
  const finalImageUrl = imageUrl || '/assets/placeholder-pizza.jpg'; 

  return (
    <div className={styles.menuItem}>
      <div className={styles.itemImageContainer}>
        <img
          src={finalImageUrl}
          alt={itemName}
          className={styles.itemImage}
          loading="lazy"
        />
      </div>
      <div className={styles.itemContent}>
        <div className={styles.itemHeader}>
          <h3 className={styles.itemName}>{itemName}</h3>
        </div>
        {itemDescription && (
          <p className={styles.itemDescription}>{itemDescription}</p>
        )}
        {/* AGORA: O bloco de preços vem DEPOIS da descrição */}
        <div className={styles.itemPrices}>
          {priceP && priceG && (
            <>
              <p className={styles.priceOption}>P: {priceP}</p>
              <p className={styles.priceOption}>G: {priceG}</p>
            </>
          )}
          {price && !priceP && !priceG && (
            <p className={styles.priceOption}>{price}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuItem;