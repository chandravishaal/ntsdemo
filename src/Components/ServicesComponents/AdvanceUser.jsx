// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import PrimaryButton from "../../Common/PrimaryButton";
// import trading from '../../assets/Images/ServicesImages/4th_section_img.png';

// const AdvanceUser = () => {

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // GSAP animation with stagger effect for left section
//     gsap.from("#left div", {
//       y: 100, // animate from 100px below
//       opacity: 0, // start invisible
//       duration: 1, // animation duration
//       stagger: 0.3, // stagger each child element by 0.3 seconds
//       scrollTrigger: {
//         trigger: "#main", // trigger animation when this section comes into view
//         start: "top 80%", // animation starts when top of section hits 80% of the viewport
//         toggleActions: "play none none reset", // play each time the section enters the viewport
//         scrub: false, // no scrub for smooth animation
//         once: false, // do not trigger only once, so it replays every time
//       }
//     });

//     // GSAP animation for the right section's image
//     gsap.from("#right image1", {
//       x: 100, // animate from 100px right
//       opacity: 0,
//       duration: 1,
//       scrollTrigger: {
//         trigger: "#main",
//         start: "top 80%",
//         toggleActions: "play none none reset", // play every time the section is scrolled into view
//         scrub: false,
//         once: false, // repeat every time it comes into view
//       }
//     });
//   }, []);

//   return (
//     <section className="h-auto min-h-[40rem] w-full flex items-center justify-center bg-cover bg-center bg-cyan-50 py-8 md:py-16">
//       <div id="main" className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center p-4 md:p-8 h-full">
        
//         {/* Left Section */}
//         <div id="left" className="w-full md:w-1/2 h-full space-y-6 md:space-y-10 text-center md:text-left flex flex-col justify-center items-center md:items-start">
//           <div id="heading">
//             <h2 className="text-2xl md:text-4xl font-century-gothic font-bold text-cyan-400">
//               For Advanced Users<br />
//               <span className="text-gray-800 font-century-gothic text-2xl md:text-3xl font-light">
//                 Regulated and Professional trading <br />With cryptocurrencies
//               </span>
//             </h2>
//           </div>
//           <div id="heding2">
//             <p className="text-sm md:text-lg font-antipasto-pro">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />
//               eiusmod tempor incididunt ut la.
//             </p>
//           </div>
//           <div id="button">
//             <PrimaryButton title="Know More" />
//           </div>
//         </div>

//         {/* Right Section */}
//         <div id="right" className="w-full md:w-1/2 mb-10 lg:mb-0 h-full flex items-center justify-center mt-8 md:mt-0">
//           <div id="image1" className="w-64 sm:w-80 md:w-[30rem] lg:w-[35rem] xl:w-[40rem]">
//             <img src={trading} alt="Crypto Trading" className="w-full h-auto" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AdvanceUser;


import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PrimaryButton from "../../Common/PrimaryButton";
import trading from '../../assets/Images/ServicesImages/4th_section_img.png';

const AdvanceUser = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animation with stagger effect for left section
    gsap.from("#left div", {
      y: 100, // animate from 100px below
      opacity: 0, // start invisible
      duration: 1, // animation duration
      stagger: 0.3, // stagger each child element by 0.3 seconds
      scrollTrigger: {
        trigger: "#box ", // trigger animation when this section comes into view
        start: "top 80%", // animation starts when top of section hits 80% of the viewport
        toggleActions: "play none none reset", // play each time the section enters the viewport
        scrub: false, // no scrub for smooth animation
        once: false, // do not trigger only once, so it replays every time
      }
    });

    // GSAP animation for the right section's image
    gsap.from("#image1 img", {
      x: 100, // animate from 100px right
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#box ",
        start: "top 80%",
        toggleActions: "play none none reset", // play every time the section is scrolled into view
        scrub: false,
        once: false, // repeat every time it comes into view
      }
    });
  }, []);

  return (
    <section className="h-auto min-h-[40rem] w-full flex items-center justify-center bg-cover bg-center bg-cyan-50 py-8 md:py-16">
      <div id="box " className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center p-4 md:p-8 h-full">
        
        {/* Left Section */}
        <div id="left" className="w-full md:w-1/2 h-full space-y-6 md:space-y-10 text-center md:text-left flex flex-col justify-center items-center md:items-start">
          <div id="heading">
            <h2 className="text-2xl md:text-4xl font-century-gothic font-bold text-cyan-400">
              For Advanced Users<br />
              <span className="text-gray-800 font-century-gothic text-2xl md:text-3xl font-light">
                Regulated and Professional trading <br />With cryptocurrencies
              </span>
            </h2>
          </div>
          <div id="heding2">
            <p className="text-sm md:text-lg font-antipasto-pro">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />
              eiusmod tempor incididunt ut la.
            </p>
          </div>
          <div id="button">
            <PrimaryButton title="Know More" />
          </div>
        </div>

        {/* Right Section */}
        <div id="right" className="w-full md:w-1/2 mb-10 lg:mb-0 h-full flex items-center justify-center mt-8 md:mt-0">
          <div id="image1" className="w-64 sm:w-80 md:w-[30rem] lg:w-[35rem] xl:w-[40rem]">
            <img src={trading} alt="Crypto Trading" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvanceUser;
