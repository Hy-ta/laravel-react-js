import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
    constructor(){
        super()
        this.state = {
            email: "",
            password: "",
            msg: "",
            isLoading: false,
            redirect: false,
            errMsgEmail: "",
            errMsgPwd: "",
            errMsg: "",
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSignInHandler = this.onSignInHandler.bind(this);
    }
    onChangeHandler(e){
        let name = e.target.name;
        let value = e.target.value;
        let data = {};
        data[name] = value;
        this.setState(data);
    };

    onSignInHandler() {
        this.setState({ isLoading: true });

        axios
            .post(`/api/user/userLogin`, {
                email: this.state.email,
                password: this.state.password,
             })
             .then(response => {
                this.setState({ isLoading: false });
                if(response.data.status === 200) {
                    localStorage.setItem("isLoggedIn", true);
                    localStorage.setItem("userData", JSON.stringify(response.user.data));
                    this.setState({
                        msg: response.data.message,
                        redirect: true,
                    });
                }
        if(
            response.data.status === "failed" &&
            response.data.success === undefined
        ) {
            this.setState({
                errMsgEmail: response.data.validation_error.email,
                errMsgPwd: response.data.validation_error.password,
            });
            setTimeout(() => {
                this.setState({ errMsgEmail: "", errMsgPwd: "" });
            }, 2000);
        } else if(
            response.data.status === "failed" &&
            response.data.success === false
        ) {
            this.setState({
                errMsg: response.data.message,
            });
            setTimeout(() => {
                this.setState({ errMsg: "" });
            }, 2000);
        }
      })
      .catch(err => {
          console.log(error);
      });
    };

    render(){
        if(this.state.redirect) {
            return  <Redirect to ="/projectLists" />;
        }
        const login = localStorage.getItem("isLoggedIn");
        if(login) {
            return<Redirect to="/projectLists" />;
        }
        const isLoading = this.state.isLoading;
    
        return(
            <div>
                <Form className="containers">

                {/* email */}

                    <FormGroup>
                        <Label for="email">Email id</Label>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={this.onChangeHandler}
                        />
                        <span className="text-danger">{this.state.msg}</span>
                        <span className="text-danger">{this.state.errMsgEmail}</span>
                        </FormGroup>
                        <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={this.state.password}
                            onChange={this.onChangeHandler}
                        />
                        <span className="text-danger">{this.state.errMsgPwd}</span>
                        </FormGroup>
                        <p className="text-danger">{this.state.errMsg}</p>
                        <Button
                        className="text-center mb-4"
                        color="success"
                        onClick={this.onSignInHandler}
                        >
                        Sign In
                        {isLoading ? (
                            <span
                            className="spinner-border spinner-border-sm ml-5"
                            role="status"
                            aria-hidden="true"
                            ></span>
                        ) : (
                            <span></span>
                        )}
                        </Button>
                    </Form>
                </div>
                )
    }
}

export default SignIn;