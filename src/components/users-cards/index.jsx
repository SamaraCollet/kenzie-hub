import { CardStyled } from "./style";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'

const UsersCard = () => {
  const users = useSelector((state) => state.user);
  const history = useHistory()

  return users.map((user, index) => (
    <CardStyled
    key={index}
    hoverable
    onClick={() => {
      history.push(`/user/${user.id}`)
    }}
    >
      <div className="imageCard">
        <img
          alt="example"
          src={user.avatar_url ? user.avatar_url : "/assets/user.png"}
        />
      </div>
      <div>
        <h1>{user.name}</h1>
        <h2>{user.course_module}</h2>
      </div>
      <div className="button">
        <Button>Perfil</Button>
      </div>
    </CardStyled>
  ));
};

export default UsersCard;
