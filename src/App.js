import React, { useState } from "react";
import "./styles.css";
import Button from "./Components/Button";
export default function App() {
  const [state, setState] = useState(true);
  function clickHandle() {
    setState(!state);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Button>Hello</Button>
      <p onClick={clickHandle}>change state {state ? "true" : "false"}</p>
    </div>
  );
}
