import "./App.css";
import { NavLink, Switch, Route } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <div className="App">
      <MainNavigation />

      <Switch>
        <Route path="/" exact>
          <h1 class="text-3xl font-bold text-violet-700">AnaSayfa</h1>
        </Route>
        <Route path="/films">
          <h1 class="text-3xl font-bold text-green-700">Filmler</h1>
        </Route>
        <Route path="/login">
          <h1 class="text-3xl font-bold text-blue-700">Login</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
