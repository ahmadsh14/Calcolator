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
  const [history, setHistory] = useState([]);
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
    setNumValue('');
    setResult('');
    setOperation("");
  };
  const operator = (value) => {
    if (numValue !== '') {
      calculate()
    }
    setOperation(value);
    setFirstNum((prevFirstNum) => {
      if (prevFirstNum === '') {
        return numValue;
      } else {
        return evaluate(`${prevFirstNum}${operation}${numValue}`);
      }
    });
    setNumValue("");
  };
  const calculate = () => {
    const result = evaluate(`${FirstNum}${operation}${numValue}`);
    setResult(result);
    setHistory([...history, { result, operation: `${FirstNum} ${operation} ${numValue}` }]);
    clear();
  };
  const handleHistoryClick = (index) => {
    setHistory(history.slice(0, index + 1));
  };
  console.log("result: ", result);
  console.log("numValue: ", numValue);
  return (
    <Fragment>
      <div className={classes.mainCal}>
        <div className={classes.HistoryBox}>
          <History history={history} handleHistoryClick={handleHistoryClick} />
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
