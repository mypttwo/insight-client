import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../whale.png";
import WallectConnect from "./walletConnect";

const Nav = () => {
  return (
    <nav
      className={`navbar navbar-expand-md shadow navbar-dark fixed-top bg-dark mb-5`}
    >
      <div className="container">
        <div
          className="navbar-brand border-0"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Ahab"
        >
          {/* <img src={logo} className="mm-logo" alt="ahab" /> */}
          <NavLink to="/" className="navbar-brand border-0 btn-link">
            Ahab
          </NavLink>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            {/* <li className="nav-item">
              <NavLink to="/hunt" className="nav-link">
                Hunt
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink to="/uniswap" className="nav-link">
                Uniswap
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to="/updates" className="nav-link">
                Updates
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink to="/settings" className="nav-link">
                Settings
              </NavLink>
            </li> */}
          </ul>

          <WallectConnect></WallectConnect>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
