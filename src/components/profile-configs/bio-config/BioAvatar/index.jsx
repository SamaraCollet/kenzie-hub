import axios from "axios";

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
    <div>
      <img
        alt="Profile_img"
        src={actualImg ? actualImg : "/assets/user.png"}
        width="100"
        height="100"
      ></img>
      <form>
        <input type="file" id="avatar" onChange={handleAvatarChange} />
      </form>
    </div>
  );
};

export default BioAvatar;
