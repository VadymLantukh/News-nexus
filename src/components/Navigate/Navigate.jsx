import { NavLink } from "react-router-dom";
import css from "./Navigate.module.css";

const Navigate = () => {
  const addActive = ({ isActive }) => (isActive ? css.active : css.inactive);

  return (
    <nav>
      <NavLink className={addActive} to="/">
        Home
      </NavLink>
      <NavLink className={addActive} to="/search">
        Other
      </NavLink>
    </nav>
  );
};

export default Navigate;
