// src/data/chefBiographyData.js

// Importe suas imagens do carrossel aqui
import chefPhoto1 from '../assets/carousel/1.jpg';
import chefPhoto2 from '../assets/carousel/2.jpg';
import chefPhoto3 from '../assets/carousel/3.jpg';
import chefPhoto4 from '../assets/carousel/4.jpg';
import chefPhoto5 from '../assets/carousel/5.jpg';
import chefPhoto6 from '../assets/carousel/6.jpg';

const chefBiographyCards = [
  {
    id: 1,
    image: chefPhoto1,
    text: `Olá, pessoal! Meu nome é Thierry Mendonça Ferreira, tenho 21 anos e nasci em Muniz Freire, no dia 06/05/2003. Venho de uma família simples e humilde, mas com um coração enorme e muito bondoso.`,
  },
  {
    id: 2,
    image: chefPhoto2,
    text: `Desde pequeno, fui criado pelos meus avós, que sempre foram meu alicerce. Comecei a trabalhar bem jovem, sempre correndo atrás das minhas próprias coisas, sem depender de ninguém. Tudo que conquistei foi com muito esforço e trabalho!`,
  },
  {
    id: 3,
    image: chefPhoto3,
    text: `No início de 2019, tive a oportunidade de trabalhar em uma padaria de bairro. Foi lá que me encontrei na área da gastronomia. Sempre adorei inventar coisas novas, então estava constantemente tentando inovar e criar delícias que despertassem o desejo das pessoas. Fiquei nessa padaria por 2 anos e meio, aprendendo e crescendo.`,
  },
  {
    id: 4, // Reutilizando imagem para o próximo ponto da história
    image: chefPhoto4,
    text: `Depois disso, segui meu caminho em outro lugar na área da cozinha. Lá, fui ajudante de padeiro, padeiro, cozinheiro, salgadeiro, confeiteiro... Enfim, aproveitei cada chance para aprender mais, sempre com o sonho de, um dia, ter meu próprio negócio.`,
  },
  {
    id: 5, // Reutilizando imagem para o final da história
    image: chefPhoto5,
    text: `Durante essa jornada, vivi muitas experiências e enfrentei vários desafios. Até que um dia, decidi: queria abrir meu próprio ponto, minha pizzaria. Foi quando dei o grande passo em direção ao meu sonho e corri atrás de cada detalhe. E assim, com muita dedicação, chegamos a este lindo ambiente que vocês estão visitando hoje. Um lugar super aconchegante, onde cada cantinho foi pensado com carinho, e a comida é feita com muito amor e excelência. Sejam bem-vindos e espero que sintam todo o amor e dedicação que colocamos aqui!`,
  },
];

export default chefBiographyCards;