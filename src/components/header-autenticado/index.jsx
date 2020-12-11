import { useHistory } from "react-router-dom";
import { Container } from "./style";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const HeaderLogOut = ({setAuthentication, authentication}) => {
  const history = useHistory();

  const logout = () => {
    window.localStorage.clear();
    history.push("/");
    setAuthentication(false);
  };

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
            <Button color="inherit" onClick={() => history.push("/user")}>
              Meu perfil
            </Button>
            <Button color="inherit" onClick={logout}>
              Sair
            </Button>

          </div>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default HeaderLogOut;
