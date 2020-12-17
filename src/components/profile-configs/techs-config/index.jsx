import { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Button,
  IconButton,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { useSelector } from "react-redux";
import axios from "axios";
import { Content } from "./style";

const TechConfig = () => {
  const [techInput, setInput] = useState("");
  const [level, setLevel] = useState("Básico");
  const [newLevel, setNewLevel] = useState("Básico");
  const [isEditable, setIsEditable] = useState(false);
  const [techID, setTechID] = useState("");
  const [updatableTechs, setTechs] = useState({})

  const userInfos = useSelector((state) => state.currentUserToken);

  const handleLevel = (evt) => {
    setLevel(evt.target.value);
  };

  const handleNewLevel = (evt) => {
    setNewLevel(evt.target.value);
  };

  const handleInput = (evt) => {
    setInput(evt.target.value);
  };

  const handleEditable = () => {
    setIsEditable(true);
  };
  const createTech = (evt) => {
    evt.preventDefault();
    axios({
      method: "post",
      url: `https://kenziehub.me/users/techs/`,
      headers: {
        Authorization: `Bearer ${userInfos.token}`,
      },
      data: { title: `${techInput}`, status: `${level}` },
    }).catch((err) => console.log(err));
  };

  const editTech = (evt) => {
    evt.preventDefault();
    axios({
      method: "put",
      url: `https://kenziehub.me/users/techs/${techID}`,
      headers: {
        Authorization: `Bearer ${userInfos.token}`,
      },
      data: { status: level },
    }).then((res) => {
      setIsEditable(false);
    });
  };

  const deleteTech = (evt) => {
    evt.preventDefault();
    axios({
      method: "delete",
      url: `https://kenziehub.me/users/techs/${techID}`,
      headers: {
        Authorization: `Bearer ${userInfos.token}`,
      },
    });
  };

  return (
    <>
      <form onSubmit={createTech}>
        <Content>
          <FormControl>
            <TextField name="title" value={techInput} onChange={handleInput} />
          </FormControl>
          <FormControl>
            <Select
              label="Nível"
              name="status"
              value={level}
              onChange={handleLevel}
            >
              <MenuItem value="Iniciante">Básico</MenuItem>
              <MenuItem value="Intermediário">Intermediário</MenuItem>
              <MenuItem value="Avançado">Avançado</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <Button type="submit">
              <AddIcon />
            </Button>
          </FormControl>
        </Content>
      </form>
      <List>
        {isEditable ? (
          <form onSubmit={editTech}>
            <Content>
              <FormControl>
                <Select
                  label="Nível"
                  name="status"
                  value={newLevel}
                  onChange={handleNewLevel}
                >
                  <MenuItem value="Iniciante">Básico</MenuItem>
                  <MenuItem value="Intermediário">Intermediário</MenuItem>
                  <MenuItem value="Avançado">Avançado</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <Button type="submit">Atualizar</Button>
              </FormControl>
              <Button onClick={() => setIsEditable(false)}>Cancelar</Button>
            </Content>
          </form>
        ) : userInfos.user.techs ? (
          userInfos.user.techs.map((tech, index) => (
            <>
              <ListItem key={index}>
                <ListItemText primary={tech.title} secondary={tech.status} />
                <IconButton>
                  <CreateIcon
                    onClick={() => {
                      setTechID(tech.id);
                      handleEditable();
                    }}
                  />
                </IconButton>
                <IconButton>
                  <DeleteIcon onClick={deleteTech} />
                </IconButton>
              </ListItem>
            </>
          ))
        ) : (
          <div>Carregando...</div>
        )}
      </List>
    </>
  );
};

export default TechConfig;
