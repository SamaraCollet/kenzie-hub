import styled from "styled-components";

export const ContainerHome = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 15vh;
  justify-content: center;
  align-items: center;

  .bannerContent {
    width: 40vw;
    margin-right: 30px;
  }

  div {
    width: 40vw;
  }

  h1 {
    font-size: 3.5rem;
    text-shadow: 1.6px 1px 1px #1480fb;
    line-height: 1.2;
  }

  p {
    line-height: 1.6;
    width: 100%;
    margin-bottom: 40px;
    font-size: 1.1rem;
  }

  img {
    width: 45vw;
    border-radius: 40px;
  }

  button {
    width: 155px;
    font-size: 1.2rem;
    color: #fff;
    background-color: #1480fb;
    border: 2px solid #146dd3;
    height: 35px;
    margin-right: 15px;
  }
  button:hover {
    background-color: #013b84;
    border: 2px solid #013b84;
    color: #fff;
    cursor: pointer;
  }

  button:last-child {
    background-color: #fff;
    color: #1480fb;
  }

  button:last-child:hover {
    background-color: #013b84;
    color: #fff;
  }

  @media (max-width: 1200px) {
    padding-top: 20vh;

    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1rem;
    }
    div {
      width: 45vw;
    }
    button {
      width: 12vw;
      font-size: 1.1rem;
    }
  }
  @media (max-width: 1130px) {
    padding-top: 22vh;
  }
  @media (max-width: 1015px) {
    img {
      width: 50vw;
    }
  }
  @media (min-width: 768px) and (max-width: 979px) {
    width: 100%;
    padding-top: 23vh;
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 0.9rem;
    }
    div {
      width: 50vw;
    }
    img {
      width: 53vw;
    }
    button {
      width: 15vw;
      font-size: 1rem;
    }
    .bannerContent {
      width: 37vw;
    }
  }
  @media only screen and (max-width: 767px) {
    flex-wrap: wrap;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 0.8rem;
      margin-bottom: 20px;
    }
    button {
      width: 16vw;
      font-size: 0.8rem;
    }
    img {
      width: 48vw;
    }
    .bannerContent {
      width: 47vw;
      margin-right: 2px;
    }
  }
  @media (max-width: 480px) {
    padding-top: 18vh;
    width: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
    div {
      width: 100%;
    }
    p {
      font-size: 1rem;
    }
    .bannerContent {
      width: 100%;
      margin: 0;
      padding: 0 25px;
    }
    button {
      width: 120px;
      font-size: 0.9rem;
      margin: 0;
    }
    button:last-child {
      margin-left: 12px;
    }
    img {
      width: 60vw;
    }
  }
  @media (max-width: 300px) {
    button:last-child {
      margin: 5px 0 0;
    }
  }
`;
