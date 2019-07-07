import React from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import LoadingButtonView from "../views/LoadingButtonView";
import CarouselView from "../views/CarouselView";
import NavbarView from "../views/NavbarView";
import ModalView from "../views/ModalView";
import DropdownView from "../views/DropdownView";

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
        { text: "action1", link: "/action1-url" },
        { text: "action2", link: "/action2-url" },
        { text: "action3", link: "/action3-url" }
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
        <Jumbotron>
          <h1 className="display-4">Amazing React, Bootstrap and Webpack</h1>
          <p className="lead">Created with love</p>
          <hr className="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Learn more
            </a>
          </p>
        </Jumbotron>
        <Container>
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
          <div className="awful-selfie" />
        </Container>
      </div>
    );
  }
}

export default App;
