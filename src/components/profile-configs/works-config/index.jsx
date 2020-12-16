import { useSelector } from "react-redux";
import WorkIcon from "@material-ui/icons/Work";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";

const WorksConfig = () => {
  const userInfo = useSelector((state) => state.currentUserToken);
  const user = userInfo.user;
  const works = user.works;
  return (
    <List>
      {works.map((work, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={work.title} secondary={work.description} />
        </ListItem>
      ))}
    </List>
  );
};

export default WorksConfig;
