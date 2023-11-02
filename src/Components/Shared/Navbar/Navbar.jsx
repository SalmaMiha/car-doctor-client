import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BiUserCircle } from "react-icons/bi";

const Navbar = () => {
  const links = (
    <div className="flex gap-5 font-semibold items-center text-[#444]">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? " bg-orange-200 px-3 py-2 rounded-lg" : "px-3 py-2"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? " bg-orange-200 px-3 py-2 rounded-lg" : "px-3 py-2"
        }
      >
        About
      </NavLink>

      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive ? " bg-orange-200 px-3 py-2 rounded-lg" : "px-3 py-2"
        }
      >
        Services
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? " bg-orange-200 px-3 py-2 rounded-lg" : "px-3 py-2"
        }
      >
        Contact
      </NavLink>
    </div>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img className="h-12" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-3 items-center">
            <div className="text-2xl">
              <HiOutlineShoppingBag></HiOutlineShoppingBag>
            </div>
            <div className="text-3xl">
              <BiUserCircle></BiUserCircle>
            </div>
            <div>
              <Link>
                <button className="border-2 border-[#FF3811] rounded-md px-3 py-2 text-[#FF3811] font-semibold">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
