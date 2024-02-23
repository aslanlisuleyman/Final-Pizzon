import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import axios from "axios"
import { useFormik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import "./Add.scss"

const Add = () => {
  const {filter,setFilter,deleteHandler}=useContext(MainContext)
  const formik = useFormik({
    initialValues: {
      image: '',
      title: '',
      price: '',
      desc:'',
      brand:''
    },
    onSubmit:( values,{resetForm })=> {
     if(!values.image || !values.title || !values.price || !values.desc || !values.brand){
        toast.error("Zəhmət olmasa formu doldurun")
     } else{
        axios.post("http://localhost:3000/pizza",{...values}).then(res=>{
        resetForm()
        setFilter([...filter,res.data])

     })
     }
     
    },
  });
  return (
    
    <div className='addf'>
      <div style={{paddingLeft:'50px',width:'30%'}}>
        5 category var: pizza all offers pasta slides 
      </div>

<form className='addform' onSubmit={formik.handleSubmit}>
    <div className='brf'>

        
          <input  placeholder='Image'  
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.image}
          /> 
    </div>
         
         <div className='brf'>

           
          <input placeholder='Name' 
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
         </div>
          <div className='brf'>


            
          <input placeholder='Price' 
            id="price"
            name="price"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          </div>
          <div className='brf'>

            
          <input placeholder='Description' 
            id="desc"
            name="desc"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.desc}
          />
          </div>
          <div className='brf'>

            
          <input  placeholder='Category'
            id="brand"
            name="brand"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.brand}
          />
          </div>
          
          <button className='btn btn-success' type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Add