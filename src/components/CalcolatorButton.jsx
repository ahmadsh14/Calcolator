import React, { Fragment } from "react";
import classes from "./Calculator.module.css";

const CalButton = ({ updateNumValue, clear, operator , calculate}) => {
  // const [num, setNum] = useState("");
  // const [FirstNum, setFirstNum] = useState("");
  // const [operation, setOperation] = useState("");
  // const [result, setResult] = useState("");

  // const getnum = (event) => {
  //   updateNumValue(event.target.value);
  // };

  // const operator = (e) => {
  //   let operatorInput = e.target.value;
  //   setOperation(operatorInput);
  //   setFirstNum(num);
  //   setNum(0);
  // };
  // const clear = () => {
  //   setNum(0);
  // };

  // const calculate = () => {
  //   const result = evaluate(`${FirstNum}${operation}${num}`);
  //   setNum(result);
  // };
  return (
    <Fragment>
      <div className={classes.allButton}>
        <div>
          <button value="AC" onClick={() => clear(clear)}>
            AC
          </button>
          <button
            value="-"
            onClick={(event) => updateNumValue(event.target.value)}
          >
            +/-
          </button>
          <button
            value="%"
            onClick={(event) => updateNumValue(event.target.value)}
          >
            %
          </button>
        </div>
        <div>
          <button
            onClick={(event) => updateNumValue(event.target.value)}
            value={7}
          >
            7
          </button>
          <button
            onClick={(event) => updateNumValue(event.target.value)}
            value={8}
          >
            8
          </button>
          <button
            onClick={(event) => updateNumValue(event.target.value)}
            value={9}
          >
            9
          </button>
          <button
            onClick={(event) => operator(event.target.value)}
            value={'*'}
          >
            x
          </button>
        </div>
        <div>
          <button
            onClick={(event) => updateNumValue(event.target.value)}
            value={4}
          >
            4
          </button>
          <button
            onClick={(event) => updateNumValue(event.target.value)}
            value={5}
          >
            5
          </button>
          <button
            onClick={(event) => updateNumValue(event.target.value)}
            value={6}
          >
            6
          </button>
          <button
            onClick={(event) => operator(event.target.value)}
            value={"-"}
          >
            -
          </button>
        </div>
        <div>
          <button
            onClick={(event) => updateNumValue(event.target.value)}
            value={1}
          >
            1
          </button>
          <button
            onClick={(event) => updateNumValue(event.target.value)}
            value={2}
          >
            2
          </button>
          <button
            onClick={(event) => updateNumValue(event.target.value)}
            value={3}
          >
            3
          </button>
          <button
            onClick={(event) => operator(event.target.value)}
            value={"+"}
          >
            +
          </button>
        </div>
        <div>
          <button
            onClick={(event) => updateNumValue(event.target.value)}
            value={0}
          >
            0
          </button>
          <button
            onClick={(event) => updateNumValue(event.target.value)}
            value={"."}
          >
            .
          </button>
          <button
            onClick={(event) => calculate(event.target.value)}
            value={"="}
          >
            =
          </button>
          <button
            onClick={(event) => updateNumValue(event.target.value)}
            value={"/"}
          >
            /
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default CalButton;
