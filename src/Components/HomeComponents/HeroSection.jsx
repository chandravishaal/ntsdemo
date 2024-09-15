import heroMobiles from '../../assets/Images/hero_section_mobile.png';
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
      <div className="flex md:flex-row flex-col-reverse items-center justify-between gap-8 md:gap-0 lg:gap-20 container mx-auto w-full"> 
        <div className="flex flex-col items-start md:mt-5 px-5">
        <h1 className="lg:text-4xl text-3xl font-bold lg:mb-3 mb-6 whitespace-normal">
          Buy or Sell&nbsp; 
          <span className="inline-flex max-w-full overflow-y-hidden">
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
          <h1  ref={brand} className="text-primaryCyan font-semibold overflow-hidden lg:text-3xl text-2xl lg:mb-3 mb-4">
            On <span className='font-bold'>North Star Metrics</span> in India 24/7
          </h1>
          <p className='lg:text-sm text-sm mb-5 w-auto'>
          At North Star Metrics, we aim to transform the way people buy and sell cryptocurrency. Our commitment is to provide a safe, secure and user-friendly environment.
          </p>

          <div className="flex items-center gap-5 w-full mb-5 justify-start">
            <button className="lg:px-4 lg:py-2 px-4 py-3 text-md button text-center cursor-pointer w-1/4 lg:text-base text-sm font-semibold transition-all hover:bg-cyan-500 duration-200 outline-none text-white bg-primaryCyan rounded-[100px] shadow-[0_4px_#118baa]">
              Buy
            </button>
            <button className="lg:px-4 lg:py-2 px-4 py-3 text-md button text-center cursor-pointer w-1/4 lg:text-base text-sm font-semibold transition-all duration-200 outline-none text-black bg-white rounded-[100px] shadow-[0_4px_#C0C0C0]">
              Sell
            </button>
          </div>
        </div>
        
        {/* hero-image */}
        <div className="select-none w-full mx-auto">
          <img data-aos="fade-up" data-aos-duration="2000" src={heroMobiles} loading='lazy' className='w-96 md:w-full mx-auto lg:w-full mt-10 hero-phone-banner' alt="Hero banner" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
