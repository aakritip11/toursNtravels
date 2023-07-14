import React, { useState } from "react";
import "./navbar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaUserCircle, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ authenticated }) => {
  const [active, setActive] = useState("navBar");
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNav = () => {
    setActive("navBar");
  };

  const handleLogout = () => {
    // Perform logout logic here
    localStorage.removeItem("token");
    // Redirect to the appropriate page
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <Link to="/" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" /> Travel.
            </h1>
          </Link>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to="/" className="navLink">
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link to="/Tours" className="navLink">
                Tours
              </Link>
            </li>
            <li className="navItem">
              <Link to="/About" className="navLink">
                About
              </Link>
            </li>
            <li className="navItem">
              <Link to="/contact" className="navLink">
                Contact
              </Link>
            </li>
            <li className="navItem">
              {authenticated ? (
                <div className="dropdown">
                  <div className="navLink" onClick={toggleProfileMenu}>
                    <FaUserCircle className="icon" />
                    Profile
                  </div>
                  {showProfileMenu && (
                    <div className="dropdown-menu">
                      <Link to="/Account" className="dropdown-link">
                        Profile
                      </Link>
                      <div
                        className="dropdown-link"
                        onClick={handleLogout}
                      >
                        Logout
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/Loge" className="navLink">
                  {/* <FaSignInAlt className="icon" /> */}
                  Login
                </Link>
              )}
            </li>
            <button className="btn">
              <Link to="/Book2">BOOK NOW</Link>
            </button>
          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar"></div>
      </header>
    </section>
  );
};

export default Navbar;
