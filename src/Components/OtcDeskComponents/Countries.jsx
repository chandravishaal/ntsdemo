import icon1 from "../../assets/Images/OtcDesk/bit-coin.png";
import icon2 from "../../assets/Images/OtcDesk/icons8-ethereum-50.png";
import icon3 from "../../assets/Images/OtcDesk/icons8-cryptocurrency-48.png";

import apple from "../../assets/Images/OtcDesk/icons8-apple-pay-50.png";



const Countries = () =>  {
  return (
    <section className="h-[15rem] container mx-auto bg-gradient-to-r  from-[#004a5e] to-[#2fc2f4] text-white py-12 mt-12 mb-12">
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Supported Countries */}
        <div className="flex flex-col items-center border-r-[1px] border-white">
          <h3 className="text-5xl font-extrabold font-eras-bold">170+</h3>
          <p className="mt-2 text-xl font-century-gothic text-center">Supported <br /> countries</p>

          <div className="flex mt-4 -space-x-3 ">
            <div className="w-12 h-12  bg-white rounded-full shadow-md flex items-center justify-center">
              <span className="text-gray-500 text-[10px] font-extrabold ">EMEA</span>
            </div>
            <div className="w-12 h-12  bg-white rounded-full shadow-md flex items-center justify-center">
              <span className="text-gray-500 text-[10px]  font-extrabold">APAC</span>
            </div>
            <div className="w-12 h-12  bg-white rounded-full shadow-md flex items-center justify-center">
              <span className="text-gray-500 text-[10px]  font-extrabold">LATAM</span>
            </div>
            <div className="w-12 h-12  bg-white rounded-full shadow-md flex items-center justify-center">
              <span className="text-gray-500 text-[10px]  font-extrabold">...</span>
            </div>
          </div>


        </div>

        {/* Fiat Currencies */}
        <div className="flex flex-col items-center border-r-[1px] border-white">
          <h3 className="text-5xl font-extrabold font-eras-bold">50+</h3>
          <p className="mt-2 text-xl text-center font-century-gothic">Fiat <br /> currencies</p>


          <div className="flex mt-4 -space-x-3 ">
            <div className="w-12 h-12  bg-white rounded-full shadow-md flex items-center justify-center">
              <span className="text-black font-semibold">$</span>
            </div>
            <div className="w-12 h-12  bg-white rounded-full shadow-md flex items-center justify-center">
              <span className="text-black font-semibold">€</span>
            </div>
            <div className="w-12 h-12  bg-white rounded-full shadow-md flex items-center justify-center">
              <span className="text-black font-semibold">£</span>
            </div>
            <div className="w-12 h-12  bg-white rounded-full shadow-md flex items-center justify-center">
              <span className="text-black font-semibold">...</span>
            </div>
          </div>
        </div>

        {/* Fiat Payment Channels */}
        <div className="flex flex-col items-center border-r-[1px] border-white">
          <h3 className="text-5xl font-extrabold font-eras-bold">10+</h3>
          <p className="mt-2 text-xl text-center font-century-gothic">Fiat payment <br /> channels</p>


          <div className="flex mt-4 -space-x-3">
            <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
            <i class="ri-visa-line text-blue-600 text-2xl" ></i>
            </div>
            <div className="w-12 h-12  bg-white rounded-full  shadow-md flex items-center justify-center">
              <img src={apple} alt="Apple Pay" className="w-6 h-6" />
            </div>
            <div className="w-12 h-12 p-5 bg-white rounded-full shadow-md flex items-center justify-center">
            
             <p className='text-black	text-center text-[8px] font-bold'>Bank<br />Transfer</p>
             
             

            </div>
            <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
              <span className="text-black font-semibold">...</span>
            </div>
          </div>
        </div>

        {/* Cryptocurrencies Supported */}
        <div className="flex flex-col items-center">
          <h3 className="text-5xl font-extrabold font-eras-bold">10+</h3>
          <p className="mt-2 text-xl text-center font-century-gothic">Cryptocurrencies <br /> supported</p>
          <div className="flex mt-4 -space-x-3">
            <div className="w-12 h-12  bg-white rounded-full shadow-md flex items-center justify-center">
              <img src={icon1} alt="Bitcoin" className="w-6 h-6" />
            </div>
            <div className="w-12 h-12  bg-white rounded-full shadow-md flex items-center justify-center">
              <img src={icon2} alt="Ethereum" className="w-6 h-6" />
            </div>
            <div className="w-12 h-12  bg-white rounded-full shadow-md flex items-center justify-center">
              <img src={icon3} alt="Tether" className="w-6 h-6" />
            </div>
            <div className="w-12 h-12  bg-white rounded-full shadow-md flex items-center justify-center">
              <span className="text-black font-semibold">...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Countries


// import React from 'react';
// import 'remixicon/fonts/remixicon.css';

// const Countries = () => {
//   return (
//     <section className="h-[15rem] container mx-auto bg-gradient-to-r from-[#004a5e] to-[#3BB9E3] text-white py-12 mt-10 mb-64">
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
//         {/* Supported Countries */}
//         <div className="flex flex-col items-center">
//           <h3 className="text-4xl font-bold">170+</h3>
//           <p className="mt-2 text-lg">Supported countries</p>
//           <div className="flex mt-4 -space-x-3">
//             {['EMEA', 'APAC', 'LATAM', '...'].map((region, index) => (
//               <div key={index} className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//                 <span className="text-gray-500 text-[10px] font-extrabold">{region}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Fiat Currencies */}
//         <div className="flex flex-col items-center">
//           <h3 className="text-4xl font-bold">50+</h3>
//           <p className="mt-2 text-lg">Fiat currencies</p>
//           <div className="flex mt-4 -space-x-3">
//             {['$', '€', '£', '...'].map((symbol, index) => (
//               <div key={index} className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//                 <span className="text-black text-lg font-semibold">{symbol}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Fiat Payment Channels */}
//         <div className="flex flex-col items-center">
//           <h3 className="text-4xl font-bold">10+</h3>
//           <p className="mt-2 text-lg">Fiat payment channels</p>
//           <div className="flex mt-4 -space-x-3">
//             <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
//               <i className="ri-visa-line text-white text-2xl"></i>
//             </div>
//             <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <img src="src/assets/Images/payment/applePay.png" alt="Apple Pay" className="w-6 h-6" />
//             </div>
//             <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <p className="text-black text-center text-[8px] font-bold">
//                 Bank<br />Transfer
//               </p>
//             </div>
//             <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//               <span className="text-black font-semibold">...</span>
//             </div>
//           </div>
//         </div>

//         {/* Cryptocurrencies Supported */}
//         <div className="flex flex-col items-center">
//           <h3 className="text-4xl font-bold">10+</h3>
//           <p className="mt-2 text-lg">Cryptocurrencies supported</p>
//           <div className="flex mt-4 -space-x-3">
//             {['bitcoin-icon.png', 'ethereum-icon.png', 'tether-icon.png', '...'].map((icon, idx) => (
//               <div key={idx} className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
//                 {icon === '...' ? (
//                   <span className="text-black font-semibold">...</span>
//                 ) : (
//                   <img src={`path/to/${icon}`} alt={icon.replace('-icon.png', '')} className="w-6 h-6" />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Countries;
