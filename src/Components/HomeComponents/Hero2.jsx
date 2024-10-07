import React from "react";
import Typewriter from "typewriter-effect";
import hero_group from '../../assets/Images/HomeImages/hero_group.svg';
import PrimaryButton from "../../Common/PrimaryButton";
import SecondaryButton from "../../Common/SecondaryButton";

const Hero2 = () => {
  return (
    <section className="py-10 lg:h-[700px] md:[500px] heroSection-background">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-5">
        {/* content */}
        <div className="flex flex-col flex-1 gap-5 items-start justify-center px-5">
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

          <h1 className="bg-primaryCyan text-white lg:text-3xl px-2 rounded-md">On North Star Metrics in India 24/7</h1>

          <p className="lg:w-[500px] text-xs">
            If you&apos;re in India and looking forward to buying or selling Bitcoin, Litecoin, Ethereum, or 100+ other cryptocurrencies, simply click on &apos;Buy/Sell Cryptocurrencies&apos; to make your first trade instantly. We accept credit/debit cards, net banking, UPI, and various other payment methods.
          </p>

          <div className="flex items-center gap-5">
            <PrimaryButton title="Buy" />
            <SecondaryButton title="Sell" />
          </div>
        </div>

        {/* image */}
        <div className="flex-1 hidden lg:block relative lg:w-full w-[99%] mt-16 mb-10">
            <img src={hero_group} className="relative" alt="heroMobileImage" />

            {/* Bitcoin logo with hover flip effect */}
            <div className="w-20 h-20 absolute top-[18rem] right-[14rem] group [perspective:1000px]">
              <img
                src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=035"
                className="w-full h-full icon-shadow transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]"
                alt="bitcoin"
              />
            </div>

            {/* BNB logo with hover flip effect */}
            <div className=" w-20 h-20 absolute top-[16rem] right-[25.7rem] group [perspective:1000px]">
              <img
                src="https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=035"
                className="w-10 h-10 icon-shadow transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]"
                alt="bitcoin"
              />
            </div>

             {/* Ethereum logo with hover flip effect */}
             <div className=" w-20 h-20 absolute top-[23rem] right-[26rem] group [perspective:1000px]">
              <img
                src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=035"
                className="w-full h-full icon-shadow transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]"
                alt="bitcoin"
              />
            </div>

            {/* Tether logo with hover flip effect */}
            <div className=" w-20 h-20 absolute top-[11rem] right-[5rem] group [perspective:1000px]">
              <img
                src="https://cryptologos.cc/logos/tether-usdt-logo.svg?v=035"
                className="w-full h-full icon-shadow transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]"
                alt="bitcoin"
              />
            </div>
            
            {/* Usdt logo with hover flip effect */}
            <div className=" w-20 h-20 absolute top-[2.5rem] right-[3rem] group [perspective:1000px]">
              <img
                src="https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=035"
                className="w-10 h-10 icon-shadow transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]"
                alt="bitcoin"
              />
            </div>

        </div>

        <div>

        </div>
      </div>
    </section>
  );
};

export default Hero2;
