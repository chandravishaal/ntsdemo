import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import GLOB from '../../assets/Images/HomeImages/GLOB.png';
import phone from '../../assets/Images/HomeImages/Phone.png';
import icon1 from '../../assets/Images/HomeImages/icon1.png';
import icon2 from '../../assets/Images/HomeImages/icon2.png';
import icon3 from '../../assets/Images/HomeImages/icon3.png';
import icon4 from '../../assets/Images/HomeImages/icon4.png';
import icon5 from '../../assets/Images/HomeImages/icon5.png';
import icon6 from '../../assets/Images/HomeImages/icon6.png';
import mainBg from '../../assets/Images/HomeImages/BACKGROUND.png';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const WhyChooseUs = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  // Refs for animation
  const phoneRef = useRef(null);
  const globeRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // GSAP animations with ScrollTrigger
    gsap.from(phoneRef.current, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.3,
      scrollTrigger: {
        trigger: phoneRef.current,
        start: 'top 80%', // Trigger the animation when the top of the phone reaches 80% of the viewport
        toggleActions: 'play none none reverse', // Play on scroll, reverse when scrolled up
      },
    });

    gsap.from(globeRef.current, {
      duration: 1.5,
      scale: 0.8,
      opacity: 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: globeRef.current,
        start: 'top 80%', // Trigger the animation when the top of the globe reaches 80% of the viewport
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(containerRef.current.children, {
      duration: 0.8,
      y: 30,
      opacity: 0,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%', // Trigger the stagger animation for icons
        toggleActions: 'play none none reverse',
      },
    });
  }, []);


  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    { id: 1, title: 'Safe & Secure', icon: icon3, content: 'Your trades are safe and secure with our advanced security protocols.' },
    { id: 2, title: 'Easy To Start', icon: icon2, content: 'It’s easy to start trading with us, whether by call, appointment, or visiting us in person.' },
    { id: 3, title: 'Convenient Payment Options', icon: icon1, content: 'We provide multiple payment options including credit cards and e-wallets.' },
    { id: 4, title: 'Instant Order Processing', icon: icon4, content: 'Orders are processed instantly to ensure the best possible rate.' },
    { id: 5, title: 'Volatility Protection', icon: icon5, content: 'We offer features to protect against high market volatility.' },
    { id: 6, title: '24/7 Support', icon: icon6, content: 'We are available around the clock to assist you anytime.' }
  ];

  return (
    <section className='w-full h-auto lg:h-[45rem] relative whychooseSection-background flex flex-col pt-10 mb-20 overflow-hidden'>
      <div className='container mx-auto py-6'>
        <div className='px-5'>
          <h1 className='text-3xl lg:text-4xl font-semibold mb-4 text-center'>Why Choose Us?</h1>
          <h2 className='text-xl lg:text-2xl text-gray-500 mb-8 text-center'>A Crypto platform has never been better than this</h2>
        </div>

        {/* Desktop View */}
        <div className=' hidden lg:flex justify-center items-end relative'>
          <div id='cover' className='relative z-10'>
            <img ref={globeRef} src={GLOB} alt='Globe Background' className='relative max-w-full h-auto' />
          </div>

          <div id='content' ref={containerRef} className='h-full w-full absolute top-0 lg:container flex flex-col lg:flex-row justify-around z-20'>
            {/* Left section for icons */}
            <div id='left' className=' w-full lg:w-1/3 h-auto flex flex-col justify-around py-10 relative'>
              <div
                className='flex flex-col items-center space-y-2 absolute top-[10%] right-[10%] '
                onMouseEnter={() => {
                  handleMouseEnter('icon3');
                  gsap.to('.icon3-text', { x: 10, opacity: 1, duration: 0.5, ease: 'power2.out' });
                }}
                onMouseLeave={() => {
                  handleMouseLeave();
                  gsap.to('.icon3-text', { x: -200, opacity: 0, duration: 0.5, ease: 'power2.in' });
                }}
              >
                <div className='shadow-lg shadow-cyan-500/50 bg-white rounded-xl flex justify-center items-center w-16 lg:w-20 h-12 lg:h-16'>
                  <img src={icon3} alt='Safe & Secure' className='drop-shadow-2xl'/>
                </div>
                <p className='text-center text-base lg:text-xl '>Safe & Secure</p>
                
              </div>

              <div
                className='flex flex-col items-center space-y-2 absolute top-[36%] right-[45%]'
                onMouseEnter={() => {
                  handleMouseEnter('icon1');
                  gsap.to('.icon1-text', { x: -80, opacity: 1, duration: 0.5, ease: 'power2.out' });
                }}
                onMouseLeave={() => {
                  handleMouseLeave();
                  gsap.to('.icon1-text', { x: -200, opacity: 0, duration: 0.5, ease: 'power2.in' });
                }}
              >
                <div className=' shadow-lg shadow-cyan-500/50 bg-white rounded-xl flex justify-center items-center w-16 lg:w-20 h-12 lg:h-16'>
                  <img src={icon2} alt='Easy To Start' className='drop-shadow-2xl'/>
                </div>
                <p className='text-center text-base lg:text-xl'>Easy To Start</p>
              
              </div>

              <div
                className='flex flex-col items-center space-y-2 absolute bottom-[16%] right-[45%]'
                onMouseEnter={() => {
                  handleMouseEnter('icon2');
                  gsap.to('.icon2-text', { x: -80, opacity: 1, duration: 0.5, scale:1.1, ease: 'power2.out', });
                }}
                onMouseLeave={() => {
                  handleMouseLeave();
                  gsap.to('.icon2-text', { x: -200, opacity: 0, duration: 0.5, ease: 'power2.in' });
                }}
              >
                <div className=' shadow-lg shadow-cyan-500/50 bg-white rounded-xl flex justify-center items-center w-16 lg:w-20 h-12 lg:h-16'>
                  <img src={icon1} alt='24/7 Support' />
                </div>
                <p className='text-center text-base lg:text-xl'>Convenient Payment Option</p>
                
              </div>
            </div>


            {/* Center phone image */}
            <div id='center' className=' w-full lg:w-1/3 h-full flex justify-center relative'>
              <img src={phone} alt='Phone' className='relative z-20 -bottom-[30%] lg:-bottom-[9%] w-[20rem] lg:w-[36rem]' />
            </div>

            {/* Right section for icons */}
            <div id='right' className=' w-full lg:w-1/3 h-auto flex flex-col justify-around py-10 relative'>
              <div
                className='flex flex-col items-center space-y-2 absolute top-[10%] left-[10%]'
                onMouseEnter={() => {
                  handleMouseEnter('icon4');
                  gsap.to('.icon4-text', { x: -20, opacity: 1, duration: 0.5, ease: 'power2.out' });
                }}
                onMouseLeave={() => {
                  handleMouseLeave();
                  gsap.to('.icon4-text', { x: 200, opacity: 0, duration: 0.5, ease: 'power2.in' });
                }}
              >
                <div className=' shadow-lg shadow-cyan-500/50 bg-white rounded-xl flex justify-center items-center w-16 lg:w-20 h-12 lg:h-16'>
                  <img src={icon4} alt='Easy To Start'className='drop-shadow-2xl' />
                </div>
                <p className='text-center text-base lg:text-xl'>Instant Order <br /> Processing </p>
                
              </div>

              <div
                className='flex flex-col items-center space-y-2 absolute top-[36%] left-[40%]'
                onMouseEnter={() => {
                  handleMouseEnter('icon5');
                  gsap.to('.icon5-text', { x: -10, opacity: 1, duration: 0.5, ease: 'power2.out' });
                }}
                onMouseLeave={() => {
                  handleMouseLeave();
                  gsap.to('.icon5-text', { x: 200, opacity: 0, duration: 0.5, ease: 'power2.in' });
                }}
              >
                <div className=' shadow-lg shadow-cyan-500/50 bg-white rounded-xl flex justify-center items-center w-16 lg:w-20 h-12 lg:h-16'>
                  <img src={icon5} alt='Safe & Secure'className='drop-shadow-2xl' />
                </div>
                <p className='text-center text-base lg:text-xl'>Volatility Protection</p>
               
              </div>

              <div
                className='flex flex-col items-center space-y-2 absolute bottom-[20%] left-[56%]'
                onMouseEnter={() => {
                  handleMouseEnter('icon6');
                  gsap.to('.icon6-text', { x: -10, opacity: 1, duration: 0.5, ease: 'power2.out' });
                }}
                onMouseLeave={() => {
                  handleMouseLeave();
                  gsap.to('.icon6-text', { x: 200, opacity: 0, duration: 0.5, ease: 'power2.in' });
                }}
              >
                <div className=' shadow-lg shadow-cyan-500/50 bg-white rounded-xl flex justify-center items-center w-16 lg:w-20 h-12 lg:h-16'>
                  <img src={icon6} alt='24/7 Support'className='drop-shadow-2xl' />
                </div>
                <p className='text-center text-base lg:text-xl'>24/7 Support</p>
               
              </div>
            </div>
          </div>

          {/* Overlay for text boxes */}
          <div className='absolute top-0 left-0 w-full h-full pointer-events-none z-30'>
            <div className='icon3-text absolute top-[10%] left-[30%] w-52 p-2 bg-white rounded-xl shadow-xl opacity-0'>
              <p className='text-xs lg:text-sm text-center'>Your trades are safe and secure with our advanced security protocols.</p>
            </div>
            <div className='icon1-text absolute top-[36%] left-[27%] w-52 p-2 bg-white rounded-xl shadow-xl opacity-0'>
              <p className='text-xs lg:text-sm text-center'>Easy to start, simply give us a call, set an appointment, or visit our office, and you'll complete your first trade.</p>
            </div>
            <div className='icon2-text absolute bottom-[27%] left-[23%] w-52 p-2 bg-white rounded-xl shadow-xl opacity-0'>
              <p className='text-xs lg:text-sm text-center'>Convenient payment options in trading, like credit cards and e-wallets,  making it easier and efficiently.</p>
            </div>
            <div className='icon4-text absolute top-[10%] right-[30%] w-52 p-2 bg-white rounded-xl shadow-xl opacity-0'>
              <p className='text-xs lg:text-sm text-center'>Trading is easy to start with online platforms, educational resources, and small investments, allowing anyone to learn and grow financially.</p>
            </div>
            <div className='icon5-text absolute top-[36%] right-[20%] w-52 p-2 bg-white rounded-xl shadow-xl opacity-0'>
              <p className='text-xs lg:text-sm text-center'>Safe and secure trading involves using reputable platforms, implementing strong passwords, and practicing risk management to protect you.</p>
            </div>
            <div className='icon6-text absolute bottom-[27%] right-[15%] w-52 p-2 bg-white rounded-xl shadow-xl opacity-0'>
              <p className='text-xs lg:text-sm text-center'>We offer 24/7 support to assist you at any time.</p>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet View (Accordion) */}
        <div className='lg:hidden relative flex flex-col items-center'>
          {/* Background Container with mainBg and GLOB Image */}
          <div className='relative w-full h-auto mb-7 overflow-hidden'>
            <div className='absolute top-0 left-0 w-full h-full z-0'>
              <img src={mainBg} alt='Main Background' className='w-full h-full object-cover' />
            </div>
            <div className='absolute top-5 left-0 w-full h-full z-10'>
              <img src={GLOB} alt='Globe Background' className='w-full h-full object-cover' />
            </div>
            <div className='flex justify-center mb-9 relative z-20 bottom-[-5.5rem]'>
              <img src={phone} alt='Phone' className='w-[12rem] md:w-[20rem]' />
            </div>
          </div>

          {/* Accordion Section */}
          <div className='relative z-10 w-full px-4'>
            {data.map((item, index) => (
              <div key={item.id} className='mb-4 bg-[#DAFDFF] rounded-lg shadow'>
                <div
                  className='flex justify-between items-center p-4 cursor-pointer'
                  onClick={() => handleToggle(index)}
                >
                  <div className='flex items-center space-x-4'>
                    <img src={item.icon} alt={item.title} className='w-8 h-8' />
                    <p className='text-lg font-medium'>{item.title}</p>
                  </div>
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {openIndex === index && (
                  <div className='p-4 bg-white rounded-b-lg'>
                    <p className='text-gray-700 text-sm'>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
