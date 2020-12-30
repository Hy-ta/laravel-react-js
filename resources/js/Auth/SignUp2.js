import React, { useState } from 'react';
// import axios from 'axios';
import './SignUp.css';
// import { Link } from 'react-router-dom';
import Input from '../components/Input';


const SignUp2 = () => {
    const [state, setState] = useState({
      email: "",
      password: "",
      name: "",
      phone: "",
      birthday: "",
    });
    
    const handleSubmit = (event) => {
      event.preventDefault();
    
      if(state){
          console.log(state);
    
          let input = {};
          input["name"] = "";
          input["email"] = "";
          input["comment"] = "";
  
    
          alert('Demo Form is submited');
      }
    }

    return (
      <div>
        <h1>Sign Up Form.</h1>
        <form onSubmit={handleSubmit} className="pt-3">
  
          <div className="form-group">
            <label htmlFor="name">Name:</label>
              {/* name */}
              <Input
                  label="name"
                  type="name"
                  value={state.name}
                  onChange={val=>setState({ ...state, name: val })}
              />
              {/* <div className="text-danger">{this.state.errors.name}</div> */}
          </div>
  
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
              {/* email */}
              <Input
                  label="email"
                  type="email"
                  value={state.email}
                  onChange={val=>setState({ ...state, email: val })}
              />
              {/* <div className="text-danger">{this.state.errors.email}</div> */}
          </div>

          <div className="form-group">
            <label htmlFor="phone">phone:</label>
            {/* phone */}
              <Input
                  label="phone"
                  type="phone"
                  value={state.phone}
                  onChange={val=>setState({ ...state, phone: val })}
              />
  
              {/* <div className="text-danger">{this.state.errors.comment}</div> */}
          </div>
  
          <div className="form-group">
            <label htmlFor="password">password:</label>
            {/* password */}
              <Input
                  label="password"
                  type="password"
                  value={state.password}
                  onChange={val=>setState({ ...state, password: val })}
              />
  
              {/* <div className="text-danger">{this.state.errors.comment}</div> */}
          </div>
          <div className="py-3">
           <input type="submit" value="Submit" className="btn btn-success py-2" />
          </div>
        </form>
      </div>
    );
  };

  export default SignUp2;

  