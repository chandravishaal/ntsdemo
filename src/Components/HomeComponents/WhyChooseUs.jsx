// import whyChooseUsBanner from '../../assets/Images/3rd_section_mobile.png';
// import icon1 from '../../assets/Images/HomeImages/icon1.png';
// import icon2 from '../../assets/Images/HomeImages/icon5.png';
// import icon3 from '../../assets/Images/HomeImages/icon3.png';
// import icon4 from '../../assets/Images/HomeImages/icon6.png';
// import icon5 from '../../assets/Images/HomeImages/icon4.png';
// import icon6 from '../../assets/Images/HomeImages/icon2.png';

// const WhychooseusCard = ({ image, title, desc, color, customClass }) => {
//   return (
//     <div
//       className={`bg-primaryCyan w-full flex-col justify-between gap-5 flex h-[200px] md:h-[150px] lg:h-[180px] ${
//         color === 'primary' ? 'bg-primaryCyan' : 'bg-white'
//       } border-2 border-primaryCyan rounded-xl p-4 gap-3 ${customClass}`}
//     >
//       <img src={image} className="w-10 h-10 mx-auto object-contain" alt="" />
//       <div className=''>
//         <h1
//           className={`text-lg leading-5 text-center lg:text-start font-century-gothic ${
//             color === 'primary' ? 'text-black' : 'text-black'
//           } font-bold mb-2`}
//         >
//           {title}
//         </h1>
//         <p
//           className={`text-sm text-center lg:text-start leading-4 font-century-gothic ${
//             color === 'primary' ? 'text-black' : 'text-black'
//           }`}
//         >
//           {desc}
//         </p>
//       </div>
//     </div>
//   );
// };

// const WhyChooseUs = () => {
//   return (
//     <section className="whychooseSection-background md:pt-20 lg:py-10">
//       <div className="container mx-auto mb-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-5">
//         <div className="flex flex-col items-center lg:items-start flex-[0.6] text-center md:text-left">
//           <h1 className="text-3xl mt-5 font-bold mb-5 font-montserrat ">Why Choose Us?</h1>
//           <p className="text-xl mb-10 font-century-gothic">
//             A Crypto platform has never been better than this.
//           </p>
//           <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:px-20 lg:px-0">
//             <WhychooseusCard
//               color="primary"
//               title="Easy To Start"
//               image={icon1}
//               desc="North Star Metrics provides an easy way for a person to trade crypto."
//             />
//             <WhychooseusCard
//               color="notPrimary"
//               title="Safe and Secure"
//               image={icon6}
//               desc="We provide a safe environment for all your transactions."
//             />
//             <div className='order-0 lg:order-6'>
//             <WhychooseusCard
//               color="notPrimary"
//               title="Rapid Order"
//               image={icon5}
//               desc="Enjoy the benefit of instant order processing for effective trading."
//             />
//             </div>
//             <WhychooseusCard
//               color="primary"
//               title="Volatility Protection"
//               image={icon3}
//               desc="At North Star Metrics we offer tools for protection from volatility."
//             />
//             <div className='order-0 lg:order-5'>
//               <WhychooseusCard
//                 color="primary"
//                 title="Smart Payment"
//                 image={icon2}
//                 desc="Enjoy Easy Payment Options."
//               />
//             </div>
//             <WhychooseusCard
//               color="notPrimary"
//               title="24/7 Support"
//               image={icon4}
//               desc=" Get assistance at any time for any crypto transaction."
//             />
//           </div>
//         </div>
//         <div className="flex-[0.4] w-full flex justify-center md:justify-end mb-20 md:mb-0 lg:mb-0">
//           <img
//             src={whyChooseUsBanner}
//             className="max-w-[400px] translate-y-20 mx-auto md:translate-y-0 ml-auto"
//             alt="trending coins"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;


// import React from 'react';
// import GLOB from '../../assets/Images/HomeImages/GLOB.png';
// import phone from '../../assets/Images/HomeImages/phone.png';
// import icon1 from '../../assets/Images/HomeImages/icon1.png';
// import icon2 from '../../assets/Images/HomeImages/icon2.png';
// import icon3 from '../../assets/Images/HomeImages/icon3.png';
// import icon4 from '../../assets/Images/HomeImages/icon4.png';
// import icon5 from '../../assets/Images/HomeImages/icon5.png';
// import icon6 from '../../assets/Images/HomeImages/icon6.png';

