import React from 'react';

const Partners = () => {
  return (
    <div className="relative  px-5">
      {/* Circular Background with Blur */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="circlePosition w-[590px] bg-primaryCyan/40 rounded-lg absolute z-1 top-[50%] left-[50%] translate-x-[-40%] translate-y-[-40%] blur-[160px]"></div>
      </div>

     

      <section className='flex flex-col items-center justify-center relative z-10 min-h-screen'>
      <h3 className="text-center text-xl md:text-3xl lg:text-4xl font-semibold underline text-black raleway-hero md:mb-1 lg:mb-1 font-montserrat py-8">
        PARTNERS
      </h3>
        <div className="bg-white/70 w-[370px] h-[370px] flex items-center justify-center rounded-2xl"> {/* Square container */}
        
          <div className="grid grid-cols-2 gap-y-14 gap-x-28">
            <a className="flex flex-col items-center">
              <img
                src="https://cdn.prod.website-files.com/654506076ba62ddb88e1876a/6548f574e000e21e5fa0ceef_Scorechain%20-%20Webclip.png"
                alt="Partner 1"
                className="w-24 h-24 object-contain" />
              <span className="text-center font-montserrat mt-2">Scorechain</span>
            </a>
            <a className="flex flex-col items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/BitGo_Color_Large.png/330px-BitGo_Color_Large.png"
                alt="Partner 2"
                className="w-24 h-24 object-contain backdrop-blur-sm" />
              <span className="text-center font-montserrat mt-2">BitGo</span>
            </a>
            <a className="flex flex-col items-center">
              <img
                src="https://crypto.com/__assets/mkt-nav-footer/images/cdc_logo.svg"
                alt="Partner 3"
                className="w-24 bg-gray-700 h-24 object-contain" />
              <span className="text-center font-montserrat mt-2">Crypto</span>
            </a>
            <a className="flex flex-col items-center">
              <img
                src="https://play-lh.googleusercontent.com/1Os7bEHgceQn6OZROH312Mqj1kp_PHgTZa9XZ1PvnJKvfTvdQAIKzp0jWRP-__1FxA=s188-rw"
                alt="Partner 4"
                className="w-24 h-24 object-contain" />
              <span className="text-center font-montserrat mt-2">Sumsub</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partners;
