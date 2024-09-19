import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import icon1 from '../assets/Images/6th_section_icon1.png';
import icon2 from '../assets/Images/6th_section_icon2.png';
import icon3 from '../assets/Images/6th_section_icon3.png';
import icon4 from '../assets/Images/6th_section_icon4.png';

import icon9 from '../assets/Images/icon-9.png';
import icon10 from '../assets/Images/icon-10.png';
import icon11 from '../assets/Images/icon-2.png';
import SecondaryButton from '../Common/SecondaryButton';

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
    <section className='bg-primaryCyan w-full py-10'> 

      <div id="main" className="w-full container mx-auto flex lg:flex-row flex-col-reverse justify-between items-center lg:my-40 my-20">
        <div id="left" className="text-white text-center lg:text-left w-full mt-20">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 font-montserrat ">
            Get started in a few <br /> minutes
          </h1>
          <h2 className="text-lg md:text-xl mb-6 text-black font-montserrat font-bold">
            Create an account, link your bank account,
            <br />
            and start buying & selling.
          </h2>
          <SecondaryButton className="font-century-gothic" title="Create Account" />
        </div>

        <div className='relative lg:pr-32 md:pr-0 pr-0 mt-10'>
          <div className='bg-white w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] rounded-full flex items-center justify-center mb-24 lg:mb-0 shadow-2xl  relative'>
            <img src="https://ntsmetrics.com/img/nsm-logo-blue.png" className='lg:w-3/6 w-[150px]' alt="" />
          <div className='absolute bg-white p-2 lg:w-[180px] lg:h-[180px] w-[130px] h-[130px] lg:-left-24 -left-20  rounded-full shadow-2xl flex flex-col items-center justify-center gap-3'>
              <img src={icon11} className='w-12 lg:w-16' alt="" />
              <p className="text-lg font-century-gothic font-bold text-black">
                {isVisible && <CountUp end={10523684} duration={5} />}
              </p>
          </div>
          <div className='absolute bg-white p-5 lg:w-[180px] lg:h-[180px] w-[130px] h-[130px] -top-16 lg:-top-20  rounded-full shadow-2xl flex flex-col items-center justify-center gap-3'>
              <img src={icon9} className='w-12 lg:w-16' alt="" />
              <p className="text-lg font-century-gothic font-bold text-black">
                {isVisible && <CountUp end={73554} duration={5} />}
              </p>
          </div>
          <div className='absolute bg-white p-5 lg:w-[180px] lg:h-[180px] w-[130px] h-[130px] lg:-right-24 -right-20  rounded-full shadow-2xl flex flex-col items-center justify-center gap-3'>
              <img src={icon10} className='w-12 lg:w-16' alt="" />
              <p className="text-lg font-century-gothic font-bold text-black">
                {isVisible && <CountUp end={73554} duration={5} />}
              </p>
          </div>
          </div>

          <h1 className='absolute text-black text-xl font-bold lg:-left-32 lg:top-72 md:top-56 md:-left-36 -left-16 top-52 md:whitespace-nowrap text-center'>Total <br className='md:hidden block' /> Transactions</h1>
          <h1 className='absolute text-black text-xl font-bold lg:left-72 md:top-0 md:left-56 -top-24 left-7 md:whitespace-nowrap text-center'>Today&apos;s Transactions</h1>
          <h1 className='absolute text-black text-xl font-bold lg:left-80 lg:top-72 md:top-56 md:left-56 -right-20 top-52 md:whitespace-nowrap text-center'>Monthly <br className='md:hidden block' /> Transactions</h1>

          <img src={icon1} className='w-16 animate-bounce absolute lg:top-96 md:top-72 top-72 right-0' alt="" />
          <img src={icon2} className='w-16 md:top-10 animate-bounce md:-right-16 absolute -right-16 -top-10' alt="" />
          <img src={icon3} className='w-16 lg:left-0 left-0 md:top-72 top-72 lg:top-96 animate-bounce absolute right-0' alt="" />
          <img src={icon4} className='w-12 animate-bounce top-0 -left-10 absolute right-0' alt="" />

        </div>

      </div>
    </section>
  );
};

export default Started;
 