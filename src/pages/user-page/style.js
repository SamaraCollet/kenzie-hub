import styled from "styled-components";

export const UserContainer = styled.div `
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
    justify-content: center;
    align-content: center;
  }
  .MuiPaper-root.MuiPaper-elevation1.MuiPaper-rounded {
    padding-top: 80px;
    height: 100vh;
    width: 70vw;
    box-shadow: 1px 1px 1px #cecdcd, -1px 1px 1px #cecdcd;
  }
  .MuiContainer-root.MuiContainer-maxWidthLg {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  @media (min-width: 768px) and (max-width: 979px) {
    .MuiPaper-root.MuiPaper-elevation1.MuiPaper-rounded {
      width: 90vw;
      box-shadow: none;
    }
  }

  @media only screen and (max-width: 767px) {
    img {
      width: 120px;
      height: 120px;
    }

    .imageCard {
      width: 140px;
      height: 140px;
      margin: 5px;
    }
    .bio h1 {
      font-size: 1.6rem;
    }
    .MuiPaper-root.MuiPaper-elevation1.MuiPaper-rounded {
      box-shadow: none;
      width: 100vw;
    }
  }
  @media (max-width: 480px) {
    .MuiContainer-root {
      padding: 0;
    }
    .MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.Mui-selected {
      color: #1480fb;
      font-size: 0.7rem;
    }
    .PrivateTabIndicator-root-1.PrivateTabIndicator-colorPrimary-2.MuiTabs-indicator {
      background-color: #1480fb;
      width: 85px;
    }
    .MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary {
      font-size: 0.7rem;
      width: 85px;
      padding: 0;
    }
    img {
      width: 140px;
      height: 140px;
    }

    .imageCard {
      width: 160px;
      height: 160px;
      margin-top: 10px;
    }
    .bio h1 {
      font-size: 1.8rem;
    }
    .bio h2 {
      font-size: 1.1rem;
    }
    .course h2 {
      font-size: 1.1rem;
    }
  }
`;

export const TabContainer = styled.div `
  height: auto;
  min-height: 70vh;
  max-height: 70vh;
`;

export const ContainerBio = styled.div `
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;