import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";

import appRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          {appRoutes.map(route => {
            return <Route key={route.path} exact={route.exact} path={route.path} component={route.component} />
          })}
        </Switch>
      </div>
    </div>
  );
}

export default App;
