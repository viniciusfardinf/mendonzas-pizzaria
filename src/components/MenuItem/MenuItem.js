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
  // Se imageUrl for vazio ou undefined, usa um placeholder local
  const finalImageUrl = imageUrl || '/assets/placeholder-pizza.jpg'; 

  // Função para formatar o preço com "R$" se necessário
  const formatPrice = (p) => {
    if (!p) return '';
    // Verifica se já começa com "R$" ou "R$ "
    if (String(p).trim().startsWith('R$')) {
      return String(p).trim();
    }
    // Para casos como o do suco, onde o "R$" pode estar no meio
    if (itemName === "Suco" && String(p).includes("R$")) {
        return String(p).trim(); // Mantém como está para o suco se já contiver R$
    }
    return `R$ ${String(p).trim()}`; // Adiciona "R$" e um espaço
  };

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
        <div className={styles.itemPrices}>
          {priceP && priceG ? (
            // Se tiver priceP e priceG, mostra ambos
            <>
              <p className={styles.priceOption}>P: {formatPrice(priceP)}</p>
              <p className={styles.priceOption}>G: {formatPrice(priceG)}</p>
            </>
          ) : price ? (
            // Se tiver apenas price, mostra ele
            <p className={styles.priceOption}>{formatPrice(price)}</p>
          ) : (
            // Caso não tenha nenhum preço (opcional, pode ser uma mensagem ou vazio)
            <p className={styles.priceOption}>Preço sob consulta</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuItem;