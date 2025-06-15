import React from 'react'
import ContactForm from './ContactForm'
import Socials from './Socials'

function Contacts() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8 py-8" id="contacts">
      <h2 className='text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center'>
         CONTACTS
      </h2>
      <div className='bg-secondary rounded-md grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full max-w-6xl'>
        <div className=''>
          <p>
            Email: <br/>
            <a href='mailto:drusillakhulwael@gmail.com' className='hover:text-primary'>drusillakhulwael@gmail.com</a>
          </p>
          <p>
            Phone Number: <br/>
            <a href='tel:+254701780172'>+254701780172</a>
            <a href='tel:+254739224458'>+254739224458</a>
          </p>
          <Socials/>
        </div>
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contacts