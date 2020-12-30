// components/Navbar.js

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const login = localStorage.getItem("IsLoggedIn");
    console.log(localStorage);

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

            {/* if user is logged in */}

          { login ? (  
            <div className="navbar-start"> 
              <NavLink
                  className="navbar-item mx-2"
                  activeClassName="is-active"
                  to="/"
                >
                  Sign Up
                </NavLink> 
               <NavLink  
                  className="navbar-item mx-2" 
                  activeClassName="is-active" 
                  to="/sign_in"
                >
                  Sign In
                </NavLink>
              <NavLink  
                className="navbar-item mx-2" 
                activeClassName="is-active" 
                to="/projectLists"
              >
                Projects List
              </NavLink>

              <NavLink
                className="navbar-item mx-2"
                activeClassName="is-active"
                to="/new_project"
              >
                New Project
              </NavLink>

              <NavLink
                className="navbar-item mx-2"
                activeClassName="is-active"
                to="/archived_lists"
              >
                Archived Lists
              </NavLink>
            </div>

            ) 

            // {/* if user is not logged in */}

            : (
            <div className="navbar-start">  
                {/* <NavLink
                  className="navbar-item mx-2"
                  activeClassName="is-active"
                  to="/"
                >
                  Sign Up
                </NavLink> */}
                {/* <NavLink  
                  className="navbar-item mx-2" 
                  activeClassName="is-active" 
                  to="/sign_in"
                >
                  Sign In
                </NavLink> */}

                <NavLink  
                  className="navbar-item mx-2" 
                  activeClassName="is-active" 
                  to="/projectLists"
                >
                  Projects List
                </NavLink>

                <NavLink
                  className="navbar-item mx-2"
                  activeClassName="is-active"
                  to="/new_project"
                >
                  New Project
                </NavLink>

                <NavLink
                  className="navbar-item mx-2"
                  activeClassName="is-active"
                  to="/archived_lists"
                >
                  Archived Lists
                </NavLink>
              </div>
              )}
          </div>
        </div>
      </nav>
    );
};
 
 export default Navbar;