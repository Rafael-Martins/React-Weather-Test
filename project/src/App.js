import React, { Component } from "react";
import "./App.scss";
import SearchBox from "./components/SearchBox";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-container">
          <div className="app-title">Previsao do tempo</div>

          <div className="app-searchbox">
            <SearchBox />
          </div>

          <div className="app-separator">
            <hr className="separator" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
