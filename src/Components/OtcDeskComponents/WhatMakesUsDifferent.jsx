// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "../../index.css";
// import Group from "../../assets/Images/OtcDesk/mid_img.png";
// import aiicon from "../../assets/Images/OtcDesk/section4_icon1.png";
// import reward from "../../assets/Images/OtcDesk/section4_icon2.png";
// import risk from "../../assets/Images/OtcDesk/section4_icon3.png";
// import payment from "../../assets/Images/OtcDesk/section4_icon4.png";
// import onboarding from "../../assets/Images/OtcDesk/section4_icon5.png";
// import beginners from "../../assets/Images/OtcDesk/section4_icon6.png";

// gsap.registerPlugin(ScrollTrigger);

// const WhatMakesUsDifferent = () => {
//   useEffect(() => {
//     // GSAP Animations for feature items
//     gsap.from(".feature-item-animate", {
//       opacity: 0,
//       y: 50,
//       stagger: 0.2,
//       duration: 1,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: ".features-container",
//         start: "top 99%", // When 80% of the section is visible in the viewport
//         end: "bottom 20%", // Animation ends when 20% of the section is visible
//         toggleActions: "play none none reset", // Plays animation when entering, reverses when leaving
//       },
//     });

//     // GSAP Animation for the centered image
//     gsap.from(".centered-image-animate", {
//       opacity: 0,
//       scale: 0.8,
//       duration: 1,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: ".centered-image",
//         start: "top 85%",
//       },
//     });
//   }, []);

//   return (
//     <div className="bg-white py-12 pb-32 px-10 sm:px-6 md:px-8 lg:px-0">
//       {" "}
//       {/* Add padding for small screens */}
//       {/* Title Section */}
//       <div className="text-center">
//         <h2 className="text-4xl font-semibold w-[80%] mb-8 mx-auto text-center font-montserrat">
//           What makes us Different
//         </h2>
//         <p className="mt-5 w-[75%] lg:w-1/2  mx-auto font-century-gothic">
//         Innovative solutions, personalised experiences, and advanced tools for every crypto trader.
//         </p>
//       </div>
//       {/* Main Content Section */}
//       <div className="relative jost-uniquifier container mx-auto mt-24">
//         {/* Centered Image */}
//         <img
//           src={Group}
//           alt="Group difference"
//           className="centered-image centered-image-animate mx-auto w-auto lg:w-1/3"
//         />

