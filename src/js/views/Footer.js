import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

class FooterView extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="footer">
        <Container>
          <Row className="spacer">{/** Spacer */}</Row>
          <Row className="justify-content-md-center">
            <Col sm>
              {/** Logo */}
              <Image fluid className="footer-logo" />
            </Col>
            <Col sm>
              {/** Internal Links */}
              <a href="#">Link 1</a>
              <br />
              <a href="#">Link 2</a>
              <br />
              <a href="#">Link 3</a>
              <br />
              <a href="#">Link 4</a>
              <br />
            </Col>
            <Col sm>
              {/** External Links / Partners / Social Media */}
              <a href="#">Link 1</a>
              <br />
              <a href="#">Link 2</a>
              <br />
              <a href="#">Link 3</a>
              <br />
              <a href="#">Link 4</a>
              <br />
            </Col>
          </Row>
          <Row className="copyright-row">
            <p>
              Copyright 2019. All rights reserved.{" "}
              <a href="#">Privacy Policy</a> <a href="#">Imprint</a>
            </p>
          </Row>
        </Container>
      </div>
    );
  }
}

FooterView.propTypes = {};

export default FooterView;
