import React from "react";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

import NavbarView from "../views/NavbarView";
import CarouselView from "../views/CarouselView";

class FormatterPage extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <div>
        <NavbarView />
        <CarouselView />
        <Container>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="C:/path/to/file.csv"
              aria-label="File Path"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Append>
              <Button variant="primary">Select File</Button>
            </InputGroup.Append>
          </InputGroup>
        </Container>
      </div>
    );
  }
}

export default FormatterPage;
