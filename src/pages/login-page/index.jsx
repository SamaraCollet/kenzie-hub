<<<<<<< HEAD
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Main, Container } from './styles'
=======
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Main, Container } from "./styles";
>>>>>>> dfb0ea47c882e75aae768578e759ebdb15ec0b57

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
<<<<<<< HEAD
    password: yup.string().required("Campo obrigatório")
  })
=======
    password: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();
>>>>>>> dfb0ea47c882e75aae768578e759ebdb15ec0b57



  const handleForm = value => {
    axios.post("https://kenziehub.me/sessions", {...value})
<<<<<<< HEAD
    .then(res => console.log(res))
    .catch(err => console.log(err))
=======
    .then(res =>{
      window.localStorage.setItem('authToken', res.data.token)
      console.log("funcionou")})
    
    .catch((err) => {
      setError("email" , {message: "Usuário ou senha inválidas"})
    })
>>>>>>> dfb0ea47c882e75aae768578e759ebdb15ec0b57
  }

  return (
    <Main>
      <Container>
        <h1>Kenzie Hub</h1>
        <form onSubmit={handleSubmit(handleForm)}>
          <TextField
            name="email"
            label="Email"
            inputRef={register}
            error={!!errors.email || !!errors.password}
            helperText={errors.email?.message}
          />
          <TextField
            name="password"
            label="Senha"
            inputRef={register}
            error={!!errors.password || !!errors.email}
            helperText={errors.password?.message}
          />
          <button type="submit">Entrar</button>
        </form>
        <Button onClick={() => history.push("/register")}>Cadastre-se</Button>
      </Container>
    </Main>
  );
};

export default Login;
