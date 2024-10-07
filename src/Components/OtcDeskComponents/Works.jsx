
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
//==================================================================================


// import image from "../../assets/Images/OtcDesk/section5_img.png";
// import icon1 from "../../assets/Images/OtcDesk/section5_icon1.png";
// import icon2 from "../../assets/Images/OtcDesk/section5_icon2.png";
// import icon3 from "../../assets/Images/OtcDesk/section5_icon3.png";

// import React, { useEffect } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const Works = () => {
//   useEffect(() => {
//     gsap.from('.animate-section', {
//       opacity: 0,
//        y: 50,
//        duration: 1.5,
//        stagger: 0.4,
//        ease: "power2.out",
//        scrollTrigger: {
//          trigger: "#main", // Target the main container of the section
//          start: "top 80%", // Animation starts when the top of the section hits 80% of the viewport
//          end: "bottom 20%", // Animation ends when the bottom hits 20%
//          toggleActions: "play none none reset", // Play animation on enter, reverse on exit
//       },
//     });


   

//   }, []);
//   return (
//     <section className="bg-cyan-50 h-auto flex flex-col md:h-auto pb-24">
//       <div id="container" className="container mx-auto text-center pt-10">
//          <h2 className="text-4xl font-bold text-gray-700 pb-5 font-montserrat">How it works</h2>
//          <p className="text-gray-500 font-extrabold font-century-gothic px-5">
//            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy <br /> text of the printing and typesetting industry.
//          </p>
//   {/* Mobile Layout */}
//   <div className="md:hidden flex flex-col items-center w-full">
//           {/* Left Section */}
//           <div id="left" className="relative flex md:justify-end justify-center items-center mb-10 mt-5 md:mb-0 w-full  md:w-1/3 ">
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
//             <div id="center" className="relative flex md:justify-end justify-center items-center mb-10 mt-5 md:mb-0 w-full  md:w-1/3 ">
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
//             <div id="right" className="relative flex md:justify-end justify-center items-center md:mb-0 w-full  md:w-1/3 ">
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
        
//         </div>

//         {/* Tablet Layout */}
//         <div className="hidden flex-col md:flex lg:hidden justify-around items-center w-full h- mt-10 ">
//           {/* Step 1 */}
//          {/* Left Section */}
//          <div id="left" className="relative flex md:justify-end justify-center items-center mb-10 mt-5 md:mb-0 w-full  md:w-1/3 ">
//             <div className=" w-[70%]  flex justify-end items-center  ">
//               <img src={image} alt="Hexagon Shape" className="w-[180px] h-[200px]" />
//               <div className=" flex justify-center items-center absolute top-[5%] -right-[20%]  w-[40vw]  md:w-[30vh] text-center ">
//               <img src={icon1} alt="Icon 1"  />
//               </div>
//               <h1 className="text-7xl  font-black text-gray-800 absolute top-[35%] right-[80%] ">1</h1>
//               <div className="absolute top-[35%] left-[20%]  w-[20vw]   text-center ">
//                 <p className="text-lg  font-semibold font-montserrat leading-tight  text-center">
//                   Onboarding
//                   <br /> 
//                   <span className="text-xs  font-century-gothic">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus 
//                   </span>
//                 </p>
//               </div>
//               </div>
//             </div>

//             {/* Center Section */}
//             <div id="left" className="relative flex md:justify-end justify-center items-center mb-10 mt-5 md:mb-0 w-full  md:w-1/3 ">
//             <div className=" w-[70%]  flex justify-end items-center ">
//               <img src={image} alt="Hexagon Shape" className="w-[180px] h-[200px]" />
//               <div className=" flex justify-center items-center absolute top-[5%] -right-[20%]  w-[40vw]  md:w-[30vh] text-center ">
//               <img src={icon2} alt="Icon 1"  />
//               </div>
//               <h1 className="text-7xl  font-black text-gray-800 absolute top-[35%] right-[80%] ">2</h1>
//               <div className="absolute top-[35%] left-[20%]  w-[20vw]   text-center ">
//                 <p className="text-lg  font-semibold font-montserrat leading-tight  text-center">
//                 Fund Deposit
//                   <br /> 
//                   <span className="text-xs  font-century-gothic">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus 
//                   </span>
//                 </p>
//               </div>
//               </div>
//             </div>

