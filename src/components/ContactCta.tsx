import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import useReveal from '../hooks/useReveal';
import styles from '../styles/ContactCta.module.css';

export default function ContactCta() {
  useReveal();

  return (
    <section className={styles.section}>
      <div className={`${styles.inner} reveal`}>
        <div>
          <h2 className={styles.title}>¿Listo para tener tus números en orden?</h2>
          <p className={styles.subtitle}>
            Agenda hoy tu diagnóstico gratuito de 45 minutos. Sin compromiso:
            saldrás con claridad sobre tu situación ante SUNAT.
          </p>
        </div>
        <div className={styles.actions}>
          <Link to="/contacto" className={styles.btnDark}>
            Agendar diagnóstico <ArrowRight size={17} />
          </Link>
          <a href="tel:+5114802600" className={styles.btnGhost}>
            <Phone size={17} /> (01) 480-2600
          </a>
        </div>
      </div>
    </section>
  );
}
