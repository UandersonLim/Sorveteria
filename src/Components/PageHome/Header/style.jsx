import styled from "styled-components";

const Head = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f0e68c;
  max-width: 1920px;

  img {
    width: 100px;
  }

  ul {
    display: flex;
    gap: 2rem;
    font-weight: 600;
  }

  li a {
    color: #000;
    text-decoration: none;
  }

  /* RESPONSIVE */
  @media (max-width: 650px) {
    flex-direction: column;

    img {
      width: 50px;
    }

    .Line_column {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #a9a9a9;
      width: 90%;
      margin-bottom: 1rem;
    }
  }
`;

export default Head;
