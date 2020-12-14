import styled from "styled-components";
import Toolbar from "@material-ui/core/Toolbar";

export const Container = styled.div`
  div {
    background-color: #1480fb;
    color: #fafafa;
  }

  img {
    width: 85px;
    cursor: pointer;
  }
`;

export const ToolbarStyled = styled(Toolbar)`
  justify-content: space-between !important;
`;
