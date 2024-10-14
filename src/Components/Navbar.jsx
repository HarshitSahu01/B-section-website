import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../Stylesheets/Navbar.module.css";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("/");

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Achievements", path: "/achievements" },
    { name: "Contact Us", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 py-4 backdrop-blur-md border-b border-neutral-700/80 bg-gray-900 bg-opacity-80 shadow-lg transition-shadow duration-300">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Link
              to="/"
              onClick={() => {
                setActiveItem("/");
                setMobileDrawerOpen(false); // Close the mobile drawer when home is clicked
              }}
              className="flex items-center"
            >
              <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
              <span className="text-white text-xl tracking-tight font-bold">
                B SECTION
              </span>
            </Link>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <div className="group h-full">
                  <Link
                    to={item.path}
                    onClick={() => {
                      setActiveItem(item.path);
                      setMobileDrawerOpen(false); // Close the mobile drawer when an item is clicked
                    }}
                    className={`nav-item flex items-center h-full text-white transition duration-200 ease-in-out transform hover:scale-110 px-4 py-2 rounded-md relative ${
                      activeItem === item.path
                        ? "border-b-4 border-orange-500"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </div>
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
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden transition-transform duration-200 ease-in-out">
            <ul>
              {navItems.map((item) => (
                <li className="py-4" key={item.name}>
                  <div className="group h-full">
                    <Link
                      to={item.path}
                      onClick={() => {
                        setActiveItem(item.path);
                        setMobileDrawerOpen(false); // Close the mobile drawer when an item is clicked
                      }}
                      className={`nav-item text-white ${
                        activeItem === item.path
                          ? "border-b-4 border-orange-500"
                          : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </div>
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
