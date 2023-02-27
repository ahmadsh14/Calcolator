import React, { Fragment,useState } from "react";
import CalButton from "./CalcolatorButton";
import classes from "./Calculator.module.css";
const Calculator = () => {
  const [numValue, setNumValue] = useState(0);

  const updateNumValue = (value) => {
    setNumValue(value);
  }
  return (
    <Fragment>
      <div className={classes.mainCal}>

        <p>{numValue}</p>
        <p>{}</p>

        <CalButton updateNumValue={updateNumValue}  />
      </div>
    </Fragment>
  );
};
export default Calculator;
