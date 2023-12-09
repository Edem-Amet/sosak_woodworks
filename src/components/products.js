import React from 'react'
import './products.css'
import slide_image_2 from './Assets/cabinets/cabinet1.jpg';
import slide_image_3 from './Assets/cabinets/cabinet2.jpg';
import slide_image_4 from './Assets/cabinets/cabinet3.jpg';
import slide_image_5 from './Assets/cabinets/cabinet4.jpg';
import slide_image_6 from './Assets/cabinets/cabinet5.jpg';
import slide_image_7 from './Assets/cabinets/cabinet6.jpg';
import slide_image_8 from './Assets/sofas/sofa1.jpg';
import slide_image_9 from './Assets/sofas/sofa2.jpg';
import slide_image_10 from './Assets/sofas/sofa3.jpg';
import slide_image_11 from './Assets/sofas/sofa4.jpg';
import slide_image_12 from './Assets/beds/bed1.png';
import slide_image_13 from './Assets/beds/bed2.jpg';
import slide_image_14 from './Assets/beds/bed3.jpg';
import slide_image_15 from './Assets/beds/bed4.jpg';
import slide_image_16 from './Assets/beds/bed5.jpg';
import slide_image_17 from './Assets/beds/bed6.webp';
import slide_image_18 from './Assets/sofas/sofa6.webp';
import slide_image_19 from './Assets/sofas/sofa7.webp';
import slide_image_20 from './Assets/wardrobe/wardrobe2.png';
import slide_image_21 from './Assets/wardrobe/wardrobe1.jpg';
import slide_image_22 from './Assets/wardrobe/wardrobe3.webp';
import slide_image_23 from './Assets/wardrobe/wardrobe4.jpg';
import slide_image_24 from './Assets/wardrobe/wardrobe5.jpg';
import slide_image_25 from './Assets/wardrobe/wardrobe6.png';

import Header from './header'
import Footer from './footer';
import Popup from './popup';
import Designs from './designs';

const products = () => {
  return (
    <div>

      <Header />

    <div className='wardrobes'>
      <div className='products_head'>
        <h2> Products </h2>
      </div>

      <div className='item_head'>
        <h4>Wardrobe</h4>
      </div>


      <div class='containerr'>
            <div class='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_20} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> wadrobe </h5>
                    <p> Stylish and spacious wardrobes for sale </p>
                     <hr />
                     < Popup />
                     
                     <button
                      type="button"
                      className="pop_button btn-lg btn btn-primary d-block mx-auto"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      title="Brown wardrobe"
                      data-bs-content="Introducing our stylish wardrobe – a perfect fusion of form and function. 
                      This modern marvel combines sleek design with premium materials for a sophisticated touch.
                       With ample storage space and customizable features, it's the ideal solution for keeping 
                       your space organized and chic. Elevate your room with our wardrobe – where fashion meets 
                       functionality."
                     >
                       Details
                     </button>

                </div>
                </div>
                </div>

                
                <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_21} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> wadrobe </h5>
                    <p> Stylish and spacious wardrobes for sale </p>
                     <hr />
                     < Popup />
                     
                     <button
                      type="button"
                      className="pop_button btn-lg btn btn-primary d-block mx-auto"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      title="Brown wardrobe"
                      data-bs-content="Introducing our stylish wardrobe – a perfect fusion of form and function. 
                      This modern marvel combines sleek design with premium materials for a sophisticated touch.
                       With ample storage space and customizable features, it's the ideal solution for keeping 
                       your space organized and chic. Elevate your room with our wardrobe – where fashion meets 
                       functionality."
                     >
                       Details
                     </button>

                </div>
                </div>
                </div>

                
                <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_22} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> wadrobe </h5>
                    <p> Stylish and spacious wardrobes for sale </p>
                     <hr />
                     < Popup />
                      
                     <button
                      type="button"
                      className="pop_button btn-lg btn btn-primary d-block mx-auto"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      title="Brown wardrobe"
                      data-bs-content="Introducing our stylish wardrobe – a perfect fusion of form and function. 
                      This modern marvel combines sleek design with premium materials for a sophisticated touch.
                       With ample storage space and customizable features, it's the ideal solution for keeping 
                       your space organized and chic. Elevate your room with our wardrobe – where fashion meets 
                       functionality."
                     >
                       Details
                     </button>

                </div>
                </div>
                </div>


                <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_23} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> wadrobe </h5>
                    <p> Stylish and spacious wardrobes for sale </p>
                     <hr />
                     < Popup />
                    
                     <button
                      type="button"
                      className="pop_button btn-lg btn btn-primary d-block mx-auto"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      title="Brown wardrobe"
                      data-bs-content="Introducing our exquisite wardrobe – 
                      a perfect blend of style, functionality, and craftsmanship
                       that will elevate the aesthetic of any space. This wardrobe is
                        meticulously designed to cater to your storage needs while 
                        adding a touch of sophistication to your room."
                     >
                       Details
                     </button>

                </div>
                </div>
                </div>


                <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_24} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> wadrobe </h5>
                    <p> Stylish and spacious wardrobes for sale </p>
                     <hr />
                     < Popup />
                     
                     <button
                      type="button"
                      className="pop_button btn-lg btn btn-primary d-block mx-auto"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      title="Brown wardrobe"
                      data-bs-content="Introducing our stylish wardrobe – a perfect fusion of form and function. 
                      This modern marvel combines sleek design with premium materials for a sophisticated touch.
                       With ample storage space and customizable features, it's the ideal solution for keeping 
                       your space organized and chic. Elevate your room with our wardrobe – where fashion meets 
                       functionality."
                     >
                       Details
                     </button>

                </div>
                </div>
                </div>


                <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_25} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> wadrobe </h5>
                    <p> Stylish and spacious wardrobes for sale </p>
                     <hr />
                     < Popup />
                       
                     <button
                      type="button"
                      className="pop_button btn-lg btn btn-primary d-block mx-auto"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      title="Brown wardrobe"
                      data-bs-content="Introducing our stylish wardrobe – a perfect fusion of form and function. 
                      This modern marvel combines sleek design with premium materials for a sophisticated touch.
                       With ample storage space and customizable features, it's the ideal solution for keeping 
                       your space organized and chic. Elevate your room with our wardrobe – where fashion meets 
                       functionality."
                     >
                       Details
                     </button>

                </div>
                </div>
                </div>   
            </div>
        </div>
    </div>

    




     <Designs/ >

    <div className='Sofas' id='Sofas'>
      <div className='item_head'>
        <h4>Sofas</h4>
      </div>

      <div class='containerr'>
            <div class='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_18} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> Sofa </h5>
                    <p> Stylish and spacious wardrobes for sale </p>
                     <hr />
                     < Popup />
                     
                     <button
                      type="button"
                      className="pop_button btn-lg btn btn-primary d-block mx-auto"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      title="Grey Sofa"
                      data-bs-content="Introducing our chic sofa – where comfort meets contemporary design.
                       This stylish centerpiece seamlessly blends form and function, featuring a sleek
                        silhouette and plush upholstery. Crafted with high-quality materials, 
                        it offers both durability and relaxation. Elevate your living space with our
                         modern sofa – the perfect combination of style and comfort."
                     >
                       Details
                     </button>

                </div>
                </div>
                </div>

                
                <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_9} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> Sofa </h5>
                    <p> Stylish and spacious wardrobes for sale </p>
                     <hr />
                     < Popup />
                     
                     <button
                      type="button"
                      className="pop_button btn-lg btn btn-primary d-block mx-auto"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      title="light-Brown Sofa"
                      data-bs-content="Introducing our chic sofa – where comfort meets contemporary design.
                       This stylish centerpiece seamlessly blends form and function, featuring a sleek
                        silhouette and plush upholstery. Crafted with high-quality materials, 
                        it offers both durability and relaxation. Elevate your living space with our
                         modern sofa – the perfect combination of style and comfort."
                     >
                       Details
                     </button>

                </div>
                </div>
                </div>

                

                <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_8} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> Sofa </h5>
                    <p> Stylish and spacious wardrobes for sale </p>
                     <hr />
                     < Popup />
                     
              
                     <button
                      type="button"
                      className="pop_button btn-lg btn btn-primary d-block mx-auto"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      title="Green Sofa"
                      data-bs-content="Introducing our chic sofa – where comfort meets contemporary design.
                       This stylish centerpiece seamlessly blends form and function, featuring a sleek
                        silhouette and plush upholstery. Crafted with high-quality materials, 
                        it offers both durability and relaxation. Elevate your living space with our
                         modern sofa – the perfect combination of style and comfort."
                     >
                       Details
                     </button>

                </div>
                </div>
                </div>


                <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_11} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> Sofa </h5>
                    <p> Stylish and spacious wardrobes for sale </p>
                     <hr />
                     < Popup />
                        
                     <button
                      type="button"
                      className="pop_button btn-lg btn btn-primary d-block mx-auto"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      title="White Sofa"
                      data-bs-content="Introducing our chic sofa – where comfort meets contemporary design.
                       This stylish centerpiece seamlessly blends form and function, featuring a sleek
                        silhouette and plush upholstery. Crafted with high-quality materials, 
                        it offers both durability and relaxation. Elevate your living space with our
                         modern sofa – the perfect combination of style and comfort."
                     >
                       Details
                     </button>

                </div>
                </div>
                </div>


                <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_19} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> Sofa </h5>
                    <p> Stylish and spacious wardrobes for sale </p>
                     <hr />
                     < Popup />
                       
                     <button
                      type="button"
                      className="pop_button btn-lg btn btn-primary d-block mx-auto"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      title="Orange Sofa"
                      data-bs-content="Introducing our chic sofa – where comfort meets contemporary design.
                       This stylish centerpiece seamlessly blends form and function, featuring a sleek
                        silhouette and plush upholstery. Crafted with high-quality materials, 
                        it offers both durability and relaxation. Elevate your living space with our
                         modern sofa – the perfect combination of style and comfort."
                     >
                       Details
                     </button>

                </div>
                </div>
                </div>


                <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_10} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> Sofa </h5>
                    <p> Stylish and spacious wardrobes for sale </p>
                     <hr />
                     < Popup />
                        
                     <button
                      type="button"
                      className="pop_button btn-lg btn btn-primary d-block mx-auto"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      title="Orange Sofa"
                      data-bs-content="Introducing our chic sofa – where comfort meets contemporary design.
                       This stylish centerpiece seamlessly blends form and function, featuring a sleek
                        silhouette and plush upholstery. Crafted with high-quality materials, 
                        it offers both durability and relaxation. Elevate your living space with our
                         modern sofa – the perfect combination of style and comfort."
                     >
                       Details
                     </button>

                </div>
                </div>
                </div>   
            </div>
        </div>
    </div>





    <Designs/ >
    
    <div className='Beds' id='Beds'>
      <div className='item_head'>
        <h4>Beds</h4>
      </div>

      <div class='containerr'>
            <div class='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_12} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> Bed </h5>
                    <p> Stylish and spacious wardrobes for sale </p>
                     <hr />
                     < Popup />
                     
                     <button
                      type="button"
                      className="pop_button btn-lg btn btn-primary d-block mx-auto"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      title=" Wooden Bed"
                      data-bs-content="Introducing our elegant bed – the epitome of style and comfort. 
                      This tastefully designed centerpiece effortlessly merges modern aesthetics with 
                      cozy functionality. Crafted from premium materials, the bed ensures durability
                       and a luxurious feel. With its timeless design and thoughtful details, it 
                       transforms your bedroom into a haven of relaxation. Elevate your sleeping 
                       experience with our sophisticated bed – where fashion seamlessly meets tranquility."
                     >
                       Details
                     </button>

                </div>
                </div>
                </div>

                
                <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_13} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> Bed </h5>
                    <p> Stylish and spacious wardrobes for sale </p>
                     <hr />
                     < Popup />
                      
                     <button
                      type="button"
                      className="pop_button btn-lg btn btn-primary d-block mx-auto"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      title=" Grey Bed"
                      data-bs-content="Introducing our elegant bed – the epitome of style and comfort. 
                      This tastefully designed centerpiece effortlessly merges modern aesthetics with 
                      cozy functionality. Crafted from premium materials, the bed ensures durability
                       and a luxurious feel. With its timeless design and thoughtful details, it 
                       transforms your bedroom into a haven of relaxation. Elevate your sleeping 
                       experience with our sophisticated bed – where fashion seamlessly meets tranquility."
                     >
                       Details
                     </button>

                </div>
                </div>
                </div>

                
                <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_14} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> Bed </h5>
                    <p> Stylish and spacious wardrobes for sale </p>
                     <hr />
                     < Popup />
                   
                     <button
                      type="button"
                      className="pop_button btn-lg btn btn-primary d-block mx-auto"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      title=" Brown Bed"
                      data-bs-content="Introducing our elegant bed – the epitome of style and comfort. 
                      This tastefully designed centerpiece effortlessly merges modern aesthetics with 
                      cozy functionality. Crafted from premium materials, the bed ensures durability
                       and a luxurious feel. With its timeless design and thoughtful details, it 
                       transforms your bedroom into a haven of relaxation. Elevate your sleeping 
                       experience with our sophisticated bed – where fashion seamlessly meets tranquility."
                     >
                       Details
                     </button>
                </div>
                </div>
                </div>


                <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_15} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> Bed </h5>
                    <p> Stylish and spacious wardrobes for sale </p>
                     <hr />
                     < Popup />
                      
                     <button
                      type="button"
                      className="pop_button btn-lg btn btn-primary d-block mx-auto"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      title=" Wheat-style Bed"
                      data-bs-content="Introducing our elegant bed – the epitome of style and comfort. 
                      This tastefully designed centerpiece effortlessly merges modern aesthetics with 
                      cozy functionality. Crafted from premium materials, the bed ensures durability
                       and a luxurious feel. With its timeless design and thoughtful details, it 
                       transforms your bedroom into a haven of relaxation. Elevate your sleeping 
                       experience with our sophisticated bed – where fashion seamlessly meets tranquility."
                     >
                       Details
                     </button>

                </div>
                </div>
                </div>


                <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_16} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> Bed </h5>
                    <p> Stylish and spacious wardrobes for sale </p>
                     <hr />
                     < Popup />
                      
                     <button
                      type="button"
                      className="pop_button btn-lg btn btn-primary d-block mx-auto"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      title=" White Bed"
                      data-bs-content="Introducing our elegant bed – the epitome of style and comfort. 
                      This tastefully designed centerpiece effortlessly merges modern aesthetics with 
                      cozy functionality. Crafted from premium materials, the bed ensures durability
                       and a luxurious feel. With its timeless design and thoughtful details, it 
                       transforms your bedroom into a haven of relaxation. Elevate your sleeping 
                       experience with our sophisticated bed – where fashion seamlessly meets tranquility."
                     >
                       Details
                     </button>
                </div>
                </div>
                </div>


                <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_17} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> Bed </h5>
                    <p> Stylish and spacious wardrobes for sale </p>
                     <hr />
                     < Popup />
                      
                     <button
                      type="button"
                      className="pop_button btn-lg btn btn-primary d-block mx-auto"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      title=" Cotton Bed"
                      data-bs-content="Introducing our elegant bed – the epitome of style and comfort. 
                      This tastefully designed centerpiece effortlessly merges modern aesthetics with 
                      cozy functionality. Crafted from premium materials, the bed ensures durability
                       and a luxurious feel. With its timeless design and thoughtful details, it 
                       transforms your bedroom into a haven of relaxation. Elevate your sleeping 
                       experience with our sophisticated bed – where fashion seamlessly meets tranquility."
                     >
                       Details
                     </button>

                </div>
                </div>   
                </div>
       </div>
    </div>
