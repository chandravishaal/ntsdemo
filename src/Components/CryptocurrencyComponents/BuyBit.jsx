import React from 'react'

const BuyBit = () => {
  return (
    <div className="px-4">
      <div
        id="main"
        className="grid grid-cols-1 md:grid-cols-10 gap-6 items-center container mx-auto rounded-xl bg-[#E7F1FF] mt-10 mb-10 px-5 md:p-0 h-auto md:h-[25rem] overflow-hidden"
      >
        {/* Bitcoin Image */}
        <div
          id="right"
          className="flex justify-center h-full col-span-10 md:col-span-4"
        >
          <img
            src="https://images.unsplash.com/photo-1518478021985-13055115e310?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bitcoin"
            className="  mt-5 md:mt-0 shadow-md w-full md:w-auto object-cover"
          />
        </div>

        {/* About Bitcoin Text */}
        <div
          id="left"
          className="px-4 md:px-9 col-span-10 md:col-span-6 text-center md:text-left"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-century-gothic mb-5">
            Buy Bitcoin with maximum security
          </h3>
          <p className="text-gray-600 font-century-gothic sm:pr-10 md:pr-24">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A labore
            corporis, quae qui error maxime quasi, obcaecati maiores natus earum
            eos vel odit tempore fugiat.
          </p>
          <button className="px-6 py-3 mt-7 mb-7 md:mt-5 font-century-gothic font-semibold text-lg md:text-xl bg-[#03CBD2] text-black rounded-lg">
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

export default BuyBit
