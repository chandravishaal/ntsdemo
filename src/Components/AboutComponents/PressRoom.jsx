import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image1 from '../../assets/Images/icon1.jpg';
import Image2 from '../../assets/Images/icon2.jpg';
import Image3 from '../../assets/Images/icon3.jpg';
import Image4 from '../../assets/Images/nts-removebg-preview.png';
// import { Link, redirect } from 'react-router-dom';
import { CiCalendarDate } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";



gsap.registerPlugin(ScrollTrigger);

function PressRoom() {
  const cardsData = [
    {
      
      imageSrc: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L7tpgNK6Rg_09CBXJIp3sQ.jpeg",
      title: 'Buy and Sell Crypto: Functions and Benefits of Binance Coin',
      description:
        'Explore how to buy and sell crypto using Binance Coin. Learn about its burn mechanism, benefits, and role in top crypto exchanges like Binance.',
      logoSrc: Image4,
      redirectLink: 'https://medium.com/@ntsmetrics/buy-and-sell-crypto-functions-and-benefits-of-binance-coin-2090e666eb5e'
    },
    {
      imageSrc: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*AYgAuNfCXz-MNmMcyiXAFg.jpeg",
      title: 'Buy and Sell Crypto: Knowing the Specifics of Crypto Mining',
      description:
        'Buy and sell crypto efficiently by understanding the basics of crypto mining, how it works, its environmental impact, and its role in top crypto exchanges.',
      logoSrc: Image4,
      redirectLink: "https://medium.com/@ntsmetrics/buy-and-sell-crypto-knowing-the-specifics-of-crypto-mining-3fbac059b745"
    },
    {
      imageSrc: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*WV88BTbBU1p_eD_Znt413Q.jpeg",
      title: 'Crypto Trading Platform: Key Cases on September 16-17, 2024',
      description:
        'Crypto trading platform developments, including Bitcoin surge, WazirX hack fallout, and regulatory impacts on the NFT market on September 16–17, 2024.',
      logoSrc: Image4,
      redirectLink: "https://medium.com/@ntsmetrics/crypto-trading-platform-key-cases-on-september-16-17-2024-31a084d6d1f1"
    },
  ];

  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardRefs.current[0], // First card (left)
      { opacity: 0, x: -100 }, // Start off-screen to the left
      {
        opacity: 1,
        x: 0,
        duration: 2,
        
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRefs.current[0],
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      cardRefs.current[1], // Middle card (down)
      { opacity: 0, y: 100 }, // Start off-screen below
      {
        opacity: 1,
        y: 0,
        duration: 2,
        
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRefs.current[1],
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      }
    );

    gsap.fromTo(
      cardRefs.current[2], // Last card (right)
      { opacity: 0, x: 100 }, // Start off-screen to the right
      {
        opacity: 1,
        x: 0,
        duration: 2,
        
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRefs.current[2],
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  // const PressCard = ({ imageSrc, title, description, logoSrc, index, redirectLink }) => {
  //   return (
  //     <div
  //       ref={(el) => (cardRefs.current[index] = el)} // Assigning the ref to each card
  //       className="bg-cyan-50 rounded-lg h-[33rem] overflow-hidden"
  //     >
  //       <img src={imageSrc} alt="Press Image" className="rounded-t-lg object-cover mb-3 h-[200px] w-full" />
  //       <div className='p-4'>
  //         <h4 className="text-lg md:text-xl font-bold mb-2 font-montserrat">{title}</h4>
  //         <p className="text-gray-500 mb-4 text-sm md:text-base line-clamp-6 font-century-gothic">
  //           {description}
  //         </p>
  //         <div className='flex flex-wrap items-center justify-end'>
            
  //           <div className="flex flex-wrap justify-end mt-4">
            
  //             <a href={redirectLink} className="bg-primaryCyan text-black font-bold py-1 px-4 rounded-full text-xs md:text-sm font-century-gothic">Read more</a>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  const PressCard = ({ imageSrc, title, description, logoSrc, index, redirectLink }) => {
    return (
      <div
        ref={(el) => (cardRefs.current[index] = el)} // Assigning the ref to each card
        className="bg-white flex flex-col items-start gap-4 rounded-2xl shadow-md outline outline-[0.2px] outline-gray-300 p-4"
      >
        <h1 className="text-lg font-semibold px-1 font-century-gothic">
          {title}
        </h1>
  
        <div className="flex items-center px-1 gap-3">
          {/* date */}
          <div className="rounded-xl flex items-center gap-2 bg-[#F3F4F6] p-1 px-2 text-sm outline outline-[0.2px] outline-gray-300">
            <span className="text-primaryCyan">
              <CiCalendarDate size={15} />
            </span>
            <h1>24 Sept 2024</h1>
          </div>
          {/* likes  */}
          <div className="rounded-xl flex items-center gap-2 bg-[#F3F4F6] p-1 px-2 text-sm outline outline-[0.2px] outline-gray-300">
            <span className="text-primaryCyan">
              <FaHeart />
            </span>
            <h1>10k</h1>
          </div>
        </div>
  
        <h1 className="line-clamp-2 text-sm px-1 font-montserrat">
          {description}
        </h1>
  
        <div className="relative w-full">
          <img
            src={imageSrc}
            alt="Press Image"
            className="w-full object-cover h-[300px] rounded-xl z-40"
          />
          <div className="bg-white pr-2 pb-2 pt-1 absolute z-50 top-0 left-0 rounded-br-xl">
            <div className="bg-white group hover:bg-[#F3F4F6] transition-all duration-300 p-3 outline outline-[2px] rounded-xl outline-gray-400">
              <a href={redirectLink} className="flex items-center">
                Read Article
                <span className="group-hover:translate-x-1 transition-transform duration-300 ml-2 text-primaryCyan">
                  <FaArrowRight />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <section className="bg-white container mx-auto mb-24 mt-10">
      <div className="text-center font-Antipasto pro">
        <h2 className="text-4xl font-bold mt-8 font-montserrat">Press Release</h2>
        <p className="text-black mt-4 font-semibold text-center font-century-gothic">
        Leading the Future of Cryptocurrency Trading
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-5">
        {cardsData.map((card, index) => (
          <PressCard
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            logoSrc={card.logoSrc}
            index={index} // Passing the index to track each card's reference
            redirectLink={card.redirectLink}
          />
        ))}
      </div>
    </section>
  );
}

export default PressRoom;
