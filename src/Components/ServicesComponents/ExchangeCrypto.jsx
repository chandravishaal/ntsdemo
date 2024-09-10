

// Import images separately
import boyImage from '/src/assets/Images/ServicesImages/boy-1.png';
import heroBgImage1 from '/src/assets/Images/ServicesImages/hero_bg2.png';
import icon3 from '/src/assets/Images/ServicesImages/icon-3.png';
import icon9 from '/src/assets/Images/ServicesImages/icon-9.png';
import icon5 from '/src/assets/Images/ServicesImages/icon-5.png';
import icon2 from '/src/assets/Images/ServicesImages/icon-2.png';
import icon7 from '/src/assets/Images/ServicesImages/icon-7.png';

const ExchangeCrypto = () => {
  return (
    <section className="bg-cyan-50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-century-gothic font-bold mb-4">
          Buy, Sell And Exchange Cryptocurrency
        </h2>
        <p className="text-gray-800 font-century-gothic mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-end justify-between">
            <div className="text-left">
              <h3 className="text-xl font-century-gothic font-semibold">
                Cryptocurrency Exchange Services
              </h3>
              <p className="text-gray-600 mt-2 font-century-gothic pb-8">
                At North Star Metrics you can buy and sell Bitcoin, Litecoin, Ethereum or over 70+ cryptocurrencies instantly. We support all individuals, businesses or travelers with a platform that guides and protects your investments.
              </p>
            </div>
            <div className="w-32 h-14">
              <img src={boyImage} alt="Boy Icon" className="w-full h-full -rotate-90" />
              <img src={heroBgImage1} alt="Background Icon" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-end justify-between">
            <div className="text-left">
              <h3 className="text-xl font-century-gothic font-semibold">
                Crypto Volatility Protection
              </h3>
              <p className="text-gray-600 font-century-gothic mt-2 pb-8">
                North Star Metrics is the only company or platform that guides and protects your investments from the volatile crypto market. With our expert advice, your assets will always bring you profit.
              </p>
            </div>
            <div className="w-32 h-14">
              <img src={icon3} alt="Icon 3" className="w-full h-full" />
              <img src={heroBgImage1} alt="Background Icon" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-end justify-between">
            <div className="text-left">
              <h3 className="text-xl font-semibold font-century-gothic">
                Crypto Investment Services
              </h3>
              <p className="text-gray-600 mt-2 pb-8 font-century-gothic">
                If you&apos;re looking forward to investing in cryptocurrencies without worrying about losses, North Star Metrics is the right place to get started. Want to discuss the No Risk investment program?
              </p>
            </div>
            <div className="w-32 h-14">
              <img src={icon9} alt="Icon 9" className="w-full h-full" />
              <img src={heroBgImage1} alt="Background Icon" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-end justify-between">
            <div className="text-left">
              <h3 className="text-xl font-semibold font-century-gothic">
                Crypto-Fiat Conversion Options
              </h3>
              <p className="text-gray-600 mt-2 pb-8 font-century-gothic">
                North Star Metrics allows you to sell cryptocurrencies instantly and convert your crypto to real money, whether INR, USD, GBP, or others. The best part? There are no limits on transactions.
              </p>
            </div>
            <div className="w-32 h-14">
              <img src={icon5} alt="Icon 5" className="w-full h-full" />
              <img src={heroBgImage1} alt="Background Icon" />
            </div>
          </div>

          {/* Card 5 */}
          <div className="relative bg-white p-6 shadow-md flex items-end justify-between">
            <div className="text-left">
              <h3 className="text-xl font-semibold font-century-gothic">
                Cryptocurrency OTC Desk
              </h3>
              <p className="text-gray-600 mt-2 pb-8 font-century-gothic">
                North Star Metrics offers over-the-counter crypto buy/sell services for individuals or businesses looking to deal with high-value transactions. The minimum trade on our OTC desk starts at ₹5,00,000.00.
              </p>
            </div>
            <div className="w-32 h-14">
              <img src={icon2} alt="Icon 2" className="w-full h-full" />
              <img src={heroBgImage1} alt="Background Icon" />
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-end justify-between">
            <div className="text-left">
              <h3 className="text-xl font-semibold font-century-gothic">
                Online Brokerage Services
              </h3>
              <p className="text-gray-600 mt-2 pb-8 font-century-gothic">
                North Star Metrics also provides brokerage services for individuals or businesses who believe in self-trading. With our team of expert brokers, you get accurate market insights for your investments for a nominal fee.
              </p>
            </div>
            <div className="w-32 h-14">
              <img src={icon7} alt="Icon 7" className="w-full h-full" />
              <img src={heroBgImage1} alt="Background Icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExchangeCrypto;
