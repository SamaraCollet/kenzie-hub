import styled from "styled-components";

export const Container = styled.main `
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    text-shadow: none;
  }

  .pagination {
    margin: 2vh 0 5vh;
  }
`;

export const Cards = styled.div `
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 12vh;

  @media (min-width: 768px) and (max-width: 979px) {
    margin-top: 17vh;
  }
  @media only screen and (max-width: 767px) {
    margin-top: 20vh;
  }
  @media (max-width: 480px) {
    margin-top: 12vh;
  }
`;