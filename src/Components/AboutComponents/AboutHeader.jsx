// import laptopImage from '../../assets/Images/laptop.png';

// const AboutHeader = () => {
//   return (
//         <div className="bg-gray-50">
//           <div className="relative flex justify-center items-center h-[50rem]">
//             {/* Image container */}
//             <div className="relative w-full h-full flex justify-center items-center">
//               {/* Main background image */}
//               <img src={laptopImage} alt="cover" className="w-full h-full object-cover" />
    
//               {/* Text overlay */}
//               {/* <div className="f">
//                 <h1 className="text-4xl raleway-hero font-bold text-black drop-shadow-md">Who we are</h1>
//                 <p className="text-2xl text-black mt-2 font-light">
//                   India&apos;s First Cryptocurrency Exchange
//                 </p>
//                 <p className="text-[18px] text-black raleway-hero mt-4 max-w-xs font-light">
//                  We are a team of entrepreneurs who founded North Star Metrics with the vision to accommodate individuals and businesses in India, helping them adapt to cryptocurrencies. We believe it&apos;s only a matter of time before digital currency becomes the future of all currencies.
//                 </p>
//                 <p className="text-[18px] text-black raleway-hero mt-4 max-w-xs font-light">
//                   For the first time in India, we&apos;ve made it possible for individuals, businesses, or even occasional travelers to buy, sell, and learn about Bitcoin, Ethereum, or any cryptocurrencies one-on-one right from our office.
//                 </p>
//               </div> */}

//               <div>

//               </div>
//             </div>
//           </div>
//         </div>
//   )
// }

// export default AboutHeader


import React from 'react'
import laptopImage from '../../assets/Images/laptop.png';

const AboutHeader = () =>  {
  return (
    <section
      className="h-[50rem] w-full flex items-center justify-center bg-cover bg-center "
      style={{
        backgroundImage: `url(${laptopImage})`,
      }}
    >
     <div id="main" className=' container relative bg-cover bg-center bg-no-repeat h-[40rem] flex items-center justify-end p-6 ml-10  '>



      <div id="right"className=' w-1/2 h-full pl-20 pt-20'>

      <div id="heading">
           <h2 className="text-3xl md:text-4xl font-antipasto-pro font-bold  text-black">
           Who We Are<br />
             <p className="text-gray-800 font-century-gothic text-2xl font-light mt-4 ">India&apos;s First Cryptocurrency Exchange</p>
           </h2>
           </div> 
           <div id="heding2">
           <p className="text-lg md:text-base font-century-gothic mt-8">
           At North Star Metrics, we redefine the way you buy and sell cryptocurrency with security and ease in every way imaginable. Being rated as the best cryptocurrency buying and selling platform in India, we have empowered both individuals and institutions to be successful participants in the digital asset market. 

           </p>
           <p className="text-lg md:text-base font-century-gothic mt-8">
           Whether one is just commencing their journey or an accomplished
            trader, the intuitive environment with advanced tools and support
             cements our position as the premier website for the purchase and 
             trading of any cryptocurrency. At North Star Metrics, your
              financial future rests in your hands,
            supported by a source of trust and innovation.
           </p>
           </div>
           
         </div>
      </div>
</section>
  )
}

export default AboutHeader
