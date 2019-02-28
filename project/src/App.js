import React, { Component } from "react";
import "./App.scss";

//Components
import SearchBox from "./components/SearchBox";
import CapitalsTable from "./components/CapitalsTable";
import SelectedCity from "./components/SelectedCity";

//Api HTTP-Service
import { GET_FORECAST_RSS } from "./services/apiService";

//Constants
import cities from "./constants/cities";

class App extends Component {
  getForecasts = () => {
    cities.forEach(value => {
      GET_FORECAST_RSS(value).then(res => {
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
    GET_FORECAST_RSS(searchText).then(response => {
      if (
        Object.keys(response.location).length === 0 ||
        Object.keys(response.forecasts).length === 0
      ) {
        this.setState({ cityNotFound: true });
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
        <div className="app-container">
          <div className="app-title">Previsão do tempo</div>

          {this.state.selectedCity !== "" ? (
            <div className="app-selectedcity">
              <SelectedCity
                city={this.state.selectedCity}
                close={this.closeCity}
              />
            </div>
          ) : (
            ""
          )}

          <div className="app-searchbox">
            <SearchBox goSearch={this.searchCity} />
            <div className="search-error-container">
              {this.state.cityNotFound ? (
                <span className="search-error">Cidade não encontrada</span>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="app-separator">
            <hr className="separator" />
          </div>

          <div className="app-capitalstable">
            <CapitalsTable cityTemps={this.state.cityTemps} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
