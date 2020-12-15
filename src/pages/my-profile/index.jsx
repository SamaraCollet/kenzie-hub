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
import { useParams } from 'react-router-dom'
import CreateIcon from '@material-ui/icons/Create';
import { useState, useEffect } from "react";
import { UserContainer, ContainerBio } from "./style";
import axios from "axios";

const MyProfile = () => {
  const [isEditable, setEditable] = useState(false)
  const [currentUser, setUser] = useState({});
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const { id } = useParams()
  const userID = window.localStorage.getItem('userID')

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


  return (
    <UserContainer>
        {isEditable ? (
        
            <div>Oi</div>
        ) : (
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
                      <img src={currentUser.avatar_url} alt="img profile" />
                    )}
                    <div>Nome: <span>{currentUser.name}</span></div>
                    <div>Bio: <span>{currentUser.bio}</span></div>
                    
                    <IconButton onClick={() => setEditable(true)}><CreateIcon/></IconButton>
                  </ContainerBio>
                </TabContent>

                <TabContent value={value} index={1} dir={theme.direction}>
                  <List>
                    {currentUser.techs ? (
                      currentUser.techs.map((tech, index) => (
                        <ListItem key={index}>
                          <ListItemText
                            primary={tech.title}
                            secondary={tech.status}
                          />
                        </ListItem>
                      ))
                    ) : (
                      <div>Carregando...</div>
                    )}
                    <IconButton onClick={() => setEditable(true)}><CreateIcon/></IconButton>
                  </List>
                </TabContent>

                <TabContent value={value} index={2} dir={theme.direction}>
                  <List>
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
                        </ListItem>
                      ))
                    ) : (
                      <div>Carregando...</div>
                    )}
                    <IconButton onClick={() => setEditable(true)}><CreateIcon/></IconButton>
                  </List>
                </TabContent>
                <TabContent value={value} index={3} dir={theme.direction}>
                  {currentUser.course_module}
                  <IconButton onClick={() => setEditable(true)}><CreateIcon/></IconButton>
                </TabContent>
              </SwipeableViews>
            </Paper>
            </Container>
        )}
    </UserContainer>
  );
};

export default MyProfile;
