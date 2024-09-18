// import React from 'react';

// import location from "../../assets/Images/OtcDesk/section6_location_icon.png";
// import Canada from "../../assets/Images/OtcDesk/section6_icon1.png";
// import United from "../../assets/Images/OtcDesk/section6_icon2.png";
// import UK from "../../assets/Images/OtcDesk/section6_icon3.png";
// import Europe from "../../assets/Images/OtcDesk/section6_icon4.png";
// import India from "../../assets/Images/OtcDesk/section6_icon5.png";
// import Australia from "../../assets/Images/OtcDesk/section6_icon6.png";
// import { useState } from 'react';


// const Footprint = () => {
//   return (
//     <section className="py-10 bg-[#F6F9FC]">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-century-gothic font-bold">Our Global Footprint</h2>
//         <p className="text-gray-700 font-medium font-antipasto-pro text-lg mt-2">
//           Proudly serving the following countries
//         </p>
//       </div>

//       <div
//         className=" hidden lg:block map relative h-[50rem] bg-center bg-cover container mx-auto">

//         {/*canada */}
//         <div className="relative h-screen">
//           {/* Parent Container with Group Class */}
//           <div className="absolute top-[14%] left-[12.1%] flex items-center group">
//             {/* Location Icon */}
//             <div id="location" className='w-5 h-5'>
//               <img src={location} alt="Location Icon" />
//             </div>

//             {/* Details Container */}
//             <div className="absolute -top-[7rem] left-[-8rem] hidden group-hover:flex flex-col items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
//               <div className="relative ml-4 px-2 py-1 bg-white rounded-3xl flex flex-col items-center shadow-lg border border-gray-300">
//                 <div className="absolute right-2 -bottom-7 w-0 h-0 
//               border-t-[35px] border-t-white
//               border-l-[45px] border-l-transparent">
//                 </div>
//                 <div id="img" className='h-9 w-9 bg-cyan-500 rounded-full flex items-center justify-center'>
//                   <img src={Canada} alt="Canada" className="w-8 h-8 rounded-full" />
//                 </div>
//                 <div>
//                   <h4 className="font-extrabold text-sm text-center font-century-gothic">Canada</h4>
//                   <p className="text-gray-600 text-sm font-century-gothi  font-antipasto-pro ">CAD Market Rate</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Second Location */}
//         <div className="absolute top-[30%] left-[27.2%] flex items-center group">
//           {/* Location Icon */}
//           <div id="location" className='w-5 h-5'>
//             <img src={location} alt="Location Icon" />
//           </div>

//           {/* Details Container */}
//           <div className="absolute -top-[7rem] left-[-8rem] hidden group-hover:flex flex-col items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
//             <div className="relative ml-4 px-2 py-1 bg-white rounded-3xl flex flex-col items-center shadow-lg border border-gray-300">
//               <div className="absolute right-2 -bottom-7 w-0 h-0 
//               border-t-[35px] border-t-white
//               border-l-[45px] border-l-transparent">
//               </div>
//               <div id="img" className='h-9 w-9 bg-cyan-500 rounded-full flex items-center justify-center'>
//                 <img src={United} alt="United" className="w-8 h-8 rounded-full" />
//               </div>
//               <div>
//                 <h4 className="font-extrabold text-sm text-center font-century-gothic">United</h4>
//                 <p className="text-gray-600 text-sm  font-antipasto-pro ">USD Market Rate</p>
//               </div>
//             </div>
//           </div>
//         </div>


//         {/* UK 
//          */}
//         <div className="absolute top-[24%] left-[51.2%] flex items-center group">
//           {/* Location Icon */}
//           <div id="location" className='w-5 h-5'>
//             <img src={location} alt="Location Icon" />
//           </div>

