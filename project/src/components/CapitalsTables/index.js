import React from "react";
import CapitalsTableItem from "../CapitalsTableItem";
import useMedia from "../../hooks/useMedia";
import PropTypes from "prop-types";
import "./style.scss";

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
  const isMobile = useMedia(["(max-width: 480px)"], [true], false);

  return (
    <div className="capitals-table__container">
      <div className="capitals-table__title">Capitais</div>

      <div className="capitals-table__tables">
        <div className="capitals-table__left-table">
          <TempTable
            temps={props.cityTemps}
            range={isMobile ? [0, 10] : [0, 4]}
            id="temp-table"
          />
        </div>

        {!isMobile && (
          <div className="capitals-table__right-table">
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
