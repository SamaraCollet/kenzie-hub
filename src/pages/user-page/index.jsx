import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { useState } from "react";
import { UserContainer } from "./style";

const UserPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (evt, newValue) => {
    setValue(newValue);
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
            centered
          >
            <Tab label="Sobre"> </Tab>
            <Tab label="Experiências " />
            <Tab label="Formação" />
            <Tab label="Análise" />
            <Tab label="Reconhecimentos " />
          </Tabs>
        </Paper>
      </Container>
    </UserContainer>
  );
};

export default UserPage;