//           {/* Details Container */}
//           <div className="absolute -top-[7rem] left-[-8rem] hidden group-hover:flex flex-col items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
//             <div className="relative ml-4 px-2 py-1 bg-white rounded-3xl flex flex-col items-center shadow-lg border border-gray-300">
//               <div className="absolute right-2 -bottom-7 w-0 h-0 
//               border-t-[35px] border-t-white
//               border-l-[45px] border-l-transparent">
//               </div>
//               <div id="img" className='h-9 w-9 bg-cyan-500 rounded-full flex items-center justify-center'>
//                 <img src={UK} alt="United" className="w-8 h-8 rounded-full" />
//               </div>
//               <div>
//                 <h4 className="font-extrabold text-sm text-center font-century-gothic">UK</h4>
//                 <p className="text-gray-600 text-sm  font-antipasto-pro ">GBP Markett Rate</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Europe 
//        */}
//         <div className="absolute top-[24%] left-[58.2%] flex items-center group">
//           {/* Location Icon */}
//           <div id="location" className='w-5 h-5'>
//             <img src={location} alt="Location Icon" />
//           </div>

//           {/* Details Container */}
//           <div className="absolute -top-[7rem] left-[-8rem] hidden group-hover:flex flex-col items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
//             <div className="relative ml-4 px-2 py-1 bg-white rounded-3xl flex flex-col items-center shadow-lg border border-gray-300">
//               <div className="absolute right-2 -bottom-7 w-0 h-0 
//               border-t-[35px] border-t-white
//               border-l-[45px] border-l-transparent">
//               </div>
//               <div id="img" className='h-9 w-9 bg-cyan-500 rounded-full flex items-center justify-center'>
//                 <img src={Europe} alt="United" className="w-8 h-8 rounded-full" />
//               </div>
//               <div>
//                 <h4 className="font-extrabold text-sm text-center font-century-gothic">Europe</h4>
//                 <p className="text-gray-600 text-sm  font-antipasto-pro ">EUR Market Rate</p>
//               </div>
//             </div>
//           </div>
//         </div>


//         {/* India 
//         */}
//         <div className="absolute top-[38%] left-[75.2%] flex items-center group">
//           {/* Location Icon */}
//           <div id="location" className='w-5 h-5'>
//             <img src={location} alt="Location Icon" />
//           </div>

//           {/* Details Container */}
//           <div className="absolute -top-[7rem] left-[-8rem] hidden group-hover:flex flex-col items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
//             <div className="relative ml-4 px-2 py-1 bg-white rounded-3xl flex flex-col items-center shadow-lg border border-gray-300">
//               <div className="absolute right-2 -bottom-7 w-0 h-0 
//               border-t-[35px] border-t-white
//               border-l-[45px] border-l-transparent">
//               </div>
//               <div id="img" className='h-9 w-9 bg-cyan-500 rounded-full flex items-center justify-center'>
//                 <img src={India} alt="United" className="w-8 h-8 rounded-full" />
//               </div>
//               <div>
//                 <h4 className="font-extrabold text-sm text-center font-century-gothic">India</h4>
//                 <p className="text-gray-600 text-sm  font-antipasto-pro ">INR Market Rate</p>
//               </div>
//             </div>
//           </div>
//         </div>




//         {/* Australia 
//         */}

//         <div className="absolute top-[67%] left-[91%] flex items-center group">
//           {/* Location Icon */}
//           <div id="location" className='w-5 h-5'>
//             <img src={location} alt="Location Icon" />
//           </div>

//           {/* Details Container */}
//           <div className="absolute -top-[7rem] left-[-8rem] hidden group-hover:flex flex-col items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
//             <div className="relative ml-4 px-2 py-1 bg-white rounded-3xl flex flex-col items-center shadow-lg border border-gray-300">
//               <div className="absolute right-2 -bottom-7 w-0 h-0 
//               border-t-[35px] border-t-white
//               border-l-[45px] border-l-transparent">
//               </div>
//               <div id="img" className='h-9 w-9 bg-cyan-500 rounded-full flex items-center justify-center'>
//                 <img src={Australia} alt="United" className="w-8 h-8 rounded-full" />
//               </div>
//               <div>
//                 <h4 className="font-extrabold text-sm text-center font-century-gothic">Australia</h4>
//                 <p className="text-gray-600 text-sm  font-antipasto-pro ">AUD Market Rate</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile and Tablet Layout */}
//       <div className=" lg:hidden container mx-auto grid grid-cols-2 gap-10 sm:grid-cols-3 px-6">
//         {/* Canada */}
//         <div className="flex flex-col items-center ">
//           <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-300 flex flex-col items-center w-[170px] h-[150px]">
//             <img src={Canada} alt="Canada" className="w-12 h-12 mb-3" />
//             <h4 className="font-bold font-century-gothic text-xl text-center whitespace-nowrap">Canada</h4>
//             <p className="text-gray-600  font-antipasto-pro text-lg whitespace-nowrap">CAD Market Rate</p>
//           </div>
//         </div>

//         {/* United States */}
//         <div className="flex flex-col items-center">
//           <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-300 flex flex-col items-center  w-[170px] h-[150px]">
//             <img src={United} alt="United States" className="w-12 h-12 mb-3" />
//             <h4 className="font-bold font-century-gothic text-xl text-center whitespace-nowrap">United States</h4>
//             <p className="text-gray-600  font-antipasto-pro text-lg whitespace-nowrap">USD Market Rate</p>
//           </div>
//         </div>

//         {/* United Kingdom */}
//         <div className="flex flex-col items-center">
//           <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-300 flex flex-col items-center  w-[170px] h-[150px]">
//             <img src={UK} alt="United Kingdom" className="w-12 h-12 mb-3" />
//             <h4 className="font-bold font-century-gothic text-xl text-center whitespace-nowrap">UK</h4>
//             <p className="text-gray-600  font-antipasto-pro text-lg whitespace-nowrap">GBP Market Rate</p>
//           </div>
//         </div>

//         {/* Europe */}
//         <div className="flex flex-col items-center">
//           <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-300 flex flex-col items-center w-[170px] h-[150px]">
//             <img src={Europe} alt="Europe" className="w-12 h-12 mb-3" />
//             <h4 className="font-bold font-century-gothic text-xl text-center whitespace-nowrap">Europe</h4>
//             <p className="text-gray-600  font-antipasto-pro text-lg whitespace-nowrap">EUR Market Rate</p>
//           </div>
//         </div>

//         {/* India */}
//         <div className="flex flex-col items-center">
//           <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-300 flex flex-col items-center w-[170px] h-[150px]">
//             <img src={India} alt="India" className="w-12 h-12 mb-3" />
//             <h4 className="font-bold font-century-gothic text-xl text-center whitespace-nowrap">India</h4>
//             <p className="text-gray-600  font-antipasto-pro text-lg whitespace-nowrap">INR Market Rate</p>
//           </div>
//         </div>

//         {/* Australia */}
//         <div className="flex flex-col items-center">
//           <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-300 flex flex-col items-center w-[170px] h-[150px]">
//             <img src={Australia} alt="Australia" className="w-12 h-12 mb-3" />
//             <h4 className="font-bold font-century-gothic text-xl text-center whitespace-nowrap">Australia</h4>
//             <p className="text-gray-600  font-antipasto-pro text-lg whitespace-nowrap">AUD Market Rate</p>
//           </div>
//      </div>
//       </div>

//     </section >
//   );
// };

// export default Footprint;

// ==============================animation======================================

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import location from "../../assets/Images/OtcDesk/section6_location_icon.png";
import Canada from "../../assets/Images/OtcDesk/section6_icon1.png";
import United from "../../assets/Images/OtcDesk/section6_icon2.png";
import UK from "../../assets/Images/OtcDesk/section6_icon3.png";
import Europe from "../../assets/Images/OtcDesk/section6_icon4.png";
import India from "../../assets/Images/OtcDesk/section6_icon5.png";
import Australia from "../../assets/Images/OtcDesk/section6_icon6.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Footprint = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const locations = sectionRef.current.querySelectorAll('.location-group');

    // Animate each location icon and popup
    locations.forEach((location, index) => {
      gsap.fromTo(
        location,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2, // Stagger the animations
          scrollTrigger: {
            trigger: location,
            start: 'top 80%', // Start animation when the location is 80% from the top
            end: 'top 20%', // End when 20% from the top
            toggleActions: 'play none none reverse',
            markers: false, // Set to true to see where the triggers are
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-10 bg-[#F6F9FC]" ref={sectionRef}>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-century-gothic font-bold">Our Global Footprint</h2>
        <p className="text-gray-700 font-medium font-antipasto-pro text-lg mt-2">
          Proudly serving the following countries
        </p>
      </div>

      <div className="hidden lg:block map relative h-[50rem] bg-center bg-cover container mx-auto">
        {/* Canada */}
        <div className="location-group absolute top-[14%] left-[12.1%] flex items-center group">
          <div id="location" className="w-5 h-5">
            <img src={location} alt="Location Icon" />
          </div>
          <div className="absolute -top-[7rem] left-[-8rem] hidden group-hover:flex flex-col items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <div className="relative ml-4 px-2 py-1 bg-white rounded-3xl flex flex-col items-center shadow-lg border border-gray-300">
              <div className="absolute right-2 -bottom-7 w-0 h-0 border-t-[35px] border-t-white border-l-[45px] border-l-transparent"></div>
              <div id="img" className="h-9 w-9 bg-cyan-500 rounded-full flex items-center justify-center">
                <img src={Canada} alt="Canada" className="w-8 h-8 rounded-full" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-center font-century-gothic">Canada</h4>
                <p className="text-gray-600 text-sm font-antipasto-pro">CAD Market Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* United States */}
        <div className="location-group absolute top-[30%] left-[27.2%] flex items-center group">
          <div id="location" className="w-5 h-5">
            <img src={location} alt="Location Icon" />
          </div>
          <div className="absolute -top-[7rem] left-[-8rem] hidden group-hover:flex flex-col items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <div className="relative ml-4 px-2 py-1 bg-white rounded-3xl flex flex-col items-center shadow-lg border border-gray-300">
              <div className="absolute right-2 -bottom-7 w-0 h-0 border-t-[35px] border-t-white border-l-[45px] border-l-transparent"></div>
              <div id="img" className="h-9 w-9 bg-cyan-500 rounded-full flex items-center justify-center">
                <img src={United} alt="United" className="w-8 h-8 rounded-full" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-center font-century-gothic">United</h4>
                <p className="text-gray-600 text-sm font-antipasto-pro">USD Market Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* United Kingdom */}
        <div className="location-group absolute top-[24%] left-[51.2%] flex items-center group">
          <div id="location" className="w-5 h-5">
            <img src={location} alt="Location Icon" />
          </div>
          <div className="absolute -top-[7rem] left-[-8rem] hidden group-hover:flex flex-col items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <div className="relative ml-4 px-2 py-1 bg-white rounded-3xl flex flex-col items-center shadow-lg border border-gray-300">
              <div className="absolute right-2 -bottom-7 w-0 h-0 border-t-[35px] border-t-white border-l-[45px] border-l-transparent"></div>
              <div id="img" className="h-9 w-9 bg-cyan-500 rounded-full flex items-center justify-center">
                <img src={UK} alt="United Kingdom" className="w-8 h-8 rounded-full" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-center font-century-gothic">UK</h4>
                <p className="text-gray-600 text-sm font-antipasto-pro">GBP Market Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Europe */}
        <div className="location-group absolute top-[24%] left-[58.2%] flex items-center group">
          <div id="location" className="w-5 h-5">
            <img src={location} alt="Location Icon" />
          </div>
          <div className="absolute -top-[7rem] left-[-8rem] hidden group-hover:flex flex-col items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <div className="relative ml-4 px-2 py-1 bg-white rounded-3xl flex flex-col items-center shadow-lg border border-gray-300">
              <div className="absolute right-2 -bottom-7 w-0 h-0 border-t-[35px] border-t-white border-l-[45px] border-l-transparent"></div>
              <div id="img" className="h-9 w-9 bg-cyan-500 rounded-full flex items-center justify-center">
                <img src={Europe} alt="Europe" className="w-8 h-8 rounded-full" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-center font-century-gothic">Europe</h4>
                <p className="text-gray-600 text-sm font-antipasto-pro">EUR Market Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* India */}
        <div className="location-group absolute top-[38%] left-[75.2%] flex items-center group">
          <div id="location" className="w-5 h-5">
            <img src={location} alt="Location Icon" />
          </div>
          <div className="absolute -top-[7rem] left-[-8rem] hidden group-hover:flex flex-col items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <div className="relative ml-4 px-2 py-1 bg-white rounded-3xl flex flex-col items-center shadow-lg border border-gray-300">
              <div className="absolute right-2 -bottom-7 w-0 h-0 border-t-[35px] border-t-white border-l-[45px] border-l-transparent"></div>
              <div id="img" className="h-9 w-9 bg-cyan-500 rounded-full flex items-center justify-center">
                <img src={India} alt="India" className="w-8 h-8 rounded-full" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-center font-century-gothic">India</h4>
                <p className="text-gray-600 text-sm font-antipasto-pro">INR Market Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Australia */}
        <div className="location-group absolute top-[67%] left-[91%] flex items-center group">
          <div id="location" className="w-5 h-5">
            <img src={location} alt="Location Icon" />
          </div>
          <div className="absolute -top-[7rem] left-[-8rem] hidden group-hover:flex flex-col items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <div className="relative ml-4 px-2 py-1 bg-white rounded-3xl flex flex-col items-center shadow-lg border border-gray-300">
              <div className="absolute right-2 -bottom-7 w-0 h-0 border-t-[35px] border-t-white border-l-[45px] border-l-transparent"></div>
              <div id="img" className="h-9 w-9 bg-cyan-500 rounded-full flex items-center justify-center">
                <img src={Australia} alt="Australia" className="w-8 h-8 rounded-full" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-center font-century-gothic">Australia</h4>
                <p className="text-gray-600 text-sm font-antipasto-pro">AUD Market Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile and Tablet Layout */}
      <div className="lg:hidden container mx-auto grid grid-cols-2 gap-10 sm:grid-cols-3 px-6">
        {/* Mobile Location Cards */}
        <div className="location-group flex flex-col items-center">
          <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-300 flex flex-col items-center w-[170px] h-[150px]">
            <img src={Canada} alt="Canada" className="w-12 h-12 mb-3" />
            <h4 className="font-bold font-century-gothic text-xl text-center whitespace-nowrap">Canada</h4>
            <p className="text-gray-600 font-antipasto-pro text-lg whitespace-nowrap">CAD Market Rate</p>
          </div>
        </div>
        <div className="location-group flex flex-col items-center">
          <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-300 flex flex-col items-center w-[170px] h-[150px]">
            <img src={United} alt="United" className="w-12 h-12 mb-3" />
            <h4 className="font-bold font-century-gothic text-xl text-center whitespace-nowrap">United</h4>
            <p className="text-gray-600 font-antipasto-pro text-lg whitespace-nowrap">USD Market Rate</p>
          </div>
        </div>
        <div className="location-group flex flex-col items-center">
          <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-300 flex flex-col items-center w-[170px] h-[150px]">
            <img src={UK} alt="UK" className="w-12 h-12 mb-3" />
            <h4 className="font-bold font-century-gothic text-xl text-center whitespace-nowrap">UK</h4>
            <p className="text-gray-600 font-antipasto-pro text-lg whitespace-nowrap">GBP Market Rate</p>
          </div>
        </div>


         {/* Europe */}
         <div className="location-group flex flex-col items-center">
           <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-300 flex flex-col items-center w-[170px] h-[150px]">
             <img src={Europe} alt="Europe" className="w-12 h-12 mb-3" />
             <h4 className="font-bold font-century-gothic text-xl text-center whitespace-nowrap">Europe</h4>
             <p className="text-gray-600  font-antipasto-pro text-lg whitespace-nowrap">EUR Market Rate</p>
           </div>
         </div>

         {/* India */}
           <div className="location-group flex flex-col items-center">
             <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-300 flex flex-col items-center w-[170px] h-[150px]">
               <img src={India} alt="India" className="w-12 h-12 mb-3" />
               <h4 className="font-bold font-century-gothic text-xl text-center whitespace-nowrap">India</h4>
               <p className="text-gray-600  font-antipasto-pro text-lg whitespace-nowrap">INR Market Rate</p>
             </div>
           </div>

           {/* Australia */}
           <div className="location-group flex flex-col items-center">
             <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-300 flex flex-col items-center w-[170px] h-[150px]">
               <img src={Australia} alt="Australia" className="w-12 h-12 mb-3" />
               <h4 className="font-bold font-century-gothic text-xl text-center whitespace-nowrap">Australia</h4>
               <p className="text-gray-600  font-antipasto-pro text-lg whitespace-nowrap">AUD Market Rate</p>
             </div>
        </div>

        {/* Add other cards for mobile/tablet view as per previous desktop layout */}
      </div>
    </section>
  );
};

