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
          <Button color="inherit" onClick={() => history.push("/login")}>
            Entrar
          </Button>
          <Button color="inherit" onClick={() => history.push("/register")}>
            Cadastre-se
          </Button>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
