import mobileImage1 from '/src/assets/Images/mobile2.png';
import mobileImage2 from '/src/assets/Images/HomeImages/chart.png';
import PrimaryButton from '../../Common/PrimaryButton';
import SecondaryButton from '../../Common/SecondaryButton';

const FeatureComponent = () => {
  return (
    <section className='featureSection-background'>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 ">

          {/* First Mobile Image and Content */}
          <div className="flex flex-col  md:flex-row items-center justify-center md:items-start lg:items-start relative w-full pt-10 md:p-8">
            <img data-aos="fade-left" data-aos-duration="2000" src={mobileImage1} alt="Feature showcasing North Star Metrics for buying and selling cryptocurrencies" className="w-auto h-[565px]  mx-auto md:mx-0 md:-translate-x-[2rem] pb-7" />
            <div data-aos="fade-up" data-aos-duration="2000" className=' p-2 w-[70%] lg:-ml-5 relative z-10 md:mt-[15%] mx-auto md:text-left text-center -translate-x-[1rem]'>
              <div className='ml-8'>
                <h2 className="text-2xl font-bold text-black mb-2 font-montserrat ">North Star Metrics</h2>
                <p className="text-gray-600 mb-4 text-xl font-century-gothic">Buy or sell hundreds of cryptocurrencies</p>
              </div>
              <div className='flex items-center justify-center lg:justify-center gap-3'>
              <PrimaryButton title="Buy"/>
              <SecondaryButton title="Sell" />
              </div>
            </div>
          </div>

          {/* Second Mobile Image and Content */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-end text-center lg:text-right lg:items-end  relative w-full">
            <div data-aos="fade-down" data-aos-duration="2000" className='w-[70%] pr-10  lg:-mr-10 relative z-10 mb-[25%] translate-x-[1rem] md:text-right text-center'>
              <h2 className="text-2xl font-bold text-black mb-2 font-montserrat">Advance</h2>
              <p className="text-gray-600 mb-4 text-xl font-century-gothic">Powerful tools, designed for the advanced trader</p>
              <div className='flex items-center lg:justify-end justify-center gap-3'>
              <SecondaryButton title="Sell"/>
              <PrimaryButton title="Buy"/>
              </div>
            </div>
            <img data-aos="fade-right" data-aos-duration="2000" src={mobileImage2} alt="Feature showcasing advanced trading tools" className="w-auto h-[620px] mx-auto p-8 md:ml-auto md:translate-x-[2rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureComponent;