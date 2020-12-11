import { ContainerHome, Banner } from "./style";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <ContainerHome>
      <Banner>
        <div className="bannerContent">
          <h1>Você também ama codar?</h1>
          <p>
            E conhecer coleguinhas que amam codar? Aqui tem lugar para mais um!
            Faça parte do grupo! A final, não há limites para o desenvolvimento,
            não é mesmo?
          </p>
          <Button onClick={() => history.push("/register")}>Bora la!</Button>
          <Button onClick={() => history.push("/feed")}>Feed</Button>
        </div>
        <div className="imageHome">
          <img src="/assets/imgbanner.jpg" alt="" />
        </div>
      </Banner>
    </ContainerHome>
  );
};

export default Home;
