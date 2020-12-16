import { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Modal,
  Backdrop,
  Fade,
  TextField,
  Button,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import axios from "axios";
import { ModalStyle } from "./style";

const TechConfig = () => {
  const [currentUser, setUser] = useState({});
  const [open, setOpen] = useState(false);

  const userInfos = useSelector((state) => state.currentUserToken);
  const userID = userInfos.user?.id;

  const profileRequest = (id) => {
    axios
      .get(`https://kenziehub.me/users/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  const modalToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (userID) {
      profileRequest(userID);
    }
    return;
  }, []);

  return (
    <>
      <div>
        <button type="button" onClick={modalToggle}>
          Adicionar Tecnologia
        </button>
        <Modal
          open={open}
          onClose={modalToggle}
          BackdropComponent={Backdrop}
          Backdrop={{ timeout: 500 }}
        >
          <Fade in={open}>
            <ModalStyle>
              <div className="container">
                <h1>Adicionar Tecnologia</h1>
                <div>
                  <TextField label="Nome da tecnologia" />
                </div>
                <div>
                  <TextField label="Status (Iniciante...)" />
                </div>
                <Button>Adicionar </Button>
              </div>
            </ModalStyle>
          </Fade>
        </Modal>
      </div>
      <List>
        {currentUser.techs ? (
          currentUser.techs.map((tech, index) => (
            <ListItem key={index}>
              <ListItemText primary={tech.title} secondary={tech.status} />
            </ListItem>
          ))
        ) : (
          <div>Carregando...</div>
        )}
      </List>
    </>
  );
};

export default TechConfig;
