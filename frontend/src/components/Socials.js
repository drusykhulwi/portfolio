import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faLinkedin, faGithub, faFigma } from "@fortawesome/free-brands-svg-icons";


const socials = [
    {href: "mailto:drusillakhulwael@gmail.com", icon: faEnvelope},
    {href: "tel:+254701780172", icon: faPhone  },
    {href: "https://www.linkedin.com/in/drusillakhulwael/", icon: faLinkedin},
    {href: "https://github.com/drusykhulwi", icon: faGithub},
    {href: "https://www.figma.com/@drusykhulwi", icon: faFigma},
]

function Socials() {
    const [animatedItems, setAnimatedItems] = useState([]);
    
    useEffect(() => {
    // Trigger each icon animation with staggered delays
    socials.forEach((_, index) => {
        setTimeout(() => {
        setAnimatedItems(prev => [...prev, index]);
        }, index * 300); // 300ms delay between each icon
    });
    }, []);

  return (
    <div className="text-white  flex items-center justify-center gap-8">
        {socials.map((item, index) =>(
            <a 
                key={index}
                href={item.href} 
                className={`transition-all duration-700 ease-out ${
                    animatedItems.includes(index)
                    ? 'transform translate-x-0 opacity-100 animate-bounce-settle'
                    : 'transform -translate-x-full opacity-0'
                }`}
                >
                    <FontAwesomeIcon icon={item.icon}/>
            </a>
        ))}
    </div>
  )
}

export default Socials