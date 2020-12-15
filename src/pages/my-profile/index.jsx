import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserContainer, ContainerBio } from "./style";
import TabContent from "./tab-content";
import axios from "axios";

import {
  Container,
  Paper,
  Tabs,
  Tab,
  TextField,
  Button,
  SwipeableViews,
  CircularProgress,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  ListItemAvatar,
  Avatar,
  FormControl,
  InputLabel,
  CreateIcon,
  CheckIcon,
  Select,
  MenuItem,
} from "@material-ui/core";

import {
  WorkIcon,
  DeleteIcon,
  CloseIcon,
  AddCircleOutlineIcon,
} from "@material-ui/icons";

import { useTheme } from "@material-ui/core/styles";

const MyProfile = () => {
  const [change, setChange] = useState(false);
  const [isEditable, setEditable] = useState("");
  const [formAdd, setFormAdd] = useState("");
  const [currentUser, setUser] = useState({});
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const { id } = useParams();
  const userToken = useSelector((state) => state.currentUserToken);
  const userID = window.localStorage.getItem("userID");
  const history = useHistory();

  !userToken && history.push("/notauthorized");

  const handleChange = (evt, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  useEffect(() => {
    profileRequest();
  }, []);

  const profileRequest = () => {
    axios
      .get(`https://kenziehub.me/users/${userID}`)
      .then((res) => {
        console.log(res.data);

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
        title: "JS",
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
                {!formAdd ? (
                  <IconButton onClick={() => setFormAdd(true)}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => setFormAdd(false)}>
                    <CloseIcon />
                  </IconButton>
                )}

                {formAdd && (
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
              {formAdd === "jobs" ? (
                <div>
                  <IconButton onClick={() => setFormAdd("")}>
                    <CloseIcon />
                  </IconButton>

                  <form>
                    <TextField placeholder="Título" variant="outlined" />
                    <TextField
                      placeholder="Descrição"
                      variant="outlined"
                      multiline
                    />
                    <Button type="submit" variant="outlined">
                      Salvar
                    </Button>
                  </form>
                </div>
              ) : (
                <IconButton onClick={() => setFormAdd("jobs")}>
                  <AddCircleOutlineIcon />
                </IconButton>
              )}

              <List>
                {currentUser.works ? (
                  currentUser.works.map((work, index) => (
                    <ListItem key={index}>
                      <ListItemAvatar>
                        <Avatar>
                          <WorkIcon />
                        </Avatar>
                      </ListItemAvatar>
                      {isEditable === work.id ? (
                        <div>
                          <TextField
                            placeholder={work.name}
                            variant="outlined"
                          />
                          <TextField variant="outlined" multiline />
                        </div>
                      ) : (
                        <ListItemText
                          primary={work.title}
                          secondary={work.description}
                        />
                      )}
                      <ListItemSecondaryAction>
                        <IconButton onClick={() => setEditable(work.id)}>
                          <CreateIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => {
                            setEditable(true);
                          }}
                        >
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
