import heroMobiles from '../assets/Images/hero_section_mobile.png';
import Typewriter from 'typewriter-effect';
import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from "gsap";

const HeroSection = () => {

  const inputBox = useRef(null);
  const brand = useRef(null);

  useEffect(() => { 
    gsap.from(inputBox.current, {
      y:100,
      duration: 1,
      opacity: 0,
      delay: 0.7,
      // ease: "power4.out",
    });

    gsap.from(brand.current, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      delay: 1,
      // ease: "power4.out",
      stagger: 0.2
    })
  }, [])

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="heroSection-background w-full">
      <div className="flex items-center justify-between gap-20 container mx-auto "> 
        <div className="flex flex-col items-start mt-5">
        <h1 className="lg:text-4xl text-3xl font-bold lg:mb-3 mb-6 whitespace-normal">
          Buy or Sell&nbsp; 
          <span className="inline-flex max-w-full whitespace-nowrap overflow-y-hidden">
            <Typewriter
              options={{
                strings: [
                  'Bitcoin', 'Ethereum', 'Ripple', 'Litecoin', 'Dogecoin',
                  'Cardano', 'Solana', 'Polkadot', 'Binance Coin',
                  'Avalanche', 'Polygon', 'Shiba Inu', 'Uniswap', 
                  'Chainlink', 'Stellar', 'Cosmos'
                ],
                autoStart: true,
                delay: 200,
                loop: true,
              }}
            />
          </span> 
          & 70+ Cryptocurrencies
        </h1>
          <h1  ref={brand} className="text-primaryCyan font-semibold overflow-hidden lg:text-3xl text-xl lg:mb-3 mb-4">
            On <span className='font-bold'>North Star Metrics</span> in India 24/7
          </h1>
          <p className='lg:text-sm text-sm mb-5'>
          At North Star Metrics, we aim to transform the way people buy and sell cryptocurrency. Our commitment is to provide a safe, secure and user-friendly environment.
          </p>
          <h1 className="lg:text-lg text-sm mb-[2px] font-semibold">Email address</h1>
          <div className="flex flex-col md:flex-row items-center gap-5 w-full">
            <div className="flex flex-col gap-2">
              <input ref={inputBox} type="text" className="lg:text-base lg:p-3 p-1 rounded-xl border-2 border-gray-300 outline-none" placeholder="contact@ntsmetrics.com" />
            </div>
            <button className="lg:px-3 lg:py-2 px-3 py-2 text-md button text-center cursor-pointer md:w-1/5 lg:text-base text-sm font-semibold transition-all hover:bg-cyan-500 duration-200 outline-none text-white bg-primaryCyan rounded-[100px] shadow-[0_4px_#118baa]">
              Sign Up
            </button>
          </div>
        </div>
        
        {/* hero-image */}
        <div className="hidden md:block select-none w-full">
          <img src={heroMobiles} className='w-80 lg:w-full mt-10 hero-phone-banner' alt="" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
