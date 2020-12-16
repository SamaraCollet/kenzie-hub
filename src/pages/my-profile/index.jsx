import {
  Container,
  Paper,
  Tabs,
  Tab,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import WorkIcon from "@material-ui/icons/Work";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { UserContainer, ContainerBio } from "./style";
import axios from "axios";
import CourseConfig from "../../components/profile-configs/course-config";
import TabContent from "./tab-content";
import BioConfig from "../../components/profile-configs/bio-config";
import NotAuthorized from "../../pages/not-authorized";

const MyProfile = () => {
  const userInfos = useSelector((state) => state.currentUserToken);
  const [currentUser, setUser] = useState({});
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const userID = userInfos.user?.id;

  const handleChange = (evt, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  useEffect(() => {
    if (userID) {
      profileRequest(userID);
    }
    return;
  }, []);

  const profileRequest = (id) => {
    axios
      .get(`https://kenziehub.me/users/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <UserContainer>
      {userID ? (
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
                  <BioConfig />
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
                </List>
              </TabContent>
              <TabContent value={value} index={3} dir={theme.direction}>
                <ContainerBio>
                  <CourseConfig />
                </ContainerBio>
              </TabContent>
            </SwipeableViews>
          </Paper>
        </Container>
      ) : (
        <NotAuthorized />
      )}
    </UserContainer>
  );
};

export default MyProfile;
