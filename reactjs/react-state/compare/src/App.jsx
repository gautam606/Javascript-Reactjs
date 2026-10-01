import React, { useRef, useState } from "react";

const App = () => {

  const [stateCount, setStateCount] = useState(0);

  const refCount = useRef(0);

  const stateClick = () => {
    setStateCount(stateCount + 1);
  };

  const refClick = () => {
    refCount.current = refCount.current + 1;
    console.log("Ref count:", refCount.current);
  };

  return (
    <div>
      <h2>useState Count: {stateCount}</h2>

      <button onClick={stateClick}>
        Increase useState
      </button>

      <br />
      <br />

      <h2>useRef Count: {refCount.current}</h2>

      <button onClick={refClick}>
        Increase useRef
      </button>
    </div>
  );
};

export default App;