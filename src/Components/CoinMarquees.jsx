import { useState } from 'react';
import { IoPlayOutline } from "react-icons/io5";
import { PiPause } from "react-icons/pi";
import { MdArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";


const CoinMarquees = () => {
  const [isPaused, setIsPaused] = useState(false); // Start with the marquee paused

  const prices = [
    { name: 'BTC', price: '$29,000', change: '+2.5%' },
    { name: 'ETH', price: '$1,800', change: '-1.2%' },
    { name: 'XRP', price: '$0.85', change: '+0.75%' },
    { name: 'LTC', price: '$140', change: '-0.5%' },
    { name: 'DOGE', price: '$0.075', change: '+3.0%' },
    { name: 'ADA', price: '$0.35', change: '-0.8%' },
    { name: 'SOL', price: '$23.50', change: '+1.6%' },
    { name: 'DOT', price: '$5.00', change: '-2.3%' },
    { name: 'BNB', price: '$240', change: '+1.1%' },
    { name: 'AVAX', price: '$12.50', change: '+0.9%' },
    { name: 'MATIC', price: '$0.80', change: '-0.4%' },
    { name: 'SHIB', price: '$0.000007', change: '+2.0%' },
    { name: 'UNI', price: '$5.20', change: '+1.4%' },
    { name: 'LINK', price: '$7.25', change: '-1.1%' },
    { name: 'XLM', price: '$0.12', change: '+0.3%' },
    { name: 'ATOM', price: '$10.75', change: '-0.9%' },
  ];

  return (
    <div className='relative'>
      <div className="marquee-text border-[2px] border-black">
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="lg:w-[60px] w-[40px] top-0 absolute border-[2px] border-t-[2px] border-l-0 bottom-0 lg:pl-5 pl-2 border-black z-30 bg-white font-semibold"
      >
        {isPaused ? <IoPlayOutline /> : <PiPause />}
      </button>
        <div className={`top-info-bar ml-10 ${isPaused ? 'paused' : ''}`}>
          {prices.map((coin, index) => (
            <span key={index} className="info-text">
              <span className='font-bold pr-1 text-sm lg:ml-2'>{coin.name}</span>: <span className='pl-2 text-sm'>{coin.price}</span> 
              <span className={`ml-1 flex items-center text-md ${coin.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {coin.change.startsWith('+') ? <MdArrowDropUp size={25} /> : <MdArrowDropDown size={25} />} <h1 className='text-sm'>{coin.change}</h1>
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoinMarquees;
