// src/data/menuData.js
// Importe suas imagens de pizza aqui. Certifique-se de que os nomes de arquivo correspondem aos seus assets!
import pizza1 from '../assets/pizzas/1.jpg'; // Ex: Margherita
import pizza2 from '../assets/pizzas/2.jpg'; // Ex: Calabresa
import pizza3 from '../assets/pizzas/3.jpg'; // Ex: Frango Catupiry
import pizza4 from '../assets/pizzas/4.jpg'; // Ex: Quatro Queijos
import pizza5 from '../assets/pizzas/5.jpg'; // Ex: Portuguesa
import pizza6 from '../assets/pizzas/6.jpg'; // Ex: Vegetariana
import pizza7 from '../assets/pizzas/7.jpg'; // Ex: Pepperoni (Assumindo que essa era a 7a original)
import pizza8 from '../assets/pizzas/8.jpg'; // Ex: Brasileira
import pizza9 from '../assets/pizzas/9.jpg'; // Ex: Carbonara
import pizza10 from '../assets/pizzas/10.jpg'; // Ex: Caprese
import pizza11 from '../assets/pizzas/11.jpg'; // Ex: Camarão

// Adicionando imagens para doces e bebidas (você precisará dessas imagens na sua pasta assets/pizzas)
import doce1 from '../assets/pizzas/doce1.jpeg'; // Ex: Chocolate
import doce2 from '../assets/pizzas/doce2.jpg'; // Ex: Banana
import bebida1 from '../assets/pizzas/bebida1.jpg'; // Ex: Coca-Cola
import bebida2 from '../assets/pizzas/bebida2.jpg'; // Ex: Guaraná
import bebida3 from '../assets/pizzas/bebida3.jpg'; // Ex: Água
import bebida4 from '../assets/pizzas/bebida4.jpg'; // Ex: Cerveja  

const menuItemsData = [
  // --- PIZZAS SALGADAS (Usando suas 11 originais e categorizando) ---
  {
    id: 1,
    name: "Margherita Clássica",
    description: "Molho de tomate San Marzano, muçarela de búfala, manjericão fresco e azeite extra virgem.",
    image: pizza1,
    price: "R$ 45,00",
    category: "salgada"
  },
  {
    id: 2,
    name: "Pepperoni Duplo",
    description: "Muita muçarela e uma generosa camada de pepperoni picante, perfeita para os amantes de carne.",
    image: pizza7, // Mapeado para uma das suas imagens existentes
    price: "R$ 48,00",
    category: "salgada"
  },
  {
    id: 3,
    name: "Quatro Queijos",
    description: "Combinação perfeita de muçarela, provolone, gorgonzola e parmesão.",
    image: pizza4,
    price: "R$ 50,00",
    category: "salgada"
  },
  {
    id: 4,
    name: "Frango com Catupiry",
    description: "Frango desfiado, cremoso catupiry original, milho e batata palha crocante.",
    image: pizza3,
    price: "R$ 52,00",
    category: "salgada"
  },
  {
    id: 5,
    name: "Portuguesa Especial",
    description: "Presunto, ovos, cebola, ervilha e azeitonas.",
    image: pizza5,
    price: "R$ 49,00",
    category: "salgada"
  },
  {
    id: 6,
    name: "Calabresa Artesanal",
    description: "Calabresa curada, cebola roxa, azeitonas pretas e toque de orégano fresco.",
    image: pizza6,
    price: "R$ 48,00",
    category: "salgada"
  },
  {
    id: 7,
    name: "Vegetariana Fresca",
    description: "Pimentões coloridos, cebola, champignon, brócolis e azeitonas.",
    image: pizza6, // Reutilizando imagem para exemplo
    price: "R$ 47,00",
    category: "salgada"
  },
  {
    id: 8,
    name: "Brasileira",
    description: "Frango desfiado, milho, palmito e catupiry.",
    image: pizza8,
    price: "R$ 51,00",
    category: "salgada"
  },
  {
    id: 9,
    name: "Carbonara",
    description: "Creme de ovos, queijo parmesão, bacon crocante e pimenta do reino.",
    image: pizza9,
    price: "R$ 53,00",
    category: "salgada"
  },
  {
    id: 10,
    name: "Caprese",
    description: "Muçarela de búfala, tomate fresco e folhas de manjericão.",
    image: pizza10,
    price: "R$ 46,00",
    category: "salgada"
  },
  {
    id: 11,
    name: "Camarão com Cream Cheese",
    description: "Camarões selecionados salteados, cream cheese e um toque de cheiro verde.",
    image: pizza11,
    price: "R$ 60,00",
    category: "salgada"
  },

  // --- PIZZAS DOCES ---
  {
    id: 12,
    name: "Chocolate com Morango",
    description: "Creme de chocolate, morangos frescos e raspas de chocolate branco.",
    image: doce1,
    price: "R$ 55,00",
    category: "doce"
  },
  {
    id: 13,
    name: "Banana com Canela",
    description: "Fatias de banana, açúcar, canela em pó e um toque de doce de leite.",
    image: doce2,
    price: "R$ 50,00",
    category: "doce"
  },

  // --- BEBIDAS ---
  {
    id: 14,
    name: "Coca-Cola (Lata)",
    description: "Refrigerante Coca-Cola em lata 350ml.",
    image: bebida1,
    price: "R$ 7,00",
    category: "bebida"
  },
  {
    id: 15,
    name: "Guaraná Antarctica (Lata)",
    description: "Refrigerante Guaraná Antarctica em lata 350ml.",
    image: bebida2,
    price: "R$ 7,00",
    category: "bebida"
  },
  {
    id: 16,
    name: "Água Mineral (500ml)",
    description: "Água mineral sem gás.",
    image: bebida3,
    price: "R$ 5,00",
    category: "bebida"
  },
  {
    id: 17,
    name: "Cerveja Artesanal (Long Neck)",
    description: "Cerveja artesanal local, consulte sabores disponíveis.",
    image: bebida4,
    price: "R$ 18,00",
    category: "bebida"
  }
];

export default menuItemsData;