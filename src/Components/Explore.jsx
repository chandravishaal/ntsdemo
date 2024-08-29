import { useEffect } from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines"; 
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import explorebanner from "../assets/Images/2nd_section_mobile.png";

const CoinCards = ({ image, name, amount, data, isPositive, percentage }) => {
  return (
    <div data-aos="flip-left" data-aos-duration="2000" className="rounded-[40px] bg-white w-[100%] shadow-xl z-40 border-[3px] border-gray-200 px-4 py-2">
      <div className="flex flex-col justify-between gap-2 w-full">
        <div className="flex items-center justify-between gap-5">
          <div className="flex flex-col items-start mt-2">
            <h1 className="font-bold text-lg">{name}</h1>
            <h1 className="text-sm font-medium mb-5">₹ {amount}</h1>
          </div>
          <img src={image} className="w-10 mb-2" alt="" />
        </div>
        <div className="flex items-center w-full gap-1">
          <Sparklines data={data} limit={7} width={100} height={30} margin={1}>
            <SparklinesLine color={isPositive ? "green" : "red"} />
            <SparklinesSpots style={{ fill: isPositive ? "green" : "red" }} />
          </Sparklines>
          <h1
            className={`text-2xl flex mb-3 items-center gap-1 ${
              isPositive ? "text-green-600" : "text-red-600"
            } mt-3 font-semibold`}
          >
            <span className="text-lg">
              {isPositive ? <FaArrowUpLong /> : <FaArrowDownLong />}
            </span>
            <span className="text-lg select-none">{percentage}%</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

const Explore = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="exploreSection-background">
      <div className="flex flex-col md:flex-row justify-between py-5 gap-10 container w-full mx-auto items-center">
        <div className="flex-1 select-none w-full flex justify-center md:justify-start">
          <img data-aos="fade-up" data-aos-duration="2000" src={explorebanner} className="w-[70%] -translate-x-5 translate-y-7" alt="explore banner" />
        </div>

        <div className="flex flex-1 flex-col items-center md:items-start gap-2">
          <h1 data-aos="fade-left" data-aos-duration="1000" className="text-3xl font-bold mb-2 text-selection text-center md:text-left">
            Explore Crypto
          </h1>
          <p data-aos="fade-left" data-aos-duration="2000" className="text-xl text-center md:text-left">
            Buy and sell 100+ cryptocurrencies on the best platform for buying and selling cryptocurrency, including Bitcoin, Ethereum, and more.
          </p>

          <div className="flex items-center gap-5 w-full my-5 justify-center md:justify-start">
            <button className="lg:px-3 lg:py-2 px-3 py-2 text-md button text-center cursor-pointer md:w-1/5 lg:text-base text-sm font-semibold transition-all hover:bg-cyan-500 duration-200 outline-none text-white bg-primaryCyan rounded-[100px] shadow-[0_4px_#118baa]">
              Tradable
            </button>
            <button className="lg:px-4 lg:py-2 px-3 py-2 text-md button text-center cursor-pointer md:w-1/3 lg:w-1/5 whitespace-nowrap lg:text-base text-sm font-semibold transition-all duration-200 outline-none text-black bg-white rounded-[100px] shadow-[0_4px_#C0C0C0]">
              Top Gainers
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-3 w-full mb-5">
            <CoinCards
              name="Bitcoin"
              image="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
              data={[40000, 40500, 41000, 40000, 39500, 41000, 41500]}
              amount={534454}
              isPositive={true}
              percentage={2.5}
            />
            <CoinCards
              name="Ethereum"
              image="https://cryptologos.cc/logos/ethereum-eth-logo.png"
              data={[3000, 3050, 3100, 2950, 2900, 3000, 3100]}
              amount={4366}
              isPositive={true}
              percentage={1.5}
            />
            <CoinCards
              name="Litecoin"
              image="https://cryptologos.cc/logos/litecoin-ltc-logo.png"
              data={[200, 205, 210, 190, 185, 195, 200]}
              amount={2435}
              isPositive={false}
              percentage={0.5}
            />
            <CoinCards
              name="Ripple"
              image="https://cryptologos.cc/logos/xrp-xrp-logo.png"
              data={[0.9, 0.91, 0.92, 0.89, 0.88, 0.9, 0.92]}
              amount={3245}
              isPositive={true}
              percentage={1.5}
            />
            <CoinCards
              name="Cardano"
              image="https://cryptologos.cc/logos/cardano-ada-logo.png"
              data={[1.1, 1.15, 1.2, 1.05, 1, 1.1, 1.2]}
              amount={76584}
              isPositive={false}
              percentage={0.5}
            />
            <CoinCards
              name="Solana"
              image="https://cryptologos.cc/logos/solana-sol-logo.png"
              data={[30, 32, 33, 31, 30, 32, 34]}
              amount={34234}
              isPositive={true}
              percentage={4.5}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
