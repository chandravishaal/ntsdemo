import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css';

function Team() {
  const [activeCard, setActiveCard] = useState(0);

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  const cards = [
    {
      name: 'Aditya Panda',
      title: 'Web Developer',
      image: '4th_section.png',
      social: [
        { icon: <i className="ri-linkedin-fill"></i>, link: '#' },
        { icon: <i className="ri-twitter-fill"></i>, link: '#' },
        { icon: <i className="ri-facebook-fill"></i>, link: '#' },
      ],
    },
    {
      name: 'Aditya Panda',
      title: 'Web Developer',
      image: '4th_section.png',
      social: [
        { icon: <i className="ri-linkedin-fill"></i>, link: '#' },
        { icon: <i className="ri-twitter-fill"></i>, link: '#' },
        { icon: <i className="ri-facebook-fill"></i>, link: '#' },
      ],
    },
    {
      name: 'Aditya Panda',
      title: 'Web Developer',
      image: '4th_section.png',
      social: [
        { icon: <i className="ri-linkedin-fill"></i>, link: '#' },
        { icon: <i className="ri-twitter-fill"></i>, link: '#' },
        { icon: <i className="ri-facebook-fill"></i>, link: '#' },
      ],
    },
    {
      name: 'Aditya Panda',
      title: 'Web Developer',
      image: '3rd_section.png',
      social: [
        { icon: <i className="ri-linkedin-fill"></i>, link: '#' },
        { icon: <i className="ri-twitter-fill"></i>, link: '#' },
        { icon: <i className="ri-facebook-fill"></i>, link: '#' },
      ],
    },
    // Add more card objects here if needed
  ];

  return (
    // <div className="relative flex flex-col justify-center items-center mt-32 md:mt-96 min-h-screen bg-cyan-200">
    //   <div id="scroll-text" className="absolute -top-24 md:-top-48 w-full overflow-hidden whitespace-nowrap z-10">
      <div className="flex flex-col items-center mb-36 md:mt-32 w-full max-w-7xl">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center w-64 h-80 md:w-72 md:h-96 bg-white rounded-lg shadow-lg transition-transform duration-200 cursor-pointer overflow-hidden ${
                activeCard === index ? 'scale-105 shadow-xl' : ''
              }`}
              onClick={() => handleCardClick(index)}
            >
              <div className="w-full h-2/3 relative">
                <div className="w-full h-full">
                  <img src={card.image} alt={card.name} className="w-full h-full object-cover rounded-t-lg" />
                </div>
                <div className="absolute inset-x-0 bottom-0">
  <svg className="w-full h-auto" viewBox="0 0 100 40" preserveAspectRatio="none">
    <path
      // d="M0,25 C50,15 80,25 100,0 L100,25 Z"
       d="M40,46 C75,30 90,25 100,0 L100,50 Z"
      fill="white"
    />
  </svg>
</div>

              </div>
              <div className="flex flex-col items-center p-4">
                <h2 className="text-lg md:text-xl font-semibold mb-2">{card.name}</h2>
                <p className="text-gray-500 mb-4">{card.title}</p>
                <ul className="flex space-x-3 md:space-x-4">
                  {card.social.map((social, i) => (
                    <li key={i}>
                      <a href={social.link} className="text-gray-600 hover:text-gray-800">
                        {social.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="flex mt-8 space-x-2 md:space-x-3">
          {cards.map((_, index) => (
            <span
              key={index}
              className={`inline-block w-4 h-4 md:w-5 md:h-5 rounded-full cursor-pointer transition-colors ${
                activeCard === index ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              onClick={() => handleCardClick(index)}
            ></span>
          )

export default Team;