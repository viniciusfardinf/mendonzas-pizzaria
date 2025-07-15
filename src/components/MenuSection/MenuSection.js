import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importa axios para fazer requisições HTTP
import styles from './MenuSection.module.css';
import MenuItem from '../MenuItem/MenuItem';

function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('salgada'); // Estado para a categoria ativa, padrão 'salgada'
  const [menuItems, setMenuItems] = useState([]); // Estado para armazenar os itens do menu puxados do Strapi
  const [loading, setLoading] = useState(true); // Estado de carregamento para mostrar "Carregando..."
  const [error, setError] = useState(null); // Estado para erros na requisição

  // IMPORTANTE: URL da sua API Strapi. Endpoint agora é 'pizza-items'.
  const STRAPI_API_URL = 'http://localhost:1337/api/pizza-items'; 

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setLoading(true); // Inicia o estado de carregamento
        setError(null); // Limpa qualquer erro anterior

        // Faz a requisição GET para a API do Strapi.
        // O '?populate=*' é crucial para que as URLs das imagens sejam incluídas na resposta.
        const response = await axios.get(`${STRAPI_API_URL}?populate=*`);
        
        // O Strapi V4+ retorna os dados dentro de 'data' e os atributos dos campos dentro de 'attributes'.
        const formattedItems = response.data.data.map(item => ({
          id: item.id, // O ID do item no Strapi
          name: item.attributes.name,
          description: item.attributes.description,
          price: item.attributes.price,
          category: item.attributes.category,
          // Verifica se a imagem existe e constrói a URL completa.
          // A URL da imagem do Strapi geralmente é relativa, então concatenamos com a base URL do Strapi.
          image: item.attributes.image.data 
                 ? `http://localhost:1337${item.attributes.image.data.attributes.url}` 
                 : 'https://via.placeholder.com/150?text=Sem+Imagem' // Placeholder caso não tenha imagem
        }));
        
        setMenuItems(formattedItems); // Atualiza o estado com os itens formatados
      } catch (err) {
        console.error("Erro ao buscar itens do menu do Strapi:", err);
        // Mensagem de erro amigável para o usuário
        setError("Não foi possível carregar o cardápio no momento. Por favor, tente novamente mais tarde ou entre em contato.");
      } finally {
        setLoading(false); // Finaliza o estado de carregamento, mesmo em caso de erro
      }
    };

    fetchMenuItems(); // Chama a função para buscar os itens quando o componente é montado
  }, []); // O array de dependências vazio [] garante que este useEffect roda apenas uma vez (na montagem)

  // Filtra os itens do cardápio com base na categoria ativa
  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  // Mapeamento de categorias para nomes exibíveis nos botões e título
  const categoryNames = {
    salgada: "Pizzas Salgadas",
    doce: "Pizzas Doces",
    bebida: "Bebidas"
  };

  // Renderização condicional: mostra mensagem de carregamento, erro ou itens vazios
  if (loading) {
    return (
      <section id="menu" className={styles.menuSection}>
        <div className="container">
          <p className={styles.loadingMessage}>Carregando cardápio...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="menu" className={styles.menuSection}>
        <div className="container">
          <p className={styles.errorMessage}>{error}</p>
        </div>
      </section>
    );
  }

  // Se não há itens depois de carregar e sem erro
  if (menuItems.length === 0) {
    return (
      <section id="menu" className={styles.menuSection}>
        <div className="container">
          <h2 className="section-title">Nosso Cardápio</h2>
          <p className={styles.noItemsMessage}>Nenhum item disponível no cardápio no momento. Por favor, adicione itens no Strapi.</p>
        </div>
      </section>
    );
  }

  // Renderiza o cardápio completo se tudo carregou com sucesso
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
            <MenuItem key={item.id} pizza={item} />
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