// const WhyChooseUs = () => {
//   return (
//     <section className='w-full h-auto relative whychooseSection-background flex flex-col mb-20 overflow-hidden'>
//       <div className='container mx-auto px-4 overflow-hidden'>
//         <h1 className='text-4xl font-bold mb-4 text-center'>Why Choose Us?</h1>
//         <h2 className='text-2xl mb-8 text-center'>A Crypto platform has never been better than this</h2>

//         {/* Image section */}
//         <div id="" className='flex justify-center '>
//           <div id="cover">
//             <img src={GLOB} alt="Globe Background" className='relative' />
//           </div>
//           <div id='center' className='absolute w-[45vh] -bottom-[21%]'>
//             <img src={phone} alt="Phone" />
//           </div>
          
//           {/* Icons surrounding the center image */}
//           <div className='absolute flex flex-col items-center space-y-4 bottom-[5%] left-[19%]'>
//           <div class="border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-20 h-16">
//             <img src={icon1} alt="Safe & Secure" className='' />
//             </div>
//             <p className='text-center text-sm'>Easy To Start</p>
//           </div>

//           <div className='absolute flex flex-col items-center space-y-4 top-[45%] left-[23%]'>
//           <div class="border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-20 h-16">
//             <img src={icon2} alt="Safe & Secure" className='' />
//             </div>               
//              <p className='text-center text-sm'>24/7 Support</p>
//           </div>

//           <div className='absolute flex flex-col items-center space-y-4 top-[20%] left-[32%]'>
//           <div class="border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-20 h-16">
//             <img src={icon3} alt="Safe & Secure" className='' />
//             </div>
//             <p className='text-center text-sm'>Safe & Secure</p>
//           </div>

//             {/* right side icon */}
//           <div className='absolute flex flex-col items-center space-y-4 top-[14%] right-[20%]'>
//           <div class="border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-20 h-16">
//             <img src={icon4} alt="Safe & Secure" className='' />
//             </div>
//             <p className='text-center text-sm'>Volatility Protection</p>
//           </div>

//           <div className='absolute flex flex-col items-center space-y-4 top-[45%] right-[7%]'>
//           <div class="border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-20 h-16">
//             <img src={icon5} alt="Safe & Secure" className='' />
//             </div>
//             <p className='text-center text-sm'>Instant Order Processing</p>
//           </div>

//           <div className='absolute flex flex-col items-center space-y-4 bottom-[5%] right-[5%]'>
//           <div class="border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-20 h-16">
//             <img src={icon6} alt="Safe & Secure" className='' />
//             </div>
//             <p className='text-center text-sm'>Convenient Payment Options</p>
//           </div>
//         </div>



//       </div>
//     </section>
//   );
// }

// export default WhyChooseUs;



// import React, { useState } from 'react';
// import GLOB from '../../assets/Images/HomeImages/GLOB.png';
// import phone from '../../assets/Images/HomeImages/Phone.png';
// import icon1 from '../../assets/Images/HomeImages/icon1.png';
// import icon2 from '../../assets/Images/HomeImages/icon2.png';
// import icon3 from '../../assets/Images/HomeImages/icon3.png';
// import icon4 from '../../assets/Images/HomeImages/icon4.png';
// import icon5 from '../../assets/Images/HomeImages/icon5.png';
// import icon6 from '../../assets/Images/HomeImages/icon6.png';

// const WhyChooseUs = () => {
//   const [hoveredIcon, setHoveredIcon] = useState(null);

//   const handleMouseEnter = (icon) => {
//     setHoveredIcon(icon);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIcon(null);
//   };

//   return (
//     <section className='w-full h-[45rem] relative whychooseSection-background flex flex-col mb-20 overflow-hidden'>
//       <div className='container mx-auto px-4 overflow-hidden'>
//         <h1 className='text-4xl font-bold mb-4 text-center'>Why Choose Us?</h1>
//         <h2 className='text-2xl mb-8 text-center'>A Crypto platform has never been better than this</h2>

//         {/* Image section */}
//         <div className='flex justify-center items-end'>
//           <div id='cover'>
//             <img src={GLOB} alt='Globe Background' className='relative' />
//           </div>

//           <div id='content' className='h-full container absolute flex'>
//             <div id='left' className='w-1/3 h-auto flex flex-col justify-around py-10 relative'>
//               <div
//                 className='flex flex-col items-center space-y-2 absolute top-[18%] right-[0%]'
//                 onMouseEnter={() => handleMouseEnter('icon3')}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <div className='border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-20 h-16'>
//                   <img src={icon3} alt='Safe & Secure' />
//                 </div>
//                 <p className='text-center text-xl'>Safe & Secure</p>
//               </div>

