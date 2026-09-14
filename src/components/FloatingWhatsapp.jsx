import { IconWhatsapp } from "./Icons";
import { WHATSAPP_LINK } from "../constants";

export default function FloatingWhatsapp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="float-whatsapp"
      aria-label="Falar no WhatsApp com a AlfaÔmega Envelopamento"
    >
      <IconWhatsapp />
    </a>
  );
}
