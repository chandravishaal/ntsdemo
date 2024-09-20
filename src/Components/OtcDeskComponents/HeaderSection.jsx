// import React from 'react';
// import '../../index.css';
// import background from '../../assets/Images/OtcDesk/hero_section_background.png';
// import bg from '../../assets/Images/OtcDesk/bg.png';
// import userIcon from '../../assets/Images/OtcDesk/userIcon.png';  
// import emailIcon from '../../assets/Images/OtcDesk/emailIcon.png';
// import phoneIcon from '../../assets/Images/OtcDesk/phoneIcon.png';
// import dealIcon from '../../assets/Images/OtcDesk/dealIcon.png';
// import companyIcon from '../../assets/Images/OtcDesk/companyIcon.png';
// import commentsIcon from '../../assets/Images/OtcDesk/commentsIcon.png';

// const HeaderSection = () => {
//   return (
//     <div
//       className={"bg-cover bg-center h-[100%] w-[100%] flex items-center justify-center relative"}
//       style={{
//         backgroundImage: `url(${background})`,
//       }}
//    >
//         <div className="flex flex-col lg:flex-row items-center justify-between container mx-auto px-[4%] py-[6%] space-y-8 lg:space-y-0 lg:space-x-8">        
//         {/* Left Section (Text) */}
//         <div className={"w-full lg:w-1/2 text-left px-[4%]"}>
//           <h1 className={"text-3xl md:text-4xl jost-uniquifier font-semibold text-black mb-[6%]"}>
//             Cryptocurrency OTC Over The Counter Exchange Desk Serving Globally
//           </h1>
//           <p className={"text-lg lg:text-2xl xl:text-2xl jost-uniquifier text-black mb-[9%]"}>
//             Are you looking for an OTC (Over the Counter) Cryptocurrency Exchange Desk that can offer you several cryptocurrencies within seconds?
//           </p>
//           <button className={"bg-cyan-500 jost-uniquifier text-white px-[6%] py-[3%] rounded-lg font-medium text-lg"}>
//             Get Started Now
//           </button>
//         </div>

//         {/* Right Section (Form) */}
//         <div className={"relative  lg:w-[50%] flex items-center justify-center px-[4%]"}>
//           {/* Form Background */}
//           <img
//   src={bg}
//   className="absolute inset-0 object-cover z-0 w-full h-[105%] lg:w-[90%] lg:h-[100%] p-[7%] lg:p-0 lg:ml-[10%] rounded-lg"
// />


          
//           {/* Form Container */}
//           <div className="relative z-10 w-full lg:w-[110%] mt-11 lg:mt-0 lg:-mr-[12%] max-w-lg lg:p-[9%] p-6 bg-transparent">
//          <h2 className="text-3xl w-full lg:text-4xl jost-uniquifier font-semibold text-white text-center">
//           Contact the OTC desk
//          </h2>
//          <p className="text-white mb-10 lg:mb-12  jost-uniquifier text-center">
//           We will get back to you within one business day.
//           </p>

//          <form className="space-y-4 lg:space-y-6 w-full  jost-uniquifier">
//          {/* Full Name */}
//          <div className="relative">
//       <img
//         src={userIcon}
//         className="absolute top-1/2 transform -translate-y-1/2 left-3 mt-[0.3%] w-30 h-30 ml-[-12%] lg:ml-[-11.9%] lg:w-[32%]"
//       />
//       <input
//         type="text"
//         placeholder="Full name"
//         className="w-full p-3 pl-12 rounded-lg bg-cyan-300 text-cyan-800 placeholder-cyan-800 focus:outline-none lg:p-4 lg:pl-[15%]"
//       />
//     </div>

//     {/* Email */}
//     <div className="relative">
//       <img
//         src={emailIcon}
//         className="absolute top-1/2 transform -translate-y-1/2 left-3 mt-[7.5%] w-30 h-30 ml-[-13.5%] lg:ml-[-13%] lg:w-[32%]"
//       />
//       <input
//         type="email"
//         placeholder="Email address"
//         className="w-full p-3 pl-12 rounded-lg bg-cyan-300 text-cyan-800 placeholder-cyan-800 focus:outline-none lg:p-4 lg:pl-[15%]"
//       />
//     </div>

//     {/* Phone Number */}
//     <div className="relative">
//       <img
//         src={phoneIcon}
//         className="absolute top-1/2 transform -translate-y-1/2 left-3 mt-[7.5%] w-30 h-30 ml-[-13.5%] lg:ml-[-13%] lg:w-[32%]"
//       />
//       <input
//         type="tel"
//         placeholder="Phone number"
//         className="w-full p-3 pl-12 rounded-lg bg-cyan-300 text-cyan-800 placeholder-cyan-800 focus:outline-none lg:p-4 lg:pl-[15%]"
//       />
//     </div>

