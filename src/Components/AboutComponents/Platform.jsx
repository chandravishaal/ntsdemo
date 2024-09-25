/*import phoneImage from "../../assets/Images/phone.png";

const Platform = () => {
  return (
    <div className="bg-cyan-50 pt-20">
      {/*} Main Heading 
      <h1 className="text-center text-xl md:text-2xl font-semibold text-black raleway-hero mb-6">
        More North Star Metrics
      </h1>
      <h1 className="text-center text-xl md:text-4xl font-bold text-black raleway-hero mb-32">
        The most secure, easy and comprehensive platform
      </h1>

      {/* Phone Image with surrounding text 
      <div className="relative flex justify-center items-center -mb-4">

        {/* Phone Image 
        <div className="flex justify-center items-center p-4 relative">
          <img src={phoneImage} alt="Phone" className="w-[30rem] h-auto" />
          <div className="absolute top-9 -left-14 text-xl">
            <p className="text-black raleway-hero font-semibold">
              Buy, sell, trade
            </p>
          </div>
          <div className="absolute top-[3rem] -right-[10rem]">
            <p className="text-black raleway-hero text-xl font-semibold">
                Generate passive rewards <br /> with Earn
            </p>
          </div>
          <div className="absolute top-[12rem] -left-[15rem] text-right">
            <p className="text-black raleway-hero text-xl font-semibold">
                Store, send, receive cryptocurrencies <br /> and money 
            </p>
          </div>

          <div className="absolute top-[18rem] -right-[17rem] text-left">
            <p className="text-black raleway-hero text-xl font-semibold">
                Tax, Pay, Pro, Loan, Launchpad, ... <br /> and many more. Check them out 
            </p>
          </div>

          <div className="absolute top-[23rem] -left-[10rem] text-left">
            <p className="text-black raleway-hero text-xl font-semibold">
                Paying with our card
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;*/

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import phoneImage from "../../assets/Images/phone.png";
//image for the mobile view
import phoneImage2 from "../../assets/Images/About/phone-img.png";
import icon1 from "../../assets/Images/About/icon1.png";
import icon2 from "../../assets/Images/About/icon2.png";
import icon3 from "../../assets/Images/About/icon3.png";
import icon4 from "../../assets/Images/About/icon4.png";
import icon5 from "../../assets/Images/About/icon5.png";

gsap.registerPlugin(ScrollTrigger);

const Platform = () => {
  const sectionRef = useRef(null);
  const phoneRef = useRef(null);
  const textRefs = useRef([]);
  const mobileIconsRef = useRef(null);

  useEffect(() => {
    // GSAP animations for the phone image (move up and fade in)
    gsap.fromTo(
      phoneRef.current,
      { opacity: 0, y: 60, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reset',
        },
      }
    );

    // Staggered animations for the surrounding text elements
    gsap.fromTo(
      textRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reset',
        },
      }
    );

    // Animation for mobile icons
    gsap.fromTo(
      mobileIconsRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: mobileIconsRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reset',
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="bg-cyan-50 pt-20 px-4 md:px-6 lg:px-8 pb-8 md:pb-0">
      {/* Main Heading */}
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-primaryCyan raleway-hero mb-5 md:mb-6 font-montserrat">
        More North Star Metrics
      </h1>
      <h3 className="text-center text-xl md:text-3xl lg:text-4xl font-semibold text-black raleway-hero md:mb-12 lg:mb-16 font-montserrat">
        The most secure, easy and comprehensive platform
      </h3>

      {/* Desktop view */}
      <div className="relative flex justify-center items-center hidden md:flex">
        {/* Phone Image */}
        <div ref={phoneRef} className="flex justify-center items-center p-4 relative">
          <img src={phoneImage} alt="Illustration of North Star Metrics platform features including buying, selling, trading, and earning rewards" className="w-[20rem] lg:w-[30rem] h-auto translate-y-4" />
          <div ref={(el) => (textRefs.current[0] = el)} className="absolute top-11 -left-9 lg:top-[3rem] lg:-left-12 text-sm lg:text-base xl:text-lg">
            <p className="text-black raleway-hero font-semibold font-century-gothic">
              Buy, sell, trade
            </p>
          </div>
          <div ref={(el) => (textRefs.current[1] = el)} className="absolute top-[3rem] -right-[7.5rem] lg:top-[3.5rem] lg:-right-[10rem] text-sm lg:text-base xl:text-lg">
            <p className="text-black raleway-hero font-semibold font-century-gothic">
              Generate passive rewards <br /> with Earn
            </p>
          </div>
          <div ref={(el) => (textRefs.current[2] = el)} className="absolute top-[9.5rem] -left-[11.2rem] lg:top-[13rem] lg:-left-[15rem] text-right text-sm lg:text-base xl:text-lg">
            <p className="text-black raleway-hero font-semibold font-century-gothic">
              Store, send, receive cryptocurrencies <br /> and money
            </p>
          </div>
          <div ref={(el) => (textRefs.current[3] = el)} className="absolute top-[13.5rem] -right-[12.5rem] lg:top-[19.4rem] lg:-right-[17rem] text-left text-sm lg:text-base xl:text-lg">
            <p className="text-black raleway-hero font-semibold font-century-gothic">
              Tax,Pay,Pro,Loan,Launchpad, ... <br /> and many more.Check them out
            </p>
          </div>
          <div ref={(el) => (textRefs.current[4] = el)} className="absolute top-[16.6rem] -left-[6.5rem] lg:top-[24rem] lg:-left-[9rem] text-left text-sm lg:text-base xl:text-lg">
            <p className="text-black raleway-hero font-semibold font-century-gothic">
              Paying with our card
            </p>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden">
        <div className="flex justify-center mb-8">
          <img src={phoneImage2} alt="Mobile illustration of North Star Metrics platform" className="w-64 h-auto" />
        </div>
        <div ref={mobileIconsRef} className="flex flex-col gap-4">
          {[
            { icon: icon1, text: "Buy, sell, trade" },
            { icon: icon2, text: "Store, send, receive cryptocurrencies and money" },
            { icon: icon3, text: "Pay with our card" },
            { icon: icon4, text: "Generate passive rewards with Earn" },
            { icon: icon5, text: "Tax, Pay, Pro, Loan, Launchpad, ... and many more. Check them out" },
          ].map((item, index) => (
            <div key={index} className="flex items-center mb-4">
              <img src={item.icon} alt={item.text} className="w-12 h-12 mr-4" />
              <p className="text-sm font-semibold text-black font-century-gothic">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platform;
