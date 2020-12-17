import { ContainerStyled } from "./styles";
import { InputAdornment, IconButton, TextField } from "@material-ui/core";
import { VisibilityOff, Visibility } from "@material-ui/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import { Main, ButtonStyled } from "../../styles/styles_login_register";
import { addUserToken } from "../../store/modules/current-user/action";
import {userEdit} from "../../store/modules/user-edit/action"

const Login = () => {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const history = useHistory();

  const handleChange = (prop) => (evt) => {
    setValues({ ...values, [prop]: evt.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const handleForm = (value) => {
    axios
      .post("https://kenziehub.me/sessions", { ...value })
      .then((res) => {
        dispatch(userEdit(res.data.user));
        dispatch(addUserToken(res.data));
        window.localStorage.setItem("userInfos", JSON.stringify(res.data))
        window.localStorage.setItem("updatable", JSON.stringify(res.data.user))
        window.localStorage.setItem("authToken", res.data.token);
        history.push("/feed");
      })

      .catch((err) => {
        setError("email", { message: "Usuário ou senha inválidas" });
      });
  };

  return (
    <Main>
      <ContainerStyled>
        <h1>kenzie hub</h1>
        <form onSubmit={handleSubmit(handleForm)}>
          <div>
            <TextField
              name="email"
              label="Email"
              inputRef={register}
              error={!!errors.email || !!errors.password}
              helperText={errors.email?.message}
            />
          </div>

          <div className="password">
            <TextField
              name="password"
              label="Senha"
              inputRef={register}
              error={!!errors.password || !!errors.email}
              helperText={errors.password?.message}
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="togle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="buttonStyled">
            <ButtonStyled type="submit">Entrar</ButtonStyled>
          </div>
        </form>
        <p>
          Ainda não é do grupo? <Link to="/register">Cadastre-se</Link>
        </p>
      </ContainerStyled>
    </Main>
  );
};

export default Login;
