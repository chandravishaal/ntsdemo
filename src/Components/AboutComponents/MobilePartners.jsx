// import React from "react";

// const MobilePartners = () => {

//   return (
//     <div className="relative px-5">
//       {/* Circular Background with Blur */}
//       <div className="absolute inset-0 flex justify-center items-center">
//         <div className="circlePosition w-[600px] h-[500px] bg-primaryCyan/40 rounded-lg absolute z-1 top-[50%] left-[53%] translate-x-[-5%] translate-y-[-50%] blur-[400px]"></div>
//       </div>

//       <div className="min-h-[30rem] h-auto w-full flex items-center justify-center"> {/* Adjusted height for better responsiveness */}
//         <div
//           id="main"
//           className="md:h-4/6 mx-auto container bg-gradient-to-b from-white to-cyan-50 md:bg-gradient-to-b md:from-white md:to-cyan-50 rounded-lg flex flex-col md:flex-row items-center justify-center overflow-hidden"
//         >
//           <div className="w-full md:w-1/2 text-center md:text-left px-6 md:px-4 md:h-[100%] mt-5 pb-10 md:pb-0 flex flex-col justify-center items-center md:items-start"> {/* Centered and responsive */}
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-antipasto-pro font-bold text-gray-800">
//               We Work With The
//               <span className="text-cyan-400 border-b-2 border-primaryCyan/15 inline-block text-3xl sm:text-4xl md:text-5xl">
//                 Best Partners
//               </span>
//             </h2>

//             <p className="text-gray-500 my-5 font-century-gothic sm:mb-10 mb-20">
//               At North Star Metrics, Our team is dedicated to revolutionising
//               crypto buying and selling, seeking talented individuals to join our
//               dynamic, innovative work environment.
//             </p>
//             <div className="">
//                 <button
//                   className="lg:px-6 lg:py-2.5 px-6 py-3 min-w-[90px] max-w-auto text-md select-none button whitespace-nowrap text-center cursor-pointer lg:text-base text-sm font-semibold transition-all hover:bg-cyan-500 duration-200 outline-none text-black bg-primaryCyan rounded-[100px] shadow-[0_4px_#118baa] font-century-gothic"
//                 >
//                   Become a Partner
//                 </button>
//               </div>

//           </div>

//           <div className="w-full md:w-1/2 h-full px-5 md:h-[100%] flex justify-center items-center">
//             <div className="relative scroll-py-36 px-5">
//               <section className="flex flex-col items-center justify-center relative z-10 min-h-[20rem] sm:min-h-[30rem]"> {/* Responsive height */}
//                 <div className="bg-white/70 w-[250px] sm:w-[370px] h-[250px] sm:h-[370px] flex items-center justify-center rounded-2xl"> {/* Responsive size for smaller screens */}
//                   {/* Square container */}
//                   <div className="grid grid-cols-2 gap-y-8 sm:gap-y-14 gap-x-10 sm:gap-x-20"> {/* Adjusted gap for better alignment on smaller screens */}
//                     <a className="flex flex-col items-center">
//                       <img
//                         src="https://cdn.prod.website-files.com/654506076ba62ddb88e1876a/6548f574e000e21e5fa0ceef_Scorechain%20-%20Webclip.png"
//                         alt="Partner 1"
//                         className="w-16 h-16 sm:w-24 sm:h-24 object-contain"
//                       />
//                       <span className="text-center font-montserrat mt-2 text-sm sm:text-base">Scorechain</span>
//                     </a>
//                     <a className="flex flex-col items-center">
//                       <img
//                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/BitGo_Color_Large.png/330px-BitGo_Color_Large.png"
//                         alt="Partner 2"
//                         className="w-16 h-16 sm:w-24 sm:h-24 object-contain backdrop-blur-sm"
//                       />
//                       <span className="text-center font-montserrat mt-2 text-sm sm:text-base">BitGo</span>
//                     </a>
//                     <a className="flex flex-col items-center">
//                       <img
//                         src="https://crypto.com/__assets/mkt-nav-footer/images/cdc_logo.svg"
//                         alt="Partner 3"
//                         className="w-16 h-16 sm:w-24 bg-gray-700 sm:h-24 object-contain"
//                       />
//                       <span className="text-center font-montserrat mt-2 text-sm sm:text-base">Crypto</span>
//                     </a>
//                     <a className="flex flex-col items-center">
//                       <img
//                         src="https://play-lh.googleusercontent.com/1Os7bEHgceQn6OZROH312Mqj1kp_PHgTZa9XZ1PvnJKvfTvdQAIKzp0jWRP-__1FxA=s188-rw"
//                         alt="Partner 4"
//                         className="w-16 h-16 sm:w-24 sm:h-24 object-contain"
//                       />
//                       <span className="text-center font-montserrat mt-2 text-sm sm:text-base">Sumsub</span>
//                     </a>
//                   </div>
//                 </div>
//               </section>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