//     {/* Deal Size */}
//     <div className="relative">
//       <img
//         src={dealIcon}
//         className="absolute top-1/2 transform -translate-y-1/2 left-3 mt-[7.5%] w-30 h-30 ml-[-13.5%] lg:ml-[-13%] lg:w-[32%]"
//       />
//       <input
//         type="text"
//         placeholder="Deal size"
//         className="w-full p-3 pl-12 rounded-lg bg-cyan-300 text-cyan-800 placeholder-cyan-800 focus:outline-none lg:p-4 lg:pl-[15%]"
//       />
//     </div>

//     {/* Company Name */}
//     <div className="relative">
//       <img
//         src={companyIcon}
//         className="absolute top-1/2 transform -translate-y-1/2 left-3 mt-[7.5%] w-30 h-30 ml-[-13.5%] lg:ml-[-13%] lg:w-[32%]"
//       />
//       <input
//         type="text"
//         placeholder="Company name"
//         className="w-full p-3 pl-12 rounded-lg bg-cyan-300 text-cyan-800 placeholder-cyan-800 focus:outline-none lg:p-4 lg:pl-[15%]"
//       />
//     </div>

//     {/* Comments */}
//     <div className="relative">
//       <img
//         src={commentsIcon}
//         className="absolute top-1/2 transform -translate-y-1/2 left-3 mt-[-2%] w-30 h-30 ml-[-12.5%] lg:ml-[-12%] lg:w-[32%] lg:mt-[-2.6%]"
//       />
//       <textarea
//         placeholder="Comments"
//         className="w-full p-3 pl-12 rounded-lg bg-cyan-300 text-cyan-800 placeholder-cyan-800 focus:outline-none lg:p-4 lg:pl-[15%]"
//         rows="2"
//       ></textarea>
//     </div>

//     {/* Submit Button */}
//     <button
//       type="submit"
//       className="w-[50%] bg-cyan-800 text-white p-3 rounded-lg font-medium text-lg lg:p-4 mx-[25%]"    >
//       Get in Touch
//     </button>
//   </form>
// </div>


//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderSection;

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../index.css';
import background from '../../assets/Images/OtcDesk/hero_section_background.png';
import bg from '../../assets/Images/OtcDesk/bg.png';
import userIcon from '../../assets/Images/OtcDesk/userIcon.png';  
import emailIcon from '../../assets/Images/OtcDesk/emailIcon.png';
import phoneIcon from '../../assets/Images/OtcDesk/phoneIcon.png';
import dealIcon from '../../assets/Images/OtcDesk/dealIcon.png';
import companyIcon from '../../assets/Images/OtcDesk/companyIcon.png';
import commentsIcon from '../../assets/Images/OtcDesk/commentsIcon.png';

// Register ScrollTrigger with gsap
gsap.registerPlugin(ScrollTrigger);

