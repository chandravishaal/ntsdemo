import React from 'react';

const ComingSoon = () => {
  return (
    <div className="bg-cyan-50 pt-20 px-4 md:px-6 lg:px-8 pb-8 md:pb-0">
      <h3 className="text-center text-2xl md:text-4xl lg:text-5xl underline font-semibold text-black raleway-hero mb-12 lg:mb-16 font-montserrat">
        PARTNERS
      </h3>
      <section className='flex flex-col items-center justify-center'>
        <div className="grid grid-cols-2 gap-y-14 gap-x-28"> 
          <a href="#" className="flex flex-col items-center">
            <img 
              src="https://cdn.prod.website-files.com/654506076ba62ddb88e1876a/6548f574e000e21e5fa0ceef_Scorechain%20-%20Webclip.png" 
              alt="Partner 1" 
              className="w-24 h-24 object-contain" /> 
            <span className="text-center font-montserrat mt-2">Scorechain</span>
          </a>
          <a href="#" className="flex flex-col items-center">
            <img 
              src="https://crypto.com/__assets/mkt-nav-footer/images/cdc_logo.svg" 
              alt="Partner 2" 
              className="w-24 h-24 object-contain bg-gray-700 backdrop-blur-sm" /> 
            <span className="text-center font-montserrat mt-2">Crypto</span>
          </a>
          <a href="#" className="flex flex-col items-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/BitGo_Color_Large.png/330px-BitGo_Color_Large.png" 
              alt="Partner 3" 
              className="w-24 h-24 object-contain" /> 
            <span className="text-center font-montserrat mt-2">BitGo</span>
          </a>
          <a href="#" className="flex flex-col items-center">
            <img 
              src="https://play-lh.googleusercontent.com/1Os7bEHgceQn6OZROH312Mqj1kp_PHgTZa9XZ1PvnJKvfTvdQAIKzp0jWRP-__1FxA=s188-rw" 
              alt="Partner 4" 
              className="w-24 h-24 object-contain" /> 
            <span className="text-center font-montserrat mt-2">Sumsub</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default ComingSoon;
