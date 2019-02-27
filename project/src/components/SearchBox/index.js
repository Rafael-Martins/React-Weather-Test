import React, { Component } from "react";
import "./style.scss";

class SearchBox extends Component {
  render() {
    return (
      <div className="search-input-container">
        <input
          className="search-input"
          placeholder="Insira aqui o nome da cidade"
        />
        <div className="icon-container">
          <span className="jam jam-search search-icon" />
        </div>
      </div>
    );
  }
}

export default SearchBox;
