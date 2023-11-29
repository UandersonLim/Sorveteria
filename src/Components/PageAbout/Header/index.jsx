import { Link } from "react-router-dom";
import Head from "./style";

const HeaderSobre = () => {
  return (
    <Head>
      <figure>
        <img src="assets/imagens/logo.png" title="Logo-Gelateria" alt="Logo-Gelateria" />
      </figure>
      <div className="Line_column"></div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Flavors">Sabores</Link>
        </li>
        <li>
          <Link to="/About">Sobre</Link>
        </li>
      </ul>
    </Head>
  );
};

export default HeaderSobre;
