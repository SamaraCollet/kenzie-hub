import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  position: relative;

  .bio h1 {
    margin-top: 12px;
    text-align: center;
  }

  .bio h2 {
    font-size: 1.2rem;
    text-align: center;
    font-weight: normal;
    max-width: 700px;
    box-sizing: border-box;
    word-wrap: break-word;
  }

  .bio h2 span {
    color: #181818;
    font-weight: 500;
  }

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
  .course h2 {
    text-align: center;
    font-size: 1.2rem;
    margin-top: 40px;
    font-weight: normal;
  }

  .MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.Mui-selected {
    color: #1480fb;
  }
  .PrivateTabIndicator-root-1.PrivateTabIndicator-colorPrimary-2.MuiTabs-indicator {
    background-color: #1480fb;
  }
  .MuiTabs-flexContainer {
    justify-content: center;
  }
  .MuiAvatar-root.MuiAvatar-circle.MuiAvatar-colorDefault {
    background-color: #fff;
    border: 2px solid #1480fb;
    color: #1480fb;
  }
  .MuiSvgIcon-root {
    font-size: 24px;
  }
  .MuiContainer-root.MuiContainer-maxWidthMd {
    width: 850px;
  }
  .MuiPaper-root.MuiPaper-elevation1.MuiPaper-rounded {
    box-shadow: 1px 1px 1px #afafaf, -1px 1px 1px #afafaf;
  }
`;

export const TabContainer = styled.div`
  height: auto;
  min-height: 70vh;
  max-height: 70vh;
`;

export const ContainerBio = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 50%;
  }
  .btnSalvar {
    margin-top: 1rem;
  }
`;
