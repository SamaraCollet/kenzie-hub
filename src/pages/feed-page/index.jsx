import { Container, Cards } from "./style";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUserThunk } from "../../store/modules/thunk";
import { Pagination } from "antd";

import UsersCards from "../../components/users-cards";

const Feed = () => {
  const perPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addUserThunk(perPage, currentPage));
    pageSwitch(currentPage);
  }, [currentPage]); // eslint-disable-line

  const pageSwitch = (current) => {
    setCurrentPage(current);
  };

  return (
    <Container>
      <Cards>
        <UsersCards />
      </Cards>
      <div className="pagination">
        <Pagination
          simple
          current={currentPage}
          onChange={pageSwitch}
          defaultCurrent={currentPage}
          total={500}
        />
      </div>
    </Container>
  );
};

export default Feed;