//         {/* Features for screen size greater than 1400px */}
//         <div className="absolute top-1/2 left-[1%] -translate-y-1/2 space-y-24 text-right hidden lg:block left-column">
//           <div className="flex items-center space-x-4 flex-row-reverse feature-item feature-item-animate">
//             <img
//               src={aiicon}
//               alt="AI-Powered Trading Insights"
//               className="w-12 h-12 ml-8"
//             />
//             <div>
//               <h3 className="text-lg font-semibold font-century-gothic">
//                 AI-Powered Trading Tips
//               </h3>
//               <p className="text-gray-500 text-sm w-64 font-century-gothic">
//                 Smart Insights for Smarter Trading Decisions. Stay ahead of the
//                 crypto game by using AI
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center space-x-4 flex-row-reverse feature-item feature-item-animate -mb-[10rem]">
//             <img
//               src={reward}
//               alt="Reward programs"
//               className="w-12 h-12 -ml-8 mr-20"
//             />
//             <div>
//               <h3 className="text-lg font-semibold mr-14 font-century-gothic">
//                 Incentive & Honesty Programmes
//               </h3>
//               <p className="text-gray-500 text-sm w-64 mr-14 font-century-gothic">
//                 Earn your way to rewards with our exclusive loyalty program for
//                 you.
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center space-x-4 flex-row-reverse feature-item feature-item-animate">
//             <img
//               src={risk}
//               alt="Risk management"
//               className="w-12 h-12 ml-[8%]"
//             />
//             <div>
//               <h3 className="text-lg font-semibold font-century-gothic">
//                 Advanced Risk Control Tools
//               </h3>
//               <p className="text-gray-500 text-sm w-64 ml-8 font-century-gothic">
//                 Safe with leading-edge risk management Protect your investments
//                 with best-in-class volatility protection
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="absolute top-[10rem] right-[1%] -translate-y-1/2 space-y-24 hidden lg:block right-column">
//           <div className="flex items-center space-x-4 feature-item feature-item-animate">
//             <img
//               src={payment}
//               alt="Localized Payment Methods"
//               className="w-12 h-12 -ml-12"
//             />
//             <div>
//               <h3 className="text-lg font-semibold font-century-gothic">
//                 Regional Payment Methods
//               </h3>
//               <p className="text-gray-500 text-sm w-64 font-century-gothic">
//                 We offer convenient and secure local payment options in your
//                 currency for your convenience.
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center space-x-4 feature-item feature-item-animate">
//             <img
//               src={onboarding}
//               alt="Customized Onboarding Experience"
//               className="w-12 h-12 ml-8"
//             />
//             <div>
//               <h3 className="text-lg font-semibold font-century-gothic">
//                 Newbie and Pro Solutions
//               </h3>
//               <p className="text-gray-500 text-sm w-64 font-century-gothic">
//                 We address the needs of newcomers and advanced traders.
//                 Solutions built for traders from all levels in the crypto
//                 platform.
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center space-x-4 feature-item feature-item-animate">
//             <img
//               src={beginners}
//               alt="Tailored for Beginners and Experts"
//               className="w-12 h-12 -ml-12"
//             />
//             <div>
//               <h3 className="text-lg font-semibold font-century-gothic">
//                 Tailored Training Process
//               </h3>
//               <p className="text-gray-500 text-sm w-64 font-century-gothic">
//                 {" "}
//                 A customised start tailored to your unique needs. We walk you
//                 step by step to ensure a seamless entry into the world of
//                 crypto.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Responsive Layout for Small Screens (below 1400px) */}
//         <div className="features-container flex flex-col items-center gap-5 lg:hidden mt-8">
//           <div className="feature-item flex items-center gap-6 feature-item-animate">
//             <img
//               src={aiicon}
//               alt="AI-Powered Trading Insights"
//               className="w-12 h-12"
//             />
//             <div className="feature-text">
//               <h3 className="text-lg font-semibold font-century-gothic">
//                 AI-Powered Trading Tips
//               </h3>
//               <p className="text-gray-500 text-sm font-century-gothic">
//                 Smart Insights for Smarter Trading Decisions. Stay ahead of the
//                 crypto game by using AI.
//               </p>
//             </div>
//           </div>

//           <div className="feature-item flex items-center gap-6 feature-item-animate">
//             <img src={reward} alt="Reward programs" className="w-12 h-12" />
//             <div className="feature-text">
//               <h3 className="text-lg font-semibold font-century-gothic">
//                 Incentive and Honesty Programmes
//               </h3>
//               <p className="text-gray-500 text-sm font-century-gothic">
//                 Earn your way to rewards with our exclusive loyalty program for
//                 you.
//               </p>
//             </div>
//           </div>

//           <div className="feature-item flex items-center gap-6 feature-item-animate">
//             <img src={risk} alt="Risk management" className="w-12 h-12" />
//             <div className="feature-text">
//               <h3 className="text-lg font-semibold font-century-gothic">
//                 Advanced Risk Controls Tools
//               </h3>
//               <p className="text-gray-500 text-sm font-century-gothic">
//                 Safe with leading-edge risk management Protect your investments
//                 with best-in-class volatility protection
//               </p>
//             </div>
//           </div>

//           <div className="feature-item flex items-center gap-6 feature-item-animate">
//             <img
//               src={payment}
//               alt="Localized Payment Methods"
//               className="w-12 h-12"
//             />
//             <div className="feature-text">
//               <h3 className="text-lg font-semibold font-century-gothic">
//                 Regional Payment Methods
//               </h3>
//               <p className="text-gray-500 text-sm font-century-gothic">
//                 We offer convenient and secure local payment options in your
//                 currency for your convenience.
//               </p>
//             </div>
//           </div>

//           <div className="feature-item flex items-center gap-6 feature-item-animate">
//             <img
//               src={onboarding}
//               alt="Customized Onboarding Experience"
//               className="w-12 h-12"
//             />
//             <div className="feature-text">
//               <h3 className="text-lg font-semibold font-century-gothic">
//                 Newbie and Pro Solutions
//               </h3>
//               <p className="text-gray-500 text-sm font-century-gothic">
//                 We address the needs of newcomers and advanced traders.
//                 Solutions built for traders from all levels in the crypto
//                 platform.
//               </p>
//             </div>
//           </div>

