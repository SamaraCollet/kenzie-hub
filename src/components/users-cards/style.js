import styled from "styled-components";
import { Card } from "antd";

export const CardStyled = styled(Card)`
  background-color: #f7f7f7 !important;
  margin: 0 auto !important;
  width: 300px !important;
  min-height: 390px !important;
  font-weight: bold !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  margin: 8px 10px !important;
  position: relative;
  border: 1px solid #d3d3d3 !important;

  .ant-card-body {
    width: 270px !important;
    height: 420px !important;
    margin: 0 auto !important;
  }

  img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    align-self: center;
    object-fit: cover;
    position: center;
  }

  .imageCard {
    width: 155px;
    height: 155px;
    border: 3px solid #1480fb;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 0 auto;
    margin-top: 20px;
  }

  h1 {
    margin-top: 20px;
    font-size: 1.3rem;
    text-align: center;
    color: #1b1b1b;
  }

  h2 {
    margin-top: 20px;
    font-size: 1rem;
    font-weight: normal;
    text-align: center;
    color: #6d6969;
  }

  .button {
    display: flex;
    justify-content: center;
  }

  button {
    width: 155px !important;
    font-size: 0.9rem;
    color: #fff;
    background-color: #1480fb;
    border: 2px solid #146dd3;
    height: 30px;
    bottom: 0;
    position: absolute;
    margin-bottom: 25px;
  }

  button:hover {
    background-color: #013b84;
    border: 2px solid #013b84;
    color: #fff;
  }

  @media (max-width: 480px) {
    width: 250px !important;
    height: 180px !important;
  }
`;

// @media (max-width: 1200px) {}
// @media (min-width:768px) and (max-width:979px) {}
// @media only screen and (max-width: 767px) {}
// @media (max-width: 480px) {}
