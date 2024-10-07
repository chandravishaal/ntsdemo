import React from "react";
import Typewriter from "typewriter-effect";
import heromobile1 from '../../assets/Images/HomeImages/heromobile1.png';
import heromobile2 from '../../assets/Images/HomeImages/heromobile2.png';
import orbit from '../../assets/Images/HomeImages/Ellipse.svg';
import { useEffect, useRef } from "react";

const Hero2 = () => {
  return (
    <section className="py-10 lg:h-[700px] md:[500px]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        {/* content */}
        <div className="flex flex-col flex-1 gap-3 items-start justify-center">
          <h1 className="lg:text-5xl text-3xl lg:mb-3 mb-6 whitespace-normal">
            Buy or Sell&nbsp;
            <span className="inline-flex max-w-full text-orange-500 overflow-y-hidden">
              <Typewriter
                options={{
                  strings: [
                    "Bitcoin",
                    "Ethereum",
                    "Ripple",
                    "Litecoin",
                    "Dogecoin",
                    "Cardano",
                    "Solana",
                    "Polkadot",
                    "Binance Coin",
                    "Avalanche",
                    "Polygon",
                    "Shiba Inu",
                    "Uniswap",
                    "Chainlink",
                    "Stellar",
                    "Cosmos",
                  ],
                  autoStart: true,
                  delay: 200,
                  loop: true,
                }}
              />
            </span>
            <br />& 100+ Cryptocurrencies
          </h1>

          <h1 className="bg-primaryCyan text-white lg:text-3xl px-2">On North Star Metrics in India 24/7</h1>

          <p className="lg:w-[500px] text-xs">If you&apos;re in India and looking forward to buying or selling Bitcoin, Litecoin, Ethereum, or 100+ other cryptocurrencies, simply click on &dapos;Buy/Sell Cryptocurrencies&dapos; to make your first trade instantly. We accept credit/debit cards, net banking, UPI, and various other payment methods.</p>
        </div>

        {/* image */}
        <div className="flex-1 relative">
            <img src={heromobile1} className="absolute w-60 right-0" alt="Mobile 1" />
            <img src={heromobile2} className="absolute w-60 right-32 -top-14" alt="Mobile 2" />
            <img src={orbit} className="absolute w-[400px] right-0 top-0" alt="Ellipse" />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
