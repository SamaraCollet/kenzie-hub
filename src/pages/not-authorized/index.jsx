import { Container, Div } from "./styles";
import { useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NotAuthorized = () => {
  const userToken = useSelector(state => state.currentUserToken)
  const history = useHistory()
  return (
    <Container>
        {userToken ? (
          history.push('/pagenotfound')
        ) : (
          <Div>
            <h1>Você precisa estar logado pra ter acesso a essa página</h1>
            <div>Já é membro do Kenzie Hub ? <Link>logar-se</Link></div>
            <div>Mas se ainda não for membro, você pode se <Link>cadastrar</Link></div>
          </Div>
        )}

    </Container>
  );
};

export default NotAuthorized;
