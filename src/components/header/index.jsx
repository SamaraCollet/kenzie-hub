import { useHistory } from "react-router-dom";

import { Container, ToolbarStyled } from "./style";

import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const Header = () => {
  const history = useHistory();
  return (
    <Container>
      <AppBar position="fixed">
        <ToolbarStyled>
          <div className="logo">
            <img
              src="/assets/logo.png"
              alt="logo"
              onClick={() => history.push("/")}
            />
          </div>
          <div>
            <Button color="inherit" onClick={() => history.push("/login")}>
              Entrar
            </Button>
            <Button color="inherit" onClick={() => history.push("/register")}>
              Cadastre-se
            </Button>
          </div>
        </ToolbarStyled>
      </AppBar>
    </Container>
  );
};

export default Header;
