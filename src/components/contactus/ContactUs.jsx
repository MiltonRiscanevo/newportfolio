import React from 'react'
import Whatsapp from '../imagenes/whatsapp.jpg'
import Linkedin from '../imagenes/linkein.jpg'
import Gmail from '../imagenes/gmail.jpg'
import Facebook from '../imagenes/facebook.jpg'
import "./contactUs.css"

const ContactUs = () => {
  return (
    <div className='contact_container' id='sec3'>
        <div className='contact_contain'>
            <a href="https://www.facebook.com/inocencio1986" target="_blank" rel='noreferrer'>
                <img className='img_contact' src={Facebook} alt="facebook" />
            </a>
            facebook
        </div>
        <div className='contact_contain'>
            <img className='img_contact' src={Gmail} alt="gmail" />
            Gmail
        </div>
        <div className='contact_contain'>
            <img className='img_contact' src={Whatsapp} alt="whatsapp" />
            Whatsapp
        </div>
        <div className='contact_contain'>
            <a href="https://www.linkedin.com/in/milton-cesar-riscanevo-027a53147/" rel='noreferrer' target="_blank">
                <img className='img_contact' src={Linkedin} alt="linkedin" />
            </a>
            Linkedin
        </div>

    </div>
  )
}

export default ContactUs