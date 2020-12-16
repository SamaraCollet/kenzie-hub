import styled from "styled-components";
import { Container } from "../../styles/styles_login_register";

export const ContainerStyled = styled(Container)`
  margin-top: 50px;
  height: auto;
  padding: 30px 0;
  width: 700px;
  h1 {
    margin-bottom: 28px;
  }

  form div {
    width: 280px;
  }

  .formDivider {
    margin-right: 30px;
  }
  .buttonStyled button {
    margin-top: 30px;
    margin-bottom: 20px;
  }
  form {
    display: flex;
    flex-direction: row;
  }

  @media (min-width: 768px) and (max-width: 979px) {
    margin-top: 110px;
    height: auto;
    h1 {
      margin-bottom: 7px;
    }
  }

  @media only screen and (max-width: 767px) {
    box-shadow: none;
    width: 580px;
    margin-top: 118px;
    height: auto;
    margin-bottom: 20px;

    form div {
      width: 240px;
    }
    h1 {
      margin-bottom: 5px;
    }
    .buttonStyled button {
      margin-top: 30px;
      margin-bottom: 10px;
    }
  }
  @media only screen and (max-width: 600px) {
    width: 500px;
    /* height: 272px; */
    height: auto;
    margin-top: 120px;
    form div {
      width: 210px;
    }
  }
  @media (max-width: 480px) {
    box-shadow: none;
    margin-top: 170px;
    form div {
      width: 270px;
    }
    form {
      display: flex;
      flex-direction: column;
    }
    .formDivider {
      margin-right: 0;
    }
    .buttonStyled button {
      margin-top: 40px;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 415px) {
    margin-top: 120px;
  }
  @media (max-width: 320px) {
    margin-top: 190px;
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

/* @media (max-width: 1200px) {
    width: 34%;
    height: 100vh;
  }
  @media (min-width: 768px) and (max-width: 979px) {
    width: 42%;
  }
  @media only screen and (max-width: 767px) {
    width: 55%;
    height: 90vh;
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
  } */

// @media (max-width: 1200px) {}
// @media (min-width:768px) and (max-width:979px) {}
// @media only screen and (max-width: 767px) {}
// @media (max-width: 480px) {}
