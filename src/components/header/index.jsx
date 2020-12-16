import { Container, ToolbarStyled } from "./style";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { AppBar, Button } from "@material-ui/core";

import { addUserToken } from '../../store/modules/current-user/action'

const Header = () => {
  const userToken = useSelector((state) => state.currentUserToken);
  const history = useHistory();
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(addUserToken(''))
    window.localStorage.clear();
    history.push("/");
  };

  return(
    <Container>
    {userToken === '' ? (
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
    ) : (
      <AppBar position="fixed">
        <ToolbarStyled>
          <div className="logo">
            <img
              src="/assets/logo.png"
              alt="logo"
              onClick={() => history.push("/feed")}
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
    )}
    </Container>
  )
};

export default Header;
