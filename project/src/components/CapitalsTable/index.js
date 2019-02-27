import React, { Component } from "react";
import "./style.scss";

const TempTable = ({ temps, range }) => {
  const values = () => {
    let trArray = [];

    if (Array.isArray(temps)) {
      //check if is array
      temps.forEach((temp, index) => {
        if (range[0] <= index && range[1] >= index) {
          // check if is in range (for divide into 2 collumns)
          trArray.push(
            <tr key={index}>
              <td>{temp.min}°</td>
              <td>{temp.max}°</td>
              <td>{temp.name}</td>
            </tr>
          );
        }
      });
    }
    return trArray;
  };

  return (
    <table className="temp-table">
      <thead>
        <tr>
          <th>Min</th>
          <th>Max</th>
        </tr>
      </thead>
      <tbody>{values()}</tbody>
    </table>
  );
};

class CapitalsTable extends Component {
  render() {
    return (
      <div className="capitalstable-container">
        <div className="capitalstable-title">Capitais</div>

        <div className="capitalstable-tables">
          <div className="tables-table-1">
            {TempTable({ temps: this.props.cityTemps, range: [0, 4] })}
          </div>

          <div className="tables-table-2">
            {TempTable({ temps: this.props.cityTemps, range: [5, 10] })}
          </div>
        </div>
      </div>
    );
  }
}

export default CapitalsTable;
