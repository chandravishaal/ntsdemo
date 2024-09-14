
import mobile1 from '../../assets/Images/ServicesImages/hero_mobile.png'
import mobile2 from '../../assets/Images/ServicesImages/hero_bg2.png'

const ServicesHeroSection = () => {
  return (
    <section className="services-hero-bg h-[50rem] w-full flex items-center justify-center bg-cover bg-center">
      <div
        id="main"
        className="container relative bg-cover bg-center bg-no-repeat h-[40rem] flex flex-col md:flex-row items-center justify-center p-2"
      >
        <div
          id="left"
          className=" w-full md:w-1/2 h-full space-y-6 md:space-y-10 text-center md:text-left flex flex-col justify-center"
        >
          <div id="heading">
            <h2 className="text-2xl md:text-4xl font-century-gothic font-bold text-gray-800">
              The Best Exchange to Buy,<br />
              <span className="text-cyan-400">Sell and Trade Crypto</span>
            </h2>
          </div>

          <div id="heding2">
            <p className="text-gray-950 text-lg px-5 md:px-0 md:text-xl font-antipasto-pro">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br className="hidden md:block" />
              eiusmod tempor incididunt ut la.
            </p>
          </div>

          <div id="button">
            <button className="px-4 md:px-6 py-2 md:py-3 font-century-gothic text-sm md:text-xl bg-primaryCyan text-black rounded-full">
              Get Started
            </button>
          </div>
        </div>

        <div id="right" className="w-full md:w-1/2 h-full flex justify-center md:justify-end mt-0  md:mt-0">
          <div id="image" className="relative">
            <div id="img1" className="w-40 md:w-96 -mb-7 md:-mb-12 mx-auto md:mx-0">
              <img src={mobile1} alt="" className="relative md:left-72" />
            </div>
            <div id="img2" className="w-72 md:w-[50rem] pr-0 md:pr-16 mx-auto md:mx-0">
              <img src={mobile2} alt="" className=" md:pl-10 md:ml-10" />
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









