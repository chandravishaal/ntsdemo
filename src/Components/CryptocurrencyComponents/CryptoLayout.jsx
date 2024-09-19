import Bitcoin from "../../assets/Images/cryptocurrency/BTC.png";
import Ethereum from "../../assets/Images/cryptocurrency/ETH.png";
import Tether from "../../assets/Images/cryptocurrency/USTD.png";
import USD from "../../assets/Images/cryptocurrency/USDC.png";
import XRP from "../../assets/Images/cryptocurrency/XRP.png";
import Dogecoin from "../../assets/Images/cryptocurrency/DOGE.png";
import Cardano from "../../assets/Images/cryptocurrency/ADA.png";
import Tron from "../../assets/Images/cryptocurrency/TRX.png";
import Polygon from "../../assets/Images/cryptocurrency/MATIC.png";
import Binance from "../../assets/Images/cryptocurrency/BNB.png";

const CryptoLayout = () => {
  return (
    <div className=" bg-white">
      {/* People also view section */}
      <section className="mb-12 bg-cyan-50">
  <div className="container mx-auto py-10 md:py-20 px-4">
    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 md:mb-6 font-montserrat text-gray-900">
      People also view
    </h2>
    <p className="text-center text-base font-century-gothic md:text-xl mb-6 md:mb-8">
      People who viewed Bitcoin tend to also <br /> view the following cryptocurrencies.
    </p>

    {/* Cryptocurrency Items */}
    <div className="flex justify-between items-center space-x-4 sm:space-x-6">
      {/* Tether */}
      <div className="flex flex-col items-center w-20 md:w-24">
        <div className="w-14 h-14 md:w-20 md:h-20 bg-[#03CBD2] rounded-full shadow-md flex items-center justify-center mb-4 md:mb-5">
          <img src={Tether} alt="Tether" className="w-10 h-10 md:w-16 md:h-16" />
        </div>
        <p className="text-center font-century-gothic text-lg md:text-xl">Tether (USDT)</p>
      </div>

      {/* Binance Coin */}
      <div className="flex flex-col items-center w-20 md:w-24">
        <div className="w-14 h-14 md:w-20 md:h-20 bg-[#03CBD2] rounded-full shadow-md flex items-center justify-center mb-4 md:mb-5">
          <img src={Binance} alt="Binance Coin" className="w-10 h-10 md:w-16 md:h-16" />
        </div>
        <p className="text-center font-century-gothic text-lg md:text-xl">Binance Coin</p>
      </div>

      {/* Polygon Matic */}
      <div className="flex flex-col items-center w-20 md:w-24">
        <div className="w-14 h-14 md:w-20 md:h-20 bg-[#03CBD2] rounded-full shadow-md flex items-center justify-center mb-4 md:mb-5">
          <img src={Polygon} alt="Polygon Matic" className="w-10 h-10 md:w-16 md:h-16" />
        </div>
        <p className="text-center font-century-gothic text-lg md:text-xl">Polygon Matic</p>
      </div>

      {/* USD Coin */}
      <div className="flex flex-col items-center w-20 md:w-24">
        <div className="w-14 h-14 md:w-20 md:h-20 bg-[#03CBD2] rounded-full shadow-md flex items-center justify-center mb-4 md:mb-5">
          <img src={USD} alt="USD Coin" className="w-10 h-10 md:w-16 md:h-16" />
        </div>
        <p className="text-center font-century-gothic text-lg md:text-xl">USD Coin</p>
      </div>

      {/* Tron */}
      <div className="flex flex-col items-center w-20 md:w-24">
        <div className="w-14 h-14 md:w-20 md:h-20 bg-[#03CBD2] rounded-full shadow-md flex items-center justify-center mb-4 md:mb-5">
          <img src={Tron} alt="Tron" className="w-10 h-10 md:w-16 md:h-16" />
        </div>
        <p className="text-center font-century-gothic text-lg md:text-xl pb-7 md:pb-0">Tron</p>
      </div>
    </div>
  </div>
</section>






      {/* Popular cryptocurrencies section */}
      <section className="mb-12  p-6 rounded-lg  container mx-auto  py-8">
  <h2 className="text-4xl font-semibold text-center mb-4 md:mb-6 font-montserrat ">Popular cryptocurrencies</h2>
  <p className="text-center text-xl mb-6 md:mb-8 font-century-gothic">A selection of cryptocurrencies in the top 50 by market cap.</p>
  <div className="grid grid-cols-4 gap-8 justify-items-center">
    <div className="flex flex-col items-center">
      <img src={Bitcoin} alt="Bitcoin" className="w-14 h-14 mb-5" />
      <p className="text-center font-century-gothic text-[17px] md:text-xl">Bitcoin</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Ethereum} alt="Ethereum" className="w-14 h-14 mb-5" />
      <p className="text-center font-century-gothic text-[17px] md:text-xl">Ethereum</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Tether} alt="Tether" className="w-14 h-14 mb-5" />
      <p className="text-center font-century-gothic text-[17px] md:text-xl">Tether</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={USD} alt="USDC" className="w-14 h-14 mb-5" />
      <p className="text-center font-century-gothic text-[17px] md:text-xl">USDC</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={XRP} alt="XRP" className="w-14 h-14 mb-5" />
      <p className="text-center font-century-gothic text-[17px] md:text-xl">XRP</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Dogecoin} alt="Dogecoin" className="w-14 h-14 mb-5" />
      <p className="text-center font-century-gothic text-[17px] md:text-xl">Dogecoin</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Cardano} alt="Cardano" className="w-14 h-14 mb-5" />
      <p className="text-center font-century-gothic text-[17px] md:text-xl">Cardano</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Tron} alt="Tron" className="w-14 h-14 mb-5" />
      <p className="text-center font-century-gothic text-[17px] md:text-xl">Tron</p>
    </div>
  </div>