//               <div
//                 className='flex flex-col items-center space-y-2 absolute right-[45%]'
//                 onMouseEnter={() => handleMouseEnter('icon1')}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <div className='border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-20 h-16'>
//                   <img src={icon2} alt='Easy To Start' />
//                 </div>
//                 <p className='text-center text-xl'>Easy To Start</p>
//               </div>

//               <div
//                 className='flex flex-col items-center space-y-2 absolute bottom-[10%] right-[55%]'
//                 onMouseEnter={() => handleMouseEnter('icon2')}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <div className='border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-20 h-16'>
//                   <img src={icon1} alt='24/7 Support' />
//                 </div>
//                 <p className='text-center text-xl'>Convenient Payment Option</p>
//               </div>
//             </div>

//             <div id='center' className='w-1/3 h-full flex justify-center relative'>
//               {hoveredIcon && (
//                 <div className='w-[70%] p-4 bg-white rounded-xl absolute top-[24%] left-2 z-40'>
//                   <p className='text-center text-sm'>
//                     {hoveredIcon === 'icon1' && 'Easy to start, simply give us a call, set an appointment, or visit our office, and you\'ll complete your first trade.'}
//                     {hoveredIcon === 'icon2' && 'Convenient payment options in trading, like credit cards and e-wallets, streamline transactions, making it easier for traders to manage investments efficiently'}
//                     {hoveredIcon === 'icon3' && 'Your trades are safe and secure with our advanced security protocols.'}
//                     {hoveredIcon === 'icon4' && 'Trading is easy to start with online platforms, educational resources, and small investments, allowing anyone to learn and grow financially..'}
//                     {hoveredIcon === 'icon5' && 'Safe and secure trading involves using reputable platforms, implementing strong passwords, and practicing risk management to protect your investments effectively.'}
//                     {hoveredIcon === 'icon6' && 'We offer 24/7 support to assist you at any time.'}
//                   </p>
//                 </div>
//               )}
//               <img src={phone} alt='' className='absolute -bottom-[16%] h-[36rem]' />
//             </div>

//             <div id='right' className='w-1/3 h-auto flex flex-col justify-around py-10 relative'>
//               <div
//                 className='flex flex-col items-center space-y-2 absolute top-[18%] left-[0%]'
//                 onMouseEnter={() => handleMouseEnter('icon4')}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <div className='border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-20 h-16'>
//                   <img src={icon4} alt='Easy To Start' />
//                 </div>
//                 <p className='text-center text-xl'>Easy To Start</p>
//               </div>

//               <div
//                 className='flex flex-col items-center space-y-2 absolute left-[45%]'
//                 onMouseEnter={() => handleMouseEnter('icon5')}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <div className='border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-20 h-16'>
//                   <img src={icon5} alt='Safe & Secure' />
//                 </div>
//                 <p className='text-center text-xl'>Safe & Secure</p>
//               </div>

//               <div
//                 className='flex flex-col items-center space-y-2 absolute bottom-[10%] left-[55%]'
//                 onMouseEnter={() => handleMouseEnter('icon6')}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <div className='border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-20 h-16'>
//                   <img src={icon6} alt='24/7 Support' />
//                 </div>
//                 <p className='text-center text-xl'>24/7 Support</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;


// import React, { useState } from 'react';
// import GLOB from '../../assets/Images/HomeImages/GLOB.png';
// import phone from '../../assets/Images/HomeImages/Phone.png';
// import icon1 from '../../assets/Images/HomeImages/icon1.png';
// import icon2 from '../../assets/Images/HomeImages/icon2.png';
// import icon3 from '../../assets/Images/HomeImages/icon3.png';
// import icon4 from '../../assets/Images/HomeImages/icon4.png';
// import icon5 from '../../assets/Images/HomeImages/icon5.png';
// import icon6 from '../../assets/Images/HomeImages/icon6.png';
// import mainBg from '../../assets/Images/HomeImages/BACKGROUND.png';


// import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// const WhyChooseUs = () => {
//   const [hoveredIcon, setHoveredIcon] = useState(null);
//   const [openIndex, setOpenIndex] = useState(null);

