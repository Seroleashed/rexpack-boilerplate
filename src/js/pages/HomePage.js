import React from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import Container from "react-bootstrap/Container";

import LoadingButtonView from "../views/LoadingButtonView";
import CarouselView from "../views/CarouselView";
import NavbarView from "../views/NavbarView";
import ModalView from "../views/ModalView";
import DropdownView from "../views/DropdownView";
import FooterView from "../views/Footer";

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
    return (
      <div>
        <NavbarView />
        <CarouselView />
        <Container className="main-content">
          <LoadingButtonView buttonText="Das ist ein Testbutton" />
          <Button
            variant="primary"
            onClick={() => this.setState({ modalShow: true })}
          >
            Show Modal
          </Button>
          <ModalView
            show={this.state.modalShow}
            onClose={this.closeModal}
            onSubmit={this.submitModal}
            text="Hier ist ein Modal, dass du auch einfach wieder schließen kannst!"
            headline="Hallo Welt, ich bin ein Modal"
          />
          <Button
            ref={this.attachRef}
            variant="dark"
            onClick={() => this.setState({ showTooltip: !showTooltip })}
          >
            Show Tooltip
          </Button>
          <Overlay target={target} show={showTooltip} placement="right">
            {props => (
              <Tooltip id="overlay-example" {...props}>
                Hier ist eine Erklärung zum Feld/Button/etc.
              </Tooltip>
            )}
          </Overlay>
          <DropdownView
            buttonText="Show the Dropdownmenu"
            buttonVariant="success"
            items={this.state.dropdownItems}
          />
        </Container>
        <FooterView />
      </div>
    );
  }
}

export default App;
