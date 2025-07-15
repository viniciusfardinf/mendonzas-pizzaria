import React from 'react';
import styles from './ChefBiography.module.css';
import chefPhoto1 from '../../assets/carousel/1.jpg'; // Primeira foto (esquerda)
import chefPhoto2 from '../../assets/carousel/2.jpg'; // Segunda foto (direita)
import chefPhoto3 from '../../assets/carousel/3.jpg'; // Terceira foto (esquerda)
import chefPhoto4 from '../../assets/carousel/4.jpg'; // Terceira foto (esquerda)
import chefPhoto5 from '../../assets/carousel/5.jpg'; // Terceira foto (esquerda)
import chefPhoto6 from '../../assets/carousel/6.jpg'; // Terceira foto (esquerda)


function ChefBiography() {
  return (
    <section id="biografia" className={styles.biographySection}>
      <div className="container">
        <h2 className="section-title">Chef Thierry: A Paixão por Pizzas</h2>

        {/* Bloco 1: Foto Esquerda, Primeiro Parágrafo */}
        <div className={`${styles.biographyContentBlock}`}>
          <div className={styles.chefImageContainer}>
            <img src={chefPhoto2} alt="Chef Thierry preparando pizza" className={styles.chefImage} loading="lazy" />
          </div>
          <div className={styles.chefText}>
            <p>
              Olá, pessoal! Meu nome é Thierry Mendonça Ferreira, tenho 21 anos e nasci em Muniz Freire, no dia 06/05/2003. Venho de uma família simples e humilde, mas com um coração enorme e muito bondoso.
            </p>
          </div>
        </div>

        {/* Bloco 2: Foto Direita, Segundo e Terceiro Parágrafos */}
        <div className={`${styles.biographyContentBlock} ${styles.imageRight}`}>
          <div className={styles.chefImageContainer}>
            <img src={chefPhoto3} alt="Chef Thierry com forno a lenha" className={styles.chefImage} loading="lazy" />
          </div>
          <div className={styles.chefText}>
            <p>
              Desde pequeno, fui criado pelos meus avós, que sempre foram meu alicerce. Comecei a trabalhar bem jovem, sempre correndo atrás das minhas próprias coisas, sem depender de ninguém. Tudo que conquistei foi com muito esforço e trabalho!
            </p>
            <p>
              No início de 2019, tive a oportunidade de trabalhar em uma padaria de bairro. Foi lá que me encontrei na área da gastronomia.
            </p>
          </div>
        </div>

        {/* Bloco 3: Foto Esquerda, Quarto Parágrafo */}
        <div className={`${styles.biographyContentBlock}`}>
          <div className={styles.chefImageContainer}>
            <img src={chefPhoto4} alt="Chef Thierry no preparo" className={styles.chefImage} loading="lazy" />
          </div>
          <div className={styles.chefText}>
            <p>
              Sempre adorei inventar coisas novas, então estava constantemente tentando inovar e criar delícias que despertassem o desejo das pessoas. Fiquei nessa padaria por 2 anos e meio, aprendendo e crescendo.
            </p>
          </div>
        </div>

        {/* Bloco 4: Foto Direita (Reutilizando chefPhoto1), Próximos Dois Parágrafos */}
        <div className={`${styles.biographyContentBlock} ${styles.imageRight}`}>
          <div className={styles.chefImageContainer}>
            <img src={chefPhoto5} alt="Chef Thierry na cozinha" className={styles.chefImage} loading="lazy" />
          </div>
          <div className={styles.chefText}>
            <p>
              Depois disso, segui meu caminho em outro lugar na área da cozinha. Lá, fui ajudante de padeiro, padeiro, cozinheiro, salgadeiro, confeiteiro... Enfim, aproveitei cada chance para aprender mais, sempre com o sonho de, um dia, ter meu próprio negócio.
            </p>
            <p>
              Durante essa jornada, vivi muitas experiências e enfrentei vários desafios. Até que um dia, decidi: queria abrir meu próprio ponto, minha pizzaria. Foi quando dei o grande passo em direção ao meu sonho e corri atrás de cada detalhe.
            </p>
          </div>
        </div>

        {/* Bloco 5: Foto Esquerda (Reutilizando chefPhoto2), Últimos Três Parágrafos */}
        <div className={`${styles.biographyContentBlock}`}>
          <div className={styles.chefImageContainer}>
            <img src={chefPhoto6} alt="Chef Thierry apresentando a pizza" className={styles.chefImage} loading="lazy" />
          </div>
          <div className={styles.chefText}>
            <p>
              E assim, com muita dedicação, chegamos a este lindo ambiente que vocês estão visitando hoje. Um lugar super aconchegante, onde cada cantinho foi pensado com carinho, e a comida é feita com muito amor e excelência.
            </p>
            <p>
              Sejam bem-vindos e espero que sintam todo o amor e dedicação que colocamos aqui!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ChefBiography;