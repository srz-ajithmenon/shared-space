import React from "react";

import {Link} from 'react-router-dom'


function Login() {

    const userlogin = () => {

        var user = {id:"1", name:"ajith", email:"ajithachus20@gmail.com"}
        // chrome.storage.local.set(
        //     {
        //         sharedseatuser: user
        //     },
        //     function()
        //     {
        //         console.log(sharedseatuser);
        //         console.log("sending notification")
        //     }
        // );
    }

    return (
        <div>
            <label>E-mail id :</label>
            <input type="text" id="email"/><br/>
            <label>Password :</label>
            <input type="text" id="password"/><br/>

            {/* <button onClick={userlogin}>login</button><br/> */}
            <button><Link to='/home'>login</Link></button>
            <button><Link to='/signup'>sign up</Link></button>

        </div>
    );
}

export default Login