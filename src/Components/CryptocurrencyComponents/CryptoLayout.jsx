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
    <div className="p-8 bg-white">
      {/* People also view section */}
      <section className="mb-12 container mx-auto  py-8">
        <h2 className="text-3xl font-semibold text-center mb-6 font-century-gothic text-gray-700">People also view</h2>
        <p className="text-center text-xs mb-7">People who viewed Bitcoin tend to also <br /> view the following cryptocurrencies.</p>
        <div className="flex justify-around space-x-6 ">
          <div className="flex flex-col items-center ">
            <div className="w-12 h-12  bg-[#03CBD2] rounded-full shadow-md flex items-center justify-center ">
            <img src={Tether} alt="Tether" className="w-10 h-10" />
            </div>
            <p>Tether (USDT)</p>
          </div>
          <div className="flex flex-col items-center">
          <div className="w-12 h-12  bg-[#03CBD2] rounded-full shadow-md flex items-center justify-center ">
            <img src={Binance} alt="Binance Coin" className="w-10 h-10" />
            </div>
            <p>Binance Coin</p>
          </div>
          <div className="flex flex-col items-center">
          <div className="w-12 h-12  bg-[#03CBD2] rounded-full shadow-md flex items-center justify-center ">
            <img src={Polygon} alt="Polygon Matic" className="w-10 h-10" />
            </div>
            <p>Polygon Matic</p>
          </div>
          <div className="flex flex-col items-center">
          <div className="w-12 h-12  bg-[#03CBD2] rounded-full shadow-md flex items-center justify-center ">
            <img src={USD} alt="USD Coin" className="w-10 h-10" />
            </div>
            <p>USD Coin</p>
          </div>
          <div className="flex flex-col items-center">
          <div className="w-12 h-12  bg-[#03CBD2] rounded-full shadow-md flex items-center justify-center ">
            <img src={Tron} alt="Tron" className="w-10 h-10" />
            </div>
            <p>Tron</p>
          </div>
        </div>
      </section>

      {/* Popular cryptocurrencies section */}
      <section className="mb-12 bg-cyan-50 p-6 rounded-lg  container mx-auto  py-8">
  <h2 className="text-3xl font-semibold text-center mb-3 font-century-gothic ">Popular cryptocurrencies</h2>
  <p className="text-center text-xs mb-10">A selection of cryptocurrencies in the top 50 by market cap.</p>
  <div className="grid grid-cols-4 gap-8 justify-items-center">
    <div className="flex flex-col items-center">
      <img src={Bitcoin} alt="Bitcoin" className="w-12 h-12" />
      <p>Bitcoin</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Ethereum} alt="Ethereum" className="w-12 h-12" />
      <p>Ethereum</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Tether} alt="Tether" className="w-12 h-12" />
      <p>Tether</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={USD} alt="USDC" className="w-12 h-12" />
      <p>USDC</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={XRP} alt="XRP" className="w-12 h-12" />
      <p>XRP</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Dogecoin} alt="Dogecoin" className="w-12 h-12" />
      <p>Dogecoin</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Cardano} alt="Cardano" className="w-12 h-12" />
      <p>Cardano</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Tron} alt="Tron" className="w-12 h-12" />
      <p>Tron</p>
    </div>
  </div>
</section>


      {/* Recently added section */}
      <section className="mb-12 container mx-auto  py-8">
        <h2 className="text-3xl font-semibold text-center mb-6 font-century-gothic text-gray-700">Recently added</h2>
        <p className="text-center text-xs mb-10">A selection of the most recently added cryptocurrencies.</p>
        <div className="flex justify-center space-x-6">
          <div className="flex flex-col items-center">
            <img src={XRP} alt="XRP" className="w-12 h-12" />
            <p>XRP</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Dogecoin} alt="Dogecoin" className="w-12 h-12" />
            <p>Dogecoin</p>
          </div>
        </div>
      </section>

      {/* Comparable market cap section */}
      <section className="mb-12 bg-[#EFFDFD] p-6 rounded-lg  container mx-auto  py-8">
  <h2 className="text-3xl font-semibold text-center mb-6 font-century-gothic text-gray-700">Comparable market cap</h2>
  <p className="text-center text-xs mb-10">Of all the assets on Coinbase, these 12 are the closest to Bitcoin in market cap.</p>
  <div className="grid grid-cols-5 gap-8 justify-items-center">
    <div className="flex flex-col items-center">
      <img src={Bitcoin} alt="Bitcoin" className="w-12 h-12" />
      <p>Bitcoin</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Ethereum} alt="Ethereum" className="w-12 h-12" />
      <p>Ethereum</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Tether}alt="Tether" className="w-12 h-12" />
      <p>Tether</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={USD} alt="USDC" className="w-12 h-12" />
      <p>USDC</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Tron} alt="Tron" className="w-12 h-12" />
      <p>Tron</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={XRP} alt="XRP" className="w-12 h-12" />
      <p>XRP</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Dogecoin} alt="Dogecoin" className="w-12 h-12" />
      <p>Dogecoin</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Cardano} alt="Cardano" className="w-12 h-12" />
      <p>Cardano</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Binance} alt="BNB" className="w-12 h-12" />
      <p>BNB</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Polygon}alt="Polygon" className="w-12 h-12" />
      <p>Polygon</p>
    </div>
  </div>
</section>


      {/* Advanced trading section */}
      <section className="mb-12  p-6 rounded-lg  container mx-auto  py-8">
        <h2 className="text-3xl font-semibold text-center mb-6 font-century-gothic text-gray-700">Advanced trading</h2>
        <p className="text-center text-xs mb-10">Here is a selection of spot and futures markets that people watch.</p>
        <div className="grid grid-cols-5 gap-8 justify-items-center">
          <div className="flex flex-col items-center">
            <img src={Bitcoin} alt="Bitcoin" className="w-12 h-12" />
            <p>Bitcoin</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Ethereum} alt="Ethereum" className="w-12 h-12" />
            <p>Ethereum</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Tether} alt="Tether" className="w-12 h-12" />
            <p>Tether</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={USD} alt="USDC" className="w-12 h-12" />
            <p>USDC</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Tron} alt="Tron" className="w-12 h-12" />
            <p>Tron</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={XRP} alt="XRP" className="w-12 h-12" />
            <p>XRP</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Dogecoin} alt="Dogecoin" className="w-12 h-12" />
            <p>Dogecoin</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Cardano} alt="Cardano" className="w-12 h-12" />
            <p>Cardano</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Binance} alt="BNB" className="w-12 h-12" />
            <p>BNB</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Polygon} alt="Polygon" className="w-12 h-12" />
            <p>Polygon</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CryptoLayout;
