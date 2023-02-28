import React, { Fragment } from "react";
const History = ({ history, handleHistoryClick }) => {
  return (
    <Fragment>
      <div>
        <p>Operation History</p>
      </div>
      <div>
        <ul>
          {history.map((entry, index) => (
            <li key={index} onClick={() => handleHistoryClick(index)}>
              {entry.operation} = {entry.result}
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default History;
