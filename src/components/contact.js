import React from 'react'
import Header from './header'
import Footer from './footer';
import Contform from './contform';
import Designs from './designs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPhone} from '@fortawesome/free-solid-svg-icons'

const contact = () => {
  return (
    <div>

      <Header />

      <Contform />

      <Designs />
       
      <div class='containerr'>
            <div class='row row-cols-1 row-cols-md-1 row-cols-lg-1'>

            <div class='col-12'>
                    <div class='card about'>
                <div class='card-body'>
                    <h5 class='card-title sk'> Sosak Woodworks </h5>
                    <h5 className=' location '> You Can Call us For More info !!! </h5>
                   <p className='symbol'><FontAwesomeIcon icon={faPhone} /></p> 
                    <h6 className='box'> 0557095259/059663189</h6>
                     <hr />
                     <h4> Call Us </h4>
                </div>
                </div>
                </div>

      </div>
      </div>

      <Footer />    

    </div>
  )
}

export default contact
