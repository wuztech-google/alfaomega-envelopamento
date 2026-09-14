import { IconCheck } from "./Icons";
import { WHATSAPP_LINK } from "../constants";

const DIFFERENTIALS = [
  "Mais estilo e personalidade",
  "Proteção da superfície original",
  "Acabamento profissional",
  "Soluções sob medida",
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="container">
          <div className="hero-content fade-up">
            <span className="hero-eyebrow">Alfaômega Envelopamento</span>
            <h1 className="hero-headline">
              TRANSFORME.
              <br />
              PROTEJA.
              <br />
              <span className="accent">PERSONALIZE.</span>
            </h1>
            <p className="hero-sub">
              Soluções profissionais em envelopamento automotivo, eletrodomésticos e
              superfícies, unindo proteção, acabamento e personalidade.
            </p>

            <ul className="hero-diffs" style={{ listStyle: "none", padding: 0, margin: "0 0 40px" }}>
              {DIFFERENTIALS.map((d) => (
                <li className="hero-diff" key={d}>
                  <IconCheck />
                  {d}
                </li>
              ))}
            </ul>

            <div className="hero-ctas">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-orange">
                Solicite um orçamento
              </a>
              <a href="#servicos" className="btn btn-outline">
                Ver serviços
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="/images/hero-car.jpg"
            alt="Veículo envelopado em acabamento fosco grafite com detalhes em laranja, no showroom AlfaÔmega Envelopamento"
            width="1448"
            height="1086"
            fetchpriority="high"
          />
          <div className="hero-tags">
            <span>AUTOMOTIVO</span>
            <span>ELETRODOMÉSTICOS</span>
            <span>RESIDENCIAL · COMERCIAL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
