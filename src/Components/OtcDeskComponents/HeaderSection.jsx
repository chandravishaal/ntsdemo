import React from 'react';
import '../../index.css';
import background from '../../assets/Images/OtcDesk/hero_section_background.png';
import bg from '../../assets/Images/OtcDesk/bg.png';
import userIcon from '../../assets/Images/OtcDesk/userIcon.png';  
import emailIcon from '../../assets/Images/OtcDesk/emailIcon.png';
import phoneIcon from '../../assets/Images/OtcDesk/phoneIcon.png';
import dealIcon from '../../assets/Images/OtcDesk/dealIcon.png';
import companyIcon from '../../assets/Images/OtcDesk/companyIcon.png';
import commentsIcon from '../../assets/Images/OtcDesk/commentsIcon.png';

const HeaderSection = () => {
  return (
    <div
      className={"bg-cover bg-center h-[100%] w-[100%] flex items-center justify-center relative"}
      style={{
        backgroundImage: `url(${background})`,
      }}
   >
        <div className="flex flex-col lg:flex-row items-center justify-between container mx-auto px-[4%] py-[6%] space-y-8 lg:space-y-0 lg:space-x-8">        
        {/* Left Section (Text) */}
        <div className={"w-full lg:w-1/2 text-left px-[4%]"}>
          <h1 className={"text-3xl md:text-4xl jost-uniquifier font-semibold text-black mb-[6%]"}>
            Cryptocurrency OTC Over The Counter Exchange Desk Serving Globally
          </h1>
          <p className={"text-lg lg:text-2xl xl:text-2xl jost-uniquifier text-black mb-[9%]"}>
            Are you looking for an OTC (Over the Counter) Cryptocurrency Exchange Desk that can offer you several cryptocurrencies within seconds?
          </p>
          <button className={"bg-cyan-500 jost-uniquifier text-white px-[6%] py-[3%] rounded-lg font-medium text-lg"}>
            Get Started Now
          </button>
        </div>

        {/* Right Section (Form) */}
        <div className={"relative  lg:w-[50%] flex items-center justify-center px-[4%]"}>
          {/* Form Background */}
          <img
  src={bg}
  className="absolute inset-0 object-cover z-0 w-full h-[105%] lg:w-[90%] lg:h-[100%] p-[7%] lg:p-0 lg:ml-[10%] rounded-lg"
/>


          
          {/* Form Container */}
          <div className="relative z-10 w-full lg:w-[110%] mt-11 lg:mt-0 lg:-mr-[12%] max-w-lg lg:p-[9%] p-6 bg-transparent">
         <h2 className="text-3xl w-full lg:text-4xl jost-uniquifier font-semibold text-white text-center">
          Contact the OTC desk
         </h2>
         <p className="text-white mb-10 lg:mb-12  jost-uniquifier text-center">
          We will get back to you within one business day.
          </p>

         <form className="space-y-4 lg:space-y-6 w-full  jost-uniquifier">
         {/* Full Name */}
         <div className="relative">
      <img
        src={userIcon}
        className="absolute top-1/2 transform -translate-y-1/2 left-3 mt-[0.3%] w-30 h-30 ml-[-12%] lg:ml-[-11.9%] lg:w-[32%]"
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
        className="absolute top-1/2 transform -translate-y-1/2 left-3 mt-[7.5%] w-30 h-30 ml-[-13.5%] lg:ml-[-13%] lg:w-[32%]"
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
        className="absolute top-1/2 transform -translate-y-1/2 left-3 mt-[7.5%] w-30 h-30 ml-[-13.5%] lg:ml-[-13%] lg:w-[32%]"
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
        className="absolute top-1/2 transform -translate-y-1/2 left-3 mt-[7.5%] w-30 h-30 ml-[-13.5%] lg:ml-[-13%] lg:w-[32%]"
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
        className="absolute top-1/2 transform -translate-y-1/2 left-3 mt-[7.5%] w-30 h-30 ml-[-13.5%] lg:ml-[-13%] lg:w-[32%]"
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
        className="absolute top-1/2 transform -translate-y-1/2 left-3 mt-[-2%] w-30 h-30 ml-[-12.5%] lg:ml-[-12%] lg:w-[32%] lg:mt-[-2.6%]"
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
      className="w-[50%] bg-cyan-800 text-white p-3 rounded-lg font-medium text-lg lg:p-4 mx-[25%]"    >
      Get in Touch
    </button>
  </form>
</div>


        </div>
      </div>
    </div>
  );
};

export default HeaderSection;