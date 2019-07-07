import React from "react";
import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";

class DropdownView extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: this.props.items
    };
  }

  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant={this.props.buttonVariant} id="dropdown-basic">
          {this.props.buttonText}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {this.state.items.map(item => (
            <Dropdown.Item href={item.link}>{item.text}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

DropdownView.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonVariant: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default DropdownView;
