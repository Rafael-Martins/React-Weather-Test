import React, { Component } from "react";
import "./style.scss";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
  }

  inputPressEnter = event => {
    if (event.charCode === 13) {
      this.callSearch();
    }
  };

  callSearch = () => {
    this.props.goSearch(this.searchInput.current.value);
  };

  render() {
    return (
      <div className="search-input-container">
        <input
          className="search-input"
          placeholder="Insira aqui o nome da cidade"
          onKeyPress={this.inputPressEnter}
          ref={this.searchInput}
        />
        <div className="icon-container" onClick={this.callSearch}>
          <span className="jam jam-search search-icon" />
        </div>
      </div>
    );
  }
}

export default SearchBox;
