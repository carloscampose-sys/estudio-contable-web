import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import LogoMark from './icons/LogoMark';
import styles from '../styles/Footer.module.css';

const navLinks = [
  { label: 'Inicio', link: '/' },
  { label: 'Nosotros', link: '/nosotros' },
  { label: 'Servicios', link: '/servicios' },
  { label: 'Recursos', link: '/recursos' },
  { label: 'Contacto', link: '/contacto' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logoRow}>
            <LogoMark size={36} className={styles.logoMark} />
            <span className={styles.logoText}>
              Sánchez Delgado <em>&amp;</em> Asociados
            </span>
          </div>
          <p className={styles.tagline}>Estudio contable y tributario en Lima, Perú.</p>
          <div className={styles.socialRow}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className={styles.socialBtn}>
              <Facebook size={16} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className={styles.socialBtn}>
              <Instagram size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={styles.socialBtn}>
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        <nav className={styles.nav} aria-label="Mapa del sitio">
          {navLinks.map((l) => (
            <Link key={l.link} to={l.link} className={styles.navLink}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Sánchez Delgado &amp; Asociados — Todos los derechos reservados.</p>
        <p className={styles.contactLine}>
          <a href="mailto:contacto@sanchezdelgado.pe">contacto@sanchezdelgado.pe</a>
          <span aria-hidden="true"> · </span>
          <a href="tel:+5114802600">(01) 480-2600</a>
          <span aria-hidden="true"> · </span>
          San Isidro, Lima
        </p>
      </div>
    </footer>
  );
}
