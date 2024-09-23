// import mobile1 from "../../assets/Images/ServicesImages/hero_mobile.png";
// import mobile2 from "../../assets/Images/ServicesImages/hero_bg2.png";
// import PrimaryButton from "../../Common/PrimaryButton";

// const ServicesHeroSection = () => {
//   return (
//     <section className="services-hero-bg mt-10 w-full flex items-center justify-center bg-cover bg-center">
//       <div
//         id="main"
//         className="container relative bg-cover bg-center bg-no-repeat h-[40rem] flex flex-col-reverse lg:flex-row items-center justify-center p-2"
//       >
//         <div
//           id="left"
//           className=" w-full md:w-1/2 h-full space-y-6 md:space-y-10 text-center md:text-left flex flex-col lg:mt-52"
//         >
//           <div id="heading">
//             <h2 className="text-2xl md:text-4xl font-century-gothic font-bold text-gray-800">
//               The Best Exchange to Buy,
//               <br />
//               <span className="text-cyan-400">Sell and Trade Crypto</span>
//             </h2>
//           </div>

//           <div id="heding2">
//             <p className="text-gray-950 text-lg px-5 md:px-0 md:text-xl font-antipasto-pro">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               <br className="hidden md:block" />
//               eiusmod tempor incididunt ut la.
//             </p>
//           </div>

//           <div id="button">
//             <PrimaryButton title="Get Started" />
//           </div>
//         </div>

//         <div
//           id="right"
//           className="w-full md:w-1/2 h-full flex justify-center md:justify-end mt-0  md:mt-0"
//         >
//           <div id="image" className="relative">
//             <div
//               id="img1"
//               className="w-40 md:w-96 -mb-7 md:-mb-12 mx-auto md:mx-0"
//             >
//               <img src={mobile1} alt="" className="relative md:left-72" />
//             </div>
//             <div
//               id="img2"
//               className="w-72 md:w-[50rem] pr-0 md:pr-16 mx-auto md:mx-0"
//             >
//               <img src={mobile2} alt="" className=" md:pl-10 md:ml-10" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesHeroSection;


// const ServicesHeroSection  = () => {
//   return (
//     <section className="services-hero-bg py-10">
//       <div id="left_section" className="flex flex-col-reverse lg:flex-row items-center justify-between container mx-auto">
//         <div className="flex-1 flex flex-col lg:items-start items-center px-10">
//           <h1 className="text-5xl font-bold text-center lg:text-start leading-tight"><span className="">Best Exchange to Buy,</span> <br /> <span className="text-primaryCyan">Sell and Trade Crypto</span></h1>
//           <p className="text-xl text-gray-600 text-center lg:text-start mt-4 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.</p>
//           <PrimaryButton title="Get Started" />
//         </div>
//         <div id="right_section" className="flex w-[50rem] flex-1 flex-col relative mb-10">
//           <img src={mobile1} className="lg:w-[25rem] md:w-[20rem] w-[15rem] translate-y-10 md:translate-y-14 lg:translate-x-12 mx-auto" alt="" />
//           <img src={mobile2} className="lg:w-[50rem] md:w-[30rem] w-[25rem] mx-auto" alt="" />
//         </div>

//       </div>
//     </section>
//   )
// }

// export default ServicesHeroSection 

import mobile1 from "../../assets/Images/ServicesImages/hero_mobile.png";
import mobile2 from "../../assets/Images/ServicesImages/hero_bg2.png";
import PrimaryButton from "../../Common/PrimaryButton";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ServicesHeroSection = () => {
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  useEffect(() => {
    // Animate the left section coming in from the left
    gsap.fromTo(
      leftSectionRef.current,
      { x: -200, opacity: 0 },  // Initial position (left side, hidden)
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        delay:0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: leftSectionRef.current,  // When this element enters the viewport
          start: 'top 80%',
          toggleActions: 'play none none none',  // Animation plays once when in view
        },
      }
    );

    // Animate the right section coming in from the right
    gsap.fromTo(
      rightSectionRef.current,
      { x: 200, opacity: 0 },  // Initial position (right side, hidden)
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        delay:0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: rightSectionRef.current,  // When this element enters the viewport
          start: 'top 80%',
          toggleActions: 'play none none none',  // Animation plays once when in view
        },
      }
    );
  }, []);

  return (
    <section className="services-hero-bg py-10">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between container mx-auto">
        <div ref={leftSectionRef} className="flex-1 flex flex-col lg:items-start items-center px-10">
          <h1 className="lg:text-4xl text-3xl font-bold text-center lg:text-start leading-tight font-montserrat"><span className="">Your Gateway to Seamless</span> <br /> <span className="text-primaryCyan lg:whitespace-nowrap">Cryptocurrency Trading</span></h1>
          <p className="text-xl text-gray-600 text-center lg:text-start mt-4 mb-5 font-century-gothic">Experience the best platform for buying and selling crypto.</p>
          <PrimaryButton title="Get Started" />
        </div>
       

        {/* Right Section */}
        <div ref={rightSectionRef} className="flex w-[50rem] flex-1 flex-col relative mb-10">
          <img
            src={mobile1}
            className="lg:w-[25rem] md:w-[20rem] w-[15rem] translate-y-10 md:translate-y-14 lg:translate-x-12 mx-auto"
            alt="Mobile 1"
          />
          <img
            src={mobile2}
            className="lg:w-[50rem] md:w-[30rem] w-[25rem] mx-auto"
            alt="Mobile 2"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroSection;
