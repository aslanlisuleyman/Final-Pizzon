import React, { useContext } from 'react'
import MainContext from '../../../context/context'

import { useNavigate } from 'react-router'
const Users = () => {
  const {filter,setFilter,deleteHandlerr,user}=useContext(MainContext)
  

 
  return (
    <div className='boar'>
          <table class="table">
  <thead>
    <tr>
    <th style={{paddingLeft:'10px'}} scope="col">Id</th>
      <th style={{paddingLeft:'32px'}} scope="col">Image</th>
      <th style={{paddingLeft:'20px'}} scope="col">Name</th>
      <th style={{paddingLeft:'65px'}} scope="col">E-mail</th>
      <th style={{paddingLeft:'5px'}} scope="col">Password</th>
      
      <th  style={{paddingLeft:'28px'}} scope="col">Delete</th>

    </tr>
  </thead>
  <tbody>
    { user.map((item,index)=>{
        return(
            <tr key={index}>
           <td>{item._id.slice(0,5)}</td>     
           <td><img src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png" alt="" /></td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.password}</td>
      
      <td><button onClick={()=>{
        deleteHandlerr(item._id)
      }} className='btn btn-danger'>Delete</button></td>
    </tr>
        )
    })}
    
   
  </tbody>
</table>
    </div>
  )
}

export default Users