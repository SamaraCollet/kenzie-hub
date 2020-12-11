import "antd/dist/antd.css";
import { Switch, Route } from "react-router-dom";

import RegisterPage from "./pages/register-page";
import Home from "./pages/home";
import Login from "./pages/login-page";
import Header from "./components/header";
import UserPage from './pages/user-page'
import Feed from "./pages/feed-page";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route path="/feed">
          <Feed />s
        </Route>
        <Route exact path="/user">
          <UserPage />
        </Route>
        <Route path="/">
          <Home />
        </Route> 
      </Switch>
    </>
  );
}

export default App;
