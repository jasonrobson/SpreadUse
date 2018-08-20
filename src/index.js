import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { sumNumbersWithTen, sumArrayNumbersWithTen } from "./spread";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Spread example with Rest</h2>
      <p>{sumNumbersWithTen(0, 0)}</p>
      <h2>Spread example with Array</h2>
      <p>{sumArrayNumbersWithTen([1, 2, 3])}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