// }

// export default MobilePartners



// import React from 'react';
import sumsub from '../../assets/Images/About/sumsub.svg';

const MobilePartners = () => {
  return (
    <div className="relative px-3 py-10">
      {/* Circular Background with Blur */}
      <div className="absolute inset-0 flex justify-center items-center">
        {/* Adjusted size for mobile */}
        <div className="circlePosition w-[200px] h-[200px] bg-primaryCyan/30 rounded-lg absolute z-1 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-30%] blur-[30px]"></div>
      </div>

      <div className="min-h-[20rem] h-auto w-full flex items-center justify-center">
        <div
          id="main"
          className="h-5/6 mx-auto container bg-gradient-to-b from-white to-cyan-50 rounded-lg flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="w-full text-center px-4 mt-5 pb-10 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-antipasto-pro font-bold text-gray-800">
              We Work With The&nbsp; <br />
              <span className="text-cyan-400 border-b-2 border-primaryCyan/15 inline-block text-3xl sm:text-3xl">
                Best Partners
              </span>
            </h2>

            <p className="text-gray-500 my-4 font-century-gothic mb-12 text-sm sm:text-base">
              At North Star Metrics, Our team is dedicated to revolutionizing
              crypto buying and selling, seeking talented individuals to join our
              dynamic, innovative work environment.
            </p>


          </div>

          <div className="w-full h-full px-3 flex justify-center items-center">
            <div className="relative px-3">
              <section className="flex flex-col items-center justify-center relative z-10 min-h-[15rem] sm:min-h-[25rem]">
                <div className="bg-white/70 w-[240px] sm:w-[270px] h-[250px] sm:h-[270px] flex items-center -my-10 justify-center rounded-2xl">
                  {/* Square container */}
                  <div className="grid grid-cols-2 gap-y-8 sm:gap-y-14 gap-x-10 sm:gap-x-20"> 
                    <a href='https://www.scorechain.com/' target='_blank' className="flex flex-col items-center">
                      <img
                        src="https://cdn.prod.website-files.com/654506076ba62ddb88e1876a/6548f574e000e21e5fa0ceef_Scorechain%20-%20Webclip.png"
                        alt="Partner 1"
                        className="w-16 h-16 sm:w-24 sm:h-24 object-contain transition-transform duration-500 ease-in-out hover:scale-110" 
                      />
                      <span className="text-center font-montserrat mt-2 text-sm sm:text-base">Scorechain</span>
                    </a>
                    <a href="https://www.bitgo.com/" target='_blank' className="flex flex-col items-center">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/BitGo_Color_Large.png/330px-BitGo_Color_Large.png"
                        alt="Partner 2"
                        className="w-16 h-16 sm:w-24 sm:h-24 object-contain transition-transform duration-500 ease-in-out hover:scale-110"
                      />
                      <span className="text-center font-montserrat mt-2 text-sm sm:text-base">BitGo</span>
                    </a>
                    <a href="https://crypto.com/" target='_blank' className="flex flex-col items-center">
                      <img
                        src="https://static.intercomassets.com/avatars/5144030/square_128/Logo-1629191123.jpg"
                        alt="Partner 3"
                        className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-700 rounded-md object-contain transition-transform duration-500 ease-in-out hover:scale-110"
                      />
                      <span className="text-center font-montserrat mt-2 text-sm sm:text-base">Crypto.com</span>
                    </a>
                    <a href='https://sumsub.com/' className="flex flex-col items-center">
                      <img
                        src={sumsub}
                        alt="Partner 4"
                        className="w-16 h-16 sm:w-24 sm:h-24 object-contain rounded-md transition-transform duration-500 ease-in-out hover:scale-110"
                      />
                      <span className="text-center font-montserrat mt-2 text-sm sm:text-base">Sumsub</span>
                    </a>
                  </div>
                </div>
                <div className="my-20">
                  <button
                    className="px-4 py-2 min-w-[80px] select-none button whitespace-nowrap text-center cursor-pointer text-sm font-semibold transition-all hover:bg-cyan-500 duration-200 outline-none text-black bg-primaryCyan rounded-full shadow-[0_3px_#118baa] font-century-gothic"
                  >
                    Become a Partner
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePartners;
