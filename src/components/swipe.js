import React from 'react';
import './swipe.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed} from '@fortawesome/free-solid-svg-icons'
import { faCouch} from '@fortawesome/free-solid-svg-icons'
import { faTable} from '@fortawesome/free-solid-svg-icons'
import { faWallet} from '@fortawesome/free-solid-svg-icons'



// Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { EffectCoverflow } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/swiper-bundle.css'; // Import the bundled version of Swiper CSS
import 'swiper/css/pagination';


import slide_image_1 from './Assets/interior.jpg';
import slide_image_2 from './Assets/bedimage.jpg';
import slide_image_3 from './Assets/wardrobes.jpg';
import slide_image_4 from './Assets/beds/bed1.png';
import slide_image_5 from './Assets/sofars.jpg';
import slide_image_6 from './Assets/k. cabinet.jpeg';
import slide_image_7 from './Assets/sofar.jpg';



const swipe
 = () => {
  return (

    <><div>

      </div><div className="container">
        <div className='down'>
    
                <li className="nav-item mx-2">
                  <Link to="/src/components/products.js" className="nav-link below"><FontAwesomeIcon icon={faWallet} /> Wardrobe </Link>
                </li>

                <li className="nav-item mx-2">
                  <Link to="/src/components/products.js" className="nav-link below"><FontAwesomeIcon icon={faBed} /> Bed </Link>
                </li>

                <li className="nav-item mx-2">
                  <Link to="/src/components/products.js" className="nav-link below"><FontAwesomeIcon icon={faTable} /> Cabinets  </Link>
                </li>

                <li className="nav-item mx-2">
                  <Link to="/src/components/products.js" className="nav-link below"><FontAwesomeIcon icon={faCouch} /> Sofas </Link>
                </li>

                </div>


              <h1 className="heading"> Collection Of Our Products </h1>
              <Swiper
                  effect={'coverflow'}
                  grabCursor={true}
                  centeredSlides={true}
                  loop={true}
                  slidesPerView={'auto'}
                  coverflowEffect={{
                      rotate: 0,
                      stretch: 0,
                      depth: 100,
                      modifier: 2.5,
                  }}
                  pagination={{ el: '.swiper-pagination', clickable: true }}
                  navigation={{
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                      clickable: true,
                  }}
                  modules={[EffectCoverflow, Pagination, Navigation]}
                  className="swiper_container"
              >
                  <SwiperSlide>
                      <img src={slide_image_1} alt="#" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={slide_image_2} alt="#" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={slide_image_3} alt="#" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={slide_image_4} alt="#" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={slide_image_5} alt="slide_image" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={slide_image_6} alt="slide_image" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={slide_image_7} alt="slide_image" />
                  </SwiperSlide>

                  <div className="slider-controler">
                      <div className="swiper-button-prev slider-arrow">
                          <ion-icon name="arrow-back-outline"></ion-icon>
                      </div>
                      <div className="swiper-button-next slider-arrow">
                          <ion-icon name="arrow-forward-outline"></ion-icon>
                      </div>
                      <div className="swiper-pagination"></div>
                  </div>
              </Swiper>

          </div></>
  );
}

export default swipe;