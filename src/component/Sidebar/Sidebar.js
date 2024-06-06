import "./sidebar.css";
import { FiSettings } from "react-icons/fi";
import { FaBoxOpen, FaFolderOpen, FaPlus } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const listDashboard = [
  {
    title: "Dashboard",
    icon: <FaFolderOpen />,
    to: "/admin",
  },
  {
    title: "All Products",
    icon: <FaBoxOpen />,
    to: "/admin/products",
  },
  {
    title: "Add Product",
    icon: <FaPlus />,
    to: "/admin/addProduct",
  },
];
const Sidebar = () => {
  return (
    <div className="side">
      <div className="head">
        <FiSettings />
        <h3>Dashboard</h3>
        <span>v.01</span>
      </div>
      <ul>
        {listDashboard.map((el, i) => {
          return (
            <li key={i}>
              <NavLink
                className={({ isActive }) => (isActive ? "activee" : "")}
                to={el.to}
              >
                <span>{el.icon}</span> <h3>{el.title}</h3>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
