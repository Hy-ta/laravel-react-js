import React from 'react';
import { NavLink, Redirect } from "react-router-dom";

const NavbarLists = (props) => {
        return(
    
          !props.isLogin ?

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
            </div>
         : 
            <div className="navbar-start"> 
                
              <NavLink  
                className="navbar-item mx-2" 
                activeClassName="is-active" 
                to="/project_lists"
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

              <NavLink 
                className="navbar-item mx-2"
                activeClassName="is-active" 
                to='/projectSearch'
                >
                  ProjectSearch
              </NavLink>

              <NavLink 
                className="navbar-item mx-2 text-danger"
                activeClassName="is-active" 
                to='/sign_in'
                onClick={props.logout}
                >
                  Logout  
              </NavLink>
            </div>
          )
}

export default NavbarLists;