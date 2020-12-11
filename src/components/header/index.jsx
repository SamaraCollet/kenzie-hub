import { useHistory } from "react-router-dom";

import { Container } from "./style";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const Header = () => {
  const history = useHistory();
  return (
    <Container>
      <AppBar position="fixed">
        <Toolbar>
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
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
