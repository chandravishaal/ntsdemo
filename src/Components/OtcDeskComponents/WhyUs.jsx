

// import { useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import '../../index.css';
// import phone from '../../assets/Images/OtcDesk/section2_hero_img.png';
// import secure from '../../assets/Images/OtcDesk/section2_icon1.png';
// import Friendly from '../../assets/Images/OtcDesk/section2_icon2.png';
// import competitive from '../../assets/Images/OtcDesk/section2_icon3.png';
// import support from '../../assets/Images/OtcDesk/section2_icon4.png';
// import global from '../../assets/Images/OtcDesk/section2_icon5.png';

// // Register ScrollTrigger with GSAP
// gsap.registerPlugin(ScrollTrigger);

// const WhyUs = () => {
//   useEffect(() => {
//     // Animate the phone image sliding in from the left
//     gsap.from('.phone-image', {
//       scrollTrigger: {
//         trigger: '.why-us-section',
//         start: 'top center',
//         toggleActions: 'play none none reset',
//       },
//       opacity: 0,
//       x: -100,
//       duration: 1.2,
//       ease: 'power3.out',
//     });

//     // Animate the feature list with staggered animations
//     gsap.from('.feature', {
//       scrollTrigger: {
//         trigger: '.why-us-section',
//         start: 'top center',
//         toggleActions: 'play none none reset',
//       },
//       opacity: 0,
//       y: 50,
//       duration: 0.8,
//       ease: 'power3.out',
//       stagger: 0.3, // Apply delay between each feature
//     });
//   }, []); // Empty dependency array to run only once

//   return (
//     <div className="why-us-section container mx-auto px-4 py-6 pt-10">
//       <div className="flex flex-col lg:flex-row items-center justify-between">
//         {/* Phone Image Section */}
//         <div className="w-full md:w-[60%] h-auto md:h-[60%] md:mb-[-2.5%]">
//           <img
//             src={phone}
//             alt="Phone Image"
//             className="phone-image w-full h-auto max-w-[500px] md:max-w-none"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="w-full md:w-1/2 mt-8 lg:mt-0 md:ml-[7%] px-3">
//           <h2 className="flex justify-center lg:justify-start text-3xl font-semibold jost-uniquifier mb-12 font-montserrat">Why Us</h2>
//           {/* Features */}
//           <div className="space-y-6 mt-10">
//             {/* Feature 1 */}
//             <div className="feature flex items-start space-x-4">
//               <img src={secure} alt="Cutting-Edge Security" className="w-16 mb-4" />
//               <div>
//                 <h3 className="text-lg font-semibold mb-2 font-century-gothic">Cutting-Edge Security</h3>
//                 <p className="text-gray-600 font-century-gothic">
//                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 </p>
//               </div>
//             </div>

//             {/* Feature 2 */}
//             <div className="feature flex items-start space-x-4">
//               <img src={Friendly} alt="User-Friendly Platform" className="w-16 mb-4" />
//               <div>
//                 <h3 className="text-lg font-semibold mb-2 font-century-gothic">User-Friendly Platform</h3>
//                 <p className="text-gray-600 font-century-gothic">
//                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 </p>
//               </div>
//             </div>

//             {/* Feature 3 */}
//             <div className="feature flex items-start space-x-4">
//               <img src={competitive} alt="Competitive Fees" className="w-16 mb-4" />
//               <div>
//                 <h3 className="text-lg font-semibold  mb-2 font-century-gothic">Competitive Fees</h3>
//                 <p className="text-gray-600 font-century-gothic">
//                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 </p>
//               </div>
//             </div>

//             {/* Feature 4 */}
//             <div className="feature flex items-start space-x-4">
//               <img src={support} alt="Comprehensive Support" className="w-16 mb-4" />
//               <div>
//                 <h3 className="text-lg font-semibold  mb-2 font-century-gothic">Comprehensive Support</h3>
//                 <p className="text-gray-600 font-century-gothic">
//                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 </p>
//               </div>
//             </div>

//             {/* Feature 5 */}
//             <div className="feature flex items-start space-x-4">
//               <img src={global} alt="Local Expertise with Global Reach" className="w-16 mb-4" />
//               <div>
//                 <h3 className="text-lg font-semibold mb-2 font-century-gothic">Local Expertise with Global Reach</h3>
//                 <p className="text-gray-600 font-century-gothic">
//                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyUs;


import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import phone from '../../assets/Images/OtcDesk/section2_hero_img.png';
import icon1 from '../../assets/Images/OtcDesk/section2_icon1.png';
import icon2 from '../../assets/Images/OtcDesk/section2_icon2.png';
import icon3 from '../../assets/Images/OtcDesk/section2_icon3.png';
import icon4 from '../../assets/Images/OtcDesk/section2_icon4.png';
import icon5 from '../../assets/Images/OtcDesk/section2_icon5.png';

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  const sectionRef = useRef(null);
  const phoneRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const phone = phoneRef.current;
    const content = contentRef.current;

    gsap.fromTo(phone, 
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }}
    );

    gsap.fromTo(content.children, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }}
    );
  }, []);

  return (
    <div ref={sectionRef} className="container mx-auto px-4 py-8 sm:py-12 relative">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left side - Image */}
        <div ref={phoneRef} className="w-full lg:w-1/2 lg:absolute lg:left-0 lg:bottom-0 lg:top-0 flex items-center lg:items-end mb-8 lg:mb-0">
          <img src={phone} alt="Phone" className="w-full max-w-sm sm:max-w-md lg:max-w-xl mx-auto" />
        </div>

        {/* Right side - Content */}
        <div ref={contentRef} className="w-full lg:w-1/2 lg:ml-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center lg:text-left">Why Us</h2>

          {/* Feature 1 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6 gap-4 sm:gap-6">
            <img src={icon1} alt="Icon 1" className="w-16 h-16 sm:w-20 sm:h-20 mt-1 flex-shrink-0" />
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Secure Transactions</h3>
              <p className="text-gray-600">Our platform ensures the highest level of security. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, exercitationem!</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6 gap-4 sm:gap-6">
            <img src={icon2} alt="Icon 2" className="w-16 h-16 sm:w-20 sm:h-20 mt-1 flex-shrink-0" />
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Competitive Rates</h3>
              <p className="text-gray-600">We offer some of the most competitive rates in the OTC market. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, rerum?</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6 gap-4 sm:gap-6">
            <img src={icon3} alt="Icon 3" className="w-16 h-16 sm:w-20 sm:h-20 mt-1 flex-shrink-0" />
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Our dedicated team is available round the clock to assist you. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6 gap-4 sm:gap-6">
            <img src={icon4} alt="Icon 4" className="w-16 h-16 sm:w-20 sm:h-20 mt-1 flex-shrink-0" />
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Fast Execution</h3>
              <p className="text-gray-600">Experience quick and efficient trade executions. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, sed.</p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
            <img src={icon5} alt="Icon 5" className="w-16 h-16 sm:w-20 sm:h-20 mt-1 flex-shrink-0" />
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">Access a wide range of cryptocurrencies. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aut!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
