import React from 'react';

import location from "../../assets/Images/OtcDesk/section6_location_icon.png";
import Canada from "../../assets/Images/OtcDesk/section6_icon1.png";
import United from "../../assets/Images/OtcDesk/section6_icon2.png";
import UK from "../../assets/Images/OtcDesk/section6_icon3.png";
import Europe from "../../assets/Images/OtcDesk/section6_icon4.png";
import India from "../../assets/Images/OtcDesk/section6_icon5.png";
import Australia from "../../assets/Images/OtcDesk/section6_icon6.png";

const Footprint = () => {
  return (
    <section className="py-10 bg-[#F6F9FC]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-century-gothic font-bold">Our Global Footprint</h2>
        <p className="text-gray-700 font-medium font-antipasto-pro text-lg mt-2">
          Proudly serving the following countries
        </p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block map relative h-[50rem] bg-center bg-cover container mx-auto">
        {/* Canada */}
        <div className="absolute top-[1%] left-[0.1%] flex items-center">
          <div className="relative ml-4 px-2 py-1 bg-white rounded-3xl flex flex-col items-center shadow-lg border border-gray-300">
            <div className="absolute right-2 -bottom-7 w-0 h-0 border-t-[35px] border-t-white border-l-[45px] border-l-transparent">
              <div id="location" className="w-5 h-5">
                <img src={location} alt="location icon" />
              </div>
            </div>
            <div id="img" className="h-9 w-9 bg-cyan-500 rounded-full flex items-center justify-center">
              <img src={Canada} alt="Canada" className="w-8 h-8 rounded-full" />
            </div>
            <div>
              <h4 className="font-bold font-century-gothic text-sm text-center">Canada</h4>
              <p className="text-gray-600 font-century-gothic text-sm">CAD Market Rate</p>
            </div>
          </div>
        </div>

        {/* Add other countries with similar layout for desktop */}

        {/* United States */}
        <div className="absolute top-[17.4%] left-[16.2%] flex items-center">
          <div className="relative ml-4 px-2 py-1 bg-white rounded-3xl flex flex-col items-center shadow-lg border border-gray-300">
            <div className="absolute right-2 -bottom-7 w-0 h-0 border-t-[35px] border-t-white border-l-[45px] border-l-transparent">
              <div id="location" className="w-5 h-5">
                <img src={location} alt="location icon" />
              </div>
            </div>
            <div id="img" className="h-9 w-9 bg-cyan-500 rounded-full flex items-center justify-center">
              <img src={United} alt="United States" className="w-8 h-8 rounded-full" />
            </div>
            <div>
              <h4 className="font-bold font-century-gothic text-sm text-center">United States</h4>
              <p className="text-gray-600 font-century-gothic text-sm">USD Market Rate</p>
            </div>
          </div>
        </div>

        {/* United Kingdom */}
<div className="absolute top-[10.6%] left-[39.5%] flex items-center">
  <div className="relative ml-4 px-2 py-1 bg-white rounded-3xl flex flex-col items-center shadow-lg border border-gray-300">
    <div className="absolute right-2 -bottom-7 w-0 h-0 border-t-[35px] border-t-white border-l-[45px] border-l-transparent">
      <div id="location" className="w-5 h-5">
        <img src={location} alt="location icon" />
      </div>
    </div>
    <div id="img" className="h-9 w-9 bg-cyan-500 rounded-full flex items-center justify-center">
      <img src={UK} alt="United Kingdom" className="w-8 h-8 rounded-full" />
    </div>
    <div>
      <h4 className="font-bold font-century-gothic text-sm text-center">United Kingdom</h4>
      <p className="text-gray-600 font-century-gothic text-sm">GBP Market Rate</p>
    </div>
  </div>
</div>

{/* Europe */}
         <div className="absolute top-[8.9%] left-[56.2%] flex items-center">
         <div className="relative ml-4 px-2 py-1  bg-white rounded-3xl flex flex-col items-center  shadow-lg border border-gray-300">
             <div className="absolute left-2 -bottom-8  w-0 h-0 
                             border-t-[35px] border-t-white
                             border-l-[45px] border-l-transparent -rotate-90  ">
           <div id="location" className=' rotate-90 absolute bottom-6 right-10  w-5 h-5 '>
           <img src={location} alt="" />
           </div>
             </div>
            
            <div id="img" className='h-8 w-8 bg-cyan-500 rounded-full flex items-center justify-center p-0.5'>
             <img src={Europe}
              alt="Canada"
              className="w-7 h-7 rounded-full"/>
             </div>              
             <div>
               <h4 className="font-bold font-century-gothic text-sm text-center">Europe</h4>
               <p className="text-gray-600 font-century-gothic text-sm">EUR Markett Rate</p>
             </div>
           </div>
        </div>

{/* India */}
<div className="absolute top-[25%] left-[65%] flex items-center">
  <div className="relative ml-4 px-2 py-1 bg-white rounded-3xl flex flex-col items-center shadow-lg border border-gray-300">
    <div className="absolute right-2 -bottom-7 w-0 h-0 border-t-[35px] border-t-white border-l-[45px] border-l-transparent">
      <div id="location" className="w-5 h-5">
        <img src={location} alt="location icon" />
      </div>
    </div>
    <div id="img" className="h-9 w-9 bg-cyan-500 rounded-full flex items-center justify-center">
      <img src={India} alt="India" className="w-8 h-8 rounded-full" />
    </div>
    <div>
      <h4 className="font-bold font-century-gothic text-sm text-center">India</h4>
      <p className="text-gray-600 font-century-gothic text-sm">INR Market Rate</p>
    </div>
  </div>
</div>

{/* Australia */}
<div className="absolute top-[53.3%] left-[79%] flex items-center">
  <div className="relative ml-4 px-2 py-1 bg-white rounded-3xl flex flex-col items-center shadow-lg border border-gray-300">
    <div className="absolute right-2 -bottom-7 w-0 h-0 border-t-[35px] border-t-white border-l-[45px] border-l-transparent">
      <div id="location" className="w-5 h-5">
        <img src={location} alt="location icon" />
      </div>
    </div>
    <div id="img" className="h-9 w-9 bg-cyan-500 rounded-full flex items-center justify-center">
      <img src={Australia} alt="Australia" className="w-8 h-8 rounded-full" />
    </div>
    <div>
      <h4 className="font-bold font-century-gothic text-sm text-center">Australia</h4>
      <p className="text-gray-600 font-century-gothic text-sm">AUD Market Rate</p>
    </div>
  </div>
</div>

      </div>

      {/* Mobile and Tablet Layout */}
      <div className=" lg:hidden container mx-auto grid grid-cols-2 gap-6 sm:grid-cols-3 px-6">
        {/* Canada */}
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-300 flex flex-col items-center">
            <img src={Canada} alt="Canada" className="w-12 h-12 mb-3" />
            <h4 className="font-bold font-century-gothic text-base text-center">Canada</h4>
            <p className="text-gray-600 font-century-gothic text-sm">CAD Market Rate</p>
          </div>
        </div>

        {/* United States */}
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-300 flex flex-col items-center">
            <img src={United} alt="United States" className="w-12 h-12 mb-3" />
            <h4 className="font-bold font-century-gothic text-base text-center">United States</h4>
            <p className="text-gray-600 font-century-gothic text-sm">USD Market Rate</p>
          </div>
        </div>

        {/* United Kingdom */}
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-300 flex flex-col items-center">
            <img src={UK} alt="United Kingdom" className="w-12 h-12 mb-3" />
            <h4 className="font-bold font-century-gothic text-base text-center">United Kingdom</h4>
            <p className="text-gray-600 font-century-gothic text-sm">GBP Market Rate</p>
          </div>
        </div>

        {/* Europe */}
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-300 flex flex-col items-center">
            <img src={Europe} alt="Europe" className="w-12 h-12 mb-3" />
            <h4 className="font-bold font-century-gothic text-base text-center">Europe</h4>
            <p className="text-gray-600 font-century-gothic text-sm">EUR Market Rate</p>
          </div>
        </div>

        {/* India */}
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-300 flex flex-col items-center">
            <img src={India} alt="India" className="w-12 h-12 mb-3" />
            <h4 className="font-bold font-century-gothic text-base text-center">India</h4>
            <p className="text-gray-600 font-century-gothic text-sm">INR Market Rate</p>
          </div>
        </div>

        {/* Australia */}
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-300 flex flex-col items-center">
            <img src={Australia} alt="Australia" className="w-12 h-12 mb-3" />
            <h4 className="font-bold font-century-gothic text-base text-center">Australia</h4>
            <p className="text-gray-600 font-century-gothic text-sm">AUD Market Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footprint;



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