// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "../../index.css";
// import cryptocurrency from "../../assets/Images/OtcDesk/section3_icon1.png";
// import transparency from "../../assets/Images/OtcDesk/section3_icon2.png";
// import partnerships from "../../assets/Images/OtcDesk/section3_icon3.png";
// import transactions from "../../assets/Images/OtcDesk/section3_icon4.png";
// import mobile from "../../assets/Images/OtcDesk/section3_icon5.png";
// import investment from "../../assets/Images/OtcDesk/section3_icon6.png";
// import shadow from "../../assets/Images/OtcDesk/hero_bg2.png";

// // Register ScrollTrigger with GSAP
// gsap.registerPlugin(ScrollTrigger);

// const Benefits = () => {
//   useEffect(() => {
//     // Animate each benefit card when it comes into view
//     gsap.from(".benefit-card", {
//       scrollTrigger: {
//         trigger: ".benefit-card",
//         start: "top 80%",
//         toggleActions: "play none none reset",
//       },
//       opacity: 0,
//       y: 50,
//       duration: 1,
//       ease: "power3.out",
//       stagger: 0.2, // Delay between each card animation
//     });
//   }, []);

//   return (
//     <div className="h-auto w-auto py-10 bg-cyan-50 mb-2">
//       {/* Title Section */}
//       <div className="text-center mt-8 mb-12 flex flex-col items-center px-4">
//         <h2 className="text-2xl md:text-4xl  font-semibold font-montserrat">
//           Benefits With North Star Metrics OTC
//         </h2>
//         <p className="mt-5 w-full md:w-2/3  lg:w-1/2 text-center font-century-gothic">
//         Unlock a secure, seamless crypto trading experience with diverse options and tailored support.
//         </p>
//       </div>

//       {/* Benefits Grid */}
//       <div className="grid container grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto px-4">
//         {/* Benefit Cards */}
//         {/* Benefit 1 */}
//         <div className="benefit-card bg-white p-4 rounded-lg flex flex-col items-end justify-between">
//           <div>
//             <h3 className="text-lg md:text-xl ml-4 mt-4 font-semibold font-century-gothic">
//               Seamless Cryptocurrency Options
//             </h3>
//             <p className="text-gray-600 ml-4 mt-4 mb-4 md:-mb-4 w-full md:w-3/4 font-century-gothic">
//               Buy and sell over 100+ cryptocurrencies all in one place. You will
//               have full access to cryptos including Bitcoin and emerging tokens.
//             </p>
//           </div>
//           <img
//             src={cryptocurrency}
//             alt="Diverse Cryptocurrency Options"
//             className="w-12 h-12 md:w-18 md:h-18 mr-4"
//           />
//           <img src={shadow} className="w-12 md:w-16 mr-4" />
//         </div>

//         {/* Benefit 2 */}
//         <div className="benefit-card bg-white p-4 rounded-lg jost-uniquifier flex flex-col items-end justify-between">
//           <div>
//             <h3 className="text-lg md:text-xl ml-4 mt-4 font-semibold font-century-gothic">
//               Reliability and Freedom
//             </h3>
//             <p className="text-gray-600 ml-4 mt-4 mb-4 md:-mb-4 w-full md:w-3/4 font-century-gothic">
//               We believe in straight talk and no hidden surprises. A platform
//               built on integrity, trust, and accountability.
//             </p>
//           </div>
//           <img
//             src={transactions}
//             alt="Instant Transactions"
//             className="w-12 h-12 md:w-18 md:h-18 mr-4"
//           />
//           <img src={shadow} className="w-12 md:w-16 mr-4" />
//         </div>

//         {/* Benefit 3 */}
//         <div className="benefit-card bg-white p-4 rounded-lg jost-uniquifier flex flex-col items-end justify-between">
//           <div>
//             <h3 className="text-lg md:text-xl ml-4 mt-4 font-semibold font-century-gothic">
//               Joint Venture and Cooperation
//             </h3>
//             <p className="text-gray-600 ml-4 mt-4 mb-4 md:-mb-4 w-full md:w-3/4 font-century-gothic">
//               We strengthen your journey to crypto through trusted
//               collaborations. We build strong partnerships to enhance your
//               trading experience.
//             </p>
//           </div>
//           <img
//             src={transparency}
//             alt="Transparency and Trust"
//             className="w-12 h-12 md:w-18 md:h-18 mr-4"
//           />
//           <img src={shadow} className="w-12 md:w-16 mr-4" />
//         </div>

//         {/* Benefit 4 */}
//         <div className="benefit-card bg-white p-4 rounded-lg jost-uniquifier flex flex-col items-end justify-between">
//           <div>
//             <h3 className="text-lg md:text-xl ml-4 mt-4 font-semibold font-century-gothic">
//               Quick Transactions
//             </h3>
//             <p className="text-gray-600 ml-4 mt-4 mb-4 md:-mb-4 w-full md:w-3/4 font-century-gothic">
//               Real-time crypto transactions will give you fast and efficient
//               trading. Buy and sell cryptocurrency almost instantly.
//             </p>
//           </div>
//           <img
//             src={mobile}
//             alt="Mobile-Friendly Experience"
//             className="w-12 h-12 md:w-18 md:h-18 mr-4"
//           />
//           <img src={shadow} className="w-12 md:w-16 mr-4" />
//         </div>

