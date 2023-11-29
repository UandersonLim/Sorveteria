import styled from "styled-components";

const Main = styled.main`
  padding-bottom: 10rem;
`;

const Title = styled.div`
  text-align: center;
  margin: 5rem 0 2rem 0;

  h1 {
    font-weight: 500;
  }
`;

const Main_Section = styled.section`
  display: grid;
  grid-template-columns: 16% 16% 16%;
  grid-template-rows: 45vh 45vh;
  grid-gap: 2rem;
  justify-content: center;

  .Card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 1px 9px 1px #d3d3d3;
  }

  .Card h2,
  p {
    text-align: center;
  }

  h2 {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    padding: 0 1rem;
  }

  figure img {
    width: 200px;
  }

  /* RESPONSIVE */
  @media (max-width: 1350px) {
    grid-template-columns: 25% 25%;
    grid-template-rows: 350px 350px 350px;
  }

  @media (max-width: 850px) {
    grid-template-columns: 70%;
    grid-template-rows: 350px 350px 350px 350px 350px 350px;
  }
`;

export { Main_Section, Title, Main };
