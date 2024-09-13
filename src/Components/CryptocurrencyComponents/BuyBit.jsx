import React from 'react'


const BuyBit = () => {
  return (
    <div className="px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center container mx-auto rounded-xl bg-[#E7F1FF] mt-10 mb-10 p-5 md:p-0">
        {/* Bitcoin Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1518478021985-13055115e310?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bitcoin"
            className="rounded-l-lg shadow-md md:w-full"
          />
        </div>

        {/* About Bitcoin Text */}
        <div className="px-4 md:px-8 ">
          <h3 className="text-2xl md:text-3xl font-bold font-century-gothic mb-8">
          Buy Bitcoin with maximum security
          </h3>
           <p className="text-gray-600 font-century-gothic">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A labore corporis, quae qui error maxime quasi, obcaecati maiores natus earum eos vel odit tempore fugiat.
          </p>
          <button className="px-6 py-3 mt-6 md:mt-10 font-century-gothic font-semibold text-lg md:text-xl bg-[#03CBD2] text-black rounded-lg">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyBit
