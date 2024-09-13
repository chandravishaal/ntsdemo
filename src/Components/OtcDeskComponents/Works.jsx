import React from 'react'

import image from "../../assets/Images/OtcDesk/section5_img.png";

import icon1 from "../../assets/Images/OtcDesk/section5_icon1.png";
import icon2 from "../../assets/Images/OtcDesk/section5_icon2.png";
import icon3 from "../../assets/Images/OtcDesk/section5_icon3.png";




const Works = () => {
  return (
    <section
    className="h-[50rem] w-full py-10 bg-cyan-50  ">
     
        <div className="container mx-auto text-center pt-10">
          <h2 className="text-4xl font-century-gothic font-bold text-gray-700 pb-10">How it works</h2>
          <p className="text-gray-500 font-century-gothic   font-extrabold">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy <br /> text of the printing and typesetting industry. 
          </p>
          
      <div id="main" className=' h-[30rem] w-full flex justify-center items-start border-solid '>

<div id="left" className='relative h-[30rem] w-1/3 border-solid'>
   <div id="content" className=''>
     <div id="img"  className='absolute right-0 top-[25%]'>
     <img src={image} alt=""/>
     <img src={icon1} alt="" className='absolute top-10 left-7' />
     <div className="text-9xl font-black text-gray-800 mr-4 absolute top-28 -left-32">1</div>
     <div id="text" className='  h-36 w-60 absolute top-28 -left-16'>
        <h1 className='text-3xl font-semibold font-century-gothic'>Onboarding</h1>
        <p className='px-7 text-sm font-century-gothic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perferendis non ullam tenetur?.
        </p>
    </div>
    </div>
</div>
</div>
<div id="center" className='relative h-[30rem] w-1/3 border-solid '>
   <div id="content" className=''>
     <div id="img"  className='absolute right-0 top-[25%]'>
     <img src={image} alt=""/>
     <img src={icon2} alt="" className='absolute top-10 left-7' />
     <div className="text-9xl font-black text-gray-800 mr-4 absolute top-28 -left-32">2</div>
     <div id="text" className='  h-36 w-60 absolute top-28 -left-16'>
        <h1 className='text-3xl font-semibold font-century-gothic'>Fund Deposit</h1>
        <p className='px-7 text-sm font-century-gothic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perferendis non ullam tenetur?.
        </p>
    </div>
    </div>
</div>
</div>
<div id="right" className='relative h-[30rem] w-1/3 border-solid '>
   <div id="content" className=''>
     <div id="img"  className='absolute right-0 top-[25%]'>
     <img src={image} alt=""/>
     <img src={icon3} alt="" className='absolute top-10 left-7' />
     <div className="text-9xl font-black text-gray-800 mr-4 absolute top-28 -left-32">3</div>
     <div id="text" className='  h-36 w-60 absolute top-28 -left-16'>
        <h1 className='text-3xl font-semibold font-century-gothic'>Settlement</h1>
        <p className='px-7 text-sm font-century-gothic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perferendis non ullam tenetur?.
        </p>
    </div>
    </div>
</div>
</div>
</div>
</div>

    </section>
  )
}

export default Works


// import React from 'react';

// const Works = () => {
//   return (
//     <section
//         className="h-[50rem] w-full py-10 bg-cyan-50">
//       <div className="text-center  ">
//         <h2 className="text-3xl font-semibold mb-4">How it works</h2>
//         <p className="text-gray-600 max-w-2xl mx-auto mb-12">
//           Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
//           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//         </p>
//       </div>

//       <div className="flex justify-center space-x-8 container mx-auto text-center">
//         <div className="flex flex-col items-center">
//           <div className="flex items-center">
//             <div className="text-6xl font-bold text-gray-800 mr-4">1</div>
//             <div className="border-l-4 border-r-4 border-[#00b4d8] px-6 py-4 flex flex-col items-center">
//               <img src="your-icon-url" alt="Onboarding" className="mb-4" />
//               <h3 className="text-xl font-semibold">Onboarding</h3>
//               <p className="text-gray-600 text-center mt-2">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col items-center">
//           <div className="flex items-center">
//             <div className="text-6xl font-bold text-gray-800 mr-4">2</div>
//             <div className="border-l-4 border-r-4 border-[#00b4d8] px-6 py-4 flex flex-col items-center">
//               <img src="your-icon-url" alt="Fund Deposit" className="mb-4" />
//               <h3 className="text-xl font-semibold">Fund Deposit</h3>
//               <p className="text-gray-600 text-center mt-2">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col items-center">
//           <div className="flex items-center">
//             <div className="text-6xl font-bold text-gray-800 mr-4">3</div>
//             <div className="border-l-4 border-r-4 border-[#00b4d8] px-6 py-4 flex flex-col items-center">
//               <img src="/src/assets/Images/ServicesImages/OtcDesk/section5_img.png" alt="Settlement" className="mb-4" />
//               <h3 className="text-xl font-semibold">Settlement</h3>
//               <p className="text-gray-600 text-center mt-2">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//     </section>
//   );
// };

// export default Works;
