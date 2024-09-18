// import icon1 from "../../assets/Images/OtcDesk/bit-coin.png";
// import icon2 from "../../assets/Images/OtcDesk/icons8-ethereum-50.png";
// import icon3 from "../../assets/Images/OtcDesk/icons8-cryptocurrency-48.png";
// import apple from "../../assets/Images/OtcDesk/icons8-apple-pay-50.png";

// const Countries = () => {
//   return (
//     <section className="container mx-auto bg-gradient-to-r from-[#004a5e] to-[#2fc2f4] text-white py-12 mt-12 mb-12">
//       {/* For mobile and tablet, we'll switch to a more compact grid */}
//       <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        
//         {/* Supported Countries */}
//         <div className="flex flex-col items-center border-b-2 sm:border-b-0 sm:border-r-2 border-white pb-6 sm:pb-0">
//           <h3 className="text-4xl md:text-5xl font-extrabold font-eras-bold">170+</h3>
//           <p className="mt-2 text-lg md:text-xl font-century-gothic text-center">
//             Supported <br /> countries
//           </p>
//           <div className="flex mt-4 -space-x-3">
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <span className="text-gray-500 text-[10px] font-extrabold">EMEA</span>
//             </div>
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <span className="text-gray-500 text-[10px] font-extrabold">APAC</span>
//             </div>
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <span className="text-gray-500 text-[10px] font-extrabold">LATAM</span>
//             </div>
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <span className="text-gray-500 text-[10px] font-extrabold">...</span>
//             </div>
//           </div>
//         </div>

//         {/* Fiat Currencies */}
//         <div className="flex flex-col items-center border-b-2 sm:border-b-0 sm:border-r-2 border-white pb-6 sm:pb-0">
//           <h3 className="text-4xl md:text-5xl font-extrabold font-eras-bold">50+</h3>
//           <p className="mt-2 text-lg md:text-xl text-center font-century-gothic">
//             Fiat <br /> currencies
//           </p>
//           <div className="flex mt-4 -space-x-3">
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <span className="text-black font-semibold">$</span>
//             </div>
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <span className="text-black font-semibold">€</span>
//             </div>
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <span className="text-black font-semibold">£</span>
//             </div>
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <span className="text-black font-semibold">...</span>
//             </div>
//           </div>
//         </div>

//         {/* Fiat Payment Channels */}
//         <div className="flex flex-col items-center border-b-2 sm:border-b-0 sm:border-r-2 border-white pb-6 sm:pb-0">
//           <h3 className="text-4xl md:text-5xl font-extrabold font-eras-bold">10+</h3>
//           <p className="mt-2 text-lg md:text-xl text-center font-century-gothic">
//             Fiat payment <br /> channels
//           </p>
//           <div className="flex mt-4 -space-x-3">
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <i className="ri-visa-line text-blue-600 text-xl md:text-2xl"></i>
//             </div>
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <img src={apple} alt="Apple Pay" className="w-6 h-6" />
//             </div>
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <p className="text-black text-center text-[8px] font-bold">
//                 Bank <br /> Transfer
//               </p>
//             </div>
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <span className="text-black font-semibold">...</span>
//             </div>
//           </div>
//         </div>

//         {/* Cryptocurrencies Supported */}
//         <div className="flex flex-col items-center">
//           <h3 className="text-4xl md:text-5xl font-extrabold font-eras-bold">10+</h3>
//           <p className="mt-2 text-lg md:text-xl text-center font-century-gothic">
//             Cryptocurrencies <br /> supported
//           </p>
//           <div className="flex mt-4 -space-x-3">
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <img src={icon1} alt="Bitcoin" className="w-6 h-6" />
//             </div>
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <img src={icon2} alt="Ethereum" className="w-6 h-6" />
//             </div>
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <img src={icon3} alt="Tether" className="w-6 h-6" />
//             </div>
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <span className="text-black font-semibold">...</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Countries;


