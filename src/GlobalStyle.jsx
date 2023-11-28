import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Poppins', sans-serif;        
}

body{
    max-width: 1920px;
}
`;

export default GlobalStyle;
