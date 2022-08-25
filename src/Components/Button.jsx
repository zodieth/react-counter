import React from "react";
import "./Button.module.css";

function Button({ text, ifClick, handleOnClick }) {
  return (
    <div>
      <button
        className={ifClick ? "click-button" : "restart-button"}
        onClick={handleOnClick}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
