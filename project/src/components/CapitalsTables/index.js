import React from "react";
import CapitalsTableItem from "../CapitalsTableItem";
import PropTypes from "prop-types";
import "./style.scss";

const isMobile = window.innerWidth < 480;

const TempTable = ({ temps, range }) => {
  return (
    <table className="temp-table">
      <thead>
        <tr>
          <th>Min</th>
          <th>Max</th>
        </tr>
      </thead>
      <tbody>
        <CapitalsTableItem temps={temps} range={range} />
      </tbody>
    </table>
  );
};

const CapitalsTables = props => {
  return (
    <div className="capitalstable-container">
      <div className="capitalstable-title">Capitais</div>

      <div className="capitalstable-tables">
        <div className="tables-table-1">
          <TempTable
            temps={props.cityTemps}
            range={isMobile ? [0, 10] : [0, 4]}
            id="temp-table"
          />
        </div>

        {!isMobile && (
          <div className="tables-table-2">
            <TempTable
              temps={props.cityTemps}
              range={[5, 10]}
              id="temp-table"
            />
          </div>
        )}
      </div>
    </div>
  );
};

CapitalsTables.propTypes = {
  cityTemps: PropTypes.array.isRequired
};

export default CapitalsTables;
