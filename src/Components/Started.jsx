import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import icon1 from '../assets/Images/6th_section_icon1.png';
import icon2 from '../assets/Images/6th_section_icon2.png';
import icon3 from '../assets/Images/6th_section_icon3.png';
import icon4 from '../assets/Images/6th_section_icon4.png';

import icon9 from '../assets/Images/icon-9.png';
import icon10 from '../assets/Images/icon-10.png';
import icon11 from '../assets/Images/icon-2.png';

const Started = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after the section becomes visible
        }
      },
      { threshold: 0.4 } // Trigger when 40% of the section is visible
    );

    const section = document.getElementById('main');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section className='bg-primaryCyan w-full pt-10 h-[42rem] mb-20'> 
      <div id="main" className="w-full container mx-auto flex justify-between items-center mt-44">
        <div id="left" className="w-1/2 text-white text-center md:text-left">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 font-century-gothic">
            Get started in a few <br /> minutes
          </h1>
          <h2 className="text-lg md:text-xl mb-6 text-black font-antipasto-pro">
            Create an account, link your bank account,
            <br />
            and start buying & selling.
          </h2>
          <button className="lg:px-4 lg:py-2 px-3 py-2 text-md button text-center cursor-pointer md:w-1/3 lg:w-1/3 whitespace-nowrap lg:text-base text-sm font-semibold transition-all duration-200 outline-none text-black bg-white rounded-[100px] shadow-[0_4px_#C0C0C0]">
            Create Account
          </button>
        </div>

        <div id="right" className="pr-64 flex justify-center items-center">
          <div className="relative flex items-center justify-center">
            <div className="absolute flex items-center justify-center bg-white w-80 h-80 p-4 rounded-full border-solid border-1 border-black text-center shadow-2xl">
              <img
                src="https://ntsmetrics.com/img/nsm-logo-blue.png"
                alt="North Metrics Logo"
                className='w-44 select-none'
              />
            </div>

            <div id='icon1' className="absolute right-11 -top-40 flex flex-col items-center">
              <div className="mb-2 w-32 h-32 drop-shadow-2xl">
                <img src={icon4} className="select-none" alt="" />
              </div>
            </div>
            <div id='icon1' className="absolute right-11 -bottom-80 flex flex-col items-center">
              <div className="mb-2 w-32 h-32 drop-shadow-2xl">
                <img src={icon3} className="select-none" alt="" />
              </div>
            </div>
            <div id='icon1' className="absolute left-32 -top-36 flex flex-col items-center">
              <div className="mb-2 w-32 h-32 drop-shadow-2xl">
                <img src={icon2} className="select-none" alt="" />
              </div>
            </div>
            <div id='icon1' className="absolute top-52 left-32 flex flex-col items-center">
              <div className="mb-2 w-32 h-32 drop-shadow-2xl">
                <img src={icon1} className="select-none" alt="" />
              </div>
            </div>

            <div className="absolute left-20 top-0 flex flex-col items-center">
              <div className="bg-white text-primaryCyan p-5 py-6 rounded-full mb-2 w-32 h-32 drop-shadow-2xl">
                <p className="font-bold absolute -bottom-10 text-white w-60 text-lg">Monthly Transactions</p>
                <div id='icon-bottom' className='flex flex-col relative'>
                  <img src={icon9} alt="" className='w-14 ml-4' />
                  <div className='absolute top-14 left-4'>
                    <p className="text-lg font-century-gothic font-bold">
                      {isVisible && <CountUp end={591653} duration={5} />} {/* Duration of 5 seconds */}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute right-24 -top-13 flex flex-col items-center">
              <div className="bg-white text-primaryCyan p-5 py-6 rounded-full drop-shadow-2xl mb-2 w-36 h-36">
                <p className="font-bold absolute -bottom-10 -left-20 text-white w-60 text-lg font-antipasto-pro">Total Transactions</p>
                <div id='icon-bottom' className='flex flex-col relative'>
                  <img src={icon11} alt="" className='w-14 ml-4' />
                  <div className='absolute top-14'>
                    <p className="text-lg font-century-gothic font-bold">
                      {isVisible && <CountUp end={10523684} duration={5} />} {/* Duration of 5 seconds */}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-24 flex flex-col items-center">
              <div className="bg-white text-primaryCyan p-5 py-6 rounded-full drop-shadow-2xl w-32 h-32">
                <p className="font-bold absolute -right-48 text-white text-lg">Today Transactions</p>
                <div id='icon-bottom' className='flex flex-col relative'>
                  <img src={icon10} alt="" className='w-14 ml-4' />
                  <div className='absolute top-14 left-4'>
                    <p className="text-lg font-century-gothic font-bold">
                      {isVisible && <CountUp end={73680} duration={5} />} {/* Duration of 5 seconds */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Started;
