import { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const Home = lazy(() => import("./Home"));
const Products = lazy(() => import("./Products"));
const Dashboard = lazy(() => import("./Dashboard"));

const App = () => {
  return (
    <BrowserRouter>

      <Suspense fallback={<h2>Loading...</h2>}>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products />} />

          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>

      </Suspense>

    </BrowserRouter>
  );
};

export default App;