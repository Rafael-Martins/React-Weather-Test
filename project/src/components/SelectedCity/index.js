import React, { Component } from "react";
import "./style.scss";

class SelectedCity extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    const city = this.props.city;

    const cityTitle = `${city.location.city}, ${city.location.region} -
    ${city.location.country}`;
    const currentCondition = `${
      city.current_observation.condition.temperature
    }C° ${city.current_observation.condition.text}`;

    console.log(city);
    return (
      <div className="selectedcity-container">
        <div className="selectedcity-head">
          {cityTitle}
          <div className="close-button">
            <span
              className="jam jam-close close-icon"
              onClick={this.props.close}
            />
          </div>
        </div>

        <div className="selectedcity-body">
          <div className="current-condition">{currentCondition}</div>
        </div>
      </div>
    );
  }
}

export default SelectedCity;