//           <div className="feature-item flex items-center gap-6 feature-item-animate">
//             <img
//               src={beginners}
//               alt="Tailored for Beginners and Experts"
//               className="w-12 h-12"
//             />
//             <div className="feature-text">
//               <h3 className="text-lg font-semibold font-century-gothic">
//                 Tailored Training Process
//               </h3>
//               <p className="text-gray-500 text-sm font-century-gothic">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhatMakesUsDifferent;



import Group from "../../assets/Images/OtcDesk/mid_img.png";
import aiicon from "../../assets/Images/OtcDesk/section4_icon1.png";
import reward from "../../assets/Images/OtcDesk/section4_icon2.png";
import risk from "../../assets/Images/OtcDesk/section4_icon3.png";
import payment from "../../assets/Images/OtcDesk/section4_icon4.png";
import onboarding from "../../assets/Images/OtcDesk/section4_icon5.png";
import beginners from "../../assets/Images/OtcDesk/section4_icon6.png";
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhatMakesUsDifferent = () => {
  useEffect(() => {
    gsap.from(".feature-item", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".features-container",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 md:h-[80rem] lg:h-[45rem] h-auto" >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-3 md:mb-4 font-montserrat">What Makes Us Different</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-8 sm:mb-10 md:mb-12 font-century-gothic">Discover our unique approach to OTC trading</p>
        <div className="flex flex-col lg:flex-row items-center justify-between features-container">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0 lg:order-1">
            <div className="rounded-full overflow-hidden mb-8 lg:hidden mx-auto sm:max-w-md">
              <img src={Group} alt="What Makes Us Different" className="max-w-full h-auto" />
            </div>
            <div className="flex flex-col justify-between space-y-8 lg:space-y-0 lg:h-[400px]">
              {[
                { title: "AI-Powered Trading", description: "Leverage cutting-edge AI algorithms for smarter, more efficient trades.", icon: aiicon },
                { title: "Reward System", description: "Earn rewards for your trading activity and loyalty to our platform.", icon: reward, extraClass: "lg:mr-12 mr-0" },
                { title: "Risk Management", description: "Advanced tools and strategies to minimize your trading risks.", icon: risk }
              ].map((item, index) => (
                <div key={index} className={`feature-item flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center sm:items-start lg:items-center xl:items-start ${item.extraClass || ''}`}>
                  <div className="text-center sm:text-left lg:text-center xl:text-right order-2 sm:order-2 lg:order-2 xl:order-1 flex-grow sm:mr-6 sm:ml-6 lg:mr-0 xl:mr-0">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 font-century-gothic">{item.title}</h3>
                    <p className="text-gray-600 font-century-gothic">{item.description}</p>
                  </div>
                  <img src={item.icon} alt={item.title} className="w-16 h-16 mb-4 sm:mb-0 sm:ml-6 lg:ml-0 lg:mb-4 xl:ml-6 xl:mb-0 order-1 sm:order-1 lg:order-1 xl:order-2" />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0 lg:order-2 hidden lg:block">
            <div className="rounded-full overflow-hidden">
              <img src={Group} alt="What Makes Us Different" className="max-w-full h-auto" />
            </div>
          </div>
          <div className="w-full lg:w-1/3 lg:order-3">
            <div className="flex flex-col justify-between space-y-8 lg:space-y-0 lg:h-[400px]">
              {[
                { title: "Flexible Payments", description: "Multiple payment options to suit your preferences and needs.", icon: payment },
                { title: "Easy Onboarding", description: "Quick and hassle-free registration process to get you started.", icon: onboarding, extraClass: "lg:ml-12 ml-0" },
                { title: "Beginner Friendly", description: "Intuitive interface and resources to help newcomers navigate easily.", icon: beginners }
              ].map((item, index) => (
                <div key={index} className={`feature-item flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center sm:items-start lg:items-center xl:items-start ${item.extraClass || ''}`}>
                  <img src={item.icon} alt={item.title} className="w-16 h-16 mb-4 sm:mb-0 sm:mr-6 sm:ml-6 lg:mr-0 lg:ml-0 lg:mb-4 xl:mr-6 xl:mb-0 order-1 sm:order-1 lg:order-1 xl:order-1" />
                  <div className="text-center sm:text-left lg:text-center xl:text-left order-2 sm:order-2 lg:order-2 xl:order-2">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 font-century-gothic">{item.title}</h3>
                    <p className="text-gray-600 font-century-gothic">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatMakesUsDifferent
