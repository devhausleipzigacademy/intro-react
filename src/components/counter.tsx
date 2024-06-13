import { useState } from "react";
import { Button } from "./button";
import { CounterDisplay } from "./counter-display";

export function Counter() {
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
        <Button onClick={decrement}>-</Button>
        <CounterDisplay count={state} />
        <Button onClick={increment}>+</Button>
      </div>
    )
}