import { useState } from "react";
import { CounterDisplay } from "./counter-display";

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
      <CounterDisplay count={state} />
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
