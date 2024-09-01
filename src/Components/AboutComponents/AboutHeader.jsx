import laptopImage from '../../assets/Images/laptop.png';

const AboutHeader = () => {
  return (
        <div className="bg-gray-50">
          <div className="relative flex justify-center items-center h-[50rem]">
            {/* Image container */}
            <div className="relative w-full h-full flex justify-center items-center">
              {/* Main background image */}
              <img src={laptopImage} alt="cover" className="w-full h-full object-cover" />
    
              {/* Text overlay */}
              {/* <div className="f">
                <h1 className="text-4xl raleway-hero font-bold text-black drop-shadow-md">Who we are</h1>
                <p className="text-2xl text-black mt-2 font-light">
                  India&apos;s First Cryptocurrency Exchange
                </p>
                <p className="text-[18px] text-black raleway-hero mt-4 max-w-xs font-light">
                 We are a team of entrepreneurs who founded North Star Metrics with the vision to accommodate individuals and businesses in India, helping them adapt to cryptocurrencies. We believe it&apos;s only a matter of time before digital currency becomes the future of all currencies.
                </p>
                <p className="text-[18px] text-black raleway-hero mt-4 max-w-xs font-light">
                  For the first time in India, we&apos;ve made it possible for individuals, businesses, or even occasional travelers to buy, sell, and learn about Bitcoin, Ethereum, or any cryptocurrencies one-on-one right from our office.
                </p>
              </div> */}

              <div>

              </div>
            </div>
          </div>
        </div>
  )
}

export default AboutHeader