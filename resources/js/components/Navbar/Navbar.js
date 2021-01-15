import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import NavbarLists from '../Navbar/NavbarLists';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    const login = localStorage.getItem("isLoggedIn") ? true : false;
    const history = useHistory();
    
    const logoutHandler = () => {
      if(login){
        window.localStorage.clear();
        if(!login){
          return(
            <Redirect to='sign_in' />
          )
        }
        // history.push("/sign_in"); 
      }
    };


    // useEffect(() => {
    //   console.log('render!');
    //   return () => console.log('unmounting...');
    // })
  

    return(
        <nav
            className="navbar is-primary"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="container">
                <div className={`navbar-menu ${isOpen && "is-active"}`}>
                  {login ?
                  <NavbarLists 
                    isLogin={login}
                    logout={logoutHandler}
                  /> 
                  : 
                    <span className="text-danger ml-4">Please Login !</span>  
                  }

                </div>
          </div>
        </nav>
    );
};
 
 export default Navbar;