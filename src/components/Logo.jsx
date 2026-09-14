export default function Logo({ onClick }) {
  return (
    <a href="#topo" className="logo-mark" onClick={onClick} aria-label="AlfaÔmega Envelopamento — voltar ao topo">
      <img src="/images/logo.jpg" alt="" width="40" height="40" className="logo-img" />
      <span className="logo-text">
        <strong>ALFAÔMEGA</strong>
        <span>ENVELOPAMENTO</span>
      </span>
    </a>
  );
}
