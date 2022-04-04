import React from "react";

import {Link} from 'react-router-dom'


function Login() {

    const userlogin = () => {

    }

    return (
        <div>
            <label>E-mail id :</label>
            <input type="text" id="email"/><br/>
            <label>Password :</label>
            <input type="text" id="password"/><br/>

            <button onClick={userlogin}>login</button><br/>
            
            <button><Link to='/signup'>sign up</Link></button>

        </div>
    );
}

export default Login