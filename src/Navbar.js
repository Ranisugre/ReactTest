import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <h1>Event Management System</h1>
      <NavLink to="/add">
        <button>Add</button>
      </NavLink>
      <NavLink to="/show">
        <button>Show</button>
      </NavLink>
    </>
  );
};
export default Navbar;
