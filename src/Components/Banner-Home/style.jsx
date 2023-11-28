import styled from 'styled-components';

const Banner = styled.div`
    background-image: url('assets/imagens/banner-home.png');
    background-color: #F0E68C;
    background-repeat: no-repeat;
    background-position: center center;
    height: 500px;

    display: flex;
    justify-content: center;
    align-items: center;

    h2{
        color: #fff;
        font-size: 4rem;
        text-transform: uppercase;
        text-shadow: 5px 5px 2px #4F4F4F;
    }

    /* RESPONSIVE */
    @media(max-width: 1050px){
        h2{
            font-size: 3rem;
        }
    }
`

export default Banner;