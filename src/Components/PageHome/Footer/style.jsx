import styled from "styled-components";

const FooterHome = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  gap: 7rem;
  width: 100%;
  padding: 4rem 0;

  figure img {
    width: 90px;
  }

  address ul li {
    font-style: normal;
  }

  .Box_Horario,
  address ul li,
  .title_address h5,
  p {
    color: #fff;
    font-size: 1rem;
  }

  .title_address h5,
  p {
    font-style: normal;
    text-align: center;
  }

  .title_Contact_Time {
    font-weight: 700;
  }

  /* RESPONSIVE */
  @media (max-width: 1050px) {
    flex-direction: column;
    gap: 1rem;

    address ul li,
    .Box_Horario {
      text-align: center;
    }
  }
`;

const Footer_End = styled.div`
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100%;

  p {
    color: #fff;
  }
  /* RESPONSIVE */

  @media (max-width: 550px) {
    padding: 0 1rem;
    text-align: center;
  }
`;

export { FooterHome, Footer_End };
