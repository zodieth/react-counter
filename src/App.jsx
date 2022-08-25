import "./App.css";
import Button from "./Components/Button";
import Counter from "./Components/Counter";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const click = () => {
    setCount(count + 1);
  };

  const restart = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div className="navBar">
        <img className="freeCodeCamp-logo" src="./src/img/logo.png " />
      </div>
      <Counter count={count} />
      <div className="buttons">
        <Button
          className="click"
          ifClick={true}
          text="CLICK"
          handleOnClick={click}
        />
        <Button
          className="restart"
          ifClick={false}
          text="RESTART"
          handleOnClick={restart}
        />
      </div>
    </div>
  );
}

export default App;
