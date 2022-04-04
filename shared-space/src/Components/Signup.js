import React from 'react'
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import {postUserInfo} from '../redux/user/userAction'

function UserSignup (props) {
    const {id, name, email, password} =props.user;
    let navigate = useNavigate()

    const adduser = () => {
        props.postUserInfo()
        navigate('/')
    }

    return (
        <div>
            <h1>Register User</h1>

            <label>Name : </label>
            <input type="text" id="name"/><br/>
            <label>E-mail id :</label>
            <input type="text" id="email"/><br/>
            <label>Password :</label>
            <input type="text" id="password"/><br/>

            <button onClick={adduser}>sign up</button>
        </div>
    )

}

const mapStateToProps = state => {
    return{
        user: state.userInfo.user
    }
}

const mapDispatchToProps = dispatch => {
    return{
        postUserInfo : () => {

            const user = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
            };

            dispatch(postUserInfo(user))
        }
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(UserSignup)