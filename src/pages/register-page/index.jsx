import { MenuItem, IconButton, Select, InputLabel, FormControl, TextField, InputAdornment} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ContainerStyled, RadioStyling } from "./styles";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

import { Main, ButtonStyled } from "../../styles/styles_login_register";

const RegisterPage = () => {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
    module: "Primeiro módulo (Introdução ao Frontend)",
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

  const { register, handleSubmit, errors, control, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const handleForm = (value) => {
    console.log(value);
    axios
      .post(`https://kenziehub.me/users`, { ...value })
      .then((res) => history.push("/login"))
      .catch(() => {
        setError("email", { message: "Este email já está sendo utilizado" });
      });
  };

  return (
    <Main>
      <ContainerStyled>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(handleForm)}>
          <div className="formDivider">
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
            <RadioStyling>
              <FormControl>
                <InputLabel>Módulo</InputLabel>
                <Controller
                  as={
                    <Select
                      value={values.module}
                      onChange={handleChange("module")}
                      inputRef={register}
                    >
                      <MenuItem value="Primeiro módulo (Introdução ao Frontend)">
                        Primeiro módulo (Introdução ao Frontend)
                      </MenuItem>
                      <MenuItem value="Segundo módulo (Frontend Avançado)">
                        Segundo módulo (Frontend Avançado)
                      </MenuItem>
                      <MenuItem value="Terceiro módulo (Introdução ao Backend)">
                        Terceiro módulo (Introdução ao Backend)
                      </MenuItem>
                      <MenuItem value="Quarto módulo (Backend Avançado)">
                        Quarto módulo (Backend Avançado)
                      </MenuItem>
                    </Select>
                  }
                  control={control}
                  name="course_module"
                />
              </FormControl>
            </RadioStyling>
          </div>
          <div>
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
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
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
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="buttonStyled">
              <ButtonStyled type="submit">Enviar</ButtonStyled>
            </div>
          </div>
        </form>
      </ContainerStyled>
    </Main>
  );
};

export default RegisterPage;
