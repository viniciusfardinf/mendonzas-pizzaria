import React from 'react';
import styles from './MenuItem.module.css';

function MenuItem({ item }) {
  if (!item) {
    return <div className={styles.errorContainer}>Erro: Dados do item do cardápio estão faltando.</div>;
  }

  // A imageUrl agora será a URL já resolvida pelo Webpack,
  // vinda diretamente do MenuSection.
  const { name, description, price, imageUrl } = item; 

  const itemName = name || 'Item Desconhecido';
  const itemDescription = description || 'Sem descrição disponível.';
  // Definimos um placeholder mais robusto para ser usado se imageUrl for vazia ou inválida.
  // Certifique-se de ter um arquivo 'placeholder-pizza.jpg' em 'public/assets'
  const finalImageUrl = imageUrl || '/assets/placeholder-pizza.jpg'; 

  return (
    <div className={styles.menuItem}>
      <div className={styles.itemImageContainer}>
        <img
          src={finalImageUrl} // Usa a URL já resolvida
          alt={itemName}
          className={styles.itemImage}
          loading="lazy"
        />
      </div>
      <div className={styles.itemContent}>
        <div className={styles.itemHeader}>
          <h3 className={styles.itemName}>{itemName}</h3>
          <p className={styles.itemPrice}>{price}</p>
        </div>
        {itemDescription && (
          <p className={styles.itemDescription}>{itemDescription}</p>
        )}
      </div>
    </div>
  );
}

export default MenuItem;