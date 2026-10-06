import Products from "./Products";
import Recommendations from "./Recommendations";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  return (
    <div>
      <h1>Mooway</h1>

      <Products />

      <ErrorBoundary>
        <Recommendations />
      </ErrorBoundary>

      <footer>
        <p>Mooway Dairy</p>
      </footer>
    </div>
  );
};

export default App;