import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

class LoadingButtonView extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      isLoading: this.props.isLoading
    };
  }

  handleClick() {
    this.setState({ isLoading: true }, () => {
      setTimeout(
        function() {
          this.setState({ isLoading: false });
        }.bind(this),
        2000
      );
    });
  }

  render() {
    const { isLoading } = this.state;

    return (
      <Button
        variant="info"
        disabled={isLoading}
        onClick={!isLoading ? this.handleClick : null}
      >
        {isLoading && (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        )}
        {isLoading ? " ...loading" : this.props.buttonText}
      </Button>
    );
  }
}

LoadingButtonView.propTypes = {
  buttonText: PropTypes.string.isRequired,
  isLoading: PropTypes.bool
};

export default LoadingButtonView;
