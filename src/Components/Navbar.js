import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img
              src="https://banyannation.com/wp-content/uploads/2017/09/Banyan_Logo.gif"
              alt="logo"
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
                to="our-work"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Our Work
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy={true}
                to="plastic"
                className="nav-links"
                smooth={true}
                duration={1000}
                offset={-70}
                onClick={closeMobileMenu}
              >
                #Better_Plastic
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy={true}
                to="action"
                smooth={true}
                duration={1000}
                offset={-70}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Take Action
              </Link>
            </li>
            <li className="nav-item">
              <Link spy={true}
                to="story"
                smooth={true}
                duration={1000}
                offset={-70}
                className="nav-links"
                onClick={closeMobileMenu}>
                Our Story
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                spy={true}
                to="team"
                smooth={true}
                duration={1000}
                offset={-70}
                className="nav-links"
                onClick={closeMobileMenu}>
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy={true}
                to="contact-us"
                smooth={true}
                duration={1000}
                offset={-90}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
