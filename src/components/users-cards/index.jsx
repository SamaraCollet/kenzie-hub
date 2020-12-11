import Button from "@material-ui/core/Button";
import { CardStyled } from "./style";
import { useSelector } from "react-redux";

const UsersCard = () => {
  const users = useSelector((state) => state.user);

  return users.map((user, index) => (
    <CardStyled key={index} hoverable>
      <div className="imageCard">
        <img
          alt="example"
          src={user.avatar_url ? user.avatar_url : "/assets/user.png"}
        />
      </div>
      <div>
        <h1>{user.name}</h1> <h2>{user.course_module}</h2>
      </div>
      <div className="button">
        <Button>Perfil</Button>
      </div>
    </CardStyled>
  ));
};

export default UsersCard;

// "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