export default Footprint;


// ===========================================================================================================
// import React from 'react';

// import location from "../../assets/Images/OtcDesk/section6_location_icon.png";

// import Canada from "../../assets/Images/OtcDesk/section6_icon1.png";
// import United from "../../assets/Images/OtcDesk/section6_icon2.png";
// import UK from "../../assets/Images/OtcDesk/section6_icon3.png";
// import Europe from "../../assets/Images/OtcDesk/section6_icon4.png";
// import India from "../../assets/Images/OtcDesk/section6_icon5.png";
// import Australia from "../../assets/Images/OtcDesk/section6_icon6.png";






// const Footprint = () => {
//   return (
//     <section className="h-[61rem] py-10 bg-[#F6F9FC]">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-century-gothic font-bold">Our Global Footprint</h2>
//         <p className="text-gray-700 font-medium font-antipasto-pro text-4xl mt-2">
//           Proudly serving the following countries
//         </p>
//       </div>

//       <div
//         className="map relative h-[50rem] bg-center bg-cover container mx-auto">
//         {/* Canada */}
//         <div className="absolute -top-[2%] left-[0.1%] flex  items-center">
//         <div className="relative ml-4 px-2 py-1  bg-white rounded-3xl flex flex-col items-center  shadow-lg border border-gray-300">
//             <div className="absolute right-2 -bottom-7  w-0 h-0 
//                             border-t-[35px] border-t-white
//                             border-l-[45px] border-l-transparent">
//           <div id="location" className='w-5 h-5'>
//           <img src={location} alt="" />
//           </div>
//             </div>
//            <div id="img" className='h-9 w-9 bg-cyan-500 rounded-full flex items-center justify-center '>
//             <img src={Canada}
//              alt="Canada"
//              className="w-8 h-8 rounded-full"/>
//             </div>              
//             <div>
//             <h4 className="font-bold font-century-gothic text-sm text-center">Canada</h4>
//             <p className="text-gray-600 font-century-gothic text-sm"  >CAD Market Rate</p>
//             </div>
//           </div>
//         </div>

       

