import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  let day = new Date();
  day.setDate(day.getDate() + count);

  const countPlus = () => {
    setCount((c) => c + step);
  };
  const countMinus = () => {
    setCount((c) => c - step);
  };

  const handelReset = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          marginInline: "auto",
          justifyContent: "center",
          gap: "4px",
        }}
      >
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        {step}
        {/* <button onClick={() => setStep((s) => s - 1)} >-</button>
        <p> step= {step} </p>
        <button onClick={() => setStep((s) => s + 1)}>+</button> */}
      </div>
      <div
        style={{
          display: "flex",
          marginInline: "auto",
          justifyContent: "center",
          gap: "4px",
        }}
      >
        <button onClick={() => countMinus()}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => {
            setCount(+e.target.value);
          }}
        ></input>
        <button onClick={() => countPlus()}>+</button>
      </div>
      <div>
        {count == 0
          ? " today "
          : count > 0
          ? ` after ${count} days`
          : `before ${count} days`}
        {day.toLocaleString()}
      </div>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={() => handelReset()}> Reset </button>
        </div>
      ) : null}
    </div>
  );
}
