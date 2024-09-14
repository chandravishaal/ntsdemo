// import React from 'react'
// import phoneImage from "../../assets/Images/phone.png";


// const EveryDay = () =>  {
//     return (
//                 <section className="Everyday-bg w-full flex items-center justify-center bg-cover bg-center ">

//        
//         <div className="container mx-auto flex flex-col md:flex-row items-center justify-between  ">
          
//           {/* Left Section - Text and Menu */}
//           <div className="flex flex-col justify-center items-start space-y-6 max-w-lg">
//             <h1 className="text-5xl font-century-gothic font-semibold text-primaryCyan mt-0 ">For Everyday Use</h1>
//             <p className="text-gray-800">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut la.
//             </p>
//             <ul className="space-y-3 text-2xl">
//               <li className="text-gray-800 font-antipasto-pro">Buy / Sell</li>
//               <li className="text-gray-800 font-antipasto-pro">Earn</li>
//               <li className="text-gray-800 font-antipasto-pro font-bold flex items-center">
//                 Payment Method <span className="ml-2 font-bold ">→</span>
//               </li>
//               <li className="text-gray-800 font-antipasto-pro ">Academy</li>
//               <li className="text-gray-800 font-antipasto-pro ">Converter</li>
//               <li className="text-gray-800 font-century-gothic">Wallet</li>
//             </ul>
//           </div>
  
//           {/* Right Section - Phone Image and Icons */}
//           <div className="relative mt-8 md:mt-0 md:ml-12 flex justify-center items-center">
//             <div className="relative p-8">
//               {/* Phone Image */}
//               <img
//               src={phoneImage}
//               alt="Crypto Exchange App"
//               className=""
//             />

          
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   };

// export default EveryDay

import React from 'react';
import phoneImage from "../../assets/Images/phone.png";

const EveryDay = () => {
  return (
    <section className="Everyday-bg w-full flex items-center justify-center bg-cover bg-center py-8 md:py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        
        {/* Left Section - Text and Menu */}
        <div className="flex flex-col justify-center items-center md:items-start space-y-4 md:space-y-6 max-w-lg text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-century-gothic font-semibold text-primaryCyan mt-0">
            For Everyday Use
          </h1>
          <p className="text-gray-800 text-sm md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut la.
          </p>
          <ul className="space-y-2 md:space-y-3 text-xl md:text-2xl">
            <li className="text-gray-800 font-antipasto-pro">Buy / Sell</li>
            <li className="text-gray-800 font-antipasto-pro">Earn</li>
            <li className="text-gray-800 font-antipasto-pro font-bold flex items-center justify-center md:justify-start">
              Payment Method <span className="ml-2 font-bold">→</span>
            </li>
            <li className="text-gray-800 font-antipasto-pro">Academy</li>
            <li className="text-gray-800 font-antipasto-pro">Converter</li>
            <li className="text-gray-800 font-century-gothic">Wallet</li>
          </ul>
        </div>

        {/* Right Section - Phone Image */}
        <div className="relative mt-8 md:mt-0 flex justify-center items-center">
          <div className="relative p-4 md:p-8 w-56 sm:w-72 md:w-[30rem] lg:w-[40rem]">
            {/* Phone Image */}
            <img
              src={phoneImage}
              alt="Crypto Exchange App"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EveryDay;
