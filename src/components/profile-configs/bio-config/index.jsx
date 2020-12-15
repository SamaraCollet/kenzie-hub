import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useSelector } from "react-redux";
import { TextField, Button, Snackbar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Alert from "@material-ui/lab/Alert";

const BioConfig = () => {
  const user = useSelector((state) => state.currentUserToken);
  const userInfo = user.user;

  const [snackBar, setSnackBar] = useState(false);
  const [txtName, setTxtName] = useState(userInfo.name);
  const [txtContact, setTxtContact] = useState(userInfo.contact);
  const [txtBio, setTxtBio] = useState(userInfo.bio);
  // const [txtOldPassword, setTxtOldPassword] = useState("");
  // const [txtPassword, setTxtPassword] = useState("");

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    // old_password: yup.string().required("Campo obrigatório"),
    // password: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

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

  const userToken = useSelector((state) => state.currentUserToken);
  // console.log(userToken);
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
        {/* <div>
        <TextField
          name="old_password"
          label="Old Password:"
          inputRef={register}
          type="password"
          error={!!errors.old_password}
          helperText={errors.old_password?.message}
          value={txtOldPassword}
          onChange={(e) => setTxtOldPassword(e.target.value)}
        />
      </div>
      <div>
        <TextField
          name="password"
          label="Password:"
          inputRef={register}
          type="password"
          error={!!errors.password}
          helperText={errors.password?.message}
          value={txtPassword}
          onChange={(e) => setTxtPassword(e.target.value)}
        />
      </div> */}
        <div>
          <Button type="submit">Salvar</Button>
        </div>
      </form>
    </>
  );
};

export default BioConfig;
