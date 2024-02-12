import React from 'react'
import "./Register.scss"
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className='login'>
    <div class="body">
            <div class="containerr">
            <form action='/users/register' method='POST'>

                    <div class="head">
                        <span>Sign up</span>
                        <p>Create a free account with your email.</p>
                    </div>
                    <div class="inputs">
                        <input type="text" placeholder="Full Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <button>Sign up</button>
                </form>
                <div class="form-footer">
                    <p>Have an account? <Link to="/Login">Login</Link></p> 
                </div>
        
            </div>
    
        </div>
        
    
        </div>
  )
}

export default Register