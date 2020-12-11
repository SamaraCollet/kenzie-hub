import { Container } from "./style";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUserThunk } from "../../store/modules/thunk";

import UsersCards from "../../components/users-cards";

const Feed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addUserThunk());
  }, []); // eslint-disable-line

  return (
    <Container>
      <UsersCards />
    </Container>
  );
};

export default Feed;
