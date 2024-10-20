import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
import "../Stylesheets/Navbar.module.css";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("/");

  const toggleNavbar = () => setMobileDrawerOpen((prev) => !prev);

  const closeNavbar = (path) => {
    setActiveItem(path);
    setMobileDrawerOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Achievements", path: "/achievements" },
    { name: "Contact Us", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="py-2 border-b border-neutral-700/80 bg-gray-900 bg-opacity-80 shadow-lg transition-shadow duration-300">
      <div className="container px-6 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" onClick={() => closeNavbar("/")}>
              <img src={logo} alt="Logo" className="h-20 w-auto mx-4" />

      
            </Link>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => closeNavbar(item.path)}
                  className={`flex items-center h-full text-white transition duration-200 ease-in-out transform hover:scale-110 px-4 py-3 rounded-md ${
                    activeItem === item.path
                      ? "border-b-4 border-orange-500"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? (
                <X className="text-white" />
              ) : (
                <Menu className="text-white" />
              )}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="mobile-drawer">
            <ul>
              {navItems.map((item) => (
                <li className="py-4" key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => closeNavbar(item.path)}
                    className={`text-white ${
                      activeItem === item.path
                        ? "border-b-4 border-orange-500"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
