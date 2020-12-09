import { ContainerHome, Banner } from "./style";


const Home = () => {
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
          <button>Bora la!</button>
        </div>
        <div className="imageHome">
          <img src="/assets/imgbanner.jpg" alt="" />
        </div>
      </Banner>
    </ContainerHome>
  );
};

export default Home;
