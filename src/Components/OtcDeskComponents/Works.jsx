
// You said:
// import image from "../../assets/Images/OtcDesk/section5_img.png";
// import icon1 from "../../assets/Images/OtcDesk/section5_icon1.png";
// import icon2 from "../../assets/Images/OtcDesk/section5_icon2.png";
// import icon3 from "../../assets/Images/OtcDesk/section5_icon3.png";

// import React from 'react'

// const Works = () => {
//   return (
//     <section className="bg-cyan-50 h-auto flex flex-col md:h-[40rem]">
//       <div id="container" className="container mx-auto text-center pt-10">
//          <h2 className="text-4xl font-bold text-gray-700 pb-5 font-montserrat">How it works</h2>
//          <p className="text-gray-500 font-extrabold font-century-gothic px-5">
//            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy <br /> text of the printing and typesetting industry.
//          </p>

//          <div id="main" className="flex flex-col md:flex-row justify-center items-center md:h-[30rem] w-full">
         
//             {/* Left Section */}
//             <div id="left" className="relative flex md:justify-end justify-center items-center mb-10 mt-5 md:mb-0 w-full  md:w-1/3">
//             <div className=" w-[60%] flex justify-end items-center ">
//               <img src={image} alt="Hexagon Shape" className="w-[180px] h-[190px] md:w-[220px] md:h-[270px]" />
//               <div className=" flex justify-center items-center absolute top-[5%] left-[27%] md:top-[6%] md:left-[30%] w-[40vw]  md:w-[30vh] text-center ">
//               <img src={icon1} alt="Icon 1"  />
//               </div>
//               <h1 className="text-5xl md:text-9xl font-black text-gray-800 absolute top-[40%] right-[75%] md:right-[75%]">1</h1>
//               <div className="absolute top-[40%] left-[27%] md:top-[35%] md:left-[28%] w-[40vw]  md:w-[30vh] text-center ">
//                 <p className="text-lg md:text-3xl font-semibold font-montserrat leading-tight  text-center">
//                   Onboarding
//                   <br /> 
//                   <span className="text-xs md:text-sm font-century-gothic">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus 
//                   </span>
//                 </p>
//               </div>
//               </div>
//             </div>

//             {/* Center Section */}
//             <div id="center" className="relative flex md:justify-end justify-center items-center mb-10 mt-5 md:mb-0 w-full  md:w-1/3">
//             <div className=" w-[60%] flex justify-end items-center ">
//               <img src={image} alt="Hexagon Shape" className="w-[180px] h-[190px] md:w-[220px] md:h-[270px]" />
//               <div className=" flex justify-center items-center absolute top-[5%] left-[27%] md:top-[6%] md:left-[30%] w-[40vw]  md:w-[30vh] text-center ">
//               <img src={icon2} alt="Icon 1"  />
//               </div>
//               <h1 className="text-5xl md:text-9xl font-black text-gray-800 absolute top-[40%] right-[75%] md:right-[75%]">2</h1>
//               <div className="absolute top-[40%] left-[27%] md:top-[35%] md:left-[28%] w-[40vw]  md:w-[30vh] text-center ">
//                 <p className="text-lg md:text-3xl font-semibold font-montserrat leading-tight  text-center">
//                   Fund Deposit
//                   <br /> 
//                   <span className="text-xs md:text-sm font-century-gothic">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus 
//                   </span>
//                 </p>
//               </div>
//               </div>
//             </div>

