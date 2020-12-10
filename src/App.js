import { Switch, Route } from "react-router-dom";


import { useDispatch } from 'react-redux'
import { addUserThunk } from './store/modules/thunk'

import RegisterPage from "./pages/register-page";
import Home from "./pages/home";
import Login from "./pages/login-page";
import Header from "./components/header";

function App() {
  const dispatch = useDispatch()
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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
