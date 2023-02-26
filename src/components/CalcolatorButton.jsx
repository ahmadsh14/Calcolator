import React, { Fragment } from "react";
import { useState } from "react";
import classes from "./Calculator.module.css";

const CalButton = () => {
  const [num, setnum] = useState("");
  const [FirstNum, setFirstNum] = useState("");
  const [operation, setOperation] = useState("");

  const getnum = (event) => {
    setnum(event.target.value)
  };
  console.log('num: ', num);

  return (
    <Fragment>
      <div className={classes.allButton}>
        <div>
          <button onClick={getnum} value='7'>7</button>
          <button onClick={getnum} value='8'>8</button>
          <button onClick={getnum} value='9'>9</button>
          <button onClick={getnum} value='x'>x</button>
        </div>
        <div>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
        </div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
        </div>
        <div>
          <button>0</button>
          <button>.</button>
          <button>=</button>
          <button>/</button>
        </div>
      </div>
    </Fragment>
  );
};
export default CalButton;
