import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useSelector } from "react-redux";
import { TextField, Button, Snackbar, IconButton } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Alert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Container } from "./styles";

import { addUserToken } from "../../../../store/modules/current-user/action";

const BioConfig = () => {
  const user = useSelector((state) => state.currentUserToken);
  const [snackBar, setSnackBar] = useState(false);
  const [txtOldPassword, setTxtOldPassword] = useState("");
  const [txtPassword, setTxtPassword] = useState("");
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
    module: "Primeiro módulo (Introdução ao Frontend)",
  });

  const schema = yup.object().shape({
    old_password: yup
      .string()
      .required("Campo obrigatório.")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial"
      ),
    password: yup
      .string()
      .required("Campo obrigatório.")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial"
      ),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const history = useHistory();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(addUserToken(""));
    window.localStorage.clear();
    history.push("/");
  };

  const handleForm = (value) => {
    axios({
      method: "put",
      url: `https://kenziehub.me/profile`,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      data: value,
    }).then((response) => {
      setSnackBar(true);
      logout();
    });
  };

  return (
    <Container>
      <Snackbar
        open={snackBar}
        autoHideDuration={6000}
        onClose={() => setSnackBar(false)}
      >
        <Alert severity="success">Senha alterada com sucesso!</Alert>
      </Snackbar>
      <form onSubmit={handleSubmit(handleForm)}>
        <div className="password">
          <TextField
            name="old_password"
            label="Senha Antiga:"
            inputRef={register}
            type={values.showPassword ? "text" : "password"}
            error={!!errors.old_password}
            helperText={errors.old_password?.message}
            value={txtOldPassword}
            onChange={(e) => setTxtOldPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="togle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {!values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="password">
          <TextField
            name="password"
            label="Nova Senha:"
            inputRef={register}
            type={values.showPassword ? "text" : "password"}
            error={!!errors.password}
            helperText={errors.password?.message}
            value={txtPassword}
            onChange={(e) => setTxtPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="togle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {!values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="buttonStyled">
          <Button type="submit">Alterar</Button>
        </div>
      </form>
    </Container>
  );
};

export default BioConfig;
