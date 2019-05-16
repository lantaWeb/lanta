import React, { Component } from "react";




class Footer extends Component {
    
  render() {
    let year = new Date().getFullYear();
    return (
      <div className="footer">
      <div className="footer_content">
      © {year} SIA "MARIOLATA"

      </div>
      </div>
    );
  }
}

export default Footer;