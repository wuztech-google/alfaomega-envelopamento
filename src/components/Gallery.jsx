import { useRef, useState, useEffect } from "react";
import { IconArrowLeft, IconArrowRight } from "./Icons";
import { WHATSAPP_LINK } from "../constants";

const ITEMS = [
  {
    src: "/images/card-automotive.jpg",
    alt: "BMW envelopado em grafite fosco com friso laranja, vista frontal",
    cap: "Envelopamento automotivo",
  },
  {
    src: "/images/wrap-detail-blue.jpg",
    alt: "Detalhe da aplicação de película azul acetinada sendo desenrolada",
    cap: "Detalhe de aplicação",
  },
  {
    src: "/images/fridge-closeup.jpg",
    alt: "Geladeira envelopada em acabamento grafite escovado, close-up das portas",
    cap: "Eletrodomésticos",
  },
  {
    src: "/images/card-residencial.jpg",
    alt: "Cozinha planejada em tons escuros com iluminação âmbar",
    cap: "Projeto residencial",
  },
  {
    src: "/images/card-comercial.jpg",
    alt: "Fachada comercial moderna com iluminação âmbar",
    cap: "Projeto comercial",
  },
  {
    src: "/images/wrap-roll-silver.jpg",
    alt: "Rolo de película texturizada na cor grafite pronta para aplicação",
    cap: "Materiais de alta qualidade",
  },
  {
    src: "/images/hero-car.jpg",
    alt: "Veículo envelopado exposto no showroom AlfaÔmega Envelopamento",
    cap: "Showroom AlfaÔmega",
  },
];

export default function Gallery() {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  useEffect(() => {
    updateEdges();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, []);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".gallery-item");
    const w = card ? card.getBoundingClientRect().width + 20 : 280;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  return (
    <div className="gallery-block fade-up">
      <div className="gallery-head">
        <h3 className="gallery-title">
          Alguns dos nossos <span className="accent">trabalhos</span>
        </h3>
        <div className="gallery-arrows">
          <button
            className="gallery-arrow"
            onClick={() => scrollBy(-1)}
            disabled={atStart}
            aria-label="Ver trabalhos anteriores"
          >
            <IconArrowLeft />
          </button>
          <button
            className="gallery-arrow"
            onClick={() => scrollBy(1)}
            disabled={atEnd}
            aria-label="Ver próximos trabalhos"
          >
            <IconArrowRight />
          </button>
        </div>
      </div>

      <div className="gallery-track-wrap" ref={trackRef}>
        <div className="gallery-track">
          {ITEMS.map((item, i) => (
            <figure className="gallery-item" key={i}>
              <img src={item.src} alt={item.alt} loading="lazy" />
              <figcaption className="cap">{item.cap}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="gallery-cta">
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-orange">
          Quero fazer um orçamento
        </a>
      </div>
    </div>
  );
}
