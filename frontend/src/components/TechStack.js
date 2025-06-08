import React, { useState, useEffect } from 'react'

const skills = [
    {alt: 'HTML', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBd2rMcfI56SZEenhvautbZl_xUsPSHaktNw&s'},
    {alt: 'CSS', src: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png'},
    {alt: 'JavaScript', src: 'https://img.icons8.com/color/512/javascript.png'},
]

function TechStack() {
  const [animatedItems, setAnimatedItems] = useState([]);

  useEffect(() => {
    // Trigger each icon animation with staggered delays
    skills.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedItems(prev => [...prev, index]);
      }, index * 300); // 300ms delay between each icon
    });
  }, []);

  return (
    <div className='flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 lg:gap-8 p-4'>
      {skills.map((item, index) => (
        <div
          key={index}
          className={`transition-all duration-700 ease-out ${
            animatedItems.includes(index)
              ? 'transform translate-x-0 opacity-100 animate-bounce-settle'
              : 'transform -translate-x-full opacity-0'
          }`}
          style={{
            animationDelay: `${index * 0.3}s`,
          }}
        >
          <img
            src={item.src}
            alt={item.alt}
            className='w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-lg shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer'
          />
        </div>
      ))}
      
      <style jsx>{`
        @keyframes bounce-settle {
          0% {
            transform: translateX(-100%) scale(0.3);
            opacity: 0;
          }
          50% {
            transform: translateX(10%) scale(1.1);
            opacity: 0.8;
          }
          70% {
            transform: translateX(-5%) scale(0.95);
            opacity: 0.9;
          }
          85% {
            transform: translateX(2%) scale(1.02);
            opacity: 1;
          }
          100% {
            transform: translateX(0%) scale(1);
            opacity: 1;
          }
        }
        
        .animate-bounce-settle {
          animation: bounce-settle 0.8s ease-out forwards;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-bounce-settle:hover {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default TechStack