import "antd/dist/antd.css";
import GlobalStyle from "./styles/global";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addUserToken } from "./store/modules/current-user/action";
import RegisterPage from "./pages/register-page";
import { userEdit } from "./store/modules/user-edit/action";
import Home from "./pages/home";
import Login from "./pages/login-page";
import Header from "./components/header";
import UserPage from "./pages/user-page";
import Feed from "./pages/feed-page";
import PageNotFound from "./pages/page-not-found";
import MyProfile from "./pages/my-profile";
import NotAuthorized from "./pages/not-authorized";

function App() {
  const dispatch = useDispatch();
  localStorage.hasOwnProperty("userInfos")
    ? dispatch(addUserToken(JSON.parse(localStorage.getItem("userInfos"))))
    : dispatch(addUserToken(""));

    localStorage.hasOwnProperty("updatable")
    ? dispatch(userEdit(JSON.parse(localStorage.getItem("updatable"))))
    : dispatch(userEdit(""));

  return (
    <>
      <GlobalStyle />
      <div id="main-container">
        <Header />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route path="/feed">
            <Feed />
          </Route>
          <Route exact path="/myprofile">
            <MyProfile />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/user/:id">
            <UserPage />
          </Route>
          <Route path="/notauthorized">
            <NotAuthorized />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