//   const handleMouseEnter = (icon) => {
//     setHoveredIcon(icon);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIcon(null);
//   };

//   const handleToggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const data = [
//     { id: 1, title: 'Safe & Secure', icon: icon3, content: 'Your trades are safe and secure with our advanced security protocols.' },
//     { id: 2, title: 'Easy To Start', icon: icon2, content: 'It’s easy to start trading with us, whether by call, appointment, or visiting us in person.' },
//     { id: 3, title: 'Convenient Payment Options', icon: icon1, content: 'We provide multiple payment options including credit cards and e-wallets.' },
//     { id: 4, title: 'Instant Order Processing', icon: icon4, content: 'Orders are processed instantly to ensure the best possible rate.' },
//     { id: 5, title: 'Volatility Protection', icon: icon5, content: 'We offer features to protect against high market volatility.' },
//     { id: 6, title: '24/7 Support', icon: icon6, content: 'We are available around the clock to assist you anytime.' }
//   ];

//   return (
//     <section className='w-full h-auto lg:h-[45rem] relative whychooseSection-background flex flex-col mb-20 overflow-hidden'>
//       <div className='container mx-auto '>
//         <h1 className='text-3xl lg:text-4xl font-bold mb-4 text-center'>Why Choose Us?</h1>
//         <h2 className='text-xl lg:text-2xl mb-8 text-center px-4 md:px-0'>A Crypto platform has never been better than this</h2>

//         {/* Desktop View */}
//         <div className='hidden lg:flex justify-center items-end relative'>
//           <div id='cover' className='relative z-10'>
//             <img src={GLOB} alt='Globe Background' className='relative max-w-full h-auto' />
//           </div>

//           <div id='content' className='h-full w-full absolute top-0 lg:container flex flex-col lg:flex-row justify-around z-20'>
//             {/* Left section for icons */}
//          <div id='left' className='w-full lg:w-1/3 h-auto flex flex-col justify-around py-10 relative'>
//               <div
//                 className='flex flex-col items-center space-y-2 absolute top-[10%] right-[10%] '
//                 onMouseEnter={() => handleMouseEnter('icon3')}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <div className='border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-16 lg:w-20 h-12 lg:h-16'>
//                   <img src={icon3} alt='Safe & Secure' />
//                 </div>
//                 <p className='text-center text-base lg:text-xl'>Safe & Secure</p>
//               </div>

//               <div
//                 className='flex flex-col items-center space-y-2 absolute top-[36%] right-[45%]'
//                 onMouseEnter={() => handleMouseEnter('icon1')}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <div className='border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-16 lg:w-20 h-12 lg:h-16'>
//                   <img src={icon2} alt='Easy To Start' />
//                 </div>
//                 <p className='text-center text-base lg:text-xl'>Easy To Start</p>
//               </div>

//               <div
//                 className='flex flex-col items-center space-y-2 absolute bottom-[10%] right-[45%]'
//                 onMouseEnter={() => handleMouseEnter('icon2')}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <div className='border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-16 lg:w-20 h-12 lg:h-16'>
//                   <img src={icon1} alt='24/7 Support' />
//                 </div>
//                 <p className='text-center text-base lg:text-xl'>Convenient Payment Option</p>
//               </div>
//             </div>

//             {/* Center phone image */}
//             <div id='center' className='w-full lg:w-1/3 h-full flex justify-center relative'>
//               {hoveredIcon && (
//                 <div className='w-[80%] lg:w-[70%] p-2 lg:p-4 bg-white rounded-xl absolute top-[20%] left-2 z-40'>
//                   <p className='text-center text-xs lg:text-sm'>
//                     {hoveredIcon === 'icon1' && 'Easy to start, simply give us a call, set an appointment, or visit our office, and you\'ll complete your first trade.'}
//                     {hoveredIcon === 'icon2' && 'Convenient payment options in trading, like credit cards and e-wallets, streamline transactions, making it easier for traders to manage investments efficiently.'}
//                     {hoveredIcon === 'icon3' && 'Your trades are safe and secure with our advanced security protocols.'}
//                     {hoveredIcon === 'icon4' && 'Trading is easy to start with online platforms, educational resources, and small investments, allowing anyone to learn and grow financially.'}
//                     {hoveredIcon === 'icon5' && 'Safe and secure trading involves using reputable platforms, implementing strong passwords, and practicing risk management to protect your investments effectively.'}
//                     {hoveredIcon === 'icon6' && 'We offer 24/7 support to assist you at any time.'}
//                   </p>
//                 </div>
//               )}
//               <img src={phone} alt='Phone' className='absolute -bottom-[30%] lg:-bottom-[20%] w-[20rem] lg:w-[36rem]' />
//             </div>

