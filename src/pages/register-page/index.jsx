import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ContainerStyled } from "./styles";
import { Main, ButtonStyled } from "../../styles/styles_login_register";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const RegisterPage = () => {
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
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /[A-Za-z]* [A-Za-z]/g,
        "Não pode receber números nem caracteres especiais, deve ter pelo menos o primeiro e o segundo nome. "
      ),

    email: yup.string().required("Campo obrigatório").email("Email inválido"),

    bio: yup.string().required("Campo obrigatório"),

    course_module: yup.string().required("Campo obrigatório"),

    contact: yup.string().required("Campo obrigatório"),

    password: yup
      .string()
      .required("Campo obrigatório.")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial"
      ),

    password_confirmation: yup
      .string()
      .required("Campo Obrigatório")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const handleForm = (value) => {
    axios
      .post(`https://kenziehub.me/users`, { ...value })
      .then((res) => history.push("/login"))
      .catch((err) => console.log(err));
  };

  return (
    <Main>
      <ContainerStyled>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(handleForm)}>
          <div>
            <TextField
              name="name"
              label="Nome"
              inputRef={register}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </div>
          <div>
            <TextField
              name="email"
              label="Email"
              inputRef={register}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </div>
          <div>
            <TextField
              name="bio"
              label="Biografia"
              inputRef={register}
              error={!!errors.bio}
              helperText={errors.bio?.message}
            />
          </div>
          <div>
            <TextField
              name="course_module"
              label="Modulo"
              inputRef={register}
              error={!!errors.course_module}
              helperText={errors.course_module?.message}
            />
          </div>
          <div>
            <TextField
              name="contact"
              label="Contato"
              inputRef={register}
              error={!!errors.contact}
              helperText={errors.contact?.message}
            />
          </div>
          <div className="password">
            <TextField
              name="password"
              label="Senha"
              inputRef={register}
              error={!!errors.password}
              helperText={errors.password?.message}
              type={values.showPassword ? "text" : "password"}
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
          <div className="password">
            <TextField
              name="password_confirmation"
              label="Confirme a senha"
              inputRef={register}
              error={!!errors.password_confirmation}
              helperText={errors.password_confirmation?.message}
              type={values.showPassword ? "text" : "password"}
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
            <ButtonStyled type="submit">Enviar</ButtonStyled>
          </div>
        </form>
      </ContainerStyled>
    </Main>
  );
};

export default RegisterPage;
