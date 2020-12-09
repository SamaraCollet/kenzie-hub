import RegisterPage from "./pages/register-page";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/login">
          {/* Page do login */}
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
