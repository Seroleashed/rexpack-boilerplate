import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Page404 from "./pages/Page404";

class App extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={Page404} />
        </Switch>
      </div>
    );

    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;
