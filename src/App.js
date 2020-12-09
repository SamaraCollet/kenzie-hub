import RegisterPage from "./pages/register-page";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login-page";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          {/* Page do register */}
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
