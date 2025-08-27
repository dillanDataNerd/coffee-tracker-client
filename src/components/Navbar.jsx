import { Link } from "react-router-dom";
import homeIcon from "../assets/nav-home.svg";
import plusIcon from "../assets/nav-plus.svg";
import brewIcon from "../assets/nav-brew.svg";
import beanIcon from "../assets/nav-bean.svg";

function Navbar() {
 return (
    <nav>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <img src={homeIcon} alt="home navigation logo" />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/brews/new" className="nav-link">
            <img src={plusIcon} alt="create brew logo" />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/brews" className="nav-link">
            <img src={brewIcon} alt="brews navigation logo" />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/beans" className="nav-link">
            <img src={beanIcon} alt="beans navigation logo" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