</section>


      {/* Recently added section */}
      <section className="mb-12 container mx-auto  py-8">
        <h2 className="text-4xl font-semibold text-center mb-4 md:mb-6 font-montserrat ">Recently added</h2>
        <p className="text-center text-xl mb-6 md:mb-8 font-century-gothic">A selection of the most recently added cryptocurrencies.</p>
        <div className="flex justify-center md:space-x-44 space-x-20">
          <div className="flex flex-col items-center">
            <img src={XRP} alt="XRP" className="w-14 h-14 mb-5" />
            <p className="text-center font-century-gothic text-[17px] md:text-xl">XRP</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Dogecoin} alt="Dogecoin" className="w-14 h-14 mb-5" />
            <p className="text-center font-century-gothic text-[17px] md:text-xl">Dogecoin</p>
          </div>
        </div>
      </section>

      {/* Comparable market cap section */}
      <section className="mb-12 bg-[#EFFDFD] p-6 rounded-lg  container mx-auto  py-8">
  <h2 className="text-4xl font-semibold text-center mb-4 md:mb-6 font-century-gothic ">Comparable market cap</h2>
  <p className="text-center text-xl mb-6 md:mb-8 font-century-gothic">Of all the assets on Coinbase, these 12 are the closest to Bitcoin in market cap.</p>
  <div className="grid grid-cols-5 gap-8 justify-items-center">
    <div className="flex flex-col items-center">
      <img src={Bitcoin} alt="Bitcoin" className="w-12 h-12 mb-5" />
      <p  className="text-center font-century-gothic text-[17px] md:text-xl">Bitcoin</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Ethereum} alt="Ethereum" className="w-12 h-12 mb-5" />
      <p className="text-center font-century-gothic text-[17px] md:text-xl">Ethereum</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Tether}alt="Tether" className="w-12 h-12 mb-5" />
      <p className="text-center font-century-gothic text-[17px] md:text-xl">Tether</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={USD} alt="USDC" className="w-12 h-12 mb-5" />
      <p  className="text-center font-century-gothic text-[17px] md:text-xl">USDC</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Tron} alt="Tron" className="w-12 h-12 mb-5" />
      <p className="text-center font-century-gothic text-[17px] md:text-xl">Tron</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={XRP} alt="XRP" className="w-12 h-12 mb-5" />
      <p className="text-center font-century-gothic text-[17px] md:text-xl">XRP</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Dogecoin} alt="Dogecoin" className="w-12 h-12 mb-5" />
      <p className="text-center font-century-gothic text-[17px] md:text-xl">Dogecoin</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Cardano} alt="Cardano" className="w-12 h-12 mb-5" />
      <p className="text-center font-century-gothic text-[17px] md:text-xl">Cardano</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Binance} alt="BNB" className="w-12 h-12 mb-5" />
      <p className="text-center font-century-gothic text-[17px] md:text-xl">BNB</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Polygon}alt="Polygon" className="w-12 h-12 mb-5" />
      <p className="text-center font-century-gothic text-[17px] md:text-xl">Polygon</p>
    </div>
  </div>
        </section>


      {/* Advanced trading section */}
      <section className="mb-12  p-6 rounded-lg  container mx-auto  py-8">
        <h2 className="text-4xl font-semibold text-center mb-4 md:mb-6 font-montserrat ">Advanced trading</h2>
        <p className="text-center text-xl mb-6 md:mb-8 font-century-gothic">Here is a selection of spot and futures markets that people watch.</p>
        <div className="grid grid-cols-5 gap-8 justify-items-center">
          <div className="flex flex-col items-center">
            <img src={Bitcoin} alt="Bitcoin" className="w-12 h-12 mb-5" />
            <p>Bitcoin</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Ethereum} alt="Ethereum" className="w-12 h-12 mb-5" />
            <p className="text-center font-century-gothic text-[17px] md:text-xl">Ethereum</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Tether} alt="Tether" className="w-12 h-12 mb-5" />
            <p className="text-center font-century-gothic text-[17px] md:text-xl">Tether</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={USD} alt="USDC" className="w-12 h-12 mb-5" />
            <p className="text-center font-century-gothic text-[17px] md:text-xl">USDC</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Tron} alt="Tron" className="w-12 h-12 mb-5" />
            <p className="text-center font-century-gothic text-[17px] md:text-xl">Tron</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={XRP} alt="XRP" className="w-12 h-12 mb-5" />
            <p className="text-center font-century-gothic text-[17px] md:text-xl">XRP</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Dogecoin} alt="Dogecoin" className="w-12 h-12 mb-5" />
            <p className="text-center font-century-gothic text-[17px] md:text-xl">Dogecoin</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Cardano} alt="Cardano" className="w-12 h-12 mb-5" />
            <p className="text-center font-century-gothic text-[17px] md:text-xl">Cardano</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Binance} alt="BNB" className="w-12 h-12 mb-5" />
            <p className="text-center font-century-gothic text-[17px] md:text-xl">BNB</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Polygon} alt="Polygon" className="w-12 h-12 mb-5" />
            <p className="text-center font-century-gothic text-[17px] md:text-xl">Polygon</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CryptoLayout;







