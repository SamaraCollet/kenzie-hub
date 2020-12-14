import styled from "styled-components";
import { Container } from "../../styles/styles_login_register";

export const ContainerStyled = styled(Container)`
  height: 60vh;

  h1 {
    margin-bottom: 15px;
  }
  @media (max-width: 1200px) {
    width: 34%;
    height: 380px;
  }
  @media (min-width: 768px) and (max-width: 979px) {
    width: 55%;
    height: 280px;
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
    width: 55%;
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
