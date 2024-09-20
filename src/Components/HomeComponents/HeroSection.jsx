import heroMobiles from '../../assets/Images/HomeImages/hero_mobile.png';
import mobilebackBanner from '../../assets/Images/HomeImages/graphic_bg.png';

import floatingIcon1 from '../../assets/Images/HomeImages/ADA.png'; // Floating icon assets
import floatingIcon2 from '../../assets/Images/HomeImages/BTC.png';
import floatingIcon3 from '../../assets/Images/HomeImages/DOGE.png';
import floatingIcon4 from '../../assets/Images/HomeImages/ETH.png';
import floatingIcon5 from '../../assets/Images/HomeImages/LTC.png';
import floatingIcon6 from '../../assets/Images/HomeImages/USDC.png';
import floatingIcon7 from '../../assets/Images/HomeImages/XRP.png';
import floatingIcon8 from '../../assets/Images/HomeImages/USTD.png';
import floatingIcon9 from '../../assets/Images/HomeImages/MATIC.png';
import floatingIcon10 from '../../assets/Images/HomeImages/TRX.png';

import Typewriter from 'typewriter-effect';
import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from "gsap";
import PrimaryButton from '../../Common/PrimaryButton';
import SecondaryButton from '../../Common/SecondaryButton';
import { Link } from 'react-router-dom';

const HeroSection = () => {

  const inputBox = useRef(null);
  const brand = useRef(null);
  const floatingIconRefs = useRef([]); // Ref for the floating icons

  useEffect(() => {
    gsap.from(inputBox.current, {
      y: 100,
      duration: 1,
      opacity: 0,
      delay: 0.7,
    });

    gsap.from(brand.current, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      delay: 1,
      stagger: 0.2
    });
  }, []);

  useEffect(() => {
    AOS.init();

    // Animate floating icons with random movement
    floatingIconRefs.current.forEach((icon, index) => {
      if (icon) {
        gsap.to(icon, {
          x: () => gsap.utils.random(-200, 200),
          y: () => gsap.utils.random(-200, 200),
          rotation: () => gsap.utils.random(-15, 15),
          duration: gsap.utils.random(5, 8), // Random duration
          repeat: -1, // Infinite loop
          yoyo: true, // Reverse the animation
          ease: "power1.inOut", // Smooth ease
          delay: index * 0.2 // Staggered animation start
        });
      }
    });
  }, []);

  return (
    <section className="heroSection-background w-full relative">
      <div className="flex md:flex-row flex-col-reverse items-center justify-between gap-8 md:gap-0 lg:gap-20 container mx-auto w-full">
        <div className="flex flex-col items-start md:mt-5 px-5">
          <h1 className="lg:text-4xl text-3xl font-bold lg:mb-3 mb-6 whitespace-normal font-montserrat ">
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
          <h1 ref={brand} className="text-primaryCyan font-semibold overflow-hidden lg:text-3xl text-2xl lg:mb-3 mb-4 font-montserrat ">
            On <span className='font-bold'>North Star Metrics</span> in India 24/7
          </h1>
          <p className='lg:text-sm text-sm mb-5 w-auto font-century-gothic'>
            At North Star Metrics, we aim to transform the way people buy and sell cryptocurrency. Our commitment is to provide a safe, secure and user-friendly environment.
          </p>

          <div className="flex items-center gap-5 w-full mb-5 md:justify-start justify-center z-30 font-century-gothic">
            <PrimaryButton title='Buy' />
            <SecondaryButton title='Sell' />
          </div>
        </div>

        {/* hero-image */}
        <div className="select-none w-full mx-auto relative">
          <img src={mobilebackBanner} className='absolute rotate-45 bottom-10 md:hidden' alt="North star metrics buy and sell cryptocurrencies platform" />
          <img data-aos="fade-up" data-aos-duration="2000" src={heroMobiles} loading='lazy' className='w-96 md:w-full mx-auto lg:w-full mt-10 hero-phone-banner' alt="Hero banner showcasing mobile app interface" />
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 hidden lg:block">
          <Link to="/coins/usdc">
            <img src={floatingIcon1} alt="USDC icon" className="absolute animate-bounce select-none stroke-slate-500 w-12 h-12" style={{ top: '20%', left: '20%' }} />
          </Link>
          <Link to="/coins/btc">
            <img src={floatingIcon2} alt="Bitcoin icon" className="absolute animate-bounce select-none w-16 h-16" style={{ top: '10%', right: '62%' }} />
          </Link>
          <Link to="/coins/doge">
            <img src={floatingIcon3} alt="Dogecoin icon" className="absolute animate-bounce select-none w-10 h-10" style={{ bottom: '20%', left: '20%' }} />
          </Link>
          <Link to="/coins/eth">
            <img src={floatingIcon4} alt="Ethereum icon" className="absolute animate-bounce select-none w-12 h-12" style={{ top: '20%', right: '30%' }} />
          </Link>
          <Link to="/coins/ltc">
            <img src={floatingIcon7} alt="Litecoin icon" className="absolute animate-bounce select-none w-10 h-10" style={{ bottom: '30%', left: '50%' }} />
          </Link>
          <Link to="/coins/xrp">
            <img src={floatingIcon10} alt="Ripple icon" className="absolute animate-bounce select-none w-12 h-12" style={{ top: '70%', left: '30%' }} />
          </Link>
          {/* <Link to="/coins/trx">
    <img ref={el => floatingIconRefs.current[6] = el} src={floatingIcon7} alt="Floating Icon 7" className="absolute select-none w-16 h-16" style={{ bottom: '10%', right: '25%' }} />
  </Link>
  <Link to="/coins/matic">
    <img ref={el => floatingIconRefs.current[7] = el} src={floatingIcon8} alt="Floating Icon 8" className="absolute select-none w-10 h-10" style={{ top: '15%', left: '50%' }} />
  </Link>
  <Link to="/coins/ada">
    <img ref={el => floatingIconRefs.current[8] = el} src={floatingIcon9} alt="Floating Icon 9" className="absolute select-none w-12 h-12" style={{ bottom: '25%', right: '35%' }} />
  </Link>
  <Link to="/coins/usdt">
    <img ref={el => floatingIconRefs.current[9] = el} src={floatingIcon10} alt="Floating Icon 10" className="absolute select-none w-10 h-10" style={{ top: '85%', right: '45%' }} />
  </Link> */}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
