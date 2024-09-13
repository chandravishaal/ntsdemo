// import React from 'react'

// const HowToBuy = () =>{
//     return (
//       <div>
//         <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 items-center container mx-auto rounded-xl  bg-[#E7F1FF] mt-10 mb-10">
//           {/* Bitcoin Image */}
//           <div className="flex justify-center  ">
//             <img
//               src="https://cdn.pixabay.com/photo/2020/06/04/09/34/bitcoin-5258032_1280.jpg"
//               alt="Bitcoin"
//               className="rounded-l-lg shadow-md"
//             />
//           </div>
//           {/* About Bitcoin Text */}
//           <div className='px-12'>
//             <h3 className="text-3xl font-bold font-eras-bold mb-4">
//              How To Buy Bitcoin
//             </h3>
//             <p className="text-gray-600">
//              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A labore corporis, quae qui error maxime quasi, obcaecati maiores natus earum eos vel odit tempore fugiat.
//             </p>
//             <button className="px-6 py-3 mt-10 font-century-gothic font-semibold text-lg md:text-xl bg-[#03CBD2] text-black rounded-lg">
//            Read More
//             </button>
//           </div>
//         </div>
//         </div>
//     )
//   }

// export default HowToBuy


import React from "react";

const HowToBuy = () => {
  return (
    <div className="px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center container mx-auto rounded-xl bg-[#E7F1FF] mt-10 mb-10 p-5 md:p-0">
        {/* Bitcoin Image */}
        <div className="flex justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2020/06/04/09/34/bitcoin-5258032_1280.jpg"
            alt="Bitcoin"
            className="rounded-l-lg shadow-md md:w-full"
          />
        </div>

        {/* About Bitcoin Text */}
        <div className="px-4 md:px-12">
          <h3 className="text-2xl md:text-3xl font-bold font-eras-bold mb-4">
            How To Buy Bitcoin
          </h3>
          <p className="text-gray-600 text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A labore
            corporis, quae qui error maxime quasi, obcaecati maiores natus
            earum eos vel odit tempore fugiat.
          </p>
          <button className="px-6 py-3 mt-6 md:mt-10 font-century-gothic font-semibold text-lg md:text-xl bg-[#03CBD2] text-black rounded-lg">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
