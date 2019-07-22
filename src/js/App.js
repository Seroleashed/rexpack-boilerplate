import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import FormatterPage from "./pages/FormatterPage";

class App extends React.Component {
  constructor(...args) {
    super(...args);

    // Modal Stuff
    this.state = { modalShow: false };
    this.submitModal = this.submitModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    // Tootip Stuff
    this.attachRef = target => this.setState({ target });
    this.state = {
      showTooltip: false
    };

    // Dropdownmenu Stuff
    this.state = {
      dropdownItems: [
        { text: "action1", link: "/action1-url", key: 1 },
        { text: "action2", link: "/action2-url", key: 2 },
        { text: "action3", link: "/action3-url", key: 3 }
      ]
    };
  }

  submitModal() {
    this.setState({ modalShow: false });
  }

  closeModal() {
    this.setState({ modalShow: false });
  }

  render() {
    const { showTooltip, target } = this.state;
    const App = () => (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/formatter" component={FormatterPage} />
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
