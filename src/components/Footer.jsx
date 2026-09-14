import Logo from "./Logo";
import { IconInstagram, IconFacebook, IconWhatsapp } from "./Icons";
import { INSTAGRAM_LINK, FACEBOOK_LINK, WHATSAPP_LINK } from "../constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <p>
              Transformação, proteção e estilo para veículos, eletrodomésticos e
              superfícies.
            </p>
          </div>

          <div className="footer-social">
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" aria-label="Instagram da AlfaÔmega Envelopamento">
              <IconInstagram />
            </a>
            <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" aria-label="Facebook da AlfaÔmega Envelopamento">
              <IconFacebook />
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da AlfaÔmega Envelopamento">
              <IconWhatsapp />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} AlfaÔmega Envelopamento. Todos os direitos reservados.</span>
          <a href="#topo">Voltar ao topo</a>
        </div>
      </div>
    </footer>
  );
}
