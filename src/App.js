import "antd/dist/antd.css";
import GlobalStyle from "./styles/global";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import RegisterPage from "./pages/register-page";
import Home from "./pages/home";
import Login from "./pages/login-page";
import Header from "./components/header";
import UserPage from "./pages/user-page";
import HeaderLogOut from "./components/header-autenticado";
import Feed from "./pages/feed-page";
import PageNotFound from "./pages/page-not-found";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <div id="main-container">
        <Header />
        <Switch>
          <Route exact path="/login">
            <Header />
            <Login />
          </Route>
          <Route exact path="/register">
            <Header />
            <RegisterPage />
          </Route>
          <Route path="/feed">
            <Header />
            <Feed />
          </Route>
          <Route exact path="/user">
            <Header />
            <UserPage />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path='/user/:id'>
            <Header />
            <UserPage />
          </Route>
          <Route path='*'>
            <Header />
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
