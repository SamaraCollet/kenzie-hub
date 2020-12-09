import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Main, Container } from './styles'


const Login = () => {
  const schema = yup.object().shape({
    user: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório")
  })

  const { register, handleSubmit, errors, setError } = useForm({ resolver : yupResolver(schema)})

  const history = useHistory()

  const handleForm = value => {
    axios.post("https://kenziehub.me/sessions", {...value})
    .then(res => console.log(res))
    .catch((err) => {
      setError("email" , {message: "Usuário ou senha inválidas"})})
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
            <Button type="submit">Entrar</Button>
        </form>
        <Button
          onClick={() => history.push("/register")}
        >
          Cadastre-se
        </Button>
      </Container>
    </Main>
  );
};

export default Login;
