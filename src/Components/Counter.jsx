import React from "react";
import style from "./Counter.module.css";

function Counter({ count }) {
  return <div className={style.counter}>{count}</div>;
}

export default Counter;