</div>




    <Designs/ >
    
    <div className='Cabinets' id='Cabinets'>
      <div className='item_head'>
        <h4>Cabinets</h4>
      </div>

      <div class='containerr'>
            <div class='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_2} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> Cabinet </h5>
                    <p> Stylish and spacious wardrobes for sale </p>
                     <hr />
                       < Popup />
                       
                     <button
                      type="button"
                      className="pop_button btn-lg btn btn-primary d-block mx-auto"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      title="Orange Cabinet"
                      data-bs-content="a seamless blend of style and practicality. These
                       exquisite storage solutions effortlessly combine sleek aesthetics
                        with premium craftsmanship. Crafted from top-notch materials, our
                         cabinets ensure durability and a touch of refinement. With versatile
                          storage options and customizable features, these cabinets are the
                           epitome of organizational elegance. Upgrade your space with 
                           our contemporary cabinets – where functionality meets fine design."
                     >
                       Details
                     </button>

                </div>
                </div>
                </div>

                
                <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_3} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> Cabinet </h5>
                    <p> Stylish and spacious wardrobes for sale </p>
                     <hr />
                     < Popup />
                      
                     <button
                      type="button"
                      className="pop_button btn-lg btn btn-primary d-block mx-auto"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      title="Cream Cabinet"
                      data-bs-content="a seamless blend of style and practicality. These
                       exquisite storage solutions effortlessly combine sleek aesthetics
                        with premium craftsmanship. Crafted from top-notch materials, our
                         cabinets ensure durability and a touch of refinement. With versatile
                          storage options and customizable features, these cabinets are the
                           epitome of organizational elegance. Upgrade your space with 
                           our contemporary cabinets – where functionality meets fine design."
                     >
                       Details
                     </button>

                </div>
                </div>
                </div>

                
                <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_4} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> Cabinet </h5>
                    <p> Stylish and spacious wardrobes for sale </p>
                     <hr />
                     < Popup />
                        
                     <button
                      type="button"
                      className="pop_button btn-lg btn btn-primary d-block mx-auto"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      title="Deep Brown Cabinet"
                      data-bs-content="a seamless blend of style and practicality. These
                       exquisite storage solutions effortlessly combine sleek aesthetics
                        with premium craftsmanship. Crafted from top-notch materials, our
                         cabinets ensure durability and a touch of refinement. With versatile
                          storage options and customizable features, these cabinets are the
                           epitome of organizational elegance. Upgrade your space with 
                           our contemporary cabinets – where functionality meets fine design."
                     >
                       Details
                     </button>

                </div>
                </div>
                </div>


                <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_5} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> Cabinet </h5>
                    <p> Stylish and spacious wardrobes for sale </p>
                     <hr />
                     < Popup />
   
                     <button
                      type="button"
                      className="pop_button btn-lg btn btn-primary d-block mx-auto"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      title="Grey Cabinet"
                      data-bs-content="a seamless blend of style and practicality. These
                       exquisite storage solutions effortlessly combine sleek aesthetics
                        with premium craftsmanship. Crafted from top-notch materials, our
                         cabinets ensure durability and a touch of refinement. With versatile
                          storage options and customizable features, these cabinets are the
                           epitome of organizational elegance. Upgrade your space with 
                           our contemporary cabinets – where functionality meets fine design."
                     >
                       Details
                     </button>

                </div>
                </div>
                </div>


                <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_6} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> Cabinet </h5>
                    <p> Stylish and spacious wardrobes for sale </p>
                     <hr />
                     < Popup />
                        
                     <button
                      type="button"
                      className="pop_button btn-lg btn btn-primary d-block mx-auto"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      title="Milky Cabinet"
                      data-bs-content="a seamless blend of style and practicality. These
                       exquisite storage solutions effortlessly combine sleek aesthetics
                        with premium craftsmanship. Crafted from top-notch materials, our
                         cabinets ensure durability and a touch of refinement. With versatile
                          storage options and customizable features, these cabinets are the
                           epitome of organizational elegance. Upgrade your space with 
                           our contemporary cabinets – where functionality meets fine design."
                     >
                       Details
                     </button>

                </div>
                </div>
                </div>


                <div class='col-6'>
                    <div class='card'>
                <img src={slide_image_7} alt="#" />
                <div class='card-body'>
                    <h5 class='card-title'> Cabinet </h5>
                    <p> Stylish and spacious wardrobes for sale </p>
                     <hr />
                     < Popup />
                        
                     <button
                      type="button"
                      className="pop_button btn-lg btn btn-primary d-block mx-auto"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      title="Ash Cabinet"
                      data-bs-content="a seamless blend of style and practicality. These
                       exquisite storage solutions effortlessly combine sleek aesthetics
                        with premium craftsmanship. Crafted from top-notch materials, our
                         cabinets ensure durability and a touch of refinement. With versatile
                          storage options and customizable features, these cabinets are the
                           epitome of organizational elegance. Upgrade your space with 
                           our contemporary cabinets – where functionality meets fine design."
                     >
                       Details
                     </button>
                </div>
                </div>
                </div>   
            </div>
        </div>
    </div>
    

    <Footer />


    </div>




  )
}

export default products
