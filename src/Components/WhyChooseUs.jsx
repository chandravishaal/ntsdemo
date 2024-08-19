import whyChooseUsBanner from '../assets/Images/3rd_section_mobile.png';
import icon1 from '../assets/Images/whyChoose1.png';
import icon2 from '../assets/Images/whyChoosepayment.png';
import icon3 from '../assets/Images/whychooseVolatility.png';
import icon4 from '../assets/Images/whyChoose24.png';
import icon5 from '../assets/Images/WhyChooseexchange.png';
import icon6 from '../assets/Images/whyChooseconfirmation.png';

const WhychooseusCard = ({ image, title, desc, color}) => {
    return (
        <div className={`bg-primaryCyan w-full ${color === 'primary' ? 'bg-primaryCyan' : 'bg-white' } border-2 border-primaryCyan rounded-xl p-3 gap-3`}>
            <img src={image} className='w-10 mb-4 object-contain' alt="" />
            <h1 className={`text-lg whitespace-normal ${color === 'primary' ? 'text-white' : 'text-primaryCyan'} font-bold mb-2`}>{title}</h1>
            <p className={`text-sm ${color === 'primary' ? 'text-white' : 'text-primaryCyan'} font-semibold`}>{desc}</p>
        </div>
    )
}


const WhyChooseUs = () => {
  return (
    <section className="container mx-auto my-20">
        <div className="flex items-center justify-between gap-10">
            <div className="flex flex-col items-start flex-[0.5]">
                <h1 className='text-3xl mt-5 font-bold mb-5'>Why Choose Us ?</h1>
                <p className='text-xl mb-10'>A Crypto platform has never been better than this.</p>
                <div className="grid grid-cols-3 gap-2">
                    <WhychooseusCard color="primary" title="Easy To Start" image={icon6} desc="North Star Metrics provides an easy way for a person to buy and sell cryptocurrency." />
                    <WhychooseusCard color="notPrimary" title="Safe and Secure" image={icon1} desc="We provide a safe environment for all your transactions." />
                    <WhychooseusCard color="primary" title="Convenient Payment Options" image={icon2} desc="Enjoy Easy Payment Options." />
                    <WhychooseusCard color="notPrimary" title="Instant Processing Order" image={icon5} desc="Enjoy the benefit of instant order processing for effective trading." />
                    <WhychooseusCard color="primary" title="Volatility Protection" image={icon3} desc="At North Star Metrics we offer tools for protection from volatility." />
                    <WhychooseusCard color="notPrimary" title="24/7 Support" image={icon4} desc=" Get assistance at any time for any crypto transaction." />
                </div>
            </div>
            <div className='flex-[0.5] w-full'>
                <img src={whyChooseUsBanner} className='w-[70%] translate-y-20 ml-auto' alt="whyChooseUsBanner" />
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs