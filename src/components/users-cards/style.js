import styled from "styled-components";
import { Card } from "antd";

export const CardStyled = styled(Card)`
  background-color: #f1f1f1 !important;
  margin: 0 auto !important;
  width: 220px !important;
  min-height: 380px !important;
  font-weight: bold !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  margin: 5px 10px !important;
  position: relative;

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
    color: #161616;
  }

  h2 {
    margin-top: 20px;
    font-size: 1rem;
    text-align: center;
    color: gray;
  }

  .button {
    display: flex;
    justify-content: center;
  }

  button {
    width: 150px;
    font-size: 0.9rem;
    color: #fff;
    background-color: #1480fb;
    border: 2px solid #146dd3;
    height: 30px;
    width: 120px;
    bottom: 0;
    position: absolute;
    margin-bottom: 20px;
  }
  button:focus {
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }
  button:hover {
    background-color: #013b84;
    border: 2px solid #013b84;
    color: #fff;
    cursor: pointer;
  }
`;
