import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";

import TabContent from "./TabContent";

import { useState, useEffect } from "react";
import { UserContainer } from "./style";
import axios from "axios";

const UserPage = () => {
  const [currentUser, setUser] = useState({})
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (evt, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


  useEffect(() => {
    profileRequest("8b8e50a6-50c2-4718-b817-2d38cad0c8f4")
  }, [])

  const profileRequest = userId => {
    axios
    .get(`https://kenziehub.me/users/${userId}`)
    .then(res => {
      setUser(res.data)
    })
    .catch(err => console.log(err))
  }
  console.log(currentUser)
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
              <img src={currentUser.avatar_url ? currentUser.avatar_url : "/assets/user.png"}/>
              <div>Nome : {currentUser.name}</div>
              <div>Bio : {currentUser.bio}</div>
            </TabContent>
            <TabContent value={value} index={1} dir={theme.direction}>
              {currentUser.techs ? (currentUser.techs.map((tech, index) => (
                <div key={index}>{tech.title} - {tech.status}</div>
              ))) :
              (
                <div>Carregando...</div>
              )}
            </TabContent>
            <TabContent value={value} index={2} dir={theme.direction}>
            {currentUser.works ? (currentUser.works.map((work, index) => (
                <div key={index}>{work.title} - {work.description}</div>
              ))) :
              (
                <div>Carregando...</div>
              )}
            </TabContent>
            <TabContent value={value} index={3} dir={theme.direction}>
              {currentUser.course_module}
            </TabContent>
          </SwipeableViews>
        </Paper>
      </Container>
    </UserContainer>
  );
};

export default UserPage;
