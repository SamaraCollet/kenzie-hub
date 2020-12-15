import { useHistory } from "react-router-dom";

import { Container, ToolbarStyled } from "../header/style";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

const HeaderLogOut = () => {
  const history = useHistory();

  const logout = () => {
    window.localStorage.clear();
    history.push("/");
  };

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
            <Button color="inherit" onClick={() => history.push("/myprofile")}>
              Meu perfil
            </Button>
            <Button color="inherit" onClick={logout}>
              Sair
            </Button>

          </div>
        </ToolbarStyled>
      </AppBar>
    </Container>
  );
};

export default HeaderLogOut;
