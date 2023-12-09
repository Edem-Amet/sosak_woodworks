import React from 'react'
import Header from './header'
import Footer from './footer';
import Swipe from './swipe';
import LinkedCards from './linked_cards';
import Contform from './contform'
import Designs from './designs'


const home = () => {
  return (
    <div>
        <Header />
        <Swipe />
        <Designs />
        <LinkedCards />
        <Contform />
        <Footer />
      
    </div>
  )
}

export default home
