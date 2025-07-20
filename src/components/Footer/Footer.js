// src/components/Footer/Footer.js

import React from 'react';
import styles from './Footer.module.css';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer} id="contato">
      <div className={`${styles.footerContainer} container`}>

        <div className={styles.socialMediaColumn}>
          <h4>Redes Sociais</h4>
          <p className={styles.contactText}>Entre em contato para fazer seu pedido ou tirar suas dúvidas!</p>
          <div className={styles.socialIconsFooter}>
            <a href="https://wa.me/5528999625506?text=Ol%C3%A1%21%20Eu%20gostaria%20de%20estar%20" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp className={styles.iconFooter} />
            </a>
            <a href="https://www.instagram.com/mendonzas_pizzaria/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className={styles.iconFooter} />
            </a>
          </div>
        </div>

        <div className={styles.hoursColumn}>
          <h4>Horário de Funcionamento</h4>
          <p>🕥 Quarta a Domingo, das 19h às 22h</p>
          <p className={styles.addressText}>📍 Rua Manoel Alonso Portela</p>
        </div>

        <div className={styles.mapColumn}>
          <h4>Onde Estamos</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.179308107954!2d-41.40728468846187!3d-20.21045298150493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbb939c36d0f62d%3A0xc3f17d747a83d7a8!2sRua%20Manoel%20Alonso%20Portela%2C%20Muniz%20Freire%20-%20ES%2C%2029380-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" // COLOCAR O SRC DO SEU MAPA REAL AQUI!
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Pizzaria Mendonza’s"
          ></iframe>
        </div>

      </div>
      <div className={styles.copyright}>
        <p>© 2025 Mendonza’s Pizzaria. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;