import React, { Component } from "react";
import "./App.scss";

//Components
import SearchBox from "./components/SearchBox";
import CapitalsTable from "./components/CapitalsTable";

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

  componentDidMount() {
    this.getForecasts();
  }

  state = {
    cityTemps: []
  };

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

          <div className="app-capitalstable">
            <CapitalsTable cityTemps={this.state.cityTemps} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
