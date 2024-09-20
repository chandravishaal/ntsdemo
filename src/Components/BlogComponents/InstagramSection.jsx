// import React from "react";
// import '../../index.css';
// import backgroundImg from '../../assets/Images/Blog/insta_background.png'; 
// import right from '../../assets/Images/Blog/instaright.png';

// const InstagramSection = () => {
//   return (
//     <div
//       className="relative py-[-12%] w-full h-[700px] bg-cover bg-center" 
//       style={{ backgroundImage: `url(${backgroundImg})` }} 
//     >
//       <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        
//         {/* Left Section */}
//         <div className="w-full lg:w-1/2 mt-10 lg:mt-[22%] p-4 text-center lg:text-left">
//           <div className="relative">
//             <h1 className="text-3xl lg:text-6xl font-bold text-black relative z-10 font-montserrat">
//               Latest on Our Instagram
//             </h1>
//             <p className="text-gray-600 mt-5 text-base lg:text-xl relative z-10 lg:w-[500px] font-century-gothic">
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//             </p>
//             <button className="mt-5 bg-cyan-500 text-white py-2 px-8 rounded relative z-10 font-century-gothic">
//               More
//             </button>
//           </div>
//         </div>

//         {/* Right Section with Instagram-like posts */}
//         <div className="w-full lg:w-auto mt-[25%] lg:mt-[7%]">
//           <img
//             src={right}
//             className="w-full lg:w-[900px] h-auto max-w-full"
//             alt="Instagram Posts"
//           />
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default InstagramSection;




import React, { useEffect, useRef } from "react";
import '../../index.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import backgroundImg from '../../assets/Images/Blog/insta_background.png'; 
import right from '../../assets/Images/Blog/instaright.png';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const InstagramSection = () => {
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const sectionRef = useRef(null); // For the whole section

  useEffect(() => {
    const section = sectionRef.current;
    const leftSection = leftSectionRef.current;
    const rightSection = rightSectionRef.current;

    // GSAP animation for the left section (text)
    gsap.fromTo(
      leftSection,
      { opacity: 0, x: -100 }, // Starts off-screen to the left
      {
        opacity: 1,
        x: 0, // Ends at the original position
        duration: 1.5,
        scrollTrigger: {
          trigger: section,
          start: 'top center+=100',
          toggleActions: 'play none none reset',
        },
      }
    );

    // GSAP animation for the right section (Instagram posts)
    gsap.fromTo(
      rightSection,
      { opacity: 0, x: 100 }, // Starts off-screen to the right
      {
        opacity: 1,
        x: 0, // Ends at the original position
        duration: 1.5,
        scrollTrigger: {
          trigger: section,
          start: 'top center+=100',
          toggleActions: 'play none none reset',
        },
      }
    );
  }, []);

  return (
    <div
      className="relative py-[-12%] w-full h-[700px] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
      ref={sectionRef}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        
        {/* Left Section */}
        <div
          className="w-full lg:w-1/2 mt-10 lg:mt-[22%] p-4 text-center lg:text-left"
          ref={leftSectionRef}
        >
          <div className="relative">
            <h1 className="text-3xl lg:text-6xl font-bold text-black relative z-10 font-montserrat">
              Latest on Our Instagram
            </h1>
            <p className="text-gray-600 mt-5 text-base lg:text-xl relative z-10 lg:w-[500px] font-century-gothic">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <button className="mt-5 bg-cyan-500 text-white py-2 px-8 rounded relative z-10 font-century-gothic">
              More
            </button>
          </div>
        </div>

        {/* Right Section with Instagram-like posts */}
        <div className="w-full lg:w-auto mt-[25%] lg:mt-[7%]" ref={rightSectionRef}>
          <img
            src={right}
            className="w-full lg:w-[900px] h-auto max-w-full"
            alt="Instagram Posts"
          />
        </div>
      </div>
    </div>
  );
};

export default InstagramSection;
