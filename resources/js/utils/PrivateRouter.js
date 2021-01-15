import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRouter = ({ component: Component, ...rest }) => {
    const login = localStorage.getItem("IsLoggedIn");
    return (
      <Route {...rest} render= {props => (
        login ? 
          <Component {...props} />
          : <Redirect to="/sign_in" />
      )} />
    );
  };

  export default PrivateRouter;