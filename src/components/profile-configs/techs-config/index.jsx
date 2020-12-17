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
  Avatar,
  ListItemAvatar,
  Popover,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CodeIcon from "@material-ui/icons/Code";
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
  const [anchorEl, setAnchorEl] = useState(null);

  const userInfos = useSelector((state) => state.currentUserToken);
  const open = Boolean(anchorEl);
  const id = open ? "popover" : undefined;

  const handleClick = (evt, setState) => {
    setState(evt.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTargetValue = (evt, setState) => {
    setState(evt.target.value);
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
            <TextField
              label="Tecnologia"
              name="title"
              value={techInput}
              onChange={(evt) => {
                handleTargetValue(evt, setInput);
              }}
            />
          </FormControl>
          <FormControl>
            <Select
              label="Nível"
              name="status"
              value={level}
              onChange={(evt) => {
                handleTargetValue(evt, setLevel);
              }}
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
                  onChange={(evt) => {
                    handleTargetValue(evt, setNewLevel);
                  }}
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
                <ListItemAvatar>
                  <Avatar>
                    <CodeIcon />
                  </Avatar>
                </ListItemAvatar>
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
                  <DeleteIcon
                    onClick={(evt) => {
                      setTechID(tech.id);
                      handleClick(evt, setAnchorEl);
                    }}
                  />
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                  >
                    <h2>Tem certeza?</h2>
                    <Button
                      onClick={() => {
                        deleteTech();
                        handleClose();
                      }}
                    >
                      Sim
                    </Button>
                    <Button onClick={handleClose}>Não</Button>
                  </Popover>
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