//         {/* United States */}
//         <div className="absolute top-[16.4%] left-[15.2%] flex items-center">
//         <div className="relative ml-4 px-2 py-1  bg-white rounded-3xl flex flex-col items-center  shadow-lg border border-gray-300">
//             <div className="absolute right-2 -bottom-7  w-0 h-0 
//                             border-t-[35px] border-t-white
//                             border-l-[45px] border-l-transparent">
//           <div id="location" className='w-5 h-5'>
//           <img src={location} alt="" />
//           </div>
//             </div>
//            <div id="img" className='h-8 w-8 bg-cyan-500 rounded-full flex items-center justify-center p-0.5'>
//             <img src={United}
//              alt="Canada"
//              className="w-7 h-7 rounded-full"/>
//             </div>              
//             <div>
//               <h4 className="font-bold font-century-gothic text-sm text-center">United States</h4>
//               <p className="text-gray-600 font-century-gothic text-sm">USD Market Rate</p>
//             </div>
//           </div>
//         </div>

//         {/* UK */}
//         <div className="absolute top-[9%] left-[38%] flex items-center">
//         <div className="relative ml-4 px-2 py-1  bg-white rounded-3xl flex flex-col items-center  shadow-lg border border-gray-300">
//             <div className="absolute right-2 -bottom-7  w-0 h-0 
//                             border-t-[35px] border-t-white
//                             border-l-[45px] border-l-transparent">
//           <div id="location" className='w-5 h-5'>
//           <img src={location} alt="" />
//           </div>
//             </div>
//            <div id="img" className='h-8 w-8 bg-cyan-500 rounded-full flex items-center justify-center p-0.5'>
//             <img src={UK}
//              alt="Canada"
//              className="w-7 h-7 rounded-full"/>
//             </div>              
//             <div>
//               <h4 className="font-bold font-century-gothic text-sm text-center">UK</h4>
//               <p className="text-gray-600 font-century-gothic text-sm">GBP Markett Rate</p>
//             </div>
//           </div>
//         </div>

//         {/* Europe */}
//         <div className="absolute top-[8.9%] left-[56.2%] flex items-center">
//         <div className="relative ml-4 px-2 py-1  bg-white rounded-3xl flex flex-col items-center  shadow-lg border border-gray-300">
//             <div className="absolute left-2 -bottom-8  w-0 h-0 
//                             border-t-[35px] border-t-white
//                             border-l-[45px] border-l-transparent -rotate-90  ">
//           <div id="location" className=' rotate-90 absolute bottom-6 right-10  w-5 h-5 '>
//           <img src={location} alt="" />
//           </div>
//             </div>
            
//            <div id="img" className='h-8 w-8 bg-cyan-500 rounded-full flex items-center justify-center p-0.5'>
//             <img src={Europe}
//              alt="Canada"
//              className="w-7 h-7 rounded-full"/>
//             </div>              
//             <div>
//               <h4 className="font-bold font-century-gothic text-sm text-center">Europe</h4>
//               <p className="text-gray-600 font-century-gothic text-sm">EUR Markett Rate</p>
//             </div>
//           </div>
//         </div>

       

//         {/* India */}
//         <div className="absolute top-[24.4%] left-[64.2%] flex items-center">
//         <div className="relative ml-4 px-2 py-1  bg-white rounded-3xl flex flex-col items-center  shadow-lg border border-gray-300">
//             <div className="absolute right-2 -bottom-7  w-0 h-0 
//                             border-t-[35px] border-t-white
//                             border-l-[45px] border-l-transparent">
//           <div id="location" className='w-5 h-5'>
//           <img src={location} alt="" />
//           </div>
//             </div>
//            <div id="img" className='h-8 w-8 bg-cyan-500 rounded-full flex items-center justify-center p-0.5'>
//             <img src={India}
//              alt="Canada"
//              className="w-7 h-7 rounded-full"/>
//             </div>              
//             <div>
//             <h4 className="font-bold font-century-gothic text-sm text-center">India</h4>
//             <p className="text-gray-600 font-century-gothic text-sm">INR Market Rate</p>
//             </div>
//           </div>
//         </div>

       

//         {/* Australia */}
//         <div className="absolute top-[55%] left-[80%] flex items-center">
//         <div className="relative ml-4 px-2 py-1  bg-white rounded-3xl flex flex-col items-center  shadow-lg border border-gray-300">
//             <div className="absolute right-2 -bottom-7  w-0 h-0 
//                             border-t-[35px] border-t-white
//                             border-l-[45px] border-l-transparent">
//           <div id="location" className='w-5 h-5'>
//           <img src={location} alt="" />
//           </div>
//             </div>
//            <div id="img" className='h-8 w-8 bg-cyan-500 rounded-full flex items-center justify-center p-0.5'>
//             <img src={Australia}
//              alt="Canada"
//              className="w-7 h-7 rounded-full"/>
//             </div>              
//             <div>
//             <h4 className="font-bold font-century-gothic text-sm text-center">Australia</h4>
//             <p className="text-gray-600 font-century-gothic text-sm">AUD Market Rate</p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Footprint;