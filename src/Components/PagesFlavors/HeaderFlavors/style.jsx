import styled from "styled-components";

const Head = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f0e68c;
  max-width: 1920px;
  height: 100px;

  img {
    width: 60px;
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
  @media (max-width: 550px) {
    flex-direction: column;
    height: 130px;

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

    ul {
      margin-bottom: 10px;
    }
  }
`;

export default Head;
