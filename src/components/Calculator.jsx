import React, { Fragment } from "react";
import CalResult from "./CalculatorResult";
import CalButton from "./CalcolatorButton";
import CalInput from "./CalculatorInput";
import classes from "./Calculator.module.css";
const Calculator = () => {
  return (
    <Fragment>
      <div className={classes.mainCal}>
        <CalInput />
        <CalResult />
        <CalButton />
      </div>
    </Fragment>
  );
};
export default Calculator;
