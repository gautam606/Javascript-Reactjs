import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to Dashboard</h1>

      <Link to="/dashboard/profile">Profile</Link>{" "}
      <Link to="/dashboard/settings">Settings</Link>

      <hr />

      <Outlet />
    </div>
  );
};

export default Dashboard;