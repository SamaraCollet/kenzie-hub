import styled from "styled-components";

export const Content = styled.div `
  display: flex;
  justify-content: center;
  align-items: flex-end;
  .MuiSvgIcon-root {
    color: #1480fb;
  }
  div {
    width: 170px;
    margin-right: 10px;
  }
  @media (min-width: 768px) and (max-width: 979px) {
    div {
      width: 180px;
    }
  }

  @media only screen and (max-width: 767px) {
    div {
      width: 130px;
    }
  }

  @media (max-width: 480px) {
    form {
      margin-left: 10px;
    }
    div {
      width: 180px;
    }
  }
`;

export const ContentList = styled.div `
  display: flex;
  .MuiListItem-root {
    width: 65vw !important;
  }
  @media (min-width: 768px) and (max-width: 979px) {
    .MuiListItem-root {
      width: 85vw !important;
    }
  }
  @media only screen and (max-width: 767px) {
    .MuiListItem-root {
      width: 94vw !important;
    }
  }
  @media (max-width: 480px) {
    .MuiListItem-root {
      width: 92vw !important;
    }
  }
`;