//         {/* Benefit 5 */}
//         <div className="benefit-card bg-white p-4 rounded-lg jost-uniquifier flex flex-col items-end justify-between">
//           <div>
//             <h3 className="text-lg md:text-xl ml-4 mt-4 font-semibold font-century-gothic">
//               Mobile-Friendly Feel
//             </h3>
//             <p className="text-gray-600 ml-4 mt-4 mb-4 md:-mb-4 w-full md:w-3/4 font-century-gothic">
//             Trade cryptocurrency anywhere and at any time with our fully optimized mobile platform. Experience effortless buying and selling of cryptocurrency on the go.
//             </p>
//           </div>
//           <img
//             src={partnerships}
//             alt="Partnerships and Collaborations"
//             className="w-12 h-12 md:w-18 md:h-18 mr-4"
//           />
//           <img src={shadow} className="w-12 md:w-16 mr-4" />
//         </div>

//         {/* Benefit 6 */}
//         <div className="benefit-card bg-white p-4 rounded-lg jost-uniquifier flex flex-col items-end justify-between">
//           <div>
//             <h3 className="text-lg md:text-xl ml-4 mt-4 font-semibold font-century-gothic">
//               Personalized Investing Tactics
//             </h3>
//             <p className="text-gray-600 ml-4 mt-4 mb-4 md:-mb-4 w-full md:w-3/4 font-century-gothic">
//             Custom-developed crypto strategies that meet your financial goals. Personalised investment options for beginners and experienced investors.
//             </p>
//           </div>
//           <img
//             src={investment}
//             alt="Tailored Investment Plans"
//             className="w-12 h-12 md:w-18 md:h-18 mr-4"
//           />
//           <img src={shadow} className="w-12 md:w-16 mr-4" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Benefits;


import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import cryptocurrency from "../../assets/Images/OtcDesk/section3_icon1.png";
import transparency from "../../assets/Images/OtcDesk/section3_icon2.png";
import partnerships from "../../assets/Images/OtcDesk/section3_icon3.png";
import transactions from "../../assets/Images/OtcDesk/section3_icon4.png";
import mobile from "../../assets/Images/OtcDesk/section3_icon5.png";
import investment from "../../assets/Images/OtcDesk/section3_icon6.png";
import shadow from "../../assets/Images/OtcDesk/hero_bg2.png";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  useEffect(() => {
    gsap.from(".benefit-card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".benefits-container",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section className="bg-cyan-50">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-center font-montserrat">Benefits With North Star Metrics OTC</h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 md:mb-12 text-center font-century-gothic">Discover the advantages of choosing our OTC desk</p>
        
        <div className="benefits-container grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {[
            {
              title: "Secure and Compliant",
              description: "Our OTC desk adheres to strict security protocols and regulatory compliance standards, ensuring the safety of your assets and transactions.",
              icon: cryptocurrency,
              alt: "cryptocurrency"
            },
            {
              title: "Transparent Pricing",
              description: "We provide clear and competitive pricing for all transactions, ensuring you get the best value for your trades.",
              icon: transparency,
              alt: "Rates"
            },
            {
              title: "Partnerships and Collaborations",
              description: "We have established strong partnerships with leading financial institutions and blockchain projects, providing you with a wide range of trading options.",
              icon: partnerships,
              alt: "Support"
            },
            {
              title: "Fast Transactions",
              description: "Execute large volume trades quickly and efficiently, with minimal slippage and maximum convenience and opportunities.",
              icon: transactions,
              alt: "Speed"
            },
            {
              title: "Mobile Trading",
              description: "Trade cryptocurrency anywhere and at any time with our fully optimized mobile platform. Experience effortless buying and selling of cryptocurrency on the go.",
              icon: mobile,
              alt: "Global"
            },
            {
              title: "Personalized Investing Tactics",
              description: "Custom-developed crypto strategies that meet your financial goals. Personalised investment options for beginners and experienced investors.",
              icon: investment,
              alt: "Personalized"
            }
          ].map((benefit, index) => (
            <div key={index} className="benefit-card bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md relative">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 font-century-gothic">{benefit.title}</h3>
              <p className="text-gray-600 mb-8 sm:mb-4 pr-16 sm:pr-20 font-century-gothic text-sm sm:text-base">{benefit.description}</p>
              <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
                <img src={benefit.icon} alt={benefit.alt} className="w-10 h-10 sm:w-12 sm:h-12" />
                <img src={shadow} alt="shadow" className="w-10 sm:w-14 h-2 sm:h-3 mt-1 " />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
