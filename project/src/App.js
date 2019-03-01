import React, { Component } from "react";
import "./App.scss";

//Components
import SearchBox from "./components/SearchBox";
import CapitalsTables from "./components/CapitalsTables";
import SelectedCity from "./components/SelectedCity";

//Api HTTP-Service
import { getForecastRss } from "./services/apiService";

//Constants
import cities from "./constants/cities";

class App extends Component {
  getForecasts = () => {
    cities.forEach(value => {
      getForecastRss(value).then(res => {
        this.setState({
          cityTemps: [
            ...this.state.cityTemps,
            {
              max: res.forecasts[0].high,
              min: res.forecasts[0].low,
              name: res.location.city
            }
          ]
        });
      });
    });
  };

  searchCity = searchText => {
    getForecastRss(searchText).then(response => {
      if (
        Object.keys(response.location).length === 0 ||
        Object.keys(response.forecasts).length === 0
      ) {
        this.setState({ cityNotFound: true, selectedCity: "" });
        return;
      }

      this.setState({ selectedCity: response, cityNotFound: false });
    });
  };

  closeCity = () => {
    this.setState({ selectedCity: "" });
  };

  componentDidMount() {
    this.getForecasts();
  }

  state = {
    cityTemps: [],
    selectedCity: "",
    cityNotFound: false
  };

  render() {
    return (
      <div className="app">
        <div className="app__container">
          <div className="app-title">Previsão do tempo</div>

          {this.state.selectedCity !== "" && (
            <div className="app-selectedcity__container">
              <SelectedCity
                city={this.state.selectedCity}
                close={this.closeCity}
              />
            </div>
          )}

          <div className="app-searchbox__container">
            <SearchBox goSearch={this.searchCity} />
            <div className="search-error__container">
              {this.state.cityNotFound && (
                <span className="search-error">Cidade não encontrada</span>
              )}
            </div>
          </div>

          <div className="app-separator__container">
            <hr className="separator" />
          </div>

          <div className="app-capitalstables__container">
            <CapitalsTables cityTemps={this.state.cityTemps} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
