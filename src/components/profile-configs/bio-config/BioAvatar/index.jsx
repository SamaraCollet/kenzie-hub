import axios from "axios";
import { Container } from "./styles";
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const BioAvatar = ({ token, actualImg }) => {
  const users = useSelector((state) => state.currentUserToken);
  const userID = users.user.id
  const [avatar, setAvatar] = useState('')

  useEffect(() => {
    axios
    .get(`https://kenziehub.me/users/${userID}`)
    .then((response) => {
      console.log(response)
      setAvatar(response.data.avatar_url)
    })
    .catch((e) => console.error(e));
  }, [] )

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
        setAvatar(response.data.avatar_url)
      })
      .catch((e) => console.error(e));
  };

  

  return (
    <Container>
      <div className="imageCard">
        <img
          alt="Profile_img"
          src={avatar ? avatar : "/assets/user.png"}
        ></img>
      </div>
      <form>
        <input type="file" id="avatar" onChange={handleAvatarChange} />
      </form>
    </Container>
  );
};

export default BioAvatar;
