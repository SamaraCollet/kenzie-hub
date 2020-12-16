import { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Button,
  IconButton,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
import { useSelector } from "react-redux";
import WorkIcon from "@material-ui/icons/Work";

import axios from "axios";
import { Content } from "./style";

const WorksConfig = () => {
  const [workTitleInput, setWorkTitleInput] = useState("");
  const [workDescriptionInput, setWorkDescriptionInput] = useState("");
  const [workUrlInput, setWorkUrlInput] = useState("");

  const userInfos = useSelector((state) => state.currentUserToken);
  const user = userInfos.user;
  const works = user.works;

  const createWork = (evt) => {
    evt.preventDefault();
    axios({
      method: "post",
      url: `https://kenziehub.me/users/works`,
      headers: {
        Authorization: `Bearer ${userInfos.token}`,
      },
      data: {
        title: `${workTitleInput}`,
        description: `${workDescriptionInput}`,
        deploy_url: `${workUrlInput}`,
      },
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form onSubmit={createWork}>
        <TextField
          placeholder="Título"
          value={workTitleInput}
          onChange={(e) => setWorkTitleInput(e.target.value)}
        />
        <TextField
          placeholder="Descrição"
          value={workDescriptionInput}
          onChange={(e) => setWorkDescriptionInput(e.target.value)}
          multiline
        />
        <TextField
          placeholder="Url de Deploy"
          value={workUrlInput}
          onChange={(e) => setWorkUrlInput(e.target.value)}
        />

        <Button type="submit">
          <AddIcon />
        </Button>
      </form>
      <List>
        {works.map((work, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={work.title} secondary={work.description} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default WorksConfig;
