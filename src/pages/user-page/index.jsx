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



  const profileRequest = userId => {
    axios
    .get(`https://kenziehub.me/users/${userId}`)
    .then(res => {
      setUser(res)
      console.log(currentUser)
    })
    .catch(err => console.log(err))
  }
  useEffect(() => {
    profileRequest("8b8e50a6-50c2-4718-b817-2d38cad0c8f4")
  }, [])

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
              O profissional tem experiência nas tecnologias JAVASCRIPT, CSS,
              HTML, e conhecimento nos frameworks: Angular, Css, Html, .NET
              FRAMEWORK, Spring.
            </TabContent>
            <TabContent value={value} index={1} dir={theme.direction}>
              AEAOEKAOSKDAK
            </TabContent>
            <TabContent value={value} index={2} dir={theme.direction}>
              GSDFGSDBSDF
            </TabContent>
            <TabContent value={value} index={3} dir={theme.direction}>
              234526254727
            </TabContent>
          </SwipeableViews>
        </Paper>
      </Container>
    </UserContainer>
  );
};

export default UserPage;
