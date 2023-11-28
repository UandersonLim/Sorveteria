import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home/index.jsx';
import FlavorsIceCream from '../Pages/Flavors/index.jsx';
import About from '../Pages/About/index.jsx'

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/Flavors" element={<FlavorsIceCream/>}/>
                <Route path="/About" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
};

export default Rotas;