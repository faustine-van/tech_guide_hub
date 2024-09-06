import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import {Link} from 'react-router-dom';

export function Signin() {
    return (
        <div className="user-container" style={{ maxWidth: '500px', margin: '120px auto' }}>
            <h2>Login</h2>

            <form className="user-form">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
        
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required />
                <p>or</p>
                <button type="submit" className="google-btn"> < FaGoogle className='fa-google' /> Sign in with google</button>
                <button type="submit" className="submit-button">Submit</button>
                <p>Don't have acound already <Link to='/sign-up' className='btn'> Signup </Link> </p>

            </form>
        </div>
    );
}


function Signup() {
    return (
        <div className="user-container" style={{ maxWidth: '500px' }}>
            <h2>Sign up</h2>

            <form className="user-form">
                <label htmlFor="name">Username</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required />
                <p>or</p>
                <button type="submit" className="google-btn"> < FaGoogle className='fa-google' /> Sign up with google</button>
                <button type="submit" className="submit-button">Submit</button>
                {/* btn class from MainPage.css */}
                <p>Already Sign up <Link to='/sign-in' className='btn'> Signin </Link> </p>
            </form>
        </div>
    );
}

export default Signup;
