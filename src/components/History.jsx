import React, { Fragment } from "react";
const History = ({lastResult ,}) => {
  return (
    <Fragment>
      <div>
        <p>Operation History</p>
      </div>
      <div>
        {lastResult}
      </div>
    </Fragment>
  );
};

export default History;
