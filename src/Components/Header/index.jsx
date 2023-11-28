import { Link } from 'react-router-dom';
import Head from './style';

const Header = () => {
    return(
        <Head>
            <figure>
                <img src="assets/imagens/logo.png" alt="Logo" title="Logo"/>
            </figure>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Flavors">Sabores</Link></li>
                <li><Link to="About">Sobre</Link></li>
            </ul>
        </Head>
    )
};

export default Header;