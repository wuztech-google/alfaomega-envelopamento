import { IconCar, IconFridge, IconHouse, IconStore, IconShield, IconLayers } from "./Icons";
import Gallery from "./Gallery";

const CARDS = [
  {
    icon: IconCar,
    title: "Envelopamento Automotivo",
    text: "Personalize seu veículo, proteja a pintura original e conquiste um visual exclusivo com acabamento profissional.",
    image: "/images/card-automotive.jpg",
    alt: "BMW envelopado em grafite fosco com detalhes em laranja",
  },
  {
    icon: IconFridge,
    title: "Envelopamento de Eletrodomésticos",
    text: "Renove geladeiras, freezers, máquinas, frigobares e outros eletrodomésticos com acabamentos modernos como inox escuro, grafite e preto.",
    image: "/images/card-appliances.jpg",
    alt: "Geladeira e lavadora envelopadas em tom grafite escuro",
  },
  {
    icon: IconHouse,
    title: "Envelopamento Residencial",
    text: "Transforme móveis, portas, bancadas e superfícies sem precisar substituir tudo, trazendo uma nova identidade aos ambientes.",
    image: "/images/card-residencial.jpg",
    alt: "Cozinha planejada em tons de preto e grafite com iluminação âmbar e geladeira envelopada",
  },
  {
    icon: IconStore,
    title: "Envelopamento Comercial",
    text: "Renove fachadas, móveis, balcões, equipamentos e superfícies comerciais para deixar sua empresa mais moderna e profissional.",
    image: "/images/card-comercial.jpg",
    alt: "Fachada comercial moderna em preto com iluminação âmbar e veículo em exposição",
  },
];

export default function Services() {
  return (
    <section className="section services" id="servicos">
      <div className="container">
        <div className="section-head center fade-up">
          <span className="section-eyebrow">O que fazemos</span>
          <h2 className="section-title">Nossos serviços</h2>
          <p className="section-desc">
            Soluções em envelopamento para transformar, proteger e renovar.
          </p>
        </div>

        <div className="services-cards">
          {CARDS.map((c) => {
            const Icon = c.icon;
            return (
              <div className="service-card fade-up" key={c.title}>
                {c.graphic ? (
                  <div className="service-media graphic">
                    <IconLayers />
                    <div className="service-icon">
                      <Icon width={20} height={20} />
                    </div>
                  </div>
                ) : (
                  <div className="service-media">
                    <img src={c.image} alt={c.alt} loading="lazy" width="920" height="671" />
                    <div className="service-icon">
                      <Icon width={20} height={20} />
                    </div>
                  </div>
                )}
                <div className="service-body">
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="ppf-note fade-up">
          <IconShield />
          <span>
            <strong>Também trabalhamos com PPF (Paint Protection Film):</strong> película de
            proteção transparente contra pedras, riscos e desgaste do dia a dia, mantendo a
            pintura original intacta.
          </span>
        </p>

        <Gallery />
      </div>
    </section>
  );
}
