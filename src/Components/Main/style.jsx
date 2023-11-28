import styled from "styled-components";

const SectionContent = styled.section`
  display: flex;
  flex-direction: column;

  .Inversion_column {
    display: flex;
  }
`;


//Card 
const Card = styled.div`
  display: flex;
  width: 100vw;

  figure {
    width: 50%;
  }

  .Image_Card {
    width: 100%;
    height: 100%;
  }

  .Text_Main {
    display: flex;
    flex-direction: column;
    text-align: start;
    justify-content: center;
    align-items: center;
    padding: 0 7rem;
    width: 50%;
  }

  .Text_Main h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .Text_Main p {
    font-size: 100%;
  }

  .subtitle_paragraph {
    font-style: italic;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  /* RESPONSIVE */

  @media (max-width: 1050px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    figure{
        width: 100%;
        height: 80vh;
    }

    .Text_Main{
        width: 100%;
        height: 80vh;
    }

    .Inversion_column {
      flex-direction: column-reverse;
      display: flex;
      align-items: center;
    }
  }
`;

export { Card, SectionContent };
