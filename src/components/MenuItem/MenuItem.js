import React from 'react';
import styles from './MenuItem.module.css';

function MenuItem({ pizza }) {
  return (
    <div className={styles.menuItemCard}>
      <img src={pizza.image} alt={pizza.name} className={styles.itemImage} loading="lazy" />
      <div className={styles.itemInfo}>
        <h3 className={styles.itemName}>{pizza.name}</h3>
        <p className={styles.itemDescription}>{pizza.description}</p>
        <p className={styles.itemPrice}>{pizza.price}</p>
      </div>
    </div>
  );
}

export default MenuItem;