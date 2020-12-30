import React, { useState } from 'react';
import Input from './Input';

const SimpleForm = () => {
    const [state, setState] = useState({
        email: "",
        password: "",
        name: "",
        phone: "",
        birthday: "",
    });

    const style = {
        background: "#FFF",
        borderRadious: "0.25rem",
        padding: "20px",
        boxShadow: 
            "0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0, 0.12)"
    };

    return(
        <>
        {/* email */}
        <Input
            label="email"
            type="email"
            placeholeder="Enter email."
            value={state.email}
            onChange={val=>setState({ ...state, email: val })}
        />
        {/* password */}
        <Input
            label="password"
            type="password"
            placeholeder="Enter password."
            value={state.password}
            onChange={val=>setState({ ...state, password: val })}
        />
        {/* name */}
        {/* <Input
            label="name"
            type="text"
            value={state.name}
            onChange={val=>setState({ ...state, name: val })}
        /> */}
        {/* phone */}
        {/* <Input
            label="phone"
            type="phone"
            value={state.phone}
            onChange={val=>setState({ ...state, phone: val })}
        /> */}
        {/* birthday */}
        {/* <Input
            label="birthday"
            type="date"
            value={state.birthday}
            onChange={val=>setState({ ...state, birthday: val })}
        />

        <div style={style}>
            Form State:
          <pre>
            <code>{JSON.stringify(state, null, 2)}</code>
          </pre>
        </div>  */}

    </>
    );
};

export default SimpleForm;