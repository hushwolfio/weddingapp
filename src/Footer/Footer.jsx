import React from "react";

class Footer extends React.Component {
  currentYear = () => {
    const dateNow = Date.now();
    const yearNow = new Date(dateNow).getFullYear();
    return yearNow;
  };
  render() {
    return (
      <div className="Footer">
        <footer>
          Created by Hushwolf 2017 Property of Hushwolf {this.currentYear()}
        </footer>
      </div>
    );
  }
}

export default Footer;
