import React, { Fragment } from "react";
import { useState } from "react";
import classes from "./Calculator.module.css";
import { evaluate } from "mathjs";

const CalButton = ({ updateNumValue }) => {
  const [num, setNum] = useState(0);
  const [FirstNum, setFirstNum] = useState(0);
  const [operation, setOperation] = useState();
  const [result, setResult] = useState();

  const getnum = (event) => {
    let input = event.target.value
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
    updateNumValue(num)
  };
  console.log('num: ', num);

  const operator = (e) => {
    let operatorInput = e.target.value;
    setOperation(operatorInput);
    setFirstNum(num);
    setNum(0);
  }
  const clear = () => {
    setNum(0)
  }

  const calculate = () => {
    const result = evaluate(`${FirstNum}${operation}${num}`);
    setNum(result);
  }
  return (
    <Fragment>
      <div className={classes.allButton}>
        <div>
          <button onClick={clear}>AC</button>
          <button onClick={getnum}>+/-</button>
          <button onClick={getnum}>%</button>
        </div>
        <div>
          <button onClick={getnum} value={7}>7</button>
          <button onClick={getnum} value={8}>8</button>
          <button onClick={getnum} value={9}>9</button>
          <button onClick={operator} value={'*'}>x</button>
        </div>
        <div>
          <button onClick={getnum} value={4}>4</button>
          <button onClick={getnum} value={5}>5</button>
          <button onClick={getnum} value={6}>6</button>
          <button onClick={operator} value={'-'}>-</button>
        </div>
        <div>
          <button onClick={getnum} value={1}>1</button>
          <button onClick={getnum} value={2}>2</button>
          <button onClick={getnum} value={3}>3</button>
          <button onClick={operator} value={'+'}>+</button>
        </div>
        <div>
          <button onClick={getnum} value={0}>0</button>
          <button onClick={getnum} value={'.'}>.</button>
          <button onClick={calculate} value={'='}>=</button>
          <button onClick={operator} value={'/'}>/</button>
        </div>
      </div>
    </Fragment>
  );
};
export default CalButton;
