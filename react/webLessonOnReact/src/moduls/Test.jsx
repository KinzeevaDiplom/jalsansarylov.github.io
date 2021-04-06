import React from "react";
import TestItem from "./TestItem";

const Test = (props) => {
  let qsns = Object.keys(props.test);
  let drow = true;

  let restartTest = () => {
    props.dispatch({ type: "RESTART_TEST" });
    qsns.sort(() => Math.random() - 0.5);
    drow = false;
  };

  let takeResalt = () => {
    props.dispatch({ type: "GIVE_RESULT_TEST" });
  };

  let drowQsns = qsns.map((qsn, index) => (
    <TestItem
      stateTest={props.stateTest}
      dispatch={props.dispatch}
      qsn={props.test[qsn]}
      id={index}
      qsnQty={qsns.length}
    />
  ));

  return (
    <div>
      {drow ? drowQsns : false}

      {props.stateTest.btnFinishTest ? (
        <button onClick={takeResalt} className="btn-finish-test btn ">
          завершить тест
        </button>
      ) : (
        <button onClick={restartTest} className="btn-finish-test btn ">
          пройти заново
        </button>
      )}

      <div className="test-result">{props.stateTest.testResult}</div>
    </div>
  );
};

export default Test;
