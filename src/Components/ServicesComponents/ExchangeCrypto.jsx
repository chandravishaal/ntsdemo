
import plate from '../../assets/Images/ServicesImages/hero_bg2.png';
import icon1 from '../../assets/Images/ServicesImages/boy-1.png';
import icon2 from '../../assets/Images/ServicesImages/icon-9.png';
import icon3 from '../../assets/Images/ServicesImages/icon-2.png';
import icon4 from '../../assets/Images/ServicesImages/icon-3.png';
import icon5 from '../../assets/Images/ServicesImages/icon-5.png';
import icon6 from '../../assets/Images/ServicesImages/icon-7.png';

const ExchangeCrypto = () => {
  return (
    <section className="bg-cyan-50 py-8 md:py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl md:text-4xl font-century-gothic font-bold mb-4">
          Buy, Sell And Exchange Cryptocurrency
        </h2>
        <p className="text-gray-800 text-sm md:text-lg font-century-gothic mb-8 md:mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br className="hidden md:block" />
          incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md flex items-end justify-between">
            <div className="text-left">
              <h3 className="text-lg md:text-xl font-century-gothic font-semibold">Cryptocurrency Exchange Services</h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base font-century-gothic pb-4 md:pb-8">
                At North Star Metrics you can buy and sell Bitcoin, Litecoin, Ethereum, or over 70+ cryptocurrencies instantly.
                We support all individuals, businesses or travelers the platform that guides and protects your assets.
              </p>
            </div>
            <div className="w-20 h-10 md:w-32 md:h-14">
              <img src={icon1} alt="Icon" className="w-full h-full -rotate-90" />
              <img src={plate} alt="Icon" className="" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md flex items-end justify-between">
            <div className="text-left">
              <h3 className="text-lg md:text-xl font-century-gothic font-semibold">Crypto Volatility Protection</h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base font-century-gothic pb-4 md:pb-8">
                North Star Metrics is the only company or platform that guides and protects your investments from the volatile
                crypto market. With our expert advice, your assets will always bring you profit.
              </p>
            </div>
            <div className="w-20 h-10 md:w-32 md:h-14">
              <img src={icon2} alt="Icon" className="w-full h-full" />
              <img src={plate} alt="Icon" className="" />

            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md flex items-end justify-between">
            <div className="text-left">
              <h3 className="text-lg md:text-xl font-century-gothic font-semibold">Crypto Investment Services</h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base font-century-gothic pb-4 md:pb-8">
                If you're looking forward to investing in cryptocurrencies and not worry about losses, then North Star Metrics
                is the right place to get started. Want to discuss the No Risk investment program?
              </p>
            </div>
            <div className="w-20 h-10 md:w-32 md:h-14">
              <img src={icon3} alt="Icon" className="w-full h-full" />
              <img src={plate} alt="Icon" className="" />

            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md flex items-end justify-between">
            <div className="text-left">
              <h3 className="text-lg md:text-xl font-century-gothic font-semibold">Crypto-Fiat Conversion Options</h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base font-century-gothic pb-4 md:pb-8">
                North Star Metrics allows you to sell cryptocurrencies instantly and convert your crypto to real money, whether
                you want to convert it to INR, USD, GBP or others. The best part: there are no limits on transactions.
              </p>
            </div>
            <div className="w-20 h-10 md:w-32 md:h-14">
              <img src={icon4} alt="Icon" className="w-full h-full" />
              <img src={plate} alt="Icon" className="" />

            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md flex items-end justify-between">
            <div className="text-left">
              <h3 className="text-lg md:text-xl font-century-gothic font-semibold">Cryptocurrency OTC Desk</h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base font-century-gothic pb-4 md:pb-8">
                North Star Metrics offers over-the-counter crypto buy or sell services for individuals or businesses that want to
                deal in high-value transactions. The minimum trade on our OTC desk starts at ₹ 5,00,000.00.
              </p>
            </div>
            <div className="w-20 h-10 md:w-32 md:h-14">
              <img src={icon5} alt="Icon" className="w-full h-full" />
              <img src={plate} alt="Icon" className="" />

            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md flex items-end justify-between">
            <div className="text-left">
              <h3 className="text-lg md:text-xl font-century-gothic font-semibold">Online Brokerage Services</h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base font-century-gothic pb-4 md:pb-8">
                North Star Metrics provides brokerage services for individuals or businesses that believe in self-trading. With
                our expert brokers, you get accurate market insights for your investments, for a nominal fee.
              </p>
            </div>
            <div className="w-20 h-10 md:w-32 md:h-14">
            <img src={icon6} alt="Icon" className="w-full h-full" />
            <img src={plate} alt="Icon" className="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExchangeCrypto;
