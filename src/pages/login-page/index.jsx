import { TextField, Button } from "@material-ui/core";
import { Main, Container } from "./styles";
const Login = () => {
  return (
    <Main>
      <Container>
        <h1>Kenzie Hub</h1>
        <TextField
          className="input-text-login"
          label="Email: "
          variant="outlined"
        />
        <TextField
          className="input-text-login"
          label="Senha: "
          variant="outlined"
        />
        <Button
          className="input-button-login"
          variant="contained"
          color="primary"
        >
          Logar
        </Button>
        <Button
          className="input-button-login"
          variant="outlined"
          color="default"
        >
          Cadastre-se
        </Button>
      </Container>
    </Main>
  );
};

export default Login;
