import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  let user = ""; // Example user state

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-orange-500" : "text-gray-300 hover:text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-orange-500" : "text-gray-300 hover:text-white"
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-orange-500" : "text-gray-300 hover:text-white"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive ? "text-orange-500" : "text-gray-300 hover:text-white"
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order"
          className={({ isActive }) =>
            isActive ? "text-orange-500" : "text-gray-300 hover:text-white"
          }
        >
          Order Food
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-black/20 fixed z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50 uppercase font-semibold"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="font-bold text-white">
            <span className="text-2xl font-bold uppercase text-orange-500">bistro boss</span>
            <br />
            <p className="font-bold uppercase">Restaurant</p>
          </Link>
        </div>
        <div className="navbar-end flex items-center">
          <div className="hidden lg:flex">
            <ul className="flex gap-7 px-1 uppercase font-semibold text-white">
              {links}
            </ul>
          </div>

          {!user && (
            <Link to="/login">
              <button className="text-white px-3 py-1 uppercase font-semibold">
                Login
              </button>
            </Link>
          )}
          {user && (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="User Profile" src={`${user.photoURL}`} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li className="mt-2">
                  <button className="bg-gray-200 block text-center hover:bg-warning">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
