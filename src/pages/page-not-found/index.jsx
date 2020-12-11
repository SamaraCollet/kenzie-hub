import { Container, Button, Div } from "./styles";
import { useHistory } from "react-router-dom";

const PageNotFound = () => {
  const history = useHistory();
  return (
    <Container>
      <Div>
        <h1>Ops! Essa página não foi encontrada!</h1>
        <Button onClick={() => history.push("/")}>Voltar para Home</Button>
      </Div>
    </Container>
  );
};

export default PageNotFound;
