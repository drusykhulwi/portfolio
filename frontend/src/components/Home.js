import React, { useState, useEffect } from 'react'

const likes = ['Coca-Cola', 'Coffee', 'Baby-Pink', 'teddy-bears'];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % likes.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8" id="home">
      <div className="relative w-full max-w-4xl">
        <h1 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-tight'>
          Hello! Welcome to Drusilla's world! <br/> I love <span className='text-secondary'>{likes[currentIndex]}</span>
        </h1>
        
        {/* Animated curved line */}
        <svg 
          className="absolute top-0 left-0 w-full h-full pointer-events-none" 
          viewBox="0 0 900 160"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M 500 100 Q 600 30 850 100"
            stroke="#FFB7CE"
            strokeWidth="4"
            fill="none"
            style={{
              strokeDasharray: '350',
              strokeDashoffset: '350',
              animation: 'draw 3s ease-in-out infinite'
            }}
          />
        </svg>
      </div>
      
      <div className='flex sm:flex-row justify-center items-center gap-4 w-full max-w-md'>
        <button className='w-auto sm:w-auto px-4 py-2 bg-secondary text-white rounded-xl hover:bg-primary-light transition-colors duration-200 text-sm sm:text-base'>
          View my Projects
        </button>
        <button className='w-auto sm:w-auto px-4 py-2 bg-secondary text-white rounded-xl hover:bg-primary-light transition-colors duration-200 text-sm sm:text-base'>
          Work With me
        </button>
      </div>

      <style jsx>{`
        @keyframes draw {
          0% {
            stroke-dashoffset: 350;
          }
          50% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -350;
          }
        }
      `}</style>
    </div>
  )
}

export default Home