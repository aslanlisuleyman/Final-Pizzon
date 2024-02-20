import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import "./Dashboard.scss"
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
const Dashboard = () => {
  const {filter,setFilter,deleteHandler}=useContext(MainContext)
  const navigate = useNavigate();

  
  return (
    <div className='boar'>
          <table class="table">
  <thead>
    <tr>
    <th style={{paddingLeft:'10px'}} scope="col">Id</th>
      <th style={{paddingLeft:'32px'}} scope="col">Image</th>
      <th style={{paddingLeft:'50px'}} scope="col">Name</th>
      <th style={{paddingLeft:'25px'}} scope="col">Price</th>
      <th style={{paddingLeft:'28px'}} scope="col">Edit</th>
      <th  style={{paddingLeft:'28px'}} scope="col">Delete</th>

    </tr>
  </thead>
  <tbody>
    { filter.map((item,index)=>{
        return(
            <tr key={index}>
           <td>{item._id.slice(0,5)}</td>     
      <td><img src={item.image} alt="" /></td>
      <td>{item.title}</td>
      <td>${item.price}.00</td>
      <td><Link  to={`Edit/${item._id}`}  className='btn btn-warning'>Edit</Link></td>
      
      <td><button onClick={()=>{
        deleteHandler(item._id)
      }} className='btn btn-danger'>Delete</button></td>
    </tr>
        )
    })}
    
   
  </tbody>
</table>
    </div>
  )
}

export default Dashboard