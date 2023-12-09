import React from 'react';
import './linked_cards.css'


import { Link } from "react-router-dom";
import slide_image_1 from './Assets/wardrobe/wardrobe2.png';
import slide_image_2 from './Assets/beds/bed1.png';
import slide_image_3 from './Assets/cabinets/cabinet3.jpg';
import slide_image_4 from './Assets/sofas/sofa4.jpg';
import slide_image_5 from './Assets/beds/bed2.jpg';
import slide_image_6 from './Assets/interior2.jpg';

import './linked_cards.css'


const linked_cards = () => {
  
  return (
    <div>

        <div class='containerr'>
            <div class='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_1} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> wadrobe </h5>
                    <p> Stylish and spacious wardrobes for sale </p>
                     <hr />
                     <button type="button" class="btn btn-primary d-block mx-auto ">
                     <Link to="/src/components/products.js">
                     View More
                     </Link>
                     </button>
                </div>
                </div>
                </div>

                
                <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_2} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> Bed </h5>
                    <p> The epitome of style and comfort </p>
                     <hr />
                     <button type="button" class="btn btn-primary d-block mx-auto">
                     <Link to="/src/components/products.js" id='Chairs'>
                     View More
                     </Link>
                     </button>
                </div>
                </div>
                </div>


                
                <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_3} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> Cabinet </h5>
                    <p> Great premium craftsmanship </p>
                     <hr />
                     <button type="button" class="btn btn-primary d-block mx-auto">
                     <Link to="/src/components/products.js">
                     View More
                     </Link>
                     </button>
                </div>
                </div>
                </div>


                
                <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_4} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> Sofa </h5>
                    <p> Introducing our chic sofa </p>
                     <hr />
                     <button type="button" class="btn btn-primary d-block mx-auto">
                     <Link to="/src/components/products.js">
                     View More
                     </Link>
                     </button>
                </div>
                </div>
                </div>

                

                <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_5} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> Matress </h5>
                    <p> A comfortable & luxurious feel. </p>
                     <hr />
                     <button type="button" class="btn btn-primary d-block mx-auto">
                     <Link to="/src/components/products.js">
                     View More
                     </Link>
                     </button>
                </div>
                </div>
                </div>



                <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_6} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> interior </h5>
                    <p> Functionality meets great design </p>
                     <hr />
                     <button type="button" class="btn btn-primary d-block mx-auto">
                     <Link to="/src/components/products.js">
                     View More
                     </Link>
                     </button>
                </div>
                </div>
                </div>

              
            </div>
        </div>
    </div>
  );
};

export default linked_cards;