import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import icon1 from "../../assets/Images/OtcDesk/bit-coin.png";
import icon2 from "../../assets/Images/OtcDesk/icons8-ethereum-50.png";
import icon3 from "../../assets/Images/OtcDesk/icons8-cryptocurrency-48.png";
import apple from "../../assets/Images/OtcDesk/icons8-apple-pay-50.png";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Countries = () => {
  const sectionRef = useRef(null); // Reference for the section

  useEffect(() => {
    const targets = sectionRef.current.querySelectorAll('.grid-item'); // Select all grid items
    const counters = sectionRef.current.querySelectorAll('.counter'); // Select all counter elements

    // GSAP animation for fade-in effect
    gsap.fromTo(
      targets,
      {
        opacity: 0,
        y: 50, // Initial state (fades in and moves up)
      },
      {
        opacity: 1,
        y: 0,
        duration: 1, // Duration for each animation
        stagger: 0.2, // Stagger the animations by 0.2 seconds
        ease: 'power3.out', // Smooth easing effect
        scrollTrigger: {
          trigger: sectionRef.current, // Trigger the animation when the section is in view
          start: 'top 80%', // Start when the section hits 80% of the viewport
          end: 'bottom 20%', // End when the section leaves 20% of the viewport
          toggleActions: 'play none none reverse', // Play on entering, reverse on leaving
        },
      }
    );

    // GSAP animation for counter effect
    counters.forEach(counter => {
      const endValue = parseInt(counter.getAttribute('data-count')); // Get the final number from data-count attribute
      gsap.fromTo(
        counter,
        { innerText: 0 },
        {
          innerText: endValue,
          duration: 2, // Duration of the counting animation
          scrollTrigger: {
            trigger: sectionRef.current, // Trigger the animation when the section is in view
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          snap: { innerText: 1 }, // Round the counter to whole numbers
          ease: 'power3.out',
          onUpdate: function () {
            counter.innerText = Math.floor(counter.innerText); // Ensure the number is an integer
          }
        }
      );
    });
  }, []);

  return (
    <section
      className="container mx-auto bg-gradient-to-r from-[#004a5e] to-[#2fc2f4] text-white py-12 mt-12 mb-12"
      ref={sectionRef} // Apply the reference to the section
    >
      {/* For mobile and tablet, we'll switch to a more compact grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Supported Countries */}
        <div className="grid-item flex flex-col items-center border-b-2 sm:border-b-0 sm:border-r-2 border-white pb-6 sm:pb-0">
          <h3 className="text-4xl md:text-5xl font-extrabold font-eras-bold counter" data-count="170">0</h3>
          <p className="mt-2 text-lg md:text-xl font-century-gothic text-center">
            Supported <br /> countries
          </p>
          <div className="flex mt-4 -space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
              <span className="text-gray-500 text-[10px] font-extrabold">EMEA</span>
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
              <span className="text-gray-500 text-[10px] font-extrabold">APAC</span>
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
              <span className="text-gray-500 text-[10px] font-extrabold">LATAM</span>
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
              <span className="text-gray-500 text-[10px] font-extrabold">...</span>
            </div>
          </div>
        </div>

        {/* Fiat Currencies */}
        <div className="grid-item flex flex-col items-center border-b-2 sm:border-b-0 sm:border-r-2 border-white pb-6 sm:pb-0">
          <h3 className="text-4xl md:text-5xl font-extrabold font-eras-bold counter" data-count="50">0 </h3>
          <p className="mt-2 text-lg md:text-xl text-center font-century-gothic">
            Fiat <br /> currencies
          </p>
          <div className="flex mt-4 -space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
              <span className="text-black font-semibold">$</span>
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
              <span className="text-black font-semibold">€</span>
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
              <span className="text-black font-semibold">£</span>
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
              <span className="text-black font-semibold">...</span>
            </div>
          </div>
        </div>

        {/* Fiat Payment Channels */}
        <div className="grid-item flex flex-col items-center border-b-2 sm:border-b-0 sm:border-r-2 border-white pb-6 sm:pb-0">
          <h3 className="text-4xl md:text-5xl font-extrabold font-eras-bold counter" data-count="10">0</h3>
          <p className="mt-2 text-lg md:text-xl text-center font-century-gothic">
            Fiat payment <br /> channels
          </p>
          <div className="flex mt-4 -space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
              <i className="ri-visa-line text-blue-600 text-xl md:text-2xl"></i>
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
              <img src={apple} alt="Apple Pay" className="w-6 h-6" />
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
              <p className="text-black text-center text-[8px] font-bold">
                Bank <br /> Transfer
              </p>
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
              <span className="text-black font-semibold">...</span>
            </div>
          </div>
        </div>

        {/* Cryptocurrencies Supported */}
        <div className="grid-item flex flex-col items-center">
          <h3 className="text-4xl md:text-5xl font-extrabold font-eras-bold counter" data-count="10">0</h3>
          <p className="mt-2 text-lg md:text-xl text-center font-century-gothic">
            Cryptocurrencies <br /> supported
          </p>
          <div className="flex mt-4 -space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
              <img src={icon1} alt="Bitcoin" className="w-6 h-6" />
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
              <img src={icon2} alt="Ethereum" className="w-6 h-6" />
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
              <img src={icon3} alt="Tether" className="w-6 h-6" />
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
              <span className="text-black font-semibold">...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countries;
















// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import icon1 from "../../assets/Images/OtcDesk/bit-coin.png";
// import icon2 from "../../assets/Images/OtcDesk/icons8-ethereum-50.png";
// import icon3 from "../../assets/Images/OtcDesk/icons8-cryptocurrency-48.png";
// import apple from "../../assets/Images/OtcDesk/icons8-apple-pay-50.png";

// // Register ScrollTrigger with GSAP
// gsap.registerPlugin(ScrollTrigger);

// const Countries = () => {
//   const sectionRef = useRef(null); // Reference for the section

//   useEffect(() => {
//     const targets = sectionRef.current.querySelectorAll('.grid-item'); // Select all grid items

//     gsap.fromTo(
//       targets,
//       {
//         opacity: 0,
//         y: 50, // Initial state (fades in and moves up)
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1, // Duration for each animation
//         stagger: 0.2, // Stagger the animations by 0.2 seconds
//         ease: 'power3.out', // Smooth easing effect
//         scrollTrigger: {
//           trigger: sectionRef.current, // Trigger the animation when the section is in view
//           start: 'top 80%', // Start when the section hits 80% of the viewport
//           end: 'bottom 20%', // End when the section leaves 20% of the viewport
//           toggleActions: 'play none none reverse', // Play on entering, reverse on leaving
//         },
//       }
//     );
//   }, []);

//   return (
//     <section
//       className="container mx-auto bg-gradient-to-r from-[#004a5e] to-[#2fc2f4] text-white py-12 mt-12 mb-12"
//       ref={sectionRef} // Apply the reference to the section
//     >
//       {/* For mobile and tablet, we'll switch to a more compact grid */}
//       <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        
//         {/* Supported Countries */}
//         <div className="grid-item flex flex-col items-center border-b-2 sm:border-b-0 sm:border-r-2 border-white pb-6 sm:pb-0">
//           <h3 className="text-4xl md:text-5xl font-extrabold font-eras-bold">170+</h3>
//           <p className="mt-2 text-lg md:text-xl font-century-gothic text-center">
//             Supported <br /> countries
//           </p>
//           <div className="flex mt-4 -space-x-3">
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <span className="text-gray-500 text-[10px] font-extrabold">EMEA</span>
//             </div>
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <span className="text-gray-500 text-[10px] font-extrabold">APAC</span>
//             </div>
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <span className="text-gray-500 text-[10px] font-extrabold">LATAM</span>
//             </div>
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <span className="text-gray-500 text-[10px] font-extrabold">...</span>
//             </div>
//           </div>
//         </div>

//         {/* Fiat Currencies */}
//         <div className="grid-item flex flex-col items-center border-b-2 sm:border-b-0 sm:border-r-2 border-white pb-6 sm:pb-0">
//           <h3 className="text-4xl md:text-5xl font-extrabold font-eras-bold">50+</h3>
//           <p className="mt-2 text-lg md:text-xl text-center font-century-gothic">
//             Fiat <br /> currencies
//           </p>
//           <div className="flex mt-4 -space-x-3">
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <span className="text-black font-semibold">$</span>
//             </div>
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <span className="text-black font-semibold">€</span>
//             </div>
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <span className="text-black font-semibold">£</span>
//             </div>
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <span className="text-black font-semibold">...</span>
//             </div>
//           </div>
//         </div>

//         {/* Fiat Payment Channels */}
//         <div className="grid-item flex flex-col items-center border-b-2 sm:border-b-0 sm:border-r-2 border-white pb-6 sm:pb-0">
//           <h3 className="text-4xl md:text-5xl font-extrabold font-eras-bold">10+</h3>
//           <p className="mt-2 text-lg md:text-xl text-center font-century-gothic">
//             Fiat payment <br /> channels
//           </p>
//           <div className="flex mt-4 -space-x-3">
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <i className="ri-visa-line text-blue-600 text-xl md:text-2xl"></i>
//             </div>
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <img src={apple} alt="Apple Pay" className="w-6 h-6" />
//             </div>
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <p className="text-black text-center text-[8px] font-bold">
//                 Bank <br /> Transfer
//               </p>
//             </div>
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <span className="text-black font-semibold">...</span>
//             </div>
//           </div>
//         </div>

//         {/* Cryptocurrencies Supported */}
//         <div className="grid-item flex flex-col items-center">
//           <h3 className="text-4xl md:text-5xl font-extrabold font-eras-bold">10+</h3>
//           <p className="mt-2 text-lg md:text-xl text-center font-century-gothic">
//             Cryptocurrencies <br /> supported
//           </p>
//           <div className="flex mt-4 -space-x-3">
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <img src={icon1} alt="Bitcoin" className="w-6 h-6" />
//             </div>
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <img src={icon2} alt="Ethereum" className="w-6 h-6" />
//             </div>
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <img src={icon3} alt="Tether" className="w-6 h-6" />
//             </div>
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <span className="text-black font-semibold">...</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Countries;
