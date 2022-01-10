import "./App.css";

import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./routes/Home";
import Destination from "./routes/Destination";

function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/destinations/:id" component={Destination} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
