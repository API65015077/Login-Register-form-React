// function register1() {
//             var username = document.getElementById("username").value;
//             var email = document.getElementById("email").value;
//             var password = document.getElementById("password").value;
        
//             const xhttp = new XMLHttpRequest();
//             xhttp.open("POST", "http://127.0.0.1:8000/api/register", true);
//             xhttp.setRequestHeader("Content-type", "application/json");
//             xhttp.send(JSON.stringify({
//                 email: email,
//                 username: username,
//                 password: password
//             }));
        
//             xhttp.onreadystatechange = function() {
//                 if (this.readyState == 4 && this.status == 200) {
//                     alert("Register success");
//                 }
//             }
// }

import React from 'react';
import {userState } from 'react';

const regist = () => {
    const [email, setEmail] = userState('');
    const [username, setUsername] = userState('');
    const [password, setPassword] = userState('');

    const register = () => {
        const data = {
            email: email,
            username: username,
            password: password
        }
        fetch('http://127.0.0.1:8000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        }
        )
    }

    return (
        <div>
            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={register}>Register</button>
        </div>
    )
}
