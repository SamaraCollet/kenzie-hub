import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
`;

export const TabContainer = styled.div`
  min-height: 70vh;
  max-height: 70vh;
`;

export const ContainerBio = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
  img {
    border-radius: 50%;
  }
  .btnSalvar {
    margin-top: 1rem;
  }
`;