//             {/* Right section for icons */}
//             <div id='right' className='w-full lg:w-1/3 h-auto flex flex-col justify-around py-10 relative'>
//               <div
//                 className='flex flex-col items-center space-y-2 absolute top-[10%] left-[0%] '
//                 onMouseEnter={() => handleMouseEnter('icon4')}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <div className='border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-16 lg:w-20 h-12 lg:h-16'>
//                   <img src={icon4} alt='Easy To Start' />
//                 </div>
//                 <p className='text-center text-base lg:text-xl'>Instant Order Processing </p>
//               </div>

//               <div
//                 className='flex flex-col items-center space-y-2 absolute top-[36%] left-[40%]'
//                 onMouseEnter={() => handleMouseEnter('icon5')}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <div className='border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-16 lg:w-20 h-12 lg:h-16'>
//                   <img src={icon5} alt='Safe & Secure' />
//                 </div>
//                 <p className='text-center text-base lg:text-xl'>Volatility Protection</p>
//               </div>

//               <div
//                 className='flex flex-col items-center space-y-2 absolute bottom-[10%] left-[56%]'
//                 onMouseEnter={() => handleMouseEnter('icon6')}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <div className='border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-16 lg:w-20 h-12 lg:h-16'>
//                   <img src={icon6} alt='24/7 Support' />
//                 </div>
//                 <p className='text-center text-base lg:text-xl'>24/7 Support</p>
//               </div>
//             </div>
//           </div>
//           </div>

//         {/* Mobile & Tablet View (Accordion) */}
//         <div className='lg:hidden relative flex flex-col items-center'>
//   {/* Background Container with mainBg and GLOB Image */}
//   <div className='relative w-full h-auto mb-7 overflow-hidden'>
//     {/* mainBg Background Image */}
//     <div className='absolute top-0 left-0 w-full h-full z-0'>
//       <img src={mainBg} alt='Main Background' className='w-full h-full object-cover' />
//     </div>

//     {/* GLOB Image Positioned on Top of mainBg */}
//     <div className='absolute top-5 left-0 w-full h-full z-10'>
//       <img src={GLOB} alt='Globe Background' className='w-full h-full object-cover' />
//     </div>

//     {/* Phone Image Moved Upwards */}
//     <div className='flex justify-center mb-9 relative z-20 bottom-[-5.5rem]'>
//       <img src={phone} alt='Phone' className='w-[12rem] md:w-[20rem]' />
//     </div>
//   </div>

//   {/* Accordion Section without Background */}
//   <div className='relative z-10 w-full px-4'>
//     {data.map((item, index) => (
//       <div key={item.id} className='mb-4 bg-[#DAFDFF] rounded-lg shadow'>
//         <div
//           className='flex justify-between items-center p-4 cursor-pointer'
//           onClick={() => handleToggle(index)}
//         >
//           <div className='flex items-center space-x-4'>
//             <img src={item.icon} alt={item.title} className='w-8 h-8' />
//             <p className='text-lg font-medium'>{item.title}</p>
//           </div>
//           {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
//         </div>
//         {openIndex === index && (
//           <div className='p-4 bg-white rounded-b-lg'>
//             <p className='text-gray-700 text-sm'>{item.content}</p>
//           </div>
//         )}
//       </div>
//     ))}
//   </div>
// </div>




