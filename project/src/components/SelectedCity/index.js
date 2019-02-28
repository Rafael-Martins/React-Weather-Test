import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.scss";

const forecastsDays = city => {
  const days = [];
  city.forecasts.forEach((forecast, index) => {
    if (index < 6 && index > 0) {
      days.push(
        <div className="day-forecast" key={index}>
          <span className="day-name">{forecast.day}</span>
          <span className="day-temp">
            {forecast.low}° {forecast.high}°
          </span>
        </div>
      );
    }
  });

  return days;
};

const thermalSensation = city => {
  const highTemp = city.forecasts[0].high;
  const lowTemp = city.forecasts[0].low;
  const tempSensation = city.current_observation.wind.chill;
  const humidity = city.current_observation.atmosphere.humidity;
  const windSpeed = city.current_observation.wind.speed;

  return (
    <div className="sensation-container">
      <div className="sensation-line">
        <div className="sensation-item">
          <span className="jam jam-arrow-down sensation-icon" />
          <span className="sensation-result">{lowTemp}°</span>
          <span className="jam jam-arrow-up sensation-icon" />
          <span className="sensation-result">{highTemp}°</span>
        </div>
        <div className="sensation-item">
          Sensacao <span className="sensation-result">{tempSensation}°</span>
        </div>
      </div>

      <div className="sensation-line">
        <div className="sensation-item">
          Vento <span className="sensation-result">{windSpeed}km/h</span>
        </div>
        <div className="sensation-item">
          Humidade <span className="sensation-result">{humidity}%</span>
        </div>
      </div>
    </div>
  );
};

class SelectedCity extends Component {
  render() {
    const city = this.props.city;

    const cityTitle = `${city.location.city}, ${city.location.region} -
    ${city.location.country}`;

    const currentCondition = `${
      city.current_observation.condition.temperature
    }C° ${city.current_observation.condition.text}`;

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

          <div className="thermal-sensation">{thermalSensation(city)}</div>

          <hr className="separator--orange" />

          <div className="weekly-forecast">{forecastsDays(city)}</div>
        </div>
      </div>
    );
  }
}

SelectedCity.propTypes = {
  city: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired
};

export default SelectedCity;