//             {/* Right Section */}
//             <div id="right" className="relative flex md:justify-end justify-center items-center mb-10 mt-5 md:mb-0 w-full  md:w-1/3">
//             <div className=" w-[60%] flex justify-end items-center ">
//               <img src={image} alt="Hexagon Shape" className="w-[180px] h-[190px] md:w-[220px] md:h-[270px]" />
//               <div className=" flex justify-center items-center absolute top-[5%] left-[27%] md:top-[6%] md:left-[30%] w-[40vw]  md:w-[30vh] text-center ">
//               <img src={icon3} alt="Icon 1"  />
//               </div>
//               <h1 className="text-5xl md:text-9xl font-black text-gray-800 absolute top-[40%] right-[75%] md:right-[75%]">3</h1>
//               <div className="absolute top-[40%] left-[27%] md:top-[35%] md:left-[28%] w-[40vw]  md:w-[30vh] text-center ">
//                 <p className="text-lg md:text-3xl font-semibold font-montserrat leading-tight  text-center">
//                   Settlement
//                   <br /> 
//                   <span className="text-xs md:text-sm font-century-gothic ">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus 
//                   </span>
//                 </p>
//               </div>
//               </div>
//             </div>

//          </div>
//       </div>
//     </section>  
  
//   )
// }

// export default Works ;   



import image from "../../assets/Images/OtcDesk/section5_img.png";
import icon1 from "../../assets/Images/OtcDesk/section5_icon1.png";
import icon2 from "../../assets/Images/OtcDesk/section5_icon2.png";
import icon3 from "../../assets/Images/OtcDesk/section5_icon3.png";

import React from 'react'

