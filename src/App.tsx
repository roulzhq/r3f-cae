import { View } from "components/3d";
import { Header } from "components/UI";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

function Page() {
  return (
    <Switch>
      <Route exact path="/" component={View} />
    </Switch>
  );
}

function App() {
  return (
    <div className="app">
      <Header />
      <Page />
    </div>
  );
}

export default App;
