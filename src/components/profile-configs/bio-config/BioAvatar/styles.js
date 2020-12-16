import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    align-self: center;
    object-fit: cover;
    position: center;
  }

  .imageCard {
    width: 195px;
    height: 195px;
    border: 3px solid #1480fb;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 0 auto;
    margin-top: 20px;
    margin: 20px;
  }
  form {
    margin-bottom: 40px;
  }
`;