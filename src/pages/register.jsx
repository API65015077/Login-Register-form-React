import React, { useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

    /// ขอขอบคุณใครไม่รู้ แต่ขอขอบคุณเฉพาะคนที่รู้ว่าต้องขอขอบคุณ code จาก co-pilot
    ///------------------------------------------------------------
    const [data, setData] = useState({});
    const handleSubmitt = (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            username: e.target.username.value,
            password: e.target.pass.value
        }
        if (data.email == "" || data.username == "" || data.password == "") {
            alert("Please fill all fields");
        } else {
            alert("Please fill all fields");
            axios.post('http://127.0.0.1:8000/api/register', data)
            .then(res => {
                    console.log(res);
                    console.log(res.data);
                    alert("Register success");

                /// https://codefrontend.com/reactjs-redirect-to-url/
                /// ------------------------------------------------------------
                    window.location.replace('/');
                /// ------------------------------------------------------------
                
            })
        }
    }

    ///------------------------------------------------------------


    return ( 
        <div>
                <div className="formContainer">
                    <div className="formWrapper">
                        <span className='logo'>Register</span>
                        <form onSubmit={handleSubmitt}>

                            <input 
                                type="email"
                                placeholder='Email'
                                id='email'
                                name='email'
                                />

                            <input 
                                type="text" 
                                placeholder='Username' 
                                id='username' 
                                name='username'
                                />

                            <input 
                                type="password" 
                                placeholder='Password' 
                                id='pass' 
                                name='pass'
                                />

                            <button type="submit" className="login__signInButton">Sign Up</button>

                        </form>
                        <Link to="/">
                            <p> Back to Login </p>
                        </Link>
                    </div>
                </div>
        </div>
    );
}

export default Register;