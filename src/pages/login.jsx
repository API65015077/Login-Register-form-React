import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LOGIN1 = () => {

    const handleSubmitt = (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.pass.value
        }
        axios.post('http://127.0.0.1:8000/api/loginM', data)
        .then(res => {
            if (res.data.msg == "login success" ) {
                alert("Login success");
                console.log(res.data);
                console.log(res.data);
            
                /// https://codefrontend.com/reactjs-redirect-to-url/
                /// ------------------------------------------------------------
                window.location.replace('/home');
                /// ------------------------------------------------------------
                
            } else {
                alert("Login fail");
                console.log(res.data);
            }
        
        })
    }

    return (
                <div className="formContainer">
                    <div className="formWrapper">
                        <br></br>
                        <span className='logo'> Login </span>
                        <form onSubmit={ handleSubmitt } > 
                            <input 
                                type="email" 
                                placeholder='Email'
                                name='email'

                                />
                            <input 
                                type="password" 
                                placeholder='Password' 
                                name='pass'
                                />
                            
                            <button type="submit" className="login__signInButton">Sign In</button>
                        </form>
                        <Link to="/register">
                            <p> Create Your Account </p>
                        </Link>
                        <Link to="/admin">
                            <a className='admin'> admin </a>
                        </Link>
                    </div>
                </div>
    );
}

export default LOGIN1;