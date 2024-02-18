import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from "axios"
import "./Detail.scss"
import MainContext from '../../../context/context'
 

const Detail = () => {
  const {filter,addBasket}=useContext(MainContext)
    const[data,setdata]=useState({})
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:3000/pizza/${id}`).then(res=>{
            setdata(res.data)
        })
    })
  return (
    <div className='deta'>
      
          <div className='deta__first' >
  <img src={data.image}  alt="..."/>
  <div >
    <p className='tid'>{data.title}</p>
    <p className='prd'>${data.price}.00</p>
    <p className='ded'>{data.desc}</p>
    
    <p><span>If you like the product, put it in the cart</span></p>
    <button onClick={()=>{
                addBasket(data)
            }}>Add Cart</button>
  </div>
</div>
     
     


    </div>
    
  )
}

export default Detail
