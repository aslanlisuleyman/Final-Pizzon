import React, { useContext } from 'react'
import "./HomeCard1.scss"
import MainContext from '../../../context/context'
const HomeCard1 = () => {
    const {filter}=useContext(MainContext)
  return (
    <div className='homecard1'>
      <div class="section-heading wow yaz fadeInLeft animated snipcss-oPLvb style-bOlRR" id="style-bOlRR">
  <h5 class="sub-title">
    Popular Dishes
  </h5>
  <h2>
    Browse Our Menu
  </h2>
</div>



<div className='card1'>
    {filter.map((item,index)=>{
      if(item.brand=="pizza"){
        return(
            <div className='card1__card' key={index}>
              <div className='ma'>
                <img className='il' src={item.image} alt="" />
              </div>
              <div className='card1__tp'>
                <p className='p1'>{item.title}</p>
                <p className='p2'>${item.price}.00</p>
              </div>
              <div className='card1__icon'><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i></div>
              <div className='card1__desc'>{item.desc}</div>
              <div class="btt menu-item-order snipcss-DQMsl">
  <a href="shop-detail.html" class="btn-ct btn-small snipcss0-0-0-1">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/cart-icon-white.png" alt="Cart Icon" class="snipcss0-1-1-2"/>
    Order Now
  </a>
</div>


            </div>
        )
    }
      }
        )}

</div>


    </div>
  )
}

export default HomeCard1