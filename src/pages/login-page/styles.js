import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  box-shadow: 0 0 5px 1px #444;
  padding: 1rem;

  .input-button-login,
  .input-text-login {
    width: 100%;
    margin: 0.5rem;
  }
`;
export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 100%;
  height: 100vh;
`;
