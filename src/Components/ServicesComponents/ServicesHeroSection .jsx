
import mobile1 from '../../assets/Images/ServicesImages/hero_mobile.png'
import mobile2 from '../../assets/Images/ServicesImages/hero_bg2.png'
const ServicesHeroSection  = () => {
  return (
    <section className="services-hero-bg  h-[50rem] w-full flex items-center justify-center bg-cover bg-center ">
     <div id="main" className=' container relative bg-cover bg-center bg-no-repeat h-[40rem] flex items-center justify-center p-2  
    '>

      <div id="left" className=' w-1/2 h-full
      space-y-10 text-left flex flex-col  justify-center
      '>
      
             <div id="heading">
           <h2 className="text-3xl md:text-4xl font-century-gothic font-bold text-gray-800">
             The Best Exchange to Buy,<br />
             <span className="text-cyan-400">Sell and Trade Crypto</span>
           </h2>
           </div> 
           <div id="heding2">
           <p className="text-gray-950 text-lg md:text-xl font-antipasto-pro">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />
             eiusmod tempor incididunt ut la.
           </p>
           </div>
           <div id="button">
           <button className="px-6 py-3 font-century-gothic text-lg md:text-xl bg-primaryCyan text-white rounded-full">
             Get Started
           </button>
           </div>
        </div>


      <div id="right"className=' w-1/2 h-full
       
      ' >

        <div id="image" className='relative'>
         <div id="img1" className='w-96 -mb-12 '>
        <img
              src={mobile1}
              alt=""
              className="relative left-40"
            />
            </div>
            <div id="img2" className='w-[50rem] pr-16'>
        <img
              src={mobile2}
              alt=""
              className=""
            />
            </div>

        </div>
         </div>
      </div>
</section>
  )
}

export default ServicesHeroSection 





// import React from 'react';

// const ServicesHeroSection = () => {
//   return (
//     <section
//       className="h-screen w-full flex items-center justify-center bg-cover bg-center"
//       style={{
//         backgroundImage: "url('/src/assets/Images/ServicesImages/hero_bg1.png')",
//       }}
//     >
//       <div
//         className="h-4/6 mx-auto container relative flex flex-col md:flex-row items-center justify-between px-6 md:px-12"
//       >
//         <div className="space-y-5 text-center md:text-left md:w-1/2">
//           <h2 className="text-3xl md:text-4xl font-century-gothic font-bold text-gray-800">
//             The Best Exchange to Buy,<br />
//             <span className="text-cyan-400">Sell and Trade Crypto</span>
//           </h2>
//           <p className="text-gray-950 text-lg md:text-xl font-antipasto-pro">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />
//             eiusmod tempor incididunt ut la.
//           </p>
//           <button className="px-6 py-3 font-century-gothic text-lg md:text-xl bg-primaryCyan text-white rounded-full">
//             Get Started
//           </button>
//         </div>

//         <div className="relative w-full md:w-1/2 h-full mt-8 md:mt-8">
//           <div className="relative">
//             <img
//               src="/src/assets/Images/ServicesImages/hero_bg2.png"
//               alt=""
//               className="relative  -bottom-96 md:-right-10 w-3/4 md:w-full "
//             />
//           </div>
//           <div className="relative">
//             <img
//               src="/src/assets/Images/ServicesImages/hero_mobile.png"
//               alt=""
//               className="absolute -bottom-96 -right-1 md:-right-5 w-72 md:w-96 p-2"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesHeroSection;









