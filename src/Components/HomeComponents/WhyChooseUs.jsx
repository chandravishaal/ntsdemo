// import whyChooseUsBanner from '../../assets/Images/3rd_section_mobile.png';
// import icon1 from '../../assets/Images/HomeImages/icon1.png';
// import icon2 from '../../assets/Images/HomeImages/icon5.png';
// import icon3 from '../../assets/Images/HomeImages/icon3.png';
// import icon4 from '../../assets/Images/HomeImages/icon6.png';
// import icon5 from '../../assets/Images/HomeImages/icon4.png';
// import icon6 from '../../assets/Images/HomeImages/icon2.png';

// const WhychooseusCard = ({ image, title, desc, color, customClass }) => {
//   return (
//     <div
//       className={`bg-primaryCyan w-full flex-col justify-between gap-5 flex h-[200px] md:h-[150px] lg:h-[180px] ${
//         color === 'primary' ? 'bg-primaryCyan' : 'bg-white'
//       } border-2 border-primaryCyan rounded-xl p-4 gap-3 ${customClass}`}
//     >
//       <img src={image} className="w-10 h-10 mx-auto object-contain" alt="" />
//       <div className=''>
//         <h1
//           className={`text-lg leading-5 text-center lg:text-start font-century-gothic ${
//             color === 'primary' ? 'text-black' : 'text-black'
//           } font-bold mb-2`}
//         >
//           {title}
//         </h1>
//         <p
//           className={`text-sm text-center lg:text-start leading-4 font-century-gothic ${
//             color === 'primary' ? 'text-black' : 'text-black'
//           }`}
//         >
//           {desc}
//         </p>
//       </div>
//     </div>
//   );
// };

// const WhyChooseUs = () => {
//   return (
//     <section className="whychooseSection-background md:pt-20 lg:py-10">
//       <div className="container mx-auto mb-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-5">
//         <div className="flex flex-col items-center lg:items-start flex-[0.6] text-center md:text-left">
//           <h1 className="text-3xl mt-5 font-bold mb-5 font-montserrat ">Why Choose Us?</h1>
//           <p className="text-xl mb-10 font-century-gothic">
//             A Crypto platform has never been better than this.
//           </p>
//           <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:px-20 lg:px-0">
//             <WhychooseusCard
//               color="primary"
//               title="Easy To Start"
//               image={icon1}
//               desc="North Star Metrics provides an easy way for a person to trade crypto."
//             />
//             <WhychooseusCard
//               color="notPrimary"
//               title="Safe and Secure"
//               image={icon6}
//               desc="We provide a safe environment for all your transactions."
//             />
//             <div className='order-0 lg:order-6'>
//             <WhychooseusCard
//               color="notPrimary"
//               title="Rapid Order"
//               image={icon5}
//               desc="Enjoy the benefit of instant order processing for effective trading."
//             />
//             </div>
//             <WhychooseusCard
//               color="primary"
//               title="Volatility Protection"
//               image={icon3}
//               desc="At North Star Metrics we offer tools for protection from volatility."
//             />
//             <div className='order-0 lg:order-5'>
//               <WhychooseusCard
//                 color="primary"
//                 title="Smart Payment"
//                 image={icon2}
//                 desc="Enjoy Easy Payment Options."
//               />
//             </div>
//             <WhychooseusCard
//               color="notPrimary"
//               title="24/7 Support"
//               image={icon4}
//               desc=" Get assistance at any time for any crypto transaction."
//             />
//           </div>
//         </div>
//         <div className="flex-[0.4] w-full flex justify-center md:justify-end mb-20 md:mb-0 lg:mb-0">
//           <img
//             src={whyChooseUsBanner}
//             className="max-w-[400px] translate-y-20 mx-auto md:translate-y-0 ml-auto"
//             alt="trending coins"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;


// import React from 'react';
// import GLOB from '../../assets/Images/HomeImages/GLOB.png';
// import phone from '../../assets/Images/HomeImages/phone.png';
// import icon1 from '../../assets/Images/HomeImages/icon1.png';
// import icon2 from '../../assets/Images/HomeImages/icon2.png';
// import icon3 from '../../assets/Images/HomeImages/icon3.png';
// import icon4 from '../../assets/Images/HomeImages/icon4.png';
// import icon5 from '../../assets/Images/HomeImages/icon5.png';
// import icon6 from '../../assets/Images/HomeImages/icon6.png';

// const WhyChooseUs = () => {
//   return (
//     <section className='w-full h-auto relative whychooseSection-background flex flex-col mb-20 overflow-hidden'>
//       <div className='container mx-auto px-4 overflow-hidden'>
//         <h1 className='text-4xl font-bold mb-4 text-center'>Why Choose Us?</h1>
//         <h2 className='text-2xl mb-8 text-center'>A Crypto platform has never been better than this</h2>

//         {/* Image section */}
//         <div id="" className='flex justify-center '>
//           <div id="cover">
//             <img src={GLOB} alt="Globe Background" className='relative' />
//           </div>
//           <div id='center' className='absolute w-[45vh] -bottom-[21%]'>
//             <img src={phone} alt="Phone" />
//           </div>
          
//           {/* Icons surrounding the center image */}
//           <div className='absolute flex flex-col items-center space-y-4 bottom-[5%] left-[19%]'>
//           <div class="border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-20 h-16">
//             <img src={icon1} alt="Safe & Secure" className='' />
//             </div>
//             <p className='text-center text-sm'>Easy To Start</p>
//           </div>