//             {/* Right Section */}
//             <div id="left" className="relative flex md:justify-end justify-center items-center mb-10 mt-5 md:mb-0 w-full  md:w-1/3 ">
//             <div className=" w-[70%]  flex justify-end items-center ">
//               <img src={image} alt="Hexagon Shape" className="w-[180px] h-[200px]" />
//               <div className=" flex justify-center items-center absolute top-[5%] -right-[20%]  w-[40vw]  md:w-[30vh] text-center ">
//               <img src={icon3} alt="Icon 1"  />
//               </div>
//               <h1 className="text-7xl  font-black text-gray-800 absolute top-[35%] right-[80%] ">3</h1>
//               <div className="absolute top-[35%] left-[20%]  w-[20vw]   text-center ">
//                 <p className="text-lg  font-semibold font-montserrat leading-tight  text-center">
//                 Settlement
//                   <br /> 
//                   <span className="text-xs  font-century-gothic">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus 
//                   </span>
//                 </p>
//               </div>
//               </div>
//             </div>
//         </div>

//         {/* laptop view */}
//          <div id="main" className="hidden lg:flex justify-center items-center w-full mt-10
//          ">
         
//             {/* Left Section */}
//             <div id="left" className="relative flex md:justify-end justify-center items-center mb-10 mt-5 md:mb-0 w-full  md:w-1/3 animate-section">
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
//             <div id="center" className="relative flex md:justify-end justify-center items-center mb-10 mt-5 md:mb-0 w-full  md:w-1/3 animate-section">
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
//             <div id="right" className="relative flex md:justify-end justify-center items-center mb-10 mt-5 md:mb-0 w-full  md:w-1/3 animate-section">
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

// export default Works;
//==================================================================================

// import image from "../../assets/Images/OtcDesk/section5_img.png";
// import icon1 from "../../assets/Images/OtcDesk/section5_icon1.png";
// import icon2 from "../../assets/Images/OtcDesk/section5_icon2.png";
// import icon3 from "../../assets/Images/OtcDesk/section5_icon3.png";

// import React, { useEffect, useState } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

// //Register ScrollTrigger with GSAP
// gsap.registerPlugin(ScrollTrigger);

// const Works = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const totalSlides = 3;

//   useEffect(() => {
//     // GSAP animation for each hexagon section
//     gsap.from(".hexagon-section", {
//       opacity: 0,
//       y: 50,
//       duration: 1,
//       stagger: 0.5,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: "#main",
//         start: "top 80%",
//         end: "bottom 20%",
//         toggleActions: "play none none reset",
//       },
//     });
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
//   };

//   const slides = [
//     {
//       icon: icon1,
//       number: 1,
//       title: "Onboarding",
//       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//     {
//       icon: icon2,
//       number: 2,
//       title: "Fund Deposit",
//       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//     {
//       icon: icon3,
//       number: 3,
//       title: "Settlement",
//       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//   ];

//   return (
//     <section className="py-8 bg-cyan-50">
//       <div className="container mx-auto text-center px-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-700 pb-3 font-montserrat">How it works</h2>
//         <p className="text-sm md:text-base text-gray-500 font-extrabold font-century-gothic">
//           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//         </p>

//         {/* Main Content */}
//         <div id="main" className="mt-8">
//           {/* Desktop View */}
//           <div className="hidden md:flex flex-row justify-center items-center space-x-10 lg:space-x-20">
//             {slides.map((slide, index) => (
//               <div key={index} className="relative flex flex-col items-center md:w-1/3 w-full hexagon-section">
//                 <div className="relative flex flex-col items-center">
//                   <img src={image} alt="Hexagon Shape" className="w-[180px] h-[200px] lg:w-[220px] lg:h-[240px]" />
//                   <img src={slide.icon} alt={`Icon ${slide.number}`} className="absolute top-8 left-6 w-10 h-10" />
//                   <div className="text-7xl lg:text-9xl font-black text-gray-800 absolute top-20 -left-24">{slide.number}</div>
//                   <div className="absolute top-20 -left-12 w-48 text-center">
//                     <h1 className="text-2xl lg:text-3xl font-semibold font-montserrat">{slide.title}</h1>
//                     <p className="px-4 text-xs lg:text-sm font-century-gothic">{slide.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Mobile and Tablet View */}
//           <div className="md:hidden relative">
//             <div className="overflow-hidden">
//               <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//                 {slides.map((slide, index) => (
//                   <div key={index} className="w-full flex-shrink-0">
//                     <div className="relative flex flex-col items-end pr-16">
//                       <img src={image} alt="Hexagon Shape" className="w-[150px] h-[170px]" />
//                       <div className="text-6xl font-black text-gray-800 absolute top-16 left-[10%]">{slide.number}</div>
//                       <div className="absolute top-16 left-[35%] w-40 text-center">
//                       <img src={slide.icon} alt={`Icon ${slide.number}`} className="absolute -top-9 left-[38%] w-8 h-8" />
//                         <h1 className="text-xl font-semibold font-montserrat">{slide.title}</h1>
//                         <p className="px-2 text-xs font-century-gothic">{slide.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full text-sm">
//               &#8592;
//             </button>
//             <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full text-sm">
//               &#8594;
//             </button>
//             <div className="flex justify-center mt-4">
//               {slides.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentSlide(index)}
//                   className={`h-2 w-2 mx-1 rounded-full ${currentSlide === index ? 'bg-gray-800' : 'bg-gray-300'}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Works;
//==================================================================================

//filan v-1

//  import image from "../../assets/Images/OtcDesk/section5_img.png";
//  import icon1 from "../../assets/Images/OtcDesk/section5_icon1.png";
//  import icon2 from "../../assets/Images/OtcDesk/section5_icon2.png";
//  import icon3 from "../../assets/Images/OtcDesk/section5_icon3.png";

//  import React from 'react'
 
//  const Works = () => {
//    return (
//     <section className="bg-cyan-50 py-8 sm:py-12 md:py-24 md:h-[80rem] lg:h-[45rem] h-auto">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-gray-700 pb-5 font-montserrat text-center">How it works</h2>
//         <p className="text-gray-500 font-extrabold font-century-gothic px-5 text-center mb-12">
//           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy <br /> text of the printing and typesetting industry.
//         </p>
//         <div className="flex flex-col md:flex-row justify-between gap-6 relative items-center">
//           <div className="w-full md:w-1/3 h-full flex justify relative">
//             <img src={image} alt="Hexagon Shape" className="w-[75%] h-auto  relative" />
//             {/* Left content */}
//             <div id="content" className="flex flex-col justify-center items-center absolute right-[15%] top-[15%]">
//               <div className="absolute top-[25%] -left-[25%]">
//                 <h1 className="text-9xl font-black text-gray-800">1</h1>
//               </div>
//               <img src={icon1} alt="Icon 1" className="w-16 h-16 mx-auto mb-4" />
//               <h1 className="text-3xl font-semibold font-montserrat mb-2">Onboarding</h1>
//               <p className="px-2 text-sm font-century-gothic w-[15rem] text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, nihil?</p>
//             </div>
//           </div>

//           <div className="w-full md:w-1/3 h-full flex justify-end border relative">
//             <img src={image} alt="Hexagon Shape" className="w-[75%] h-auto  relative" />
//             {/* Center content */}
//             <div id="content" className="flex flex-col justify-center items-center absolute right-[15%] top-[15%]">
//               <div className="absolute top-[25%] -left-[25%]">
//                 <h1 className="text-9xl font-black text-gray-800">2</h1>
//               </div>
//               <img src={icon2} alt="Icon 2" className="w-16 h-16 mx-auto mb-4" />
//               <h1 className="text-3xl font-semibold font-montserrat mb-2">Fund Deposit</h1>
//               <p className="px-2 text-sm font-century-gothic w-[15rem] text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, nihil?</p>
//             </div>
//           </div>

//           <div className="w-full md:w-1/3 h-full flex justify-end border relative">
//             <img src={image} alt="Hexagon Shape" className="w-[75%] h-auto  relative" />
//             {/* Right content */}
//             <div id="content" className="flex flex-col justify-center items-center absolute right-[15%] top-[15%]">
//               <div className="absolute top-[25%] -left-[25%]">
//                 <h1 className="text-9xl font-black text-gray-800">3</h1>
//               </div>
//               <img src={icon3} alt="Icon 3" className="w-16 h-16 mx-auto mb-4" />
//               <h1 className="text-3xl font-semibold font-montserrat mb-2">Settlement</h1>
//               <p className="px-2 text-sm font-century-gothic w-[15rem] text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, nihil?</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//    )
//  }
 
//  export default Works
 
