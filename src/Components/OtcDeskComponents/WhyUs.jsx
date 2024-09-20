// import React from 'react';
// import '../../index.css';
// import phone from '../../assets/Images/OtcDesk/section2_hero_img.png'; 
// import secure from '../../assets/Images/OtcDesk/section2_icon1.png';
// import Friendly from '../../assets/Images/OtcDesk/section2_icon2.png';
// import competitive from '../../assets/Images/OtcDesk/section2_icon3.png';
// import support from '../../assets/Images/OtcDesk/section2_icon4.png';
// import global from '../../assets/Images/OtcDesk/section2_icon5.png';


// const WhyUs = () => {
//   return (
//     <div className="container mx-auto px-4 py-12">
//   <div className="flex flex-col md:flex-row items-center justify-between">
//     {/* Phone Image Section */}
//     <div className="w-full md:w-1/2 h-auto md:h-[650px]  md:ml-[-10%]">
//       <img
//         src={phone}
//         className="w-[120%] h-auto max-w-[500px] md:max-w-none"
//       />
//     </div>

//         {/* Text Section */}
//         <div className="w-full md:w-1/2 mt-8 md:mt-0">
//       <h2 className="text-5xl font-semibold jost-uniquifier mb-12">Why Us</h2>
//       {/* Rest of the content */}
//           <div className="space-y-6">
//             {/* Feature 1 */}
//             <div className="flex items-start space-x-4">
//               <img
//                 src={secure}
        
//                 className="w-24 mb-4"
//               />
//               <div>
//                 <h3 className="text-xl font-semibold jost-uniquifier mb-2">Cutting-Edge Security</h3>
//                 <p className="text-gray-600 ">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 </p>
//               </div>
//             </div>

//             {/* Feature 2 */}
//             <div className="flex items-start space-x-4">
//               <img
//                 src={Friendly} // Replace with actual icon path
//                 alt="User-Friendly Platform "
//                 className="w-24 mb-4"
//               />
//               <div>
//                 <h3 className="text-xl font-semibold jost-uniquifier mb-2">User-Friendly Platform</h3>
//                 <p className="text-gray-600">
//                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 </p>
//               </div>
//             </div>

//             {/* Feature 3 */}
//             <div className="flex items-start space-x-4">
//               <img
//                 src={competitive} // Replace with actual icon path
//                 alt="Competitive Fees"
//                 className="w-24 mb-4"
//               />
//               <div>
//                 <h3 className="text-xl font-semibold jost-uniquifier mb-2">Competitive Fees</h3>
//                 <p className="text-gray-600">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 </p>
//               </div>
//             </div>

//             {/* Feature 4 */}
//             <div className="flex items-start space-x-4">
//               <img
//                 src={support} // Replace with actual icon path
//                 alt="Comprehensive Support"
//                 className="w-24 mb-4"
//               />
//               <div>
//                 <h3 className="text-xl font-semibold jost-uniquifier mb-2">Comprehensive Support</h3>
//                 <p className="text-gray-600">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 </p>
//               </div>
//             </div>

//             {/* Feature 5 */}
//             <div className="flex items-start space-x-4">
//               <img
//                 src={global} // Replace with actual icon path
//                 alt="Local Expertise with Global Reach"
//                 className="w-24 mb-4"
//               />
//               <div>
//                 <h3 className="text-xl font-semibold jost-uniquifier mb-2">Local Expertise with Global Reach</h3>
//                 <p className="text-gray-600">
//                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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






import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../index.css';
import phone from '../../assets/Images/OtcDesk/section2_hero_img.png'; 
import secure from '../../assets/Images/OtcDesk/section2_icon1.png';
import Friendly from '../../assets/Images/OtcDesk/section2_icon2.png';
import competitive from '../../assets/Images/OtcDesk/section2_icon3.png';
import support from '../../assets/Images/OtcDesk/section2_icon4.png';
import global from '../../assets/Images/OtcDesk/section2_icon5.png';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  // Use useEffect to add GSAP animations
  useEffect(() => {
    // Animate the phone image
    gsap.from('.phone-image', {
      scrollTrigger: {
        trigger: '.why-us-section',
        start: 'top center', // Start animation when the top of the section reaches the center of the viewport
        toggleActions: 'play none none reset',
      },
      opacity: 0,
      x: -100,
      duration: 1.2,
      ease: 'power3.out',
    });

    // Animate the feature list
    gsap.from('.feature', {
      scrollTrigger: {
        trigger: '.why-us-section',
        start: 'top center',
        toggleActions: 'play none none reset',
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.3, // Delay between each feature animation
    });
  }, []); // Run only once when the component mounts

  return (

      <div className="container mx-auto px-4 py-12">
    <div className="flex flex-col md:flex-row items-center justify-between">
      {/* Phone Image Section */}
      <div className="w-full md:w-[60%] h-auto md:h-[60%] md:mb-[-12.5%]">
        <img
          src={phone}
          className="w-full h-auto max-w-[500px] md:max-w-none" // Shrink on smaller screens
        />
      </div>
  
          {/* Text Section */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-[7%]">
        <h2 className="flex justify-center lg:justify-start text-5xl font-semibold jost-uniquifier mb-12 font-montserrat">Why Us</h2>
        {/* Rest of the content */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <img
                  src={secure}
          
                  className="w-24 mb-4"
                />
                <div>
                  <h3 className="text-xl font-semibold jost-uniquifier font-century-gothic">Cutting-Edge Security</h3>
                  <p className="text-gray-600 font-century-gothic">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </div>
  
              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <img
                  src={Friendly} // Replace with actual icon path
                  alt="User-Friendly Platform "
                  className="w-24 mb-4"
                />
                <div>
                  <h3 className="text-xl font-semibold jost-uniquifier mb-2 font-century-gothic">User-Friendly Platform</h3>
                  <p className="text-gray-600 font-century-gothic">
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </div>
  
              {/* Feature 3 */}
              <div className="flex items-start space-x-4">
                <img
                  src={competitive} // Replace with actual icon path
                  alt="Competitive Fees"
                  className="w-24 mb-4"
                />
                <div>
                  <h3 className="text-xl font-semibold jost-uniquifier mb-2 font-century-gothic">Competitive Fees</h3>
                  <p className="text-gray-600 font-century-gothic">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </div>
  
              {/* Feature 4 */}
              <div className="flex items-start space-x-4">
                <img
                  src={support} // Replace with actual icon path
                  alt="Comprehensive Support"
                  className="w-24 mb-4"
                />
                <div>
                  <h3 className="text-xl font-semibold jost-uniquifier mb-2 font-century-gothic">Comprehensive Support</h3>
                  <p className="text-gray-600 font-century-gothic">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </div>
  
              {/* Feature 5 */}
              <div className="flex items-start space-x-4">
                <img
                  src={global} // Replace with actual icon path
                  alt="Local Expertise with Global Reach"
                  className="w-24 mb-4"
                />
                <div>
                  <h3 className="text-xl font-semibold jost-uniquifier mb-2 font-century-gothic">Local Expertise with Global Reach</h3>
                  <p className="text-gray-600 font-century-gothic">
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default WhyUs;
  
