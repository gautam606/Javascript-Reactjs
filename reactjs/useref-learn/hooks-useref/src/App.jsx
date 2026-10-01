import { useRef } from "react";

const App = () => {

  const searchRef = useRef();

  const handleSearch = () => {
    console.log("Searching...");

    searchRef.current.focus();
  };

  return (
    <div>
      <h2>Mooway Products</h2>

      <input
        ref={searchRef}
        type="text"
        placeholder="Search products"
      />

      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default App;