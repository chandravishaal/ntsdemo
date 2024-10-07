// import { useScramble } from 'use-scramble';

// const ComingSoon = () => {

//     const { ref } = useScramble({
//         text: 'Coming Soon',
//         speed: 0.5,
//         tick: 1,
//         step: 1,
//         scramble: 4,
//         seed: 0,
//       });

//   return (
//     <section className='lg:h-screen flex items-center justify-center'>
//         <div>
//             <h1 ref={ref} className='text-5xl lg:text-7xl font-montserrat font-bold text-center mt-72 md:mt-96 lg:mt-0 animate-gradient' />
//         </div>
//     </section>
//   )
// }

// export default ComingSoon


























// import React, { useRef } from 'react';

// const Partners = () => {
//     // Create separate refs for each container
//     const containerRef1 = useRef();
//     const containerRef2 = useRef();
//     const containerRef3 = useRef();

//     const handleMouseMove = (e, containerRef) => {
//         const container = containerRef.current;
//         const rect = container.getBoundingClientRect();
//         const offsetX = e.clientX - rect.left;
//         const offsetY = e.clientY - rect.top;

//         const maxOffset = 5; // Limit the movement to 2 pixels
//         const translateX = Math.min(Math.max(offsetX - container.clientWidth / 2, -maxOffset), maxOffset);
//         const translateY = Math.min(Math.max(offsetY - container.clientHeight / 2, -maxOffset), maxOffset);

//         // Combine movement and scaling
//         container.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.1)`; // Add scale(1.1) for hover scaling

//         // Bring the hovered card to the front
//         container.style.zIndex = '100'; // Set a higher z-index on hover
//     };

//     const handleMouseLeave = (containerRef) => {
//         const container = containerRef.current;
//         container.style.transform = ''; // Reset position and scale
//         container.style.zIndex = ''; // Reset z-index when not hovered
//     };

//     return (
//         <div className="relative h-[700px] px-5">
//             {/* Circular Background with Blur */}
//             <div className="absolute inset-0 flex justify-center items-center">
//                 <div className="circlePosition w-[1000px] h-[550px] bg-primaryCyan/40 rounded-lg absolute z-1 top-[50%] left-[53%] translate-x-[-50%] translate-y-[-50%] blur-[400px]"></div>
//             </div>

//             <div className="min-h-[30rem] h-auto w-full flex items-center justify-center">
//                 <div className="w-full md:w-1/2 h-full px-5 md:h-[100%]  flex justify-center items-center">
//                     <div className="relative  scroll-py-36 px-5">
//                         <section className="flex flex-row items-center mt-16 justify-center relative z-10 min-h-[20rem] sm:min-h-[30rem]">
//                             {/* First image container */}
//                             <div ref={containerRef1}
//                                 className="bg-white/95 w-[250px]  sm:w-[310px]  -mr-32 h-[250px] sm:h-[430px] flex items-center justify-center rounded-2xl transition-transform duration-700 ease-in-out cursor-pointer border-primaryCyan/100 border-[1px]"
//                                 onMouseMove={(e) => handleMouseMove(e, containerRef1)}
//                                 onMouseLeave={() => handleMouseLeave(containerRef1)}>
//                                 {/* Add content here */}
//                                 <div className="grid grid-cols-2 gap-y-8 sm:gap-y-14 gap-x-10 sm:gap-x-20">
//                                     <a className="flex flex-col items-center">
//                                     </a>
//                                 </div>
//                             </div>

//                             {/* Second image container */}
//                             <div ref={containerRef2}
//                                 className="bg-white/95 w-[250px]  p-4 sm:w-[340px] h-[250px] sm:h-[470px] flex items-center justify-center rounded-2xl transition-transform duration-700 ease-in-out cursor-pointer z-20 border-primaryCyan/100 border-[1px]"
//                                 onMouseMove={(e) => handleMouseMove(e, containerRef2)}
//                                 onMouseLeave={() => handleMouseLeave(containerRef2)}>
//                                 {/* Add content here */}
//                                 <div className="grid grid-cols-2 bg-black gap-y-8 sm:gap-y-14 gap-x-10 sm:gap-x-20">
//                                     <a className="flex flex-col  items-center">
//                                     </a>
//                                 </div>
//                             </div>

//                             {/* Third image container */}
//                             <div ref={containerRef3}
//                                 className="bg-white/95  w-[250px]  sm:w-[310px] -ml-32 h-[250px] sm:h-[430px] flex items-center justify-center rounded-2xl transition-transform duration-700 ease-in-out cursor-pointer border-primaryCyan/100 border-[1px]"
//                                 onMouseMove={(e) => handleMouseMove(e, containerRef3)}
//                                 onMouseLeave={() => handleMouseLeave(containerRef3)}>
//                                 {/* Add content here */}
//                                 <div className="grid grid-cols-2 gap-y-8 sm:gap-y-14 gap-x-10 sm:gap-x-20">
//                                     <a className="flex flex-col items-center">
//                                         <img>
//                                         </img>
//                                     </a>
//                                 </div>
//                             </div>
//                         </section>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Partners;


// import image1 from '../../src/assets/Images/handshake.png';


// const ComingSoon = () => {



//     return (
        
//         <div className='flex flex-col bg-white/95 w-[250px] sm:w-[310px] ml-96 mt-10 h-[250px] sm:h-[430px] items-center justify-center rounded-2xl transition-transform duration-700 ease-in-out cursor-pointer border-primaryCyan/100 border-[1px] p-4'>
//             <div className='md:w-[92%] -mt-12'>
//                 <img src={image1} className="rounded-lg" alt="Mission" />
//             </div>
//             <div className='md:w-[90%] mb-2 mt-8'>
//                 <h1 className="font-bold text-2xl text-black font-montserrat text-center border-b border-black/30 pb-1">Our Mission</h1>
//             </div>
//             <div className='md:w-[90%] mt-4'>
//                 <h2 className="text-lg text-black mt-1 font-century-gothic text-center">Join the Digital Revolution</h2>
//             </div>
//         </div>


//     )
// }

// export default ComingSoon