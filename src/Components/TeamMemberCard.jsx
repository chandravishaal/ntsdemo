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
    <div className="relative flex flex-col justify-center items-center mt-32 md:mt-96 min-h-screen bg-cyan-200">
      <div id="scroll-text" className="absolute -top-24 md:-top-48 w-full overflow-hidden whitespace-nowrap z-10">
        <p className="inline-block animate-infinite-scroll text-cyan-300 text-4xl md:text-9xl font-bold">
          NORTH STAR METRICS
          <span className="mx-2 md:mx-5">
            <img src="logo.png" alt="Logo" className="h-16 w-28 md:h-36 md:w-60 inline-block pb-2 md:pb-6 mb-2 md:mb-8" />
          </span>
          NORTH STAR METRICS
          <span className="mx-2 md:mx-5">
            <img src="logo.png" alt="Logo" className="h-16 w-28 md:h-36 md:w-60 inline-block pb-2 md:pb-6 mb-2 md:mb-8" />
          </span>
          NORTH STAR METRICS
          <span className="mx-2 md:mx-5">
            <img src="logo.png" alt="Logo" className="h-16 w-28 md:h-36 md:w-60 inline-block pb-2 md:pb-6 mb-2 md:mb-8" />
          </span>
        </p>
      </div>

      <div id="main" className="h-44 w-full mt-0 flex justify-between">
        <div id="left" className="h-full">
          <h1 className="absolute top-5 left-3 text-4xl md:text-8xl text-black font-antipasto-pro pl-10 md:pl-28">
            Meet our <br /> <span className="text-white">creative staff</span>
          </h1>
        </div>

        <div id="right" className="h-full relative mr-6">
          <h1 className="text-[10vw] font-countdownopen tracking-tighter">50+</h1>

          <div id="small_text" className="h-4 lg:h-8 font-century-gothic bg-cyan-200 absolute left-50 top-14 lg:top-28">
            <h1>Team Member</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-24 md:mt-32 w-full max-w-7xl">
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;