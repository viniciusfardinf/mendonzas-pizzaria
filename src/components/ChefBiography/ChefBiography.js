import React from 'react';
import styles from './ChefBiography.module.css';
import chefPhoto1 from '../../assets/carousel/4.jpg'; // Foto 1: Esquerda
import chefPhoto2 from '../../assets/carousel/5.jpg'; // Foto 2: Direita
import chefPhoto3 from '../../assets/carousel/6.jpg'; // Foto 3: Esquerda

function ChefBiography() {
  return (
    <section id="biografia" className={styles.biographySection}>
      <div className="container">
        <h2 className="section-title">Chef Thierry: A Paixão por Pizzas</h2>
        
        {/* Bloco 1: Foto Esquerda (4.jpg) */}
        <div className={`${styles.biographyContentBlock}`}>
          <div className={styles.chefImageContainer}>
            <img src={chefPhoto1} alt="Chef Thierry preparando pizza" className={styles.chefImage} loading="lazy" />
          </div>
          <div className={styles.chefText}>
            <p>
                Olá, pessoal! Meu nome é Thierry Mendonça Ferreira, tenho 21
                anos e nasci em Muniz Freire, no dia 06/05/2003. Venho de uma
                família simples e humilde, mas com um coração enorme e muito
                bondoso.
            </p>  
            <p>
                Desde pequeno, fui criado pelos meus avós, que sempre foram
                meu alicerce. Comecei a trabalhar bem jovem, sempre correndo
                atrás das minhas próprias coisas, sem depender de ninguém.
                Tudo que conquistei foi com muito esforço e trabalho!
            </p> 
          </div>
        </div>

        {/* Bloco 2: Foto Direita (5.jpg) */}
        <div className={`${styles.biographyContentBlock} ${styles.imageRight}`}>
          <div className={styles.chefImageContainer}>
            <img src={chefPhoto2} alt="Chef Thierry com forno a lenha" className={styles.chefImage} loading="lazy" />
          </div>
          <div className={styles.chefText}>
            <p>
                No início de 2019, tive a oportunidade de trabalhar em uma
                padaria de bairro. Foi lá que me encontrei na área da
                gastronomia. Sempre adorei inventar coisas novas, então estava
                constantemente tentando inovar e criar delícias que despertassem
                o desejo das pessoas. Fiquei nessa padaria por 2 anos e meio,
                aprendendo e crescendo.
            </p>
            <p>
                Depois disso, segui meu caminho em outro lugar na área da
                cozinha. Lá, fui ajudante de padeiro, padeiro, cozinheiro,
                salgadeiro, confeiteiro... Enfim, aproveitei cada chance para
                aprender mais, sempre com o sonho de, um dia, ter meu próprio
                negócio.
            </p>
          </div>
        </div>

        {/* Bloco 3: Foto Esquerda (6.jpg) */}
        <div className={`${styles.biographyContentBlock}`}>
          <div className={styles.chefImageContainer}>
            <img src={chefPhoto3} alt="Chef Thierry no preparo" className={styles.chefImage} loading="lazy" />
          </div>
          <div className={styles.chefText}>
            <p>
                Durante essa jornada, vivi muitas experiências e enfrentei vários
                desafios. Até que um dia, decidi: queria abrir meu próprio ponto,
                minha pizzaria. Foi quando dei o grande passo em direção ao meu
                sonho e corri atrás de cada detalhe.
            </p>
            <p> 
                E assim, com muita dedicação, chegamos a este lindo ambiente
                que vocês estão visitando hoje. Um lugar super aconchegante,
                onde cada cantinho foi pensado com carinho, e a comida é feita
                com muito amor e excelência.
            </p>
            <p>
                Sejam bem-vindos e espero que sintam todo o amor e dedicação
                que colocamos aqui!
            </p>        
          </div>
        </div>

      </div>
    </section>
  );
}

export default ChefBiography;