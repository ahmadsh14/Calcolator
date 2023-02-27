import React, { Fragment, useState } from "react";
import CalButton from "./CalcolatorButton";
import classes from "./Calculator.module.css";
import { evaluate } from "mathjs";
import History from "./History";


const Calculator = () => {
  const [numValue, setNumValue] = useState("");
  const [FirstNum, setFirstNum] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  const [lastOp,setLastOp] = useState('')
  // const updateNumValue = (value) => {
  //   setNumValue((prevState) => prevState + value);
  // };

  const buttonClickHandler = (value) => {
    if (numValue === 0) {
      setNumValue(value);
    } else {
      setNumValue((prevState) => prevState + value);
    }
  };
  const clear = () => {
    setNumValue(0);
    setResult(0);
    setOperation("");
  };
  const operator = (value) => {
    setOperation(value);
    setFirstNum(numValue);
    setNumValue("");
  };
  const calculate = () => {
  
    const result = evaluate(`${FirstNum}${operation}${numValue}`);
    setResult(result);
  };
  console.log("result: ", result);
  console.log("numValue: ", numValue);
  return (
    <Fragment>
      <div className={classes.mainCal}>
        <div className={classes.HistoryBox}>
          <History lastResult={result} />
        </div>
        <div className={classes.calculaterBox}>
          <div>
            <p className={classes.inputNum}>{numValue}</p>
            <p className={classes.resultSty}>{result}</p>
          </div>
          <CalButton
            updateNumValue={buttonClickHandler}
            clear={clear}
            operator={operator}
            calculate={calculate}
          />
        </div>
      </div>
    </Fragment>
  );
};
export default Calculator;
