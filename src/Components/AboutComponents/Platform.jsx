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

gsap.registerPlugin(ScrollTrigger);

const Platform = () => {
  const sectionRef = useRef(null);
  const phoneRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    // GSAP animations for the phone image (move up and fade in)
    gsap.fromTo(
      phoneRef.current,
      { opacity: 0, y: 60, scale: 0.8 }, // Starting position: moved down (y: 50), faded out, and scaled down
      {
        opacity: 1,
        y: 0, // End position: natural position
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
      { opacity: 0, y: 50 }, // Text starting position: moved down (y: 50) and faded out
      {
        opacity: 1,
        y: 0, // End position: natural position
        duration: 1,
        ease: 'power3.out',
        stagger: 0.3, // Stagger the animation
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reset',
        },
      }
    );
  }, []);

  return (
    <div className="bg-cyan-50 pt-20 px-4 md:px-6 lg:px-8">
      {/*} Main Heading */}
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold  text-primaryCyan raleway-hero mb-5 md:mb-6 font-montserrat">
        More North Star Metrics
      </h1>
      <h3 className="text-center text-xl md:text-3xl lg:text-4xl font-semibold text-black raleway-hero md:mb-12 lg:mb-16 font-montserrat">
        The most secure, easy and comprehensive platform
      </h3>

      {/* Phone Image with surrounding text */}
      <div className="relative flex justify-center items-center ">
        {/* Phone Image */}
        <div className="flex justify-center items-center p-4 relative">
          <img src={phoneImage} alt="Illustration of North Star Metrics platform features including buying, selling, trading, and earning rewards" className="w-[11rem] md:w-[20rem] lg:w-[30rem] h-auto translate-y-4" />
          <div className="absolute top-10 -left-[0.3rem] md:top-11 md:-left-9 lg:top-[3rem] lg:-left-11 text-xxx md:text-sm lg:text-base xl:text-lg">
            <p className="text-black raleway-hero font-semibold font-century-gothic">
              Buy, sell, trade
            </p>
          </div>
          <div className="absolute top-[2.5rem] -right-[2.6rem] md:top-[3rem] md:-right-[7.5rem] lg:top-[3.5rem] lg:-right-[9.5rem] text-xxx md:text-sm lg:text-base xl:text-lg">
            <p className="text-black raleway-hero  font-semibold font-century-gothic">
              Generate passive rewards <br /> with Earn
            </p>
          </div>
          <div className="absolute top-[6.2rem] -left-[4.2rem] md:top-[9.5rem] md:-left-[11.2rem] lg:top-[13rem] lg:-left-[14rem] text-right text-xxx md:text-sm lg:text-base xl:text-lg">
            <p className="text-black raleway-hero font-semibold font-century-gothic">
              Store, send, receive cryptocurrencies <br /> and money
            </p>
          </div>

          <div className="absolute top-[8.4rem] -right-[5rem] md:top-[13.5rem] md:-right-[12.5rem] lg:top-[19.4rem] lg:-right-[16rem] text-left text-xxx md:text-sm lg:text-base xl:text-lg">
            <p className="text-black raleway-hero font-semibold font-century-gothic">
              Tax,Pay,Pro,Loan,Launchpad, ... <br /> and many more.Check them out
            </p>
          </div>

          <div className="absolute top-[10.2rem] -left-[2.2rem] md:top-[16.6rem] md:-left-[6.5rem] lg:top-[24rem] lg:-left-[8.5rem] text-left text-xxx md:text-sm lg:text-base xl:text-lg">
            <p className="text-black raleway-hero  font-semibold font-century-gothic">
              Paying with our card
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
