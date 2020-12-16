import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 80vh;
  box-shadow: 0 0 5px 1px #777777;
  margin-top: 10vh;

  form div {
    width: 260px;
  }

  .password button {
    margin-left: 70%;
  }

  .buttonStyled button {
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const ButtonStyled = styled(Button)`
  width: 155px;
  font-size: 1rem !important;
  color: #fff !important;
  background-color: #1480fb !important;
  border: 2px solid #146dd3 !important;
  height: 35px;
  display: flex !important;

  :hover {
    background-color: #013b84 !important;
    border: 2px solid #013b84 !important;
    color: #fff;
  }
`;
