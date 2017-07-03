import React from "react";
import Introduction from "./Introduction";

import "../../css/home.css";

class HomeView extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="Home">
          <Introduction />
        </div>
      </div>
    );
  }
}

export default HomeView;
