import "antd/dist/antd.css";
import { Switch, Route } from "react-router-dom";
// import { useState, useEffect } from "react";

import RegisterPage from "./pages/register-page";
import Home from "./pages/home";
import Login from "./pages/login-page";
import Header from "./components/header";
import UserPage from './pages/user-page'
// import HeaderLogOut from "./components/header-autenticado";
import Feed from "./pages/feed-page";
import PageNotFound from "./pages/page-not-found";

function App() {
  // const [authentication, setAuthentication] = useState(false)
  // const token = window.localStorage.getItem("authToken");
  

  // useEffect(() => {
  //   if (!token) {
  //     setAuthentication(false);
  //   }
  // }, [])

  return (
    <>
      {/* {window.localStorage.getItem("authToken") ? (<HeaderLogOut authentication={authentication} setAuthentication={setAuthentication} />) : (<Header />)} */}
      <Header />
      <Switch>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route path="/feed">
          <Feed />
        </Route>
        <Route exact path="/user">
          <UserPage />
        </Route>
        <Route exact path="/">
          <Home />
        </Route> 
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
