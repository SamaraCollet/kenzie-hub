import styled from "styled-components";

export const Container = styled.main`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .pagination {
    margin: 2vh 0 5vh;
  }
`;

export const Cards = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 12vh;
`;
