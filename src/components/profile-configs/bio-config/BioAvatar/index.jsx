import axios from "axios";
import { Container } from "./styles";

const BioAvatar = ({ token, actualImg }) => {
  const handleAvatarChange = (e) => {
    const data = new FormData();

    data.append("avatar", e.target.files[0]);

    axios
      .patch("https://kenziehub.me/users/avatar", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => console.error(e));
  };

  return (
    <Container>
      <div className="imageCard">
        <img
          alt="Profile_img"
          src={actualImg ? actualImg : "/assets/user.png"}
        ></img>
      </div>
      <form>
        <input type="file" id="avatar" onChange={handleAvatarChange} />
      </form>
    </Container>
  );
};

export default BioAvatar;
