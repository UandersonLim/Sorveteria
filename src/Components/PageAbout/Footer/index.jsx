import { FooterHome, Footer_End } from "./style";

const Footer_About = () => {
  return (
    <div>
      <FooterHome>
        <figure>
          <img src="assets/imagens/logo.png" title="Logo-Gelateria" alt="Logo-Gelateria"/>
        </figure>
        <address className="title_address">
          <h5>ENDEREÇO</h5>
          <p>
            Av. Bernardino de Campos, 98<br></br> São Paulo, SP 12345-678
          </p>
        </address>
        <address>
          <ul>
            <li className="title_Contact_Time">CONTATO</li>
            <li>info@meusite.com</li>
            <li>Tel: (11) 3456-7890</li>
          </ul>
        </address>
        <ul className="Box_Horario">
          <li className="title_Contact_Time">HORÁRIOS</li>
          <li>ABERTO TODOS OS DIAS</li>
          <li>
            <time>10:00 - 22:00</time>
          </li>
        </ul>
      </FooterHome>
      <Footer_End className="footer_end">
        <p>Gelateria. Orgulhosamente desenvolvido por Uanderson Lima DEV.</p>
      </Footer_End>
    </div>
  );
};

export default Footer_About;
