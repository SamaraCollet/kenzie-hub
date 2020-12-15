import styled from "styled-components";
import { Container } from "../../styles/styles_login_register";

export const ContainerStyled = styled(Container)`
  height: 370px;

  h1 {
    margin-bottom: 15px;
  }
  @media (max-width: 1200px) {
    width: 340px;
  }
  @media (min-width: 768px) and (max-width: 979px) {
    height: 290px;
    margin-top: 16vh;
    h1 {
      font-size: 1.5rem;
      margin-bottom: 5px;
    }
    p {
      margin: 2px 0;
      font-size: 0.8rem;
    }
    .buttonStyled button {
      width: 120px;
      margin-top: 25px;
      margin-bottom: 10px;
    }
  }
  @media only screen and (max-width: 767px) {
    height: 280px;
    margin-top: 16vh;
    input {
      font-size: 0.7rem !important;
    }
    h1 {
      font-size: 1.5rem;
      margin-bottom: 5px;
    }
    p {
      margin: 2px 0;
      font-size: 0.8rem;
    }
    .buttonStyled button {
      width: 120px;
      margin-top: 25px;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 480px) {
    width: 90%;
    height: 50vh;
    .buttonStyled button {
      margin-bottom: 20px;
    }
  }
`;