//==================================================================================
//filan v-2
 import image from "../../assets/Images/OtcDesk/section5_img.png";
 import icon1 from "../../assets/Images/OtcDesk/section5_icon1.png";
 import icon2 from "../../assets/Images/OtcDesk/section5_icon2.png";
 import icon3 from "../../assets/Images/OtcDesk/section5_icon3.png";

 import React, { useState, useEffect, useRef } from 'react'
 import gsap from 'gsap';
 import { ScrollTrigger } from 'gsap/ScrollTrigger';

 gsap.registerPlugin(ScrollTrigger);
 
 const Works = () => {
   const [currentSlide, setCurrentSlide] = useState(0);
   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
   const sectionRef = useRef(null);

   useEffect(() => {
     const handleResize = () => {
       setIsMobile(window.innerWidth < 768);
     };
     window.addEventListener('resize', handleResize);

     // GSAP animation
     gsap.from("#main > div", {
       opacity: 0,
       y: 50,
       duration: 1.5,
       stagger: 0.4,
       ease: "power2.out",
       scrollTrigger: {
         trigger: sectionRef.current,
         start: "top 80%",
         end: "bottom 20%",
         toggleActions: "play none none reset",
       },
     });

     return () => window.removeEventListener('resize', handleResize);
   }, []);

   const slides = [
     { number: 1, icon: icon1, title: "Onboarding", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Blanditiis, nihil?" },
     { number: 2, icon: icon2, title: "Fund Deposit", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, nihil?" },
     { number: 3, icon: icon3, title: "Settlement", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, nihil?" },
   ];

   const goToSlide = (index) => {
     setCurrentSlide(index);
   };

   return (
    <section ref={sectionRef} className="bg-cyan-50 py-8 sm:py-12 md:py-12 lg:h-[40rem] h-auto">
      <div className="container mx-auto px-10">
        <h2 className="text-4xl font-bold text-gray-700 pb-5 font-montserrat text-center">How it works</h2>
        <p className="text-gray-500 font-extrabold font-century-gothic px-5 text-center mb-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy <br /> text of the printing and typesetting industry.
        </p>
        {window.innerWidth < 345 ? (
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex   transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative flex flex-col border ">
                      <img src={image} alt="Hexagon Shape" className="w-[99%] h-[40%] relative" />
                      <div id="content" className="  flex flex-col  absolute inset-0 top-[18%] -left-[5%]">
                      <div className=" text-center absolute left-5">
                        <div className="absolute top-[50%] -left-[5%]  ">
                          <h1 className="text-5xl font-black text-gray-800">{slide.number}</h1>
                        </div>
                        <img src={slide.icon} alt={`Icon ${slide.number}`} className="w-12 h-12 mx-auto mb-2" />
                        <h1 className="text-xl font-semibold font-montserrat mb-1">{slide.title}</h1>
                        <p className="px-5 text-xs font-century-gothic w-[12rem] text-center">{slide.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 w-2 mx-1 rounded-full ${
                    currentSlide === index ? 'bg-gray-800' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : isMobile ? (
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative flex flex-col items-end">
                      <img src={image} alt="Hexagon Shape" className=" h-auto relative" />
                      <div id="content" className="flex flex-col justify-center items-center  absolute inset-0 ">
                        
                        <div className="absolute top-[50%]  left-[8%]">
                          <h1 className="text-7xl font-black text-gray-800">{slide.number}</h1>
                        </div>
                        <img src={slide.icon} alt={`Icon ${slide.number}`} className="w-16 h-16 mx-auto mb-4" />
                        <h1 className="text-2xl font-semibold font-montserrat mb-2">{slide.title}</h1>
                        <p className="px-11 text-sm font-century-gothic w-[15rem] text-center">{slide.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 w-3 mx-1 rounded-full ${
                    currentSlide === index ? 'bg-gray-800' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : window.innerWidth >= 768 && window.innerWidth < 1024 ? (
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative flex flex-col items-center ml-20">
                      <img src={image} alt="Hexagon Shape" className="w-[40%] h-auto relative" />
                      <div id="content" className="flex flex-col justify-center items-center absolute inset-0 right-[20%]">
                        <div className="absolute top-[40%] left-[14%]">
                          <h1 className="text-7xl font-black text-gray-800">{slide.number}</h1>
                        </div>
                        <img src={slide.icon} alt={`Icon ${slide.number}`} className="w-20 h-20 mx-auto mb-6" />
                        <h1 className="text-3xl font-semibold font-montserrat mb-3">{slide.title}</h1>
                        <p className="px-4 text-base font-century-gothic w-[18rem] text-center">{slide.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-4 w-4 mx-2 rounded-full ${
                    currentSlide === index ? 'bg-gray-800' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div id="main" className="flex flex-col md:flex-row justify-between gap-6 relative items-center">
            {slides.map((slide, index) => (
              <div key={index} className="w-full md:w-1/3 h-full flex justify-end  relative">
                <img src={image} alt="Hexagon Shape" className="w-[75%] h-auto relative" />
                <div id="content" className="flex flex-col justify-center items-center absolute right-[15%] top-[15%]">
                  <div className="absolute top-[25%] -left-[10%]">
                    <h1 className="text-7xl font-black text-gray-800">{slide.number}</h1>
                  </div>
                  <img src={slide.icon} alt={`Icon ${slide.number}`} className="w-16 h-16 mx-auto mb-4" />
                  <h1 className="text-3xl font-semibold font-montserrat mb-2">{slide.title}</h1>
                  <p className="px-2 text-sm font-century-gothic w-[15rem] text-center">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
   )
 }
 
 export default Works






