import { Container, Cards } from "./style";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Pagination } from "antd";
import axios from "axios";

import { addUserThunk } from "../../store/modules/users-list/thunk";
import UsersCards from "../../components/users-cards";

const Feed = () => {
  const perPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumber, setPageNumber] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addUserThunk(perPage, currentPage));
    pageSwitch(currentPage);
  }, [currentPage]);

  useEffect(() => {
    axios
      .get("https://kenziehub.me/users?perPage=10000")
      .then((res) => setPageNumber(res.data.length));
  }, []);

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
          total={pageNumber}
          defaultPageSize={perPage}
        />
      </div>
    </Container>
  );
};

export default Feed;