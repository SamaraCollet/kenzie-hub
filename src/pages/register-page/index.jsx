import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Button from '@material-ui/core/Button'
import { Container, StyledForm, StyledInput } from './styles.jsx'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const RegisterPage = () => {
    const schema = yup.object().shape({
        name: yup.string()
        .required("Campo obrigatório")
        .matches(
            /[A-Za-z]* [A-Za-z]/g,
            "Não pode receber números nem caracteres especiais, deve ter pelo menos o primeiro e o segundo nome. "
        ),
        
        email: yup.string()
        .required("Campo obrigatório")
        .email("Email inválido"),

        bio: yup.string()
        .required("Campo obrigatório"),

        course_module: yup.string()
        .required("Campo obrigatório"),

        contact: yup.string()
        .required("Campo obrigatório"),

        password: yup
        .string()
        .required("Campo obrigatório.")
        .matches(
          /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial"
        ),

        password_confirmation: yup.string()
        .required("Campo Obrigatório")
        .oneOf([yup.ref("password")], "Senhas diferentes"),
    })
    

    const { register, handleSubmit, errors, setError } = useForm({
        resolver: yupResolver(schema),
    });

    const history = useHistory()

    const handleForm = value => {
        axios
        .post(`https://kenziehub.me/users`, {...value})
        .then(res => history.push('/login'))
        .catch((err) => console.log(err));
    }
    
    return (
        <Container>
            <StyledForm onSubmit={handleSubmit(handleForm)}>
                <StyledInput
                    name="name"
                    label="Nome"
                    inputRef={register}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />
                <StyledInput
                    name="email"
                    label="Email"
                    inputRef={register}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
                <StyledInput
                    name="bio"
                    label="Biografia"
                    inputRef={register}
                    error={!!errors.bio}
                    helperText={errors.bio?.message}
                />
                <StyledInput
                    name="course_module"
                    label="Modulo"
                    inputRef={register}
                    error={!!errors.course_module}
                    helperText={errors.course_module?.message}
                />
                <StyledInput
                    name="contact"
                    label="Contato"
                    inputRef={register}
                    error={!!errors.contact}
                    helperText={errors.contact?.message}
                />
                <StyledInput
                    name="password"
                    label="Senha"
                    inputRef={register}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />
                <StyledInput
                    name="password_confirmation"
                    label="Confirme a senha"
                    inputRef={register}
                    error={!!errors.password_confirmation}
                    helperText={errors.password_confirmation?.message}
                />
                <Button type="submit">Enviar</Button>
            </StyledForm>
        </Container>
    )
}

export default RegisterPage