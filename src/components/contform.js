import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import './contform.css'

const contform = () => {
  return (
    <div>
      

    <section id="contact">
    <div className='getin'>
      <h4> Get In Touch </h4>
      <h2> Contact Us </h2>
      </div>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail />
            <h3> Email </h3>
            <h4> sosakwoodworks@gmail.com </h4>
            <a href="mailto: edemamet18@gmail.com"> Send a Message </a>
          </article>


          <article className='contact__option'>
            <RiMessengerLine />
            <h3> Messenger </h3>
            <h4> Sosak Woodworks </h4>
            <a href="https://m.me/edem.amet"> Send a Message </a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp />
            <h3> WhatsApp </h3>
            <h4> 0557095259 </h4>
            <a href="https://api.whatsapp.com/send?phone+233557095259"> Send a Message </a>
          </article>
        </div>

        
        {/* End of Contacts */}
        <form action="">
          <input type="text" name='name' placeholder="Your Full Name" required></input>
          <input type="email" name='email' placeholder="Your Email" required></input>
          <textarea name='message' rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary' > Send a Message </button>
        </form>
      </div>
    </section>
  










    </div>
  )
}

export default contform
