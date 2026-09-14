import {
  IconWhatsapp,
  IconPhone,
  IconMail,
  IconInstagram,
  IconFacebook,
} from "./Icons";
import {
  WHATSAPP_LINK,
  PHONE_DISPLAY,
  PHONE_LINK,
  EMAIL,
  EMAIL_LINK,
  INSTAGRAM_HANDLE,
  INSTAGRAM_LINK,
  FACEBOOK_LABEL,
  FACEBOOK_LINK,
} from "../constants";

export default function Contact() {
  return (
    <section className="section contact" id="contato">
      <div className="container">
        <div className="section-head fade-up">
          <span className="section-eyebrow">Fale com a gente</span>
          <h2 className="section-title">
            Entre em <span className="accent">contato</span>
          </h2>
        </div>

        <div className="contact-grid fade-up">
          <div className="contact-info">
            <p className="lead">
              Quer transformar seu veículo, eletrodoméstico ou ambiente? Fale com
              a AlfaÔmega e solicite seu orçamento sem compromisso.
            </p>

            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-green">
              <IconWhatsapp width={18} height={18} />
              Falar no WhatsApp
            </a>

            <ul className="contact-list">
              <li>
                <a href={PHONE_LINK}>
                  <IconPhone />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={EMAIL_LINK}>
                  <IconMail />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
                  <IconInstagram />
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
              <li>
                <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer">
                  <IconFacebook />
                  {FACEBOOK_LABEL}
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-visual">
            <img
              src="/images/storefront-wide.jpg"
              alt="Fachada da loja AlfaÔmega Envelopamento iluminada ao entardecer"
              loading="lazy"
            />
            <div className="overlay">
              <p>Cada projeto, um novo acabamento.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
