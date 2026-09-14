const DIFFS = [
  {
    n: "01",
    title: "Acabamento profissional",
    text: "Aplicação cuidadosa para um resultado uniforme e sofisticado.",
  },
  {
    n: "02",
    title: "Personalização",
    text: "Diversas opções de cores, texturas e acabamentos.",
  },
  {
    n: "03",
    title: "Versatilidade",
    text: "Soluções para veículos, eletrodomésticos, móveis e ambientes.",
  },
];

export default function About() {
  return (
    <section className="section about" id="sobre">
      <div className="container">
        <div className="about-grid">
          <div className="about-copy fade-up">
            <span className="section-eyebrow">Sobre a AlfaÔmega</span>
            <h2 className="section-title">Envolvemos muito mais do que veículos</h2>
            <p>
              Na AlfaÔmega Envelopamento, transformamos superfícies com acabamento
              profissional, atenção aos detalhes e materiais de qualidade.
            </p>
            <p>
              Trabalhamos com envelopamento automotivo, eletrodomésticos, móveis,
              ambientes e outras superfícies, criando soluções para quem deseja
              renovar, proteger ou personalizar sem precisar substituir o item
              original.
            </p>
            <p>
              De mudanças discretas em tons de inox escuro e grafite até projetos
              personalizados, cada trabalho é desenvolvido para entregar estética,
              proteção e durabilidade.
            </p>

            <div className="about-banner">
              <strong>Não troque. Envelope.</strong>
              <span>Economia e estilo andando juntos.</span>
            </div>
          </div>

          <div className="about-visual fade-up">
            <img
              src="/images/fridge-full.jpg"
              alt="Geladeira envelopada em acabamento grafite escuro escovado, integrada a uma cozinha planejada"
              loading="lazy"
              width="1254"
              height="1254"
            />
          </div>
        </div>

        <div className="about-diffs">
          {DIFFS.map((d) => (
            <div className="about-diff fade-up" key={d.n}>
              <span className="num">{d.n}</span>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
