import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const TermalSensation = props => {
  const highTemp = props.city.forecasts[0].high;
  const lowTemp = props.city.forecasts[0].low;
  const tempSensation = props.city.current_observation.wind.chill;
  const humidity = props.city.current_observation.atmosphere.humidity;
  const windSpeed = props.city.current_observation.wind.speed;

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

TermalSensation.propTypes = {
  city: PropTypes.object.isRequired
};

export default TermalSensation;