const HeaderSection = () => {

  // Define GSAP animations inside useEffect
  useEffect(() => {
    // Animating the left section (text and button)
    gsap.from('.left-section h1', {
      scrollTrigger: {
        trigger: '.header-section',
        start: 'top center', // Animation starts when the section reaches the middle of the viewport
        toggleActions: 'play none none none',
      },
      opacity: 0,
      x: -50,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.left-section p', {
      scrollTrigger: {
        trigger: '.header-section',
        start: 'top center',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      x: -50,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out'
    });

    gsap.from('.left-section button', {
      scrollTrigger: {
        trigger: '.header-section',
        start: 'top center',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
      ease: 'power3.out'
    });

    // Animating the form section
    gsap.from('.form-container', {
      scrollTrigger: {
        trigger: '.header-section',
        start: 'top center',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      scale: 0.4,
      duration: 1,
      ease: 'power3.out'
    });

  }, []); // Empty dependency array to run only once on mount

  return (
    <div
      className={"bg-cover bg-center h-[100%] w-[100%] flex items-center justify-center relative"}
      style={{
        backgroundImage: `url(${background})`,
      }}
   >
        <div className="flex flex-col lg:flex-row items-center justify-between container mx-auto px-[4%] py-[6%] space-y-8 lg:space-y-[-3%] lg:space-x-[2%]">
        {/* Left Section (Text) */}
       <div className={"w-full lg:w-1/2 text-left px-[-2%] lg:ml-[-2%]"}>
       <h1 className={"text-3xl md:text-4xl jost-uniquifier font-semibold text-black mb-[6%] font-montserrat"}>
       Cryptocurrency OTC Over The Counter Exchange Desk Serving Globally
       </h1>
       <p className={"text-lg lg:text-2xl xl:text-2xl jost-uniquifier text-black mb-[9%] font-century-gothic"}>
      Are you looking for an OTC (Over the Counter) Cryptocurrency Exchange Desk that can offer you several cryptocurrencies within seconds?
    </p>

    {/* Button Section */}
    <div className="flex justify-center lg:justify-start w-full">
      <button className="bg-cyan-500 jost-uniquifier text-black px-[6%] py-[3%] rounded-lg font-medium text-lg font-century-gothic">
        Get Started Now
      </button>
    </div>
  </div>



        {/* Right Section (Form) */}
        <div className={"relative  lg:w-[50%] flex items-center justify-center px-[4%]"}>
          {/* Form Background */}
          <div className="absolute inset-0 object-cover z-0  w-full h-[105%] lg:w-[100%] lg:h-[105%] p-[7%] lg:p-0 lg:ml-[10%]">
  <img
    src={bg}
    className="w-full h-full object-cover rounded-3xl"
  />
</div>



          
          {/* Form Container */}
          <div className="relative z-12 w-[95%] lg:w-[110%] mt-10 lg:mt-[2%] lg:-mr-[23%] max-w-lg lg:p-[6%] p-5 bg-transparent font-century-gothic">
         <h2 className="text-3xl w-full lg:text-3xl jost-uniquifier font-semibold text-black text-center">
          Contact the OTC desk
         </h2>
         <p className="text-black mb-[10%] lg:mb-[9%]  jost-uniquifier text-center">
          We will get back to you within one business day.
          </p>

         <form className="space-y-2 lg:space-y-4 w-full  jost-uniquifier">
         {/* Full Name */}
         <div className="relative">
      <img
        src={userIcon}
        className="absolute top-1/2 transform -translate-y-1/2 left-3 mt-[1%] w-30 h-30 ml-[-12%] lg:ml-[-10%] lg:w-[31%] lg:mt-[0.8%]"
      />
      <input
        type="text"
        placeholder="Full name"
        className="w-full p-3 pl-12 rounded-lg bg-cyan-300 text-cyan-800 placeholder-cyan-800 focus:outline-none lg:p-4 lg:pl-[15%]"
      />
    </div>

    {/* Email */}
    <div className="relative">
      <img
        src={emailIcon}
        className="absolute top-1/2 transform -translate-y-1/2 left-3 mt-[8.5%] lg:mt-[7.5%] w-30 h-30 ml-[-13.5%] lg:ml-[-11.5%] lg:w-[31%]"
      />
      <input
        type="email"
        placeholder="Email address"
        className="w-full p-3 pl-12 rounded-lg bg-cyan-300 text-cyan-800 placeholder-cyan-800 focus:outline-none lg:p-4 lg:pl-[15%]"
      />
    </div>

    {/* Phone Number */}
    <div className="relative">
      <img
        src={phoneIcon}
        className="absolute top-1/2 transform -translate-y-1/2 left-3 mt-[8.5%] lg:mt-[7.4%] w-30 h-30 ml-[-13.5%] lg:ml-[-11.5%] lg:w-[31%]"
      />
      <input
        type="tel"
        placeholder="Phone number"
        className="w-full p-3 pl-12 rounded-lg bg-cyan-300 text-cyan-800 placeholder-cyan-800 focus:outline-none lg:p-4 lg:pl-[15%]"
      />
    </div>

    {/* Deal Size */}
    <div className="relative">
      <img
        src={dealIcon}
        className="absolute top-1/2 transform -translate-y-1/2 left-3 mt-[8.5%] lg:mt-[7.3%] w-30 h-30 ml-[-13.5%] lg:ml-[-11.5%] lg:w-[31%]"
      />
      <input
        type="text"
        placeholder="Deal size"
        className="w-full p-3 pl-12 rounded-lg bg-cyan-300 text-cyan-800 placeholder-cyan-800 focus:outline-none lg:p-4 lg:pl-[15%]"
      />
    </div>

    {/* Company Name */}
    <div className="relative">
      <img
        src={companyIcon}
        className="absolute top-1/2 transform -translate-y-1/2 left-3 mt-[8.5%] lg:mt-[7.5%] w-30 h-30 ml-[-13.5%] lg:ml-[-11.5%] lg:w-[31%]"
      />
      <input
        type="text"
        placeholder="Company name"
        className="w-full p-3 pl-12 rounded-lg bg-cyan-300 text-cyan-800 placeholder-cyan-800 focus:outline-none lg:p-4 lg:pl-[15%]"
      />
    </div>

    {/* Comments */}
    <div className="relative">
      <img
        src={commentsIcon}
        className="absolute top-1/2 transform -translate-y-1/2 left-3 mt-[-3%] w-30 h-30 ml-[-12.5%] lg:ml-[-10.5%] lg:w-[31%] lg:mt-[-1.8%]"
      />
      <textarea
        placeholder="Comments"
        className="w-full p-3 pl-12 rounded-lg bg-cyan-300 text-cyan-800 placeholder-cyan-800 focus:outline-none lg:p-4 lg:pl-[15%]"
        rows="2"
      ></textarea>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-[60%] bg-cyan-700 text-white p-3 rounded-lg font-medium text-lg lg:p-4 mx-[20%]" >
      GET IN TOUCH
    </button>
  </form>
</div>


        </div>
      </div>
    </div>
  );
};

export default HeaderSection;