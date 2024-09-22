

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import plate from '../../assets/Images/ServicesImages/hero_bg2.png';
import icon1 from '../../assets/Images/ServicesImages/boy-1.png';
import icon2 from '../../assets/Images/ServicesImages/icon-9.png';
import icon3 from '../../assets/Images/ServicesImages/icon-2.png';
import icon4 from '../../assets/Images/ServicesImages/icon-3.png';
import icon5 from '../../assets/Images/ServicesImages/icon-5.png';
import icon6 from '../../assets/Images/ServicesImages/icon-7.png';

gsap.registerPlugin(ScrollTrigger);

const ExchangeCrypto = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // GSAP animation with stagger effect when section enters the viewport, and repeat when it re-enters
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 }, // Initial state
        {
          opacity: 1,
          y: 0, // End state
          duration: 1,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%', // When 80% of the viewport hits the top
            toggleActions: 'play none none reset', // Replay animation every time section enters and reset when leaving
            once: false, // Ensure the animation can replay
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-cyan-50 py-8 md:py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl md:text-4xl font-montserrat font-bold mb-4">
          Buy, Sell And Exchange Cryptocurrency
        </h2>
        <p className="text-gray-800 text-sm md:text-lg font-century-gothic mb-8 md:mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          <br className="hidden md:block" />
          incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-5">
          {/* Card 1 */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="bg-white p-4 md:p-6 rounded-lg shadow-md flex items-end justify-between h-[14rem] md:h-auto"
          >
            <div className="text-left flex-[0.9]">
              <h3 className="text-lg md:text-xl font-montserrat font-semibold">Cryptocurrency Exchange Services</h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base font-century-gothic pb-4 md:pb-8">
                At North Star Metrics you can buy and sell Bitcoin, Litecoin, Ethereum, or over 70+
                cryptocurrencies instantly. We support all individuals, businesses or travelers on
                the platform that guides and protects your assets.
              </p>
            </div>
            <div className="w-10 h-8 md:w-32 md:h-14 flex-[0.1]">
              <img src={icon1} alt="Cryptocurrency exchange services icon" className="w-full h-full " />
              <img src={plate} alt="Background design element" className="" />
            </div>
          </div>

          {/* Card 2 */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="bg-white p-4 md:p-6 rounded-lg shadow-md flex items-end justify-between h-[14rem] md:h-auto"
          >
            <div className="text-left flex-[0.9]">
              <h3 className="text-lg md:text-xl font-montserrat font-semibold">Crypto Volatility Protection</h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base font-century-gothic pb-4 md:pb-8">
                North Star Metrics is the only company or platform that guides and protects your
                investments from the volatile crypto market. With our expert advice and experience,
                your assets will always bring you profit.
              </p>
            </div>
            <div className="w-10 h-8 md:w-32 md:h-14 flex-[0.1]" >
              <img src={icon2} alt="Crypto volatility protection icon" className="w-full h-full" />
              <img src={plate} alt="Background design element" className="" />

            </div>
          </div>

          {/* Card 3 */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="bg-white p-4 md:p-6 rounded-lg shadow-md flex items-end justify-between h-[14rem] md:h-auto"
          >
            <div className="text-left flex-[0.9]">
              <h3 className="text-lg md:text-xl font-montserrat font-semibold">Crypto Investment Services</h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base font-century-gothic pb-4 md:pb-8">
                If you&apos;re looking forward to investing in cryptocurrencies and not worry about
                losses, then North Star Metrics is the right place to get started. Want to discuss
                the No Risk investment program?
              </p>
            </div>
            <div className="w-10 h-8 md:w-32 md:h-14 flex-[0.1]">
              <img src={icon3} alt="Crypto investment services icon"  className="w-full h-full" />
              <img src={plate} alt="Background design element" className="" />

            </div>
          </div>

          {/* Card 4 */}
          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className="bg-white p-4 md:p-6 rounded-lg shadow-md flex items-end justify-between h-[14rem] md:h-auto"
          >
            <div className="text-left flex-[0.9]">
              <h3 className="text-lg md:text-xl font-montserrat font-semibold">Crypto-Fiat Conversion Options</h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base font-century-gothic pb-4 md:pb-8">
                North Star Metrics allows you to sell cryptocurrencies instantly and convert your
                crypto to real money, whether you want to convert it to INR, USD, GBP or others.
              </p>
            </div>
            <div className="w-10 h-8 md:w-32 md:h-14 flex-[0.1]">
              <img src={icon4} alt="Crypto-fiat conversion icon" className="w-full h-full" />
              <img src={plate} alt="Background design element" className="" />

            </div>
          </div>

          {/* Card 5 */}
          <div
            ref={(el) => (cardsRef.current[4] = el)}
            className="bg-white p-4 md:p-6 rounded-lg shadow-md flex items-end justify-between h-[14rem] md:h-auto"
          >
            <div className="text-left flex-[0.9]">
              <h3 className="text-lg md:text-xl font-montserrat font-semibold">Cryptocurrency OTC Desk</h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base font-century-gothic pb-4 md:pb-8">
              North Star Metrics offers over-the-counter crypto buy or sell services for individuals or businesses that want to
              deal in high-value transactions. The minimum trade on our OTC desk starts at ₹ 5,00,000.00.
              </p>
            </div>
            <div className="w-10 h-8 md:w-32 md:h-14 flex-[0.1]">
              <img src={icon5} alt="OTC desk services icon" className="w-full h-full" />
              <img src={plate} alt="Background design element" className="" />

            </div>
          </div>

          {/* Card 6 */}
          <div
            ref={(el) => (cardsRef.current[5] = el)}
            className="bg-white p-4 md:p-6 rounded-lg shadow-md flex items-end justify-between h-[14rem] md:h-auto"
          >
            <div className="text-left flex-[0.9]">
              <h3 className="text-lg md:text-xl font-montserrat font-semibold">Online Brokerage Services</h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base font-century-gothic pb-4 md:pb-8">
              North Star Metrics provides brokerage services for individuals or businesses that believe in self-trading. With
              our expert brokers, you get accurate market insights for your investments, for a nominal fee.
              </p>
            </div>
            <div className="w-10 h-8 md:w-32 md:h-14 flex-[0.1]">
              <img src={icon6} alt="Online brokerage services icon" className="w-full h-full" />
              <img src={plate} alt="Background design element" className="" />
            </div>
          </div>

          {/* Continue for Card 5 and Card 6 */}
        </div>
      </div>
    </section>
  );
};

export default ExchangeCrypto;
