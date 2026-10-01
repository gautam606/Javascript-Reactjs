import { useContext } from "react";
import UserContext from "./UserContext";

const Navbar = () => {

  const user = useContext(UserContext);

  return (
    <div>
      <h2>Welcome {user}</h2>
    </div>
  );
};

export default Navbar;