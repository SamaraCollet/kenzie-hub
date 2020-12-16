import { UserContainer, ContainerBio } from "./style";
import {Avatar, ListItemAvatar, ListItemText, ListItem, List, Tab, Tabs,Paper, Container} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import WorkOutline from "@material-ui/icons/WorkOutline";
import CodeIcon from "@material-ui/icons/Code";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import TabContent from "./tab-content";

const MyProfile = () => {
  const [currentUser, setUser] = useState({});
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const { id } = useParams();

  const handleChange = (evt, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  useEffect(() => {
    profileRequest(id);
  }, []); // eslint-disable-line

  const profileRequest = (userId) => {
    axios
      .get(`https://kenziehub.me/users/${userId}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <UserContainer>
      <Container>
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
            {/* Tab bio  */}
            <TabContent value={value} index={0}>
              <ContainerBio>
                <div className="imageCard">
                  <img
                    alt="imgUser"
                    src={
                      currentUser.avatar_url
                        ? currentUser.avatar_url
                        : "/assets/user.png"
                    }
                  />
                </div>
                <div className="bio">
                  <h1>{currentUser.name}</h1>
                  <h2>
                    <span>Bio:</span> {currentUser.bio}
                  </h2>
                </div>
              </ContainerBio>
            </TabContent>

            {/*TECHS*/}
            <TabContent value={value} index={1} dir={theme.direction}>
              <List>
                <div className="techs">
                  {currentUser.techs ? (
                    currentUser.techs.map((tech, index) => (
                      <ListItem key={index}>
                        <ListItemAvatar>
                          <Avatar>
                            <CodeIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={tech.title}
                          secondary={tech.status}
                        />
                      </ListItem>
                    ))
                  ) : (
                    <div>Carregando...</div>
                  )}
                </div>
              </List>
            </TabContent>
            <TabContent value={value} index={2} dir={theme.direction}>
              <List>
                {currentUser.works ? (
                  currentUser.works.map((work, index) => (
                    <ListItem key={index}>
                      <ListItemAvatar>
                        <Avatar>
                          <WorkOutline />
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
              </List>
            </TabContent>
            <TabContent value={value} index={3} dir={theme.direction}>
              <div className="course">
                <h2>{currentUser.course_module}</h2>
              </div>
            </TabContent>
          </SwipeableViews>
        </Paper>
      </Container>
    </UserContainer>
  );
};

export default MyProfile;
