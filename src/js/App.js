import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

class App extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
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
