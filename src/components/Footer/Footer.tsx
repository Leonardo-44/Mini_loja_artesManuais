import "./Footer.css";
import "../../App.css";

function Footer() {
  return (
    <>
      <div className="footer d-flex jc-center alg-center fd-column">
        <div className="txt-align d-flex fd-column alg-center gap8">
          <h2 className="fonte-branca">Gostou? Fale Conosco</h2>
          <p className="fonte-cinza">
            Entre em contato pelo WhatsApp e encomende a sua peça especial
          </p>
          <a
            href="https://wa.me/5589999300439"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-primary">Chamar no Whatsapp</button>
          </a>
        </div>
        <div className="container">
          <div className="separacao"></div>
        </div>
        <p className="fonte-branca">
          © 2026 Artes Manuais — Todos os direitos reservados
        </p>
      </div>
    </>
  );
}

export default Footer;
