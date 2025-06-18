import React from 'react'
import ContactForm from './ContactForm'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Socials from './Socials'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Contacts() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8 py-8" id="contacts">
      <h2 className='text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center'>
         CONTACTS
      </h2>
      <div className='bg-secondary rounded-md grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full max-w-6xl'>
        <div className='flex flex-col items-center justify-center gap-2 sm:gap-4 lg:gap-8 px-4 sm:px-6 lg:px-8'>
          <p className='font-bold text-lg'>
            Not sure what you exactly need? I'm happy to listen to you and offer suggestions on ideas.
          </p>
          <p className=''>
            <FontAwesomeIcon className='text-white' icon= {faEnvelope}/>
            <a href='mailto:drusillakhulwael@gmail.com' className='px-2 hover:text-primary'>drusillakhulwael@gmail.com</a>
          </p>
          <p  className='px-0'>
            <FontAwesomeIcon className='text-white' icon= {faPhone}/>
            <a href='tel:+254701780172' className='px-2 hover:text-primary'>+254701780172</a>
          </p>
          <p  className=''>
            <FontAwesomeIcon className='text-white' icon= {faPhone}/>
            <a href='tel:+254739224458' className='px-2 hover:text-primary'>+254739224458</a>
          </p>
          <Socials/>
        </div>
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contacts