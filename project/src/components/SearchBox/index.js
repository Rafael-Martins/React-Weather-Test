import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.scss";

class SearchBox extends Component {
  inputPressEnter = event => {
    if (event.charCode === 13) {
      this.callSearch();
    }
  };

  callSearch = () => {
    if (this.state.searchInput !== "") {
      this.props.goSearch(this.state.searchInput);
    }
  };

  changeSearch = event => {
    this.setState({ searchInput: event.target.value });
  };

  state = {
    searchInput: ""
  };

  render() {
    return (
      <div className="search-input-container">
        <input
          className="search-input"
          placeholder="Insira aqui o nome da cidade"
          onKeyPress={this.inputPressEnter}
          onChange={this.changeSearch}
        />
        <div className="search-icon-container" onClick={this.callSearch}>
          <span className="jam jam-search search-icon" />
        </div>
      </div>
    );
  }
}

SearchBox.propTypes = {
  goSearch: PropTypes.func.isRequired
};

export default SearchBox;
