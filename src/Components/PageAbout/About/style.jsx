import styled from "styled-components";

const Main_About = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .Box_About {
    width: 80%;
    text-align: center;
    padding: 4rem;
  }

  .Box_About h2 {
    margin-bottom: 3rem;
    font-size: 1rem;
  }

  /* RESPONSIVE */
  @media (max-width: 550px) {
    .Box_About {
      padding: 2rem 18px;
    }
  }
`;

export default Main_About;
