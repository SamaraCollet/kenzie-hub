import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useSelector } from "react-redux";
import { TextField, Button, Snackbar } from "@material-ui/core";
import { useState } from "react";
import Alert from "@material-ui/lab/Alert";

import ChangePassword from "./ChangePassword";
import BioAvatar from "./BioAvatar";

const BioConfig = () => {

  const user = useSelector((state) => state.currentUserToken);

  const userInfo = user.user;

  const [snackBar, setSnackBar] = useState(false);
  const [txtName, setTxtName] = useState(userInfo.name);
  const [txtContact, setTxtContact] = useState(userInfo.contact);
  const [txtBio, setTxtBio] = useState(userInfo.bio);

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });


  const handleForm = (value) => {
    axios({
      method: "put",
      url: `https://kenziehub.me/profile`,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      data: value,
    }).then((response) => setSnackBar(true));
  };

  return (
    <>
      <Snackbar
        open={snackBar}
        autoHideDuration={6000}
        onClose={() => setSnackBar(false)}
      >
        <Alert severity="success">
          Seus dados foram atualizados com sucesso!
        </Alert>
      </Snackbar>
      <BioAvatar token={user.token} actualImg={userInfo.avatar_url} />
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <TextField
            name="name"
            label="Nome:"
            inputRef={register}
            error={!!errors.name}
            helperText={errors.name?.message}
            value={txtName}
            onChange={(e) => setTxtName(e.target.value)}
          />
        </div>
        <div>
          <TextField
            name="contact"
            label="Contato:"
            inputRef={register}
            error={!!errors.contact}
            helperText={errors.contact?.message}
            value={txtContact}
            onChange={(e) => setTxtContact(e.target.value)}
          />
        </div>
        <div>
          <TextField
            name="bio"
            label="Bio:"
            inputRef={register}
            error={!!errors.bio}
            helperText={errors.bio?.message}
            value={txtBio}
            onChange={(e) => setTxtBio(e.target.value)}
            multiline
          />
        </div>
        <div>
          <Button type="submit">Salvar</Button>
        </div>
      </form>
      <ChangePassword token={user.token} />
    </>
  );
};

export default BioConfig;
