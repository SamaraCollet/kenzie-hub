import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import CircularProgress from "@material-ui/core/CircularProgress";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import TabContent from "./tab-content";
import IconButton from "@material-ui/core/IconButton";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import WorkIcon from "@material-ui/icons/Work";
import DeleteIcon from "@material-ui/icons/Delete";
import CloseIcon from "@material-ui/icons/Close";
import { useParams } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import CreateIcon from "@material-ui/icons/Create";
import CheckIcon from "@material-ui/icons/Check";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { useState, useEffect } from "react";
import { UserContainer, ContainerBio } from "./style";
import axios from "axios";
import { useHistory } from 'react-router-dom'
import { useSelector } from "react-redux";

const MyProfile = () => {
  const [isEditable, setEditable] = useState("");
  const [formAddTechs, setFormAddTechs] = useState(false);
  const [currentUser, setUser] = useState({});
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const { id } = useParams()
  const userToken = useSelector(state => state.currentUserToken)
  const userID = window.localStorage.getItem('userID')
  const history = useHistory()

  !userToken && history.push('/notauthorized')

  const handleChange = (evt, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  useEffect(() => {
    profileRequest(id);
  }, []);

  const profileRequest = () => {
    axios
      .get(`https://kenziehub.me/users/${userID}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteTechs = (techID) => {
    axios({
      method: "delete",
      url: `https://kenziehub.me/users/techs/${techID}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleChangeTechs = (techID) => {
    setEditable("");
  };

  const handleFormAddTechs = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `https://kenziehub.me/users/techs`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        title: "HTML",
        status: "Iniciante",
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <UserContainer>
      <Container maxWidth="md">
        <Paper>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollButtons="auto"
          >
            <Tab label="Bio" />
            <Tab label="Tecnologias" />
            <Tab label="Trabalhos" />
            <Tab label="Curso" />
          </Tabs>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabContent value={value} index={0}>
              <ContainerBio>
                {!currentUser.avatar_url ? (
                  <CircularProgress />
                ) : (
                  <img
                    src={currentUser.avatar_url}
                    alt="img profile"
                    width="200"
                  />
                )}
                <List>
                  <ListItem>
                    <ListItemText
                      primary={currentUser.name}
                      secondary={currentUser.bio}
                    />
                  </ListItem>
                  <ListItemSecondaryAction>
                    <IconButton onClick={() => setEditable(true)}>
                      <CreateIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </List>
              </ContainerBio>
            </TabContent>

            <TabContent value={value} index={1} dir={theme.direction}>
              <List>
                {!formAddTechs ? (
                  <IconButton onClick={() => setFormAddTechs(true)}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => setFormAddTechs(false)}>
                    <CloseIcon />
                  </IconButton>
                )}

                {formAddTechs && (
                  <form onSubmit={handleFormAddTechs}>
                    <TextField
                      variant="outlined"
                      placeholder="Tecnologia"
                    ></TextField>
                    <FormControl>
                      <InputLabel id="demo-simple-select-helper-label">
                        Experiência
                      </InputLabel>

                      <Select>
                        <MenuItem value={"Iniciante"}>Iniciante</MenuItem>
                        <MenuItem value={"Intermediário"}>
                          Intermediário
                        </MenuItem>
                        <MenuItem value={"Avançado"}>Avançado</MenuItem>
                      </Select>
                    </FormControl>
                    <Button variant="outlined" type="submit">
                      <CheckIcon />
                    </Button>
                  </form>
                )}
                {currentUser.techs ? (
                  currentUser.techs.map((tech, index) => (
                    <ListItem key={index}>
                      <ListItemText
                        primary={tech.title}
                        secondary={tech.status}
                      />
                      <ListItemSecondaryAction>
                        {isEditable === tech.id && (
                          <FormControl>
                            <InputLabel id="demo-simple-select-helper-label">
                              Experiência
                            </InputLabel>

                            <Select>
                              <MenuItem value={"Iniciante"}>Iniciante</MenuItem>
                              <MenuItem value={"Intermediário"}>
                                Intermediário
                              </MenuItem>
                              <MenuItem value={"Avançado"}>Avançado</MenuItem>
                            </Select>
                          </FormControl>
                        )}
                        {isEditable === tech.id && (
                          <IconButton
                            onClick={() => handleChangeTechs(tech.id)}
                          >
                            <CheckIcon />
                          </IconButton>
                        )}
                        <IconButton onClick={() => setEditable(tech.id)}>
                          <CreateIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDeleteTechs(tech.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))
                ) : (
                  <div>Carregando...</div>
                )}
              </List>
            </TabContent>

            <TabContent value={value} index={2} dir={theme.direction}>
              <List>
                <IconButton>
                  <AddCircleOutlineIcon />
                </IconButton>
                {currentUser.works ? (
                  currentUser.works.map((work, index) => (
                    <ListItem key={index}>
                      <ListItemAvatar>
                        <Avatar>
                          <WorkIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={work.title}
                        secondary={work.description}
                      />
                      <ListItemSecondaryAction>
                        <IconButton onClick={() => setEditable(true)}>
                          <CreateIcon />
                        </IconButton>
                        <IconButton onClick={() => setEditable(true)}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))
                ) : (
                  <div>Carregando...</div>
                )}
              </List>
            </TabContent>
            <TabContent value={value} index={3} dir={theme.direction}>
              {currentUser.course_module}
              <IconButton onClick={() => setEditable(true)}>
                <CreateIcon />
              </IconButton>
            </TabContent>
          </SwipeableViews>
        </Paper>
      </Container>
    </UserContainer>
  );
};

export default MyProfile;
