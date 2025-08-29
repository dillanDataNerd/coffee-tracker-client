import { NavLink } from "react-router-dom";
import homeIcon from "../assets/nav-home.svg";
import plusIcon from "../assets/nav-plus.svg";
import brewIcon from "../assets/nav-brew.svg";
import beanIcon from "../assets/nav-bean.svg";

function Navbar() {
  return (
    <nav className="navbar fixed-bottom justify-content-center">
      <ul className="nav">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            <img src={homeIcon} alt="home navigation logo" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/brews/new"
            end
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            <img src={plusIcon} alt="create brew logo" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/brews"
            end
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            <img src={brewIcon} alt="brews navigation logo" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/beans"
            end
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            <img src={beanIcon} alt="beans navigation logo" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
