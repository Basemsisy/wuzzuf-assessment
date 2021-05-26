import React from "react";
import { Route, Switch } from "react-router-dom";

import appRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <Switch>
        {appRoutes.map(route => {
          return <Route key={route.path} path={route.path} component={route.component} />
        })}
      </Switch>
    </div>
  );
}

export default App;
