import { View } from "components/Three";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useSceneStore } from "store";
import { SceneLoader } from "types/loaders";

import "./App.scss";

function Page() {
  return (
    <Switch>
      <Route exact path="/" component={View} />
    </Switch>
  );
}

function App() {
  const setScene = useSceneStore((state) => state.setScene);

  useEffect(() => {
    SceneLoader.load("spaceship").then((scene) => {
      setScene(scene);
    });
  }, []);

  return (
    <div className="app">
      <Page />
    </div>
  );
}

export default App;
