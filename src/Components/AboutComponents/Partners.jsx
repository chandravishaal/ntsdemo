import React from 'react';

const Partners = () => {
  return (
    <div className="relative px-5">
      {/* Circular Background with Blur */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="circlePosition w-[600px] h-[500px] bg-primaryCyan/40 rounded-lg absolute z-1 top-[50%] left-[53%] translate-x-[-5%] translate-y-[-50%] blur-[400px]"></div>
      </div>

      <div className="h-[40rem] w-full flex items-center justify-center"> {/* Center the container */}
        <div
          id="main"
          className="md:h-4/6 mx-auto container bg-gradient-to-b from-white to-cyan-50 md:bg-gradient-to-b md:from-white md:to-cyan-50 rounded-lg flex flex-col md:flex-row items-center justify-center overflow-hidden"
        >
          <div className="w-full md:w-1/2 text-center md:text-left px-6 md:px-4 md:h-[100%] mt-5 pb-10 md:pb-0 flex flex-col justify-center items-center md:items-start"> {/* Center the left section */}
            <h2 className="text-3xl md:text-4xl font-antipasto-pro font-bold text-gray-800">
              We Work With The <br />
              <span className="text-cyan-400 border-b-2 border-primaryCyan/15 inline-block text-4xl md:text-5xl">
                Best Partners
              </span>
            </h2>

            <p className="text-gray-500 my-5 font-century-gothic mb-20">
              At North Star Metrics, Our team is dedicated to revolutionising
              crypto buying and selling, seeking talented individuals to join our
              dynamic, innovative work environment.

              <div className="my-8">
                <button className="lg:px-6 lg:py-2.5 px-6 py-3 min-w-[90px] max-w-auto text-md select-none button whitespace-nowrap text-center cursor-pointer lg:text-base text-sm font-semibold transition-all hover:bg-cyan-500 duration-200 outline-none text-black bg-primaryCyan rounded-[100px] shadow-[0_4px_#118baa] font-century-gothic">
                  Become a Partner
                </button>
              </div>
            </p>
          </div>

          <div className="w-full md:w-1/2 h-full px-5 md:h-[100%] flex justify-center items-center"> {/* Center the right section */}
            <div className="relative scroll-py-36 px-5">
              <section className="flex flex-col items-center justify-center relative z-10 min-h-screen">
                <div className="bg-white/70 w-[370px] h-[370px] flex items-center justify-center rounded-2xl">
                  {/* Square container */}
                  <div className="grid grid-cols-2 gap-y-14 gap-x-20 0"> {/* Adjusted gap-x to align images properly */}
                    <a className="flex flex-col items-center">
                      <img
                        src="https://cdn.prod.website-files.com/654506076ba62ddb88e1876a/6548f574e000e21e5fa0ceef_Scorechain%20-%20Webclip.png"
                        alt="Partner 1"
                        className="w-24 h-24 object-contain"
                      />
                      <span className="text-center font-montserrat mt-2">Scorechain</span>
                    </a>
                    <a className="flex flex-col items-center">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/BitGo_Color_Large.png/330px-BitGo_Color_Large.png"
                        alt="Partner 2"
                        className="w-24 h-24 object-contain backdrop-blur-sm"
                      />
                      <span className="text-center font-montserrat mt-2">BitGo</span>
                    </a>
                    <a className="flex flex-col items-center">
                      <img
                        src="https://crypto.com/__assets/mkt-nav-footer/images/cdc_logo.svg"
                        alt="Partner 3"
                        className="w-24 bg-gray-700 h-24 object-contain"
                      />
                      <span className="text-center font-montserrat mt-2">Crypto</span>
                    </a>
                    <a className="flex flex-col items-center">
                      <img
                        src="https://play-lh.googleusercontent.com/1Os7bEHgceQn6OZROH312Mqj1kp_PHgTZa9XZ1PvnJKvfTvdQAIKzp0jWRP-__1FxA=s188-rw"
                        alt="Partner 4"
                        className="w-24 h-24 object-contain"
                      />
                      <span className="text-center font-montserrat mt-2">Sumsub</span>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Partners;