const Works = () => {
  return (
    <section className="bg-cyan-50 h-auto flex flex-col md:h-auto pb-24">
      <div id="container" className="container mx-auto text-center pt-10">
         <h2 className="text-4xl font-bold text-gray-700 pb-5 font-montserrat">How it works</h2>
         <p className="text-gray-500 font-extrabold font-century-gothic px-5">
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy <br /> text of the printing and typesetting industry.
         </p>
  {/* Mobile Layout */}
  <div className="md:hidden flex flex-col items-center w-full">
          {/* Left Section */}
          <div id="left" className="relative flex md:justify-end justify-center items-center mb-10 mt-5 md:mb-0 w-full  md:w-1/3">
            <div className=" w-[60%] flex justify-end items-center ">
              <img src={image} alt="Hexagon Shape" className="w-[180px] h-[190px] md:w-[220px] md:h-[270px]" />
              <div className=" flex justify-center items-center absolute top-[5%] left-[27%] md:top-[6%] md:left-[30%] w-[40vw]  md:w-[30vh] text-center ">
              <img src={icon1} alt="Icon 1"  />
              </div>
              <h1 className="text-5xl md:text-9xl font-black text-gray-800 absolute top-[40%] right-[75%] md:right-[75%]">1</h1>
              <div className="absolute top-[40%] left-[27%] md:top-[35%] md:left-[28%] w-[40vw]  md:w-[30vh] text-center ">
                <p className="text-lg md:text-3xl font-semibold font-montserrat leading-tight  text-center">
                  Onboarding
                  <br /> 
                  <span className="text-xs md:text-sm font-century-gothic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus 
                  </span>
                </p>
              </div>
              </div>
            </div>

            {/* Center Section */}
            <div id="center" className="relative flex md:justify-end justify-center items-center mb-10 mt-5 md:mb-0 w-full  md:w-1/3">
            <div className=" w-[60%] flex justify-end items-center ">
              <img src={image} alt="Hexagon Shape" className="w-[180px] h-[190px] md:w-[220px] md:h-[270px]" />
              <div className=" flex justify-center items-center absolute top-[5%] left-[27%] md:top-[6%] md:left-[30%] w-[40vw]  md:w-[30vh] text-center ">
              <img src={icon2} alt="Icon 1"  />
              </div>
              <h1 className="text-5xl md:text-9xl font-black text-gray-800 absolute top-[40%] right-[75%] md:right-[75%]">2</h1>
              <div className="absolute top-[40%] left-[27%] md:top-[35%] md:left-[28%] w-[40vw]  md:w-[30vh] text-center ">
                <p className="text-lg md:text-3xl font-semibold font-montserrat leading-tight  text-center">
                  Fund Deposit
                  <br /> 
                  <span className="text-xs md:text-sm font-century-gothic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus 
                  </span>
                </p>
              </div>
              </div>
            </div>

            {/* Right Section */}
            <div id="right" className="relative flex md:justify-end justify-center items-center md:mb-0 w-full  md:w-1/3">
            <div className=" w-[60%] flex justify-end items-center ">
              <img src={image} alt="Hexagon Shape" className="w-[180px] h-[190px] md:w-[220px] md:h-[270px]" />
              <div className=" flex justify-center items-center absolute top-[5%] left-[27%] md:top-[6%] md:left-[30%] w-[40vw]  md:w-[30vh] text-center ">
              <img src={icon3} alt="Icon 1"  />
              </div>
              <h1 className="text-5xl md:text-9xl font-black text-gray-800 absolute top-[40%] right-[75%] md:right-[75%]">3</h1>
              <div className="absolute top-[40%] left-[27%] md:top-[35%] md:left-[28%] w-[40vw]  md:w-[30vh] text-center ">
                <p className="text-lg md:text-3xl font-semibold font-montserrat leading-tight  text-center">
                  Settlement
                  <br /> 
                  <span className="text-xs md:text-sm font-century-gothic ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus 
                  </span>
                </p>
              </div>
              </div>
            </div>
        
        </div>

        {/* Tablet Layout */}
        <div className="hidden flex-col md:flex lg:hidden justify-around items-center w-full h- mt-10 ">
          {/* Step 1 */}
         {/* Left Section */}
         <div id="left" className="relative flex md:justify-end justify-center items-center mb-10 mt-5 md:mb-0 w-full  md:w-1/3">
            <div className=" w-[70%]  flex justify-end items-center ">
              <img src={image} alt="Hexagon Shape" className="w-[180px] h-[200px]" />
              <div className=" flex justify-center items-center absolute top-[5%] -right-[20%]  w-[40vw]  md:w-[30vh] text-center ">
              <img src={icon1} alt="Icon 1"  />
              </div>
              <h1 className="text-7xl  font-black text-gray-800 absolute top-[35%] right-[80%] ">1</h1>
              <div className="absolute top-[35%] left-[20%]  w-[20vw]   text-center ">
                <p className="text-lg  font-semibold font-montserrat leading-tight  text-center">
                  Onboarding
                  <br /> 
                  <span className="text-xs  font-century-gothic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus 
                  </span>
                </p>
              </div>
              </div>
            </div>

            {/* Center Section */}
            <div id="left" className="relative flex md:justify-end justify-center items-center mb-10 mt-5 md:mb-0 w-full  md:w-1/3">
            <div className=" w-[70%]  flex justify-end items-center ">
              <img src={image} alt="Hexagon Shape" className="w-[180px] h-[200px]" />
              <div className=" flex justify-center items-center absolute top-[5%] -right-[20%]  w-[40vw]  md:w-[30vh] text-center ">
              <img src={icon2} alt="Icon 1"  />
              </div>
              <h1 className="text-7xl  font-black text-gray-800 absolute top-[35%] right-[80%] ">2</h1>
              <div className="absolute top-[35%] left-[20%]  w-[20vw]   text-center ">
                <p className="text-lg  font-semibold font-montserrat leading-tight  text-center">
                Fund Deposit
                  <br /> 
                  <span className="text-xs  font-century-gothic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus 
                  </span>
                </p>
              </div>
              </div>
            </div>

            {/* Right Section */}
            <div id="left" className="relative flex md:justify-end justify-center items-center mb-10 mt-5 md:mb-0 w-full  md:w-1/3">
            <div className=" w-[70%]  flex justify-end items-center ">
              <img src={image} alt="Hexagon Shape" className="w-[180px] h-[200px]" />
              <div className=" flex justify-center items-center absolute top-[5%] -right-[20%]  w-[40vw]  md:w-[30vh] text-center ">
              <img src={icon3} alt="Icon 1"  />
              </div>
              <h1 className="text-7xl  font-black text-gray-800 absolute top-[35%] right-[80%] ">3</h1>
              <div className="absolute top-[35%] left-[20%]  w-[20vw]   text-center ">
                <p className="text-lg  font-semibold font-montserrat leading-tight  text-center">
                Settlement
                  <br /> 
                  <span className="text-xs  font-century-gothic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus 
                  </span>
                </p>
              </div>
              </div>
            </div>
        </div>

        {/* laptop view */}
         <div id="main" className="hidden lg:flex justify-center items-center w-full mt-10
         ">
         
            {/* Left Section */}
            <div id="left" className="relative flex md:justify-end justify-center items-center mb-10 mt-5 md:mb-0 w-full  md:w-1/3">
            <div className=" w-[60%] flex justify-end items-center ">
              <img src={image} alt="Hexagon Shape" className="w-[180px] h-[190px] md:w-[220px] md:h-[270px]" />
              <div className=" flex justify-center items-center absolute top-[5%] left-[27%] md:top-[6%] md:left-[30%] w-[40vw]  md:w-[30vh] text-center ">
              <img src={icon1} alt="Icon 1"  />
              </div>
              <h1 className="text-5xl md:text-9xl font-black text-gray-800 absolute top-[40%] right-[75%] md:right-[75%]">1</h1>
              <div className="absolute top-[40%] left-[27%] md:top-[35%] md:left-[28%] w-[40vw]  md:w-[30vh] text-center ">
                <p className="text-lg md:text-3xl font-semibold font-montserrat leading-tight  text-center">
                  Onboarding
                  <br /> 
                  <span className="text-xs md:text-sm font-century-gothic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus 
                  </span>
                </p>
              </div>
              </div>
            </div>

            {/* Center Section */}
            <div id="center" className="relative flex md:justify-end justify-center items-center mb-10 mt-5 md:mb-0 w-full  md:w-1/3">
            <div className=" w-[60%] flex justify-end items-center ">
              <img src={image} alt="Hexagon Shape" className="w-[180px] h-[190px] md:w-[220px] md:h-[270px]" />
              <div className=" flex justify-center items-center absolute top-[5%] left-[27%] md:top-[6%] md:left-[30%] w-[40vw]  md:w-[30vh] text-center ">
              <img src={icon2} alt="Icon 1"  />
              </div>
              <h1 className="text-5xl md:text-9xl font-black text-gray-800 absolute top-[40%] right-[75%] md:right-[75%]">2</h1>
              <div className="absolute top-[40%] left-[27%] md:top-[35%] md:left-[28%] w-[40vw]  md:w-[30vh] text-center ">
                <p className="text-lg md:text-3xl font-semibold font-montserrat leading-tight  text-center">
                  Fund Deposit
                  <br /> 
                  <span className="text-xs md:text-sm font-century-gothic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus 
                  </span>
                </p>
              </div>
              </div>
            </div>

            {/* Right Section */}
            <div id="right" className="relative flex md:justify-end justify-center items-center mb-10 mt-5 md:mb-0 w-full  md:w-1/3">
            <div className=" w-[60%] flex justify-end items-center ">
              <img src={image} alt="Hexagon Shape" className="w-[180px] h-[190px] md:w-[220px] md:h-[270px]" />
              <div className=" flex justify-center items-center absolute top-[5%] left-[27%] md:top-[6%] md:left-[30%] w-[40vw]  md:w-[30vh] text-center ">
              <img src={icon3} alt="Icon 1"  />
              </div>
              <h1 className="text-5xl md:text-9xl font-black text-gray-800 absolute top-[40%] right-[75%] md:right-[75%]">3</h1>
              <div className="absolute top-[40%] left-[27%] md:top-[35%] md:left-[28%] w-[40vw]  md:w-[30vh] text-center ">
                <p className="text-lg md:text-3xl font-semibold font-montserrat leading-tight  text-center">
                  Settlement
                  <br /> 
                  <span className="text-xs md:text-sm font-century-gothic ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus 
                  </span>
                </p>
              </div>
              </div>
            </div>

         </div>
      </div>
    </section>  
  
  )
}

