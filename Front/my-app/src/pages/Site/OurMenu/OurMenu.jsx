import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import MainContext from '../../../context/context'
import "./OurMenu.scss"
const OurMenu = () => {
  const {filter}=useContext(MainContext)
  const [activeButton, setActiveButton] = useState('ALL');
  const handleClick = (button) => {
    setActiveButton(button);
  };
  return (
    <div>
      <section class="sub-banner bg-yellow overflow-h position-r snipcss-i49qt">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="sub-banner-content wow fadeInLeft animated style-hUcYa" id="style-hUcYa">
          <h1 class="sub-banner-title">
            Our Menu
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="bread-crumb wow fadeInRight animated style-5pgFQ" id="style-5pgFQ">
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              Our Menu
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="black-jamun wow fadeInLeft animation-delay-5 animated style-pz118" id="style-pz118">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/black-jamun.png" alt="black-jamun"/>
  </div>
  <div class="onion-img wow fadeInUp animation-delay-6 animated style-AoHRr" id="style-AoHRr">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/onion.png" alt="onion"/>
  </div>
  <div class="tamato-img wow fadeInUp animation-delay-7 animated style-FA7WM" id="style-FA7WM">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/tamato.png" alt="tamato"/>
  </div>
  <div class="leaf-img wow fadeInRight animation-delay-8 animated style-KvoZJ" id="style-KvoZJ">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/banner-leaf.png" alt="banner-leaf"/>
  </div>
</section>

<div className='aspop'>
  <button onClick={() => handleClick('ALL')}>ALL</button>
  <button >SLIDES</button>
  <button onClick={() => handleClick('PIZZA')}>PIZZAS</button>
  <button>OFFERS</button>
  <button>PASTA</button>
</div>
<div className='card2'>
   
  {activeButton === 'ALL' && (
          filter.map((item, index) => {
            if(item.brand=="all"){
               return(
            <div className='card2__card' key={index}>
               <div className='ma'>
                <img className='il' src={item.image} alt="" />
              </div>
              <div className='card2__tp'>
                <p className='p1'>{item.title}</p>
                <p className='p2'>${item.price}.00</p>
              </div>
              <div className='card2__icon'><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i></div>
              <div className='card2__desc'>{item.desc}</div>
              <div class="btt menu-item-order snipcss-DQMsl">
  <a href="shop-detail.html" class="btn-ct btn-small snipcss0-0-0-1">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/cart-icon-white.png" alt="Cart Icon" class="snipcss0-1-1-2"/>
    Order Now
  </a>
</div>
            </div>
          )}
            }
           )
        )}
        {activeButton === 'PIZZA' && (
          filter.map((item, index) =>{
            if(item.brand=="pizza"){
     return(
            <div className='card2__card' key={index}>
            <div className='ma'>
             <img className='il' src={item.image} alt="" />
           </div>
           <div className='card2__tp'>
             <p className='p1'>{item.title}</p>
             <p className='p2'>${item.price}.00</p>
           </div>
           <div className='card2__icon'><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i><i class="fa-solid fa-star" style={{color:"#ffbb00"}}></i></div>
           <div className='card2__desc'>{item.desc}</div>
           <div class="btt menu-item-order snipcss-DQMsl">
<a href="shop-detail.html" class="btn-ct btn-small snipcss0-0-0-1">
 <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/cart-icon-white.png" alt="Cart Icon" class="snipcss0-1-1-2"/>
 Order Now
</a>
</div>
         </div>
          )}
            }
          )
      
        )}
        


</div>


<section class="our-strength position-r pt-150 pb-120 mb-150 bg-yellow overflow-h snipcss-7cQqE">
  <div class="strength-vacter wow fadeInRight animation-delay-5 animated style-Ie44w" id="style-Ie44w">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/strength-vacter.png" alt="Vacter Image"/>
  </div>
  <div class="container">
    <div class="section-heading wow fadeInUp animated style-xMNmJ" id="style-xMNmJ">
      <h5 class="sub-title">
        Our Strength
      </h5>
      <h2>
        Why We Are The Best?
      </h2>
    </div>
    <div class="row">
      <div class="col-xl-3 col-lg-6 col-md-6 strength-box wow fadeInUp animated style-2KGnP" id="style-2KGnP">
        <div class="strength-icon">
          <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/all-kinds-of-foods.png" alt="All kinds of Foods"/>
        </div>
        <div class="strength-content">
          <h4 class="strength-title">
            All kinds of Foods
          </h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting industry.
          </p>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6 col-md-6 strength-box wow fadeInUp animated style-waSUe" id="style-waSUe">
        <div class="strength-icon">
          <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/fresh-foods.png" alt="Fresh Foods"/>
        </div>
        <div class="strength-content">
          <h4 class="strength-title">
            Fresh Foods
          </h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting industry.
          </p>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6 col-md-6 strength-box wow fadeInUp animated style-SOrOY" id="style-SOrOY">
        <div class="strength-icon">
          <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/best-taste.png" alt="Best Taste"/>
        </div>
        <div class="strength-content">
          <h4 class="strength-title">
            Best Taste
          </h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting industry.
          </p>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6 col-md-6 strength-box wow fadeInUp animated style-ori5n" id="style-ori5n">
        <div class="strength-icon">
          <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/on-time-delivery.png" alt="On Time Delivery"/>
        </div>
        <div class="strength-content">
          <h4 class="strength-title">
            On Time Delivery
          </h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting industry.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



<section class="feeddback-part position-r mb-150 overflow-h snipcss-EfUK1">
  <div class="feeddback-vacter wow fadeInLeft animation-delay-5 animated style-FZvzB" id="style-FZvzB">
    <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/leaf.png" alt="Vacter Image"/>
  </div>
  <div class="container">
    <div class="section-heading wow fadeInUp animated style-RBQTV" id="style-RBQTV">
      <h5 class="sub-title">
        Customer Feedback
      </h5>
      <h2>
        Client Testimonials
      </h2>
    </div>
    <div class="testimonials-slider owl-carousel wow fadeInUp owl-loaded owl-drag animated style-mprtZ" id="style-mprtZ">
      <div class="owl-stage-outer">
        <div class="owl-stage style-SlbMN" id="style-SlbMN">
          <div class="owl-item cloned style-vV6Y1" id="style-vV6Y1">
            <div class="testimonial-box">
              <div class="client-image">
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/client-1.jpg" alt="Johan Doe"/>
              </div>
              <div class="client-info">
                <div class="client-name">
                  Johan Doe
                </div>
                <div class="client-desc">
                  <p>
                    “Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”
                  </p>
                </div>
                <div class="testimonial-rating">
                  <ul>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="owl-item cloned style-2FgiQ" id="style-2FgiQ">
            <div class="testimonial-box">
              <div class="client-image">
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/client-2.jpg" alt="Alex Saanu"/>
              </div>
              <div class="client-info">
                <div class="client-name">
                  Alex Saanu
                </div>
                <div class="client-desc">
                  <p>
                    “Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”
                  </p>
                </div>
                <div class="testimonial-rating">
                  <ul>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="owl-item cloned style-a1a63" id="style-a1a63">
            <div class="testimonial-box">
              <div class="client-image">
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/client-3.jpg" alt="Jona Leoner"/>
              </div>
              <div class="client-info">
                <div class="client-name">
                  Jona Leoner
                </div>
                <div class="client-desc">
                  <p>
                    “Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”
                  </p>
                </div>
                <div class="testimonial-rating">
                  <ul>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="owl-item cloned style-iUZws" id="style-iUZws">
            <div class="testimonial-box">
              <div class="client-image">
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/client-4.jpg" alt="Takar Bowa"/>
              </div>
              <div class="client-info">
                <div class="client-name">
                  Takar Bowa
                </div>
                <div class="client-desc">
                  <p>
                    “Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”
                  </p>
                </div>
                <div class="testimonial-rating">
                  <ul>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="owl-item style-XyLpN" id="style-XyLpN">
            <div class="testimonial-box">
              <div class="client-image">
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/client-1.jpg" alt="Johan Doe"/>
              </div>
              <div class="client-info">
                <div class="client-name">
                  Johan Doe
                </div>
                <div class="client-desc">
                  <p>
                    “Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”
                  </p>
                </div>
                <div class="testimonial-rating">
                  <ul>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="owl-item style-q97wP" id="style-q97wP">
            <div class="testimonial-box">
              <div class="client-image">
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/client-2.jpg" alt="Alex Saanu"/>
              </div>
              <div class="client-info">
                <div class="client-name">
                  Alex Saanu
                </div>
                <div class="client-desc">
                  <p>
                    “Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”
                  </p>
                </div>
                <div class="testimonial-rating">
                  <ul>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="owl-item style-nWvze" id="style-nWvze">
            <div class="testimonial-box">
              <div class="client-image">
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/client-3.jpg" alt="Jona Leoner"/>
              </div>
              <div class="client-info">
                <div class="client-name">
                  Jona Leoner
                </div>
                <div class="client-desc">
                  <p>
                    “Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”
                  </p>
                </div>
                <div class="testimonial-rating">
                  <ul>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="owl-item style-EPPgk" id="style-EPPgk">
            <div class="testimonial-box">
              <div class="client-image">
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/client-4.jpg" alt="Takar Bowa"/>
              </div>
              <div class="client-info">
                <div class="client-name">
                  Takar Bowa
                </div>
                <div class="client-desc">
                  <p>
                    “Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”
                  </p>
                </div>
                <div class="testimonial-rating">
                  <ul>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="owl-item style-nIV6U" id="style-nIV6U">
            <div class="testimonial-box">
              <div class="client-image">
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/client-1.jpg" alt="Johan Doe"/>
              </div>
              <div class="client-info">
                <div class="client-name">
                  Johan Doe
                </div>
                <div class="client-desc">
                  <p>
                    “Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”
                  </p>
                </div>
                <div class="testimonial-rating">
                  <ul>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="owl-item style-xrmUq" id="style-xrmUq">
            <div class="testimonial-box">
              <div class="client-image">
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/client-2.jpg" alt="Alex Saanu"/>
              </div>
              <div class="client-info">
                <div class="client-name">
                  Alex Saanu
                </div>
                <div class="client-desc">
                  <p>
                    “Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”
                  </p>
                </div>
                <div class="testimonial-rating">
                  <ul>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="owl-item active style-BwQ1M" id="style-BwQ1M">
            <div class="testimonial-box">
              <div class="client-image">
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/client-3.jpg" alt="Jona Leoner"/>
              </div>
              <div class="client-info">
                <div class="client-name">
                  Jona Leoner
                </div>
                <div class="client-desc">
                  <p>
                    “Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”
                  </p>
                </div>
                <div class="testimonial-rating">
                  <ul>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="owl-item active style-MxZFp" id="style-MxZFp">
            <div class="testimonial-box">
              <div class="client-image">
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/client-4.jpg" alt="Takar Bowa"/>
              </div>
              <div class="client-info">
                <div class="client-name">
                  Takar Bowa
                </div>
                <div class="client-desc">
                  <p>
                    “Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”
                  </p>
                </div>
                <div class="testimonial-rating">
                  <ul>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="owl-item cloned active style-p1n5l" id="style-p1n5l">
            <div class="testimonial-box">
              <div class="client-image">
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/client-1.jpg" alt="Johan Doe"/>
              </div>
              <div class="client-info">
                <div class="client-name">
                  Johan Doe
                </div>
                <div class="client-desc">
                  <p>
                    “Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”
                  </p>
                </div>
                <div class="testimonial-rating">
                  <ul>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="owl-item cloned active style-WA1mE" id="style-WA1mE">
            <div class="testimonial-box">
              <div class="client-image">
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/client-2.jpg" alt="Alex Saanu"/>
              </div>
              <div class="client-info">
                <div class="client-name">
                  Alex Saanu
                </div>
                <div class="client-desc">
                  <p>
                    “Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”
                  </p>
                </div>
                <div class="testimonial-rating">
                  <ul>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="owl-item cloned style-MV17e" id="style-MV17e">
            <div class="testimonial-box">
              <div class="client-image">
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/client-3.jpg" alt="Jona Leoner"/>
              </div>
              <div class="client-info">
                <div class="client-name">
                  Jona Leoner
                </div>
                <div class="client-desc">
                  <p>
                    “Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”
                  </p>
                </div>
                <div class="testimonial-rating">
                  <ul>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="owl-item cloned style-CP1Cc" id="style-CP1Cc">
            <div class="testimonial-box">
              <div class="client-image">
                <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/client-4.jpg" alt="Takar Bowa"/>
              </div>
              <div class="client-info">
                <div class="client-name">
                  Takar Bowa
                </div>
                <div class="client-desc">
                  <p>
                    “Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”
                  </p>
                </div>
                <div class="testimonial-rating">
                  <ul>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                    <li>
                      <i class="fa fa-star" aria-hidden="true">
                      </i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
     
    </div>
  </div>
</section>
    

    


     


    </div>
  )
}

export default OurMenu