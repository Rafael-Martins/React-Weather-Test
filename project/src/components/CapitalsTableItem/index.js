import React from "react";

export default props => {
  if (Array.isArray(props.temps)) {
    //check if is array
    const trArray = props.temps.map((temp, index) => {
      if (props.range[0] <= index && props.range[1] >= index) {
        // check if is in range (for divide into 2 collumns)
        return (
          <tr key={index} id="table-item">
            <td>{temp.min}°</td>
            <td>{temp.max}°</td>
            <td>{temp.name}</td>
          </tr>
        );
      }
    });
    return trArray;
  }
};