export default Works







// Register ScrollTrigger with GSAP
// gsap.registerPlugin(ScrollTrigger);

// const Works = () => {
//   useEffect(() => {
//     // GSAP animation for each hexagon section
//     gsap.from(".hexagon-section", {
//       opacity: 0,
//       y: 100,
//       duration: 1.5,
//       stagger: 0.7,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: "#main", // Target the main container of the section
//         start: "top 70%", // Animation starts when the top of the section hits 80% of the viewport
//         end: "bottom 20%", // Animation ends when the bottom hits 20%
//         toggleActions: "play none none reset", // Play animation on enter, reverse on exit
//       },
//     });
//   }, []);

//   return (
//     <section className="py-10 bg-cyan-50">
//       <div className="container mx-auto text-center pt-10">
//         <h2 className="text-4xl font-bold text-gray-700 pb-5 font-montserrat">How it works</h2>
//         <p className="text-gray-500 font-extrabold font-century-gothic px-5">
//           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy <br /> text of the printing and typesetting industry.
//         </p>

//         {/* Main Content */}
//         <div id="main" className="flex flex-col md:flex-row justify-center items-center pl-24 md:pl-24 pb-24 md:space-x-20  space-y-10 md:space-y-0 mt-10">

//           {/* Left Section */}
//           <div id="left" className="relative flex flex-col items-center md:w-1/3 w-full hexagon-section ml-10 md:ml-0">
//             <div className="relative flex flex-col items-center">
//               <img src={image} alt="Hexagon Shape" className="w-[220px] h-[240px]" />
//               <img src={icon1} alt="Icon 1" className="absolute top-10 left-7" />
//               <div className="text-9xl font-black text-gray-800 absolute top-24 -left-32">1</div>
//               <div className="absolute top-24 -left-16 w-60 text-center">
//                 <h1 className="text-3xl font-semibold  font-montserrat">Onboarding</h1>
//                 <p className="px-7 text-sm font-century-gothic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perferendis non ullam tenetur?</p>
//               </div>
//             </div>
//           </div>

