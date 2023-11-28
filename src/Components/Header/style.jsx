import styled from 'styled-components';

const Head = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #F0E68C;
    max-width: 1920px;

    img{
        width: 100px;
    };

    ul{
        display: flex;
        gap: 2rem;
    }

    li a{
        color: #000;
        text-decoration: none
    };
`

export default Head;