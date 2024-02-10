


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isFixed ? 'fixed' : ''}`}>
      <div className='header__left'>
        <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/logo.png" alt="" />
      </div>
      <div className='header__middle'>
        <img className={isFixed ? 'hidden' : ''} src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/header-img.png" alt="" />
      </div>
      <div className='header__right'>
        <ul>
          <Link className='link' to="/">HOME</Link>

          <div className='shop'>

           <div className='shop__left'><li className='link shop'>SHOP</li></div>  
           
          <div className='shop__right'>
            <ul>
              <li><Link to="/ShopList" className='li'>SHOP LIST</Link></li>
              <li><Link to="/ShopDetail" className='li'>SHOP DETAIL</Link></li>
              <li><Link to="/Cart" className='li'>CART</Link></li>
              <li><Link to="/CheckOut" className='li'>CHECKOUT</Link></li>
            </ul>
          </div>
         
          </div>
         
          <div className='pages'>

           <div className='pages__left'><li className='link pages'>PAGES</li></div>  
           
          <div className='pages__right'>
            <ul>
              <li><Link to="/AboutUs" className='li'>ABOUT US</Link></li>
              <li><Link to="/OurMenu" className='li'>OUR MENU</Link></li>
              <li><Link to="/OurTeam" className='li'>OUR TEAM</Link></li>
              <li><Link to="/BookNow" className='li'>BOOK NOW</Link></li>
              <li><Link to="/ErrorPage" className='li'>404 PAGE</Link></li>
            </ul>
          </div>
         
          </div>
          <div className='blog'>

<div className='blog__left'><li className='link blog'>BLOG</li></div>  

<div className='blog__right'>
 <ul>
   <li><Link to="/BlogRight" className='li'>BLOG RIGHT</Link></li>
   <li><Link to="/BlogLeft" className='li'>BLOG LEFT</Link></li>
   <li><Link to="/BlogDetail" className='li'>BLOG DETAIL</Link></li>

 </ul>
</div>

</div>
          <Link className='link' to="/Contact">CONTACT</Link>
          <Link className='link'><i className="fa-solid fa-magnifying-glass"></i></Link>
          <Link className='link'><i className="fa-solid fa-cart-shopping"></i><p>0</p></Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