//           {/* Center Section */}
//           <div id="center" className="relative flex flex-col items-center md:w-1/3 w-full hexagon-section ml-10 md:ml-0">
//             <div className="relative flex flex-col items-center">
//               <img src={image} alt="Hexagon Shape" className="w-[220px] h-[240px]" />
//               <img src={icon2} alt="Icon 2" className="absolute top-10 left-7" />
//               <div className="text-9xl font-black text-gray-800 absolute top-24 -left-32">2</div>
//               <div className="absolute top-24 -left-16 w-60 text-center">
//                 <h1 className="text-3xl font-semibold font-montserrat">Fund Deposit</h1>
//                 <p className="px-7 text-sm font-century-gothic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perferendis non ullam tenetur?</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div id="right" className="relative flex flex-col items-center md:w-1/3 w-full hexagon-section ml-10 md:ml-0">
//             <div className="relative flex flex-col items-center">
//               <img src={image} alt="Hexagon Shape" className="w-[220px] h-[240px]" />
//               <img src={icon3} alt="Icon 3" className="absolute top-10 left-7" />
//               <div className="text-9xl font-black text-gray-800 absolute top-24 -left-32">3</div>
//               <div className="absolute top-24 -left-16 w-60 text-center">
//                 <h1 className="text-3xl font-semibold font-montserrat">Settlement</h1>
//                 <p className="px-7 text-sm font-century-gothic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perferendis non ullam tenetur?</p>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Works;
