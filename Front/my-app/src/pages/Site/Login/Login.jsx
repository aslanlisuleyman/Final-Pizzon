import React, { useState } from 'react'
import "./Login.scss"
import { Link } from 'react-router-dom'
import axios from "axios"
import { useNavigate } from 'react-router-dom' 
import Swal from 'sweetalert2';
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
    
    const [name,setName] = useState()
    const [password,setPassword] = useState()
    
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
      e.preventDefault()  
      axios.post('http://localhost:3000/Login',{name,password}).then(result=>{console.log(result)
      if(result.data === "Success"){
        toast.promise(
          new Promise((resolve, reject) => {
            setTimeout(() => {
              {
                resolve("Login successful!");
                localStorage.setItem('userName', name);
                navigate ("/")
              } 
            }, 1000);
          }),
          {
            loading: "Logging in...",
            success: (message) => message,
            error: (error) => error.message,
          }
        );
            
      } else{
        // Swal.fire({
        //     icon: "error",
        //     title: "Xəta...",
        //     text: "Zəhmət olmasa düzgün məlumat daxil edin!",
        //     footer: '<a href="#">Why do I have this issue?</a>'
        //   });
        Swal.fire({
            title: "Wrong Password or E-mail!",
            text: "Please enter correct information.",
            imageUrl: "https://i.pinimg.com/originals/63/a7/b3/63a7b3a1e338e167ecbf36659a8465d4.gif",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image",
            animation: false
        });

      }
      
      
    })
      .catch(err=>console.log(err))
    }
  return (
    <div className='login'>
<div class="body">
        <div class="containerr">
            <form onSubmit={handleSubmit}>
                <div class="head">
                    <span>Login</span>
                    <p>Create a free account with your email.</p>
                </div>
                <div class="inputs">
                   
                    <input type="name" required placeholder="Name"  onChange={(e)=>setName(e.target.value)}/>
                    <input type="password" required placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
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