import React, { Component } from "react";
import NetWorthTemplateContainer from "./components/netWorthTemplateContainer";
import { populate } from "./services/dataService";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // populate("/api/asset", "/api/liability", "/api/currency");
  }

  render() {
    return (
      <React.Fragment>
        <NetWorthTemplateContainer />
      </React.Fragment>
    );
  }
}

export default App;
