import UserContext from "./UserContext";
import Navbar from "./Navbar";

const App = () => {

  const user = "Alex";

  return (
    <UserContext.Provider value={user}>
      <Navbar />
    </UserContext.Provider>
  );
};

export default App;