import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Main, Container } from "./styles";
import { useState } from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Login = () => {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

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

  const history = useHistory();

  const handleForm = (value) => {
    axios
      .post("https://kenziehub.me/sessions", { ...value })
      .then((res) => {
        window.localStorage.setItem("authToken", res.data.token);
        console.log("funcionou");
      })

      .catch((err) => {
        setError("email", { message: "Usuário ou senha inválidas" });
      });
  };

  return (
    <Main>
      <Container>
        <h1>Kenzie Hub</h1>
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

          <div>
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
          <button type="submit">Entrar</button>
        </form>
        <Button onClick={() => history.push("/register")}>Cadastre-se</Button>
      </Container>
    </Main>
  );
};

export default Login;