//           <div className='absolute flex flex-col items-center space-y-4 top-[45%] left-[23%]'>
//           <div class="border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-20 h-16">
//             <img src={icon2} alt="Safe & Secure" className='' />
//             </div>               
//              <p className='text-center text-sm'>24/7 Support</p>
//           </div>

//           <div className='absolute flex flex-col items-center space-y-4 top-[20%] left-[32%]'>
//           <div class="border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-20 h-16">
//             <img src={icon3} alt="Safe & Secure" className='' />
//             </div>
//             <p className='text-center text-sm'>Safe & Secure</p>
//           </div>

//             {/* right side icon */}
//           <div className='absolute flex flex-col items-center space-y-4 top-[14%] right-[20%]'>
//           <div class="border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-20 h-16">
//             <img src={icon4} alt="Safe & Secure" className='' />
//             </div>
//             <p className='text-center text-sm'>Volatility Protection</p>
//           </div>

//           <div className='absolute flex flex-col items-center space-y-4 top-[45%] right-[7%]'>
//           <div class="border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-20 h-16">
//             <img src={icon5} alt="Safe & Secure" className='' />
//             </div>
//             <p className='text-center text-sm'>Instant Order Processing</p>
//           </div>

//           <div className='absolute flex flex-col items-center space-y-4 bottom-[5%] right-[5%]'>
//           <div class="border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-20 h-16">
//             <img src={icon6} alt="Safe & Secure" className='' />
//             </div>
//             <p className='text-center text-sm'>Convenient Payment Options</p>
//           </div>
//         </div>



//       </div>
//     </section>
//   );
// }

// export default WhyChooseUs;



import React from 'react';
import GLOB from '../../assets/Images/HomeImages/GLOB.png';
import phone from '../../assets/Images/HomeImages/phone.png';
import icon1 from '../../assets/Images/HomeImages/icon1.png';
import icon2 from '../../assets/Images/HomeImages/icon2.png';
import icon3 from '../../assets/Images/HomeImages/icon3.png';
import icon4 from '../../assets/Images/HomeImages/icon4.png';
import icon5 from '../../assets/Images/HomeImages/icon5.png';
import icon6 from '../../assets/Images/HomeImages/icon6.png';

const WhyChooseUs = () => {
  return (
    <section className='w-full h-[45rem] relative whychooseSection-background flex flex-col mb-20 overflow-hidden'>
      <div className='container mx-auto px-4 overflow-hidden'>
        <h1 className='text-4xl font-bold mb-4 text-center'>Why Choose Us?</h1>
        <h2 className='text-2xl mb-8 text-center'>A Crypto platform has never been better than this</h2>

        {/* Image section */}
        <div id="" className='flex justify-center items-end'>
          <div id="cover" className=''>
            <img src={GLOB} alt="Globe Background" className='relative' />
          
          </div>
           


           <div id='content' className=' h-full container absolute flex'>
            <div id="left" className='w-1/3  h-auto flex flex-col justify-around py-10 relative'>
            
         
               
           
            <div className=' flex flex-col items-center space-y-2  absolute top-[18%] right-[0%]'>
           <div class="border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-20 h-16">
             <img src={icon3} alt="Safe & Secure" className='' />
             </div>
             <p className='text-center text-xl'>Safe & Secure</p>
           </div>
           

            <div className=' flex flex-col items-center space-y-2  absolute right-[45%]'>
             <div class="border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-20 h-16">
               <img src={icon1} alt="Safe & Secure" className='' />
               </div>
             <p className='text-center text-xl'>Easy To Start</p>
           </div>

           <div className=' flex flex-col items-center space-y-2 absolute bottom-[10%] right-[55%]'>
           
           <div class="border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-20 h-16">
             <img src={icon2} alt="Safe & Secure" className='' />
             </div>               
              <p className='text-center text-xl'>24/7 Support</p>

           </div>

           
            
            </div>


            <div id="center" className='w-1/3  h-full flex  justify-center relative'>

            <div id="The_text_div" className='w-[16vw] h-[15vh] p-4  bg-white rounded-xl absolute top-[24%] left-2 z-40 '>
            <p className='text-center text-sm'>
            Get started with ease - simply give us a call, set an appointment, or visit our office, and in no time, you'll complete your first trade.
                </p>
            </div>
            <img src={phone} alt="" className='absolute -bottom-[16%] h-[36rem]' />
            </div>


            <div id="right" className='w-1/3  h-auto flex flex-col justify-around py-10 relative'>
            
            
            <div className=' flex flex-col items-center space-y-2  absolute top-[18%] left-[0%]'>
             <div class="border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-20 h-16">
               <img src={icon4} alt="Safe & Secure" className='' />
               </div>
             <p className='text-center text-xl'>Easy To Start</p>
           </div>
            
            <div className=' flex flex-col items-center space-y-2  absolute left-[45%]'>
           <div class="border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-20 h-16">
             <img src={icon5} alt="Safe & Secure" className='' />
             </div>
             <p className='text-center text-xl'>Safe & Secure</p>
           </div>
           

           <div className=' flex flex-col items-center space-y-2  absolute bottom-[10%] left-[55%]'>
           
           <div class="border border-cyan-500 bg-white rounded-xl flex justify-center items-center w-20 h-16">
             <img src={icon6} alt="Safe & Secure" className='' />
             </div>               
              <p className='text-center text-xl'>24/7 Support</p>
           </div>

            </div>
            
           </div>
           </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;