//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;


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
    <section className='w-full h-auto lg:h-[45rem] relative whychooseSection-background flex flex-col mb-20 overflow-hidden'>
      <div className='container mx-auto'>
        <h1 className='text-3xl lg:text-4xl font-bold mb-4 text-center'>Why Choose Us?</h1>
        <h2 className='text-xl lg:text-2xl mb-8 text-center'>A Crypto platform has never been better than this</h2>

        {/* Desktop View */}
        <div className='hidden lg:flex justify-center items-end relative'>
          <div id='cover' className='relative z-10'>
            <img ref={globeRef} src={GLOB} alt='Globe Background' className='relative max-w-full h-auto' />
          </div>

          <div id='content' ref={containerRef} className='h-full w-full absolute top-0 lg:container flex flex-col lg:flex-row justify-around z-20'>
            {/* Left section for icons */}
            <div id='left' className='w-full lg:w-1/3 h-auto flex flex-col justify-around py-10 relative'>
              <div
                className='flex flex-col items-center space-y-2 absolute top-[10%] right-[10%] '
                onMouseEnter={() => handleMouseEnter('icon3')}
                onMouseLeave={handleMouseLeave}
              >
                <div className='border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-16 lg:w-20 h-12 lg:h-16'>
                  <img src={icon3} alt='Safe & Secure' />
                </div>
                <p className='text-center text-base lg:text-xl'>Safe & Secure</p>
              </div>

              <div
                className='flex flex-col items-center space-y-2 absolute top-[36%] right-[45%]'
                onMouseEnter={() => handleMouseEnter('icon1')}
                onMouseLeave={handleMouseLeave}
              >
                <div className='border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-16 lg:w-20 h-12 lg:h-16'>
                  <img src={icon2} alt='Easy To Start' />
                </div>
                <p className='text-center text-base lg:text-xl'>Easy To Start</p>
              </div>

              <div
                className='flex flex-col items-center space-y-2 absolute bottom-[10%] right-[45%]'
                onMouseEnter={() => handleMouseEnter('icon2')}
                onMouseLeave={handleMouseLeave}
              >
                <div className='border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-16 lg:w-20 h-12 lg:h-16'>
                  <img src={icon1} alt='24/7 Support' />
                </div>
                <p className='text-center text-base lg:text-xl'>Convenient Payment Option</p>
              </div>
            </div>


            {/* Center phone image */}
            <div id='center' className='w-full lg:w-1/3 h-full flex justify-center relative'>
            {hoveredIcon && (
                <div className='w-[80%] lg:w-[70%] p-2 lg:p-4 bg-white rounded-xl absolute top-[20%] left-2 z-40'>
                  <p className='text-center text-xs lg:text-sm'>
                    {hoveredIcon === 'icon1' && 'Easy to start, simply give us a call, set an appointment, or visit our office, and you\'ll complete your first trade.'}
                    {hoveredIcon === 'icon2' && 'Convenient payment options in trading, like credit cards and e-wallets, streamline transactions, making it easier for traders to manage investments efficiently.'}
                    {hoveredIcon === 'icon3' && 'Your trades are safe and secure with our advanced security protocols.'}
                    {hoveredIcon === 'icon4' && 'Trading is easy to start with online platforms, educational resources, and small investments, allowing anyone to learn and grow financially.'}
                    {hoveredIcon === 'icon5' && 'Safe and secure trading involves using reputable platforms, implementing strong passwords, and practicing risk management to protect your investments effectively.'}
                    {hoveredIcon === 'icon6' && 'We offer 24/7 support to assist you at any time.'}
                  </p>
                </div>
              )}
              <img src={phone} alt='Phone' className='absolute -bottom-[30%] lg:-bottom-[20%] w-[20rem] lg:w-[36rem]' />
            </div>

            {/* Right section for icons */}
            <div id='right' className='w-full lg:w-1/3 h-auto flex flex-col justify-around py-10 relative'>
              <div
                className='flex flex-col items-center space-y-2 absolute top-[10%] left-[0%] '
                onMouseEnter={() => handleMouseEnter('icon4')}
                onMouseLeave={handleMouseLeave}
              >
                <div className='border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-16 lg:w-20 h-12 lg:h-16'>
                  <img src={icon4} alt='Easy To Start' />
                </div>
                <p className='text-center text-base lg:text-xl'>Instant Order Processing </p>
              </div>

              <div
                className='flex flex-col items-center space-y-2 absolute top-[36%] left-[40%]'
                onMouseEnter={() => handleMouseEnter('icon5')}
                onMouseLeave={handleMouseLeave}
              >
                <div className='border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-16 lg:w-20 h-12 lg:h-16'>
                  <img src={icon5} alt='Safe & Secure' />
                </div>
                <p className='text-center text-base lg:text-xl'>Volatility Protection</p>
              </div>

              <div
                className='flex flex-col items-center space-y-2 absolute bottom-[10%] left-[56%]'
                onMouseEnter={() => handleMouseEnter('icon6')}
                onMouseLeave={handleMouseLeave}
              >
                <div className='border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-16 lg:w-20 h-12 lg:h-16'>
                  <img src={icon6} alt='24/7 Support' />
                </div>
                <p className='text-center text-base lg:text-xl'>24/7 Support</p>
              </div>
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
