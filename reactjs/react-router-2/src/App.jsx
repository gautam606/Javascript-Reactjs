import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Settings from "./Settings";
import Home from "./Home";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>

      <Routes>


        <Route path="/" element={<Home />} />
        {/* <Route path="/product" element={<Product />} /> */}
        <Route path="/contact" element={<Contact />} />

      
        <Route path="/login" element={<Login/>} />


        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>

      </Routes>

    </BrowserRouter>
  );
};

export default App;