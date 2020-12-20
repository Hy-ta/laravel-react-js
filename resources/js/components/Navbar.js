// components/Navbar.js

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    return(
        <nav
            className="navbar is-primary"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="container">
                <div className="navbar-brand">
                    <a
                        role="button"
                        className={`navbar-burger burger ${isOpen && "is-active"}`}
                        aria-label="menu"
                        aria-expanded="false"
                        onClick={() => setOpen(!isOpen)}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className={`navbar-menu ${isOpen && "is-active"}`}>

            {/* ////    NavLink    //// */}

          <div className="navbar-start">    
            <NavLink  
              className="navbar-item mx-2" 
              activeClassName="is-active" 
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className="navbar-item mx-2"
              activeClassName="is-active"
              to="/create"
            >
              New Project
            </NavLink>

            <NavLink
              className="navbar-item mx-2"
              activeClassName="is-active"
              to="/project"
            >
              Project
            </NavLink>

            <NavLink
              className="navbar-item mx-2"
              activeClassName="is-active"
              to="/task"
            >
              Task
            </NavLink>
          </div>

        
        </div>
        </div>
        </nav>
    );
};
 
 export default Navbar;