import { useState } from "react";

function App() {
  // Setup Part of the component
  const [state, setState] = useState(0);

  function decrement() {
    if (state > 0) {
      setState(state - 1);
    }
  }

  function increment() {
    setState(state + 1);
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span style={{ paddingInline: "10px" }}>{state}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
