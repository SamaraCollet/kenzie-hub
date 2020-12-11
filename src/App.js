import "antd/dist/antd.css";
import { Switch, Route } from "react-router-dom";

import RegisterPage from "./pages/register-page";
import Home from "./pages/home";
import Login from "./pages/login-page";
import Header from "./components/header";
import HeaderLogOut from "./components/header-autenticado";
import Feed from "./pages/feed-page";
import UserPage from "./pages/user-page";
import PageNotFound from "./pages/page-not-found";
function App() {
  return (
    <>
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
        <Route path="*">
          <HeaderLogOut />
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
