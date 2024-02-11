import React from 'react'
import "./Login.scss"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
<div class="body">
        <div class="containerr">
            <form>
                <div class="head">
                    <span>Login</span>
                    <p>Create a free account with your email.</p>
                </div>
                <div class="inputs">
                   
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                </div>
                <button>Login</button>
            </form>
            <div class="form-footer">
                <p>Don't have  account? <Link to="/Register">Sign Up</Link></p> 
            </div>
    
        </div>

    </div>
    

    </div>
  )
}

export default Login