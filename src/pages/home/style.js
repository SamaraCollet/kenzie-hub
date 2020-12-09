import styled from "styled-components";

export const ContainerHome = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap");
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #161616;
  font-family: "Open Sans", sans-serif;
`;

export const Banner = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  padding-top: 6vh;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 3.2rem;
    margin: 0;
    margin-bottom: 22px;
    text-shadow: 1.6px 1px 1px #1480fb;
  }
  div {
    width: 40vw;
  }
  img {
    width: 45vw;
    border-radius: 40px;
  }
  button {
    width: 150px;
    font-size: 1.2rem;
    color: #fff;
    background-color: #1480fb;
    border: 2px solid #146dd3;
    border-radius: 10px;
    height: 35px;
  }
  button:focus {
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }
  button:hover {
    background-color: #013b84;
    border: 2px solid #013b84;
    color: #fff;
    cursor: pointer;
  }
  p {
    line-height: 1.6;
    width: 100%;
    margin-bottom: 40px;
    font-size: 1.1rem;
  }
  .bannerContent {
    width: 32vw;
    margin-right: 40px;
  }
`;
