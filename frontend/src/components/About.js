import React, { useState, useEffect } from 'react'
import Dru from '../images/gitpp.jpg'

function About() {
  const currentYear = new Date().getFullYear();
  const startYear = 2021;
  const yearsOfExperience = currentYear - startYear;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);
  
  return (
    <div className="min-h-[50vh] flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8 py-8" id="about">
      {/* Text Content - Slides in from left */}
      <div className={`w-full lg:w-1/2 text-white flex flex-col gap-6 sm:gap-8 transition-all duration-1000 ease-out ${
        isVisible 
          ? 'transform translate-x-0 opacity-100' 
          : 'transform -translate-x-full opacity-0'
      }`}>
        <h2 className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>ABOUT ME</h2>
        
        <p className='text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed'>
          I'm passionate about building modern and scalable software solutions. I specialize in frontend and 
          backend development, crafting seamless user experiences, and optimizing performance. I enjoy solving 
          complex problems and continuously learning new technologies to enhance my skill set. 
        </p>
        
        <button className='w-fit px-6 py-3 bg-secondary text-white rounded-xl hover:bg-primary-light transition-colors duration-200 text-sm sm:text-base'>
          <a href="Drusilla.pdf" download="Drusilla_Khulwael_SoftwareDeveloper.pdf">Download my CV</a>
        </button>
        
        {/* Stats Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
          <div className='px-4 py-4 bg-secondary text-white rounded-xl text-center'>
            <h4 className='font-bold text-xs sm:text-sm mb-2'>Years of Experience</h4>
            <p className='text-2xl sm:text-3xl font-light'>{yearsOfExperience}+</p>
          </div>
          <div className='px-4 py-4 bg-secondary text-white rounded-xl text-center'>
            <h4 className='font-bold text-xs sm:text-sm mb-2'>Completed Projects</h4>
            <p className='text-2xl sm:text-3xl font-light'>{yearsOfExperience}+</p>
          </div>
          <div className='px-4 py-4 bg-secondary text-white rounded-xl text-center sm:col-span-1 lg:col-span-1'>
            <h4 className='font-bold text-xs sm:text-sm mb-2'>In Progress Projects</h4>
            <p className='text-2xl sm:text-3xl font-light'>{yearsOfExperience}+</p>
          </div>
        </div>
      </div>
      
      {/* Image - Slides in from right */}
      <div className={`w-full sm:w-3/4 md:w-1/2 lg:w-1/2 max-w-md lg:max-w-none transition-all duration-1000 ease-out ${
        isVisible 
          ? 'transform translate-x-0 opacity-100' 
          : 'transform translate-x-full opacity-0'
      }`}>
        <img
          src={Dru}
          alt='Drusilla | Software Developer'
          className='rounded-2xl w-full h-auto object-cover'
        />
      </div>
    </div>
  )
}

export default About