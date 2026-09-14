import { useState } from "react";
import Logo from "./Logo";
import { IconMenu, IconClose, IconWhatsapp } from "./Icons";
import { WHATSAPP_LINK } from "../constants";

const LINKS = [
  { href: "#topo", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header" id="topo">
      <div className="container header-inner">
        <Logo onClick={close} />

        <nav className="main-nav" aria-label="Navegação principal">
          <ul>
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-cta">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-green"
          >
            <IconWhatsapp width={18} height={18} />
            <span className="btn-label">Fale no WhatsApp</span>
          </a>
          <button
            className="hamburger"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <ul>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={close}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-green"
          onClick={close}
        >
          <IconWhatsapp width={18} height={18} />
          Fale no WhatsApp
        </a>
      </div>
    </header>
  );
}
