import React from 'react'
import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './header'
import Designs from './designs';
import Footer from './footer';
import slide_image_1 from './Assets/wardrobes.jpg';


import { faLocation} from '@fortawesome/free-solid-svg-icons'
import { faHouse} from '@fortawesome/free-solid-svg-icons'



const About = () => {
  return (
    <div>
      <Header />
      <Designs  />


      <div className='containerr'>
  <div className='row row-cols-1 row-cols-md-1 row-cols-lg-1'>
    <div className='col-12'>
      <div className='card about'>
        <div className='d-flex justify-content-center'>
          <img className='image img-fluid' src={slide_image_1} alt="#" />
        </div>
        <div className='card-body'>
          <h5 className='card-title sk'> Who Are We ? </h5>
          <h5 className='description'>Introducing our exquisite Furnitures –
            a perfect blend of style, functionality, and craftsmanship that will elevate the aesthetic
            of any space. Our Furnitures are meticulously designed
            to cater to your storage needs while adding a touch of sophistication to your room.
          </h5>
          <p className='symbol'><FontAwesomeIcon icon={faHouse} /></p>
          <h6 className='box'> We Are Sosak !!! </h6>
          <hr />
          <h4> Home For Your Quality Furnitures  </h4>
        </div>
      </div>
    </div>
  


            <div class='col-12'>
                    <div class='card about'>
                <div class='card-body'>
                    <h5 class='card-title sk'> Sosak Woodworks </h5>
                    <h5 className=' location '> We Are Located Along The Adenta - Dodoowa Road </h5>
                   <p className='symbol'><FontAwesomeIcon icon={faLocation} /></p> 
                    <h6 className='box'> P.O BOX SK-4523</h6>
                     <hr />
                     <h4> Location </h4>
                </div>
                </div>
                </div>

             </div> 
      </div>  

  



      <Footer />
    </div>
  )
}

export default About
