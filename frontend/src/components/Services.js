import React from 'react'
import TechStack from './TechStack'

function Services() {
  return (
    <div className="min-h-[50vh] flex flex-col lg:flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8 py-8" id="services">
      <h2 className='text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center'>
        SERVICES
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 w-full max-w-6xl'>
        {/* First Service Card */}
        <div className='px-4 py-4 bg-secondary text-white rounded-xl transition-all duration-300 hover:scale-105'>
          <h2 className='font-bold text-xs sm:text-sm mb-2'>Web Development</h2>
          <p className='text-sm sm:text-base leading-relaxed mb-4'>
            From responsive websites to dynamic web applications, I build powerful digital solutions using the 
            latest technologies. My web development service ensures fast load times, secure coding, and clean, maintainable
            architecture.
          </p>
          <button className='w-fit px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-light transition-colors duration-200 text-sm sm:text-base'>
            View my Projects
          </button>
        </div>
        
        {/* Middle Service Card - Lifted on large screens, shifted right on small screens */}
        <div className='px-4 py-4 bg-secondary text-white rounded-xl sm:col-span-1 lg:col-span-1 transition-all duration-300 hover:scale-105 ml-8 sm:ml-8 lg:ml-0 lg:-translate-y-4'>
          <h2 className='font-bold text-xs sm:text-sm mb-2'>App Development</h2>
          <p className='text-sm sm:text-base leading-relaxed mb-4'>
            I create user-friendly, high-performance mobile apps tailored for Android and iOS platforms. 
            My solutions are built to scale, offering seamless functionality, speed, and intuitive user experiences
            that keep the users engaged.
          </p>
          <button className='w-fit px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-light transition-colors duration-200 text-sm sm:text-base'>
            View my Projects
          </button>
        </div>
        
        {/* Third Service Card */}
        <div className='px-4 py-4 bg-secondary text-white rounded-xl transition-all duration-300 hover:scale-105'>
          <h2 className='font-bold text-xs sm:text-sm mb-2'>UI/UX Design</h2>
          <p className='text-sm sm:text-base leading-relaxed mb-4'>
            I design interfaces that are not only beautiful but also functional. My UI/UX expertise focuses on user
            behavior and accessibility to deliver designs that enhance user engagement and satisfaction across all devices.
          </p>
          <button className='w-fit px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-light transition-colors duration-200 text-sm sm:text-base'>
            View my Projects
          </button>
        </div>
      </div>
      <TechStack/>
    </div>
  )
}

export default Services