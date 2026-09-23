import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { IconPin, IconPhone, IconMail, IconClock } from './icons/BrandIcons';
import LogoMark from './icons/LogoMark';
import styles from '../styles/Footer.module.css';

const serviceLinks = [
  'Outsourcing contable',
  'Asesoría tributaria',
  'Planillas y laboral',
  'Auditorías',
  'Constitución de empresas',
  'Asesoría financiera',
];

const exploreLinks = [
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
        <div className={styles.brandCol}>
          <div className={styles.logoRow}>
            <LogoMark size={40} className={styles.logoMark} />
            <span className={styles.logoText}>Sánchez Delgado <em>&amp;</em> Asociados</span>
          </div>
          <p className={styles.tagline}>
            Estudio contable peruano. Ordenamos la contabilidad, tributación y planillas
            de tu empresa para que decidas con números claros.
          </p>
          <div className={styles.socialRow}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className={styles.socialBtn}>
              <Facebook size={17} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className={styles.socialBtn}>
              <Instagram size={17} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={styles.socialBtn}>
              <Linkedin size={17} />
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Servicios</h4>
          <ul className={styles.list}>
            {serviceLinks.map((s) => (
              <li key={s}>
                <Link to="/servicios" className={styles.link}>{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Explora</h4>
          <ul className={styles.list}>
            {exploreLinks.map((l) => (
              <li key={l.link}>
                <Link to={l.link} className={styles.link}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contacto</h4>
          <ul className={styles.contactList}>
            <li>
              <IconPin size={16} className={styles.icon} />
              <span>Av. Canaval y Moreyra 480, Of. 1203<br />San Isidro, Lima — Perú</span>
            </li>
            <li>
              <IconPhone size={16} className={styles.icon} />
              <a href="tel:+5114802600" className={styles.link}>(01) 480-2600</a>
            </li>
            <li>
              <IconMail size={16} className={styles.icon} />
              <a href="mailto:contacto@sanchezdelgado.pe" className={styles.link}>contacto@sanchezdelgado.pe</a>
            </li>
            <li>
              <IconClock size={16} className={styles.icon} />
              <span>Lun–Vie 8:30–18:00 · Sáb 9:00–13:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Sánchez Delgado &amp; Asociados Estudio Contable — Todos los derechos reservados.</p>
        <p className={styles.disclaimer}>
          Sitio con fines informativos y de demostración. La información no constituye asesoría legal o tributaria formal.
        </p>
      </div>
    </footer>
  );
}
