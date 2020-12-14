import styled from "styled-components";
import { Container } from "../../styles/styles_login_register";

export const ContainerStyled = styled(Container)`
  height: auto;
  padding-top: 16px;

  h1 {
    margin-bottom: 5px;
  }

  @media (max-width: 1200px) {
    width: 34%;
  }
  @media (min-width: 768px) and (max-width: 979px) {
    width: 42%;
  }
  @media only screen and (max-width: 767px) {
    width: 55%;
    height: 85vh;
    margin-top: 10vh;
    h1 {
      margin-bottom: 5px;
    }
    .buttonStyled button {
      margin-top: 30px;
      margin-bottom: 10px;
    }
  }
  @media only screen and (max-width: 630px) {
    width: 68%;
  }
  @media (max-width: 480px) {
    width: 100%;
    height: 100vh;
    margin-top: 35%;
    box-shadow: none;
    .buttonStyled button {
      margin-bottom: 20px;
    }
  }
`;

export const RadioStyling = styled.div`
  margin-top: 16px;
  .MuiFormControlLabel-root {
    display: inline-block;
    margin: 0;
  }

  .MuiIconButton-label {
    display: inline;
    width: 20px;
  }
`;
