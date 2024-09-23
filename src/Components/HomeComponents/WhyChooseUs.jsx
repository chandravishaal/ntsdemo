import whyChooseUsBanner from '../../assets/Images/3rd_section_mobile.png';
import icon1 from '../../assets/Images/HomeImages/icon1.png';
import icon2 from '../../assets/Images/HomeImages/icon5.png';
import icon3 from '../../assets/Images/HomeImages/icon3.png';
import icon4 from '../../assets/Images/HomeImages/icon6.png';
import icon5 from '../../assets/Images/HomeImages/icon4.png';
import icon6 from '../../assets/Images/HomeImages/icon2.png';

const WhychooseusCard = ({ image, title, desc, color, customClass }) => {
  return (
    <div
      className={`bg-primaryCyan w-full flex-col justify-between gap-5 flex h-[200px] md:h-[150px] lg:h-[180px] ${
        color === 'primary' ? 'bg-primaryCyan' : 'bg-white'
      } border-2 border-primaryCyan rounded-xl p-4 gap-3 ${customClass}`}
    >
      <img src={image} className="w-10 h-10 mx-auto object-contain" alt="" />
      <div className=''>
        <h1
          className={`text-lg leading-5 text-center lg:text-start font-century-gothic ${
            color === 'primary' ? 'text-black' : 'text-black'
          } font-bold mb-2`}
        >
          {title}
        </h1>
        <p
          className={`text-sm text-center lg:text-start leading-4 font-century-gothic ${
            color === 'primary' ? 'text-black' : 'text-black'
          }`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="whychooseSection-background md:pt-20 lg:py-10">
      <div className="container mx-auto mb-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-5">
        <div className="flex flex-col items-center lg:items-start flex-[0.6] text-center md:text-left">
          <h1 className="text-3xl mt-5 font-bold mb-5 font-montserrat ">Why Choose Us?</h1>
          <p className="text-xl mb-10 font-century-gothic">
            A Crypto platform has never been better than this.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:px-20 lg:px-0">
            <WhychooseusCard
              color="primary"
              title="Easy To Start"
              image={icon1}
              desc="North Star Metrics provides an easy way for a person to trade crypto."
            />
            <WhychooseusCard
              color="notPrimary"
              title="Safe and Secure"
              image={icon6}
              desc="We provide a safe environment for all your transactions."
            />
            <div className='order-0 lg:order-6'>
            <WhychooseusCard
              color="notPrimary"
              title="Rapid Order"
              image={icon5}
              desc="Enjoy the benefit of instant order processing for effective trading."
            />
            </div>
            <WhychooseusCard
              color="primary"
              title="Volatility Protection"
              image={icon3}
              desc="At North Star Metrics we offer tools for protection from volatility."
            />
            <div className='order-0 lg:order-5'>
              <WhychooseusCard
                color="primary"
                title="Smart Payment"
                image={icon2}
                desc="Enjoy Easy Payment Options."
              />
            </div>
            <WhychooseusCard
              color="notPrimary"
              title="24/7 Support"
              image={icon4}
              desc=" Get assistance at any time for any crypto transaction."
            />
          </div>
        </div>
        <div className="flex-[0.4] w-full flex justify-center md:justify-end mb-20 md:mb-0 lg:mb-0">
          <img
            src={whyChooseUsBanner}
            className="max-w-[400px] translate-y-20 mx-auto md:translate-y-0 ml-auto"
            alt="trending coins"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;