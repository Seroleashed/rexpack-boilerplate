import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class ModalView extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.headline}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{this.props.text}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.props.onSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

ModalView.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  text: PropTypes.string,
  headline: PropTypes.string,
  show: PropTypes.bool
};

export default ModalView;
