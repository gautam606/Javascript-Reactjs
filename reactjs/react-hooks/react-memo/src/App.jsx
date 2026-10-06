import { useState } from "react";
import User from "./User";


const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>

      <User name="John" />

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
};


export default App
