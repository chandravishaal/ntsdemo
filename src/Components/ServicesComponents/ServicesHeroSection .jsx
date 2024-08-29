import React from 'react';

const ServicesHeroSection = () => {
  return (
    <section
      className="h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/src/assets/Images/ServicesImages/hero_bg1.png')",
      }}
    >
      <div id="main"
        className="h-4/6 mx-auto container 
        flex items-center  justify-between absolute">

       
<div className= "absolute md:w-1/2 space-y-5 text-center md:text-left px-6 md:px-12">
          <h2 className="text-4xl font-century-gothic font-bold text-gray-800 ">
          The Best Exchange to Buy,  <br />
            <span className="text-cyan-400 text-4xl">Sell and Trade Crypto</span>
          </h2>
         
          <p className="text-gray-950 text-xl  font-antipasto-pro">
          Lorem ipsum dolor sit amet, consectetur  adipiscing elit, <br />  sed do
          eiusmod tempor incididunt ut la.
           
          </p>
          <button className="px-6 py-3 font-century-gothic text-xl bg-primaryCyan text-white rounded-full ">
          Get Started
        </button>
        </div>
        

       <div id="right" className='relative w-full h-full' >

       <div id="bg">
            <img src="/src/assets/Images/ServicesImages/hero_bg2.png" 
            alt="" className='absolute bottom-0 -right-32 w-3/4'/>
          </div>
          <div id="mobile">
            <img src="/src/assets/Images/ServicesImages/hero_mobile.png" 
            alt="" className='absolute -top-28 -right-1 m-4  w-96'/>
          </div>
          
       </div>
          



      </div>
    </section>
  );
};

export default ServicesHeroSection;













// import React from 'react';

// const ServicesHeroSection = () => {
//   return (
//     <section
//       className="h-screen w-full flex items-center justify-center bg-cover bg-center"
//       style={{
//         backgroundImage: "url('/src/assets/Images/ServicesImages/hero_bg1.png')",
//       }}
//     >
//       <div id="main"
//         className="h-4/6 mx-auto container 
//         flex items-center  justify-between absolute">

       
//         <div id='Left-Section' className=" relative flex flex-col  justify-center items-start space-y-10 p-9 ">
//           <h1 className="text-4xl font-century-gothic font-bold text-black">
//            The Best Exchange to Buy, 
//             <p className="text-primaryCyan">Sell and Trade Crypto</p>
//           </h1>
//           <p className="text-black text-lg">
//             Lorem ipsum dolor sit amet, consectetur  adipiscing elit,  sed do
//             eiusmod tempor incididunt ut la.
//           </p>
//           <button className="px-6 py-3 text-xl bg-primaryCyan text-white rounded-full hover:bg-blue-600">
//             Get Started
//           </button>
//         </div>

//        <div id="right" className='relative w-full h-full' >

//        <div id="bg">
//             <img src="/src/assets/Images/ServicesImages/hero_bg2.png" 
//             alt="" className='absolute bottom-0 -right-36'/>
//           </div>
//           <div id="mobile">
//             <img src="/src/assets/Images/ServicesImages/hero_mobile.png" 
//             alt="" className='relative -top-28 -right-80 w-96'/>
//           </div>
          
//        </div>
          



//       </div>
//     </section>
//   );
// };

// export default ServicesHeroSection;


{/* <div className="relative flex justify-center items-center w-full h-full">
<div className="absolute inset-0">
  <img
    src="/src/assets/Images/ServicesImages/hero_bg2.png"
    alt="Background"
    className="w-full h-full object-cover"
  />
</div>

<div className="relative z-10">
  <img
    src="/src/assets/Images/ServicesImages/hero_mobile.png"
    alt="Crypto Exchange App"
    className="relative w-80 h-auto"
  />

  <div className="absolute -top-8 left-24 bg-white p-2 rounded-full shadow-lg">
    <img
      src="/src/assets/Images/Icons/bitcoin.png"
      alt="Bitcoin Icon"
      className="w-10 h-10"
    />
  </div>
  <div className="absolute top-1/3 -left-10 bg-white p-2 rounded-full shadow-lg">
    <img
      src="/src/assets/Images/Icons/tether.png"
      alt="Tether Icon"
      className="w-10 h-10"
    />
  </div>
  <div className="absolute bottom-1/3 -right-10 bg-white p-2 rounded-full shadow-lg">
    <img
      src="/src/assets/Images/Icons/tron.png"
      alt="Tron Icon"
      className="w-10 h-10"
    />
  </div>
  <div className="absolute -bottom-8 right-24 bg-white p-2 rounded-full shadow-lg">
    <img
      src="/src/assets/Images/Icons/polygon.png"
      alt="Polygon Icon"
      className="w-10 h-10"
    />
  </div>

  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-8 py-4 rounded-full shadow-lg flex items-center space-x-4">
    <button className="bg-primaryCyan text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600">
      BUY
    </button>
    <button className="bg-gray-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-900">
      SELL
    </button>
  </div>
</div>
</div> */}