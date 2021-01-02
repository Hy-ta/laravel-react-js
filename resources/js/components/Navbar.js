import axios from "axios";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Button } from 'reactstrap';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const login = localStorage.getItem("isLoggedIn");
    const history = useHistory();
    
    console.log(localStorage);
    console.log(history)
    // const userLogout = () => {
    //   axios.get(`/api/user/userLogout`)
    //         .then({
    //           render(){
    //             conosle.log('session has gone');
    //             return(
    //               <Redirect to="/"/>
    //           )
    //         }       
    //         });
    // }

    async function userLogout(){
      // localStorage.clear("isLoggedIn");
      
      window.localStorage.clear();
      history.push("/sign_in");
    };

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
              
              {/* <Button
                className='text-center pl-2'
                color='success'
                onClick={userLogout}
              >Logout</Button> */}
              <NavLink 
                className="navbar-item mx-2 text-danger"
                activeClassName="is-active" 
                to='/sign_in'
                onClick={userLogout}
                >
                  Logout
              </NavLink>
              
            </div>

            ) 

            // {/* if user is not logged in */}

            : (
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
            )}
          </div>
        </div>
      </nav>
    );
};
 
 export default Navbar;