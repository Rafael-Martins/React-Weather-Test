import React from "react";
import PropTypes from "prop-types";
import ThermalSensation from "../ThermalSensation";
import "./style.scss";

const ForecastsDays = props => {
  const days = props.city.forecasts.map((forecast, index) => {
    if (index < 6 && index > 0) {
      return (
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

const SelectedCity = props => {
  const city = props.city;

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
          <span className="jam jam-close close-icon" onClick={props.close} />
        </div>
      </div>

      <div className="selectedcity-body">
        <div className="current-condition">{currentCondition}</div>

        <div className="thermal-sensation">
          <ThermalSensation city={city} />
        </div>

        <hr className="separator--orange" />

        <div className="weekly-forecast">
          <ForecastsDays city={city} />
        </div>
      </div>
    </div>
  );
};

SelectedCity.propTypes = {
  city: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired
};

export default SelectedCity;
