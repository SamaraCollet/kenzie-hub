import { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Button,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useSelector } from "react-redux";
import axios from "axios";
import { Content } from "./style";

const TechConfig = () => {
  const [techInput, setInput] = useState("");
  const [level, setLevel] = useState("Básico");
  const userInfos = useSelector((state) => state.currentUserToken);
  const userID = userInfos.user?.id;

  const handleLevel = (evt) => {
    setLevel(evt.target.value);
  };

  const handleInput = (evt) => {
    setInput(evt.target.value);
  };

  console.log(userInfos);

  const handleTech = (evt) => {
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
      <form onSubmit={handleTech}>
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
        {userInfos.user.techs ? (
          userInfos.user.techs.map((tech, index) => (
            <ListItem key={index}>
              <ListItemText primary={tech.title} secondary={tech.status} />
            </ListItem>
          ))
        ) : (
          <div>Carregando...</div>
        )}
      </List>
    </>
  );
};

export default TechConfig;
