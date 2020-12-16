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
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CodeIcon from "@material-ui/icons/Code";
import CreateIcon from "@material-ui/icons/Create";
import { useSelector } from "react-redux";
import axios from "axios";
import { Content } from "./style";

const TechConfig = () => {
  const [techInput, setInput] = useState("");
  const [level, setLevel] = useState("Básico");
  const [isEditable, setIsEditable] = useState(false);
  const userInfos = useSelector((state) => state.currentUserToken);
  const handleLevel = (evt) => {
    setLevel(evt.target.value);
  };

  const handleInput = (evt) => {
    setInput(evt.target.value);
  };

  const handleEditable = () => {
    setIsEditable(true);
  };
  console.log(userInfos);

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

  return (
    <>
      <form onSubmit={createTech}>
        <Content>
          <FormControl>
            <TextField
              label="Tecnologia"
              name="title"
              value={techInput}
              onChange={handleInput}
            />
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
          <div>AAAAAAAA</div>
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
                  <CreateIcon onClick={handleEditable} />
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
