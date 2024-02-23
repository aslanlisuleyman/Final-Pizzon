import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Orders = () => {
  const [orders,setOrders]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/order").then(res=>{
      setOrders(res.data)
    })
  },[])
  return (
    <div style={{paddingTop:'90px',backgroundColor:'white',paddingLeft:'40px'}}>
      <ul>

         {
        orders.map((item,index)=>{ 
          return(
            
             <li key={index}>${item.totalPrice}.00
             {item.items.map((item, itemIndex) => (
          <div key={itemIndex} class="product-box">
            <div class="product-img">
              <a href="shop-detail.html">
                <img src={item.image} alt="Item Image" />
              </a>
            </div>
            <div class="product-detail">
              <div><a  class="pro-title">
                {item.title}
              </a></div>
              
              <div class="qty-box">
                <span class="price">${item.price}.00</span>
                

              </div>

              
            </div>


          </div>


        ))}

             
          <select name="" id="" onChange={(e)=>{
            axios.put(`http://localhost:3000/order/${item._id}`,{...item,status:e.target.value}).then(res=>console.log(res))
          }}>
           <option value="pending">pending</option>
           <option value="acepted">Accepted</option>
           <option value="onCourier">On Courier</option>
           <option value="rejected">Rejected</option>

          </select>
          
          </li>
          )
         
        })
      }
      </ul>
     
    </div>
  )
}

export default Orders