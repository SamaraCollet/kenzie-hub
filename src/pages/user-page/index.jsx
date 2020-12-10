import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useTheme } from "@material-ui/core/styles";

import SwipeableViews from "react-swipeable-views";

import TabContent from "./TabContent";

import { useState } from "react";
import { UserContainer } from "./style";

const UserPage = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (evt, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
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
            <Tab label="Sobre" />
            <Tab label="Experiências " />
            <Tab label="Formação" />
            <Tab label="Análise" />
            <Tab label="Reconhecimentos " />
          </Tabs>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabContent value={value} index={0}>
              O profissional tem experiência nas tecnologias JAVASCRIPT, CSS,
              HTML, e conhecimento nos frameworks: Angular, Css, Html, .NET
              FRAMEWORK, Spring. Ele está ativo no mercado de trabalho há
              aproximadamente 6 anos. Ele já recebeu de pessoas do seu convivio
              profissional 2 recomendações. O desenvolvedor tem interesse nos
              seguintes assuntos: Análise de Dados, Blockchain e Registros de
              Distribuídos. Já trabalhou nas empresas Vulpi, Squadra Tecnologia,
              APTA Sistemas de Automação e possui 12 projetos publicados no
              GitHub.
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
            <TabContent value={value} index={4} dir={theme.direction}>
              wnyertyertyw45
            </TabContent>
          </SwipeableViews>
        </Paper>
      </Container>
    </UserContainer>
  );
};

export default UserPage;
