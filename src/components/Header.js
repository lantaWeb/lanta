import React from "react";
import { Container } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="title">
          <h3>{this.props.title}</h3>
        </div>
      </div>
    );
  }
}

export default Header;
