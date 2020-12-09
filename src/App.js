import RegisterPage from './pages/register-page'
import { Switch, Route } from "react-router-dom";

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
        <Route path="/">{/* Page da home */}</Route>
      </Switch>
    </>
  );
}

export default App;
