import { BsCart3 } from "react-icons/bs";
import { MoblieNav, NavLinks } from "../Assent/Data";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {mount} = useSelector((state) => state.data)
  return (
    <nav>
      <div className="container">
        <h1>
          Furni<span></span>
        </h1>
        <ul>
          {NavLinks.map((el) => {
            return (
              <li key={el.id}>
                <NavLink
                  to={`/${el.id}`}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {el.title}
                </NavLink>
              </li>
            );
          })}
          <li>
            <CiUser />
          </li>
        </ul>
        <Link className="cart" to="/cart">
          <BsCart3  />
          <span>{mount}</span>
        </Link>
        <ol>
          {MoblieNav.map((el) => {
            return (
              <li key={el.id}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-moblie" : ""
                  }
                  to={`/${el.id}`}
                >
                  {el.icon}
                </NavLink>
                <span>{el.title}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Navbar;
