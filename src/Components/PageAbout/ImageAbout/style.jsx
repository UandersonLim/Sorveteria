import styled from "styled-components";

const Image = styled.figure`
  display: flex;

  .Image {
    width: 50%;
    height: 70vh;
  }

  /* RESPONSIVE */

  @media (max-width: 1050px) {
    .Image {
      height: 55vh;
    }
  }

  @media (max-width: 980px) {
    .Image {
      height: 45vh;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;

    .Image {
      width: 100%;
      height: 60vh;
    }
  }

  @media (max-width: 550px) {
    .Image {
      height: 40vh;
    }
  }
`;

export default Image;
