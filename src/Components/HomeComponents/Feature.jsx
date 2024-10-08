import mobileImage1 from '/src/assets/Images/mobile2.png';
import mobileImage2 from '/src/assets/Images/HomeImages/chart.png';
import PrimaryButton from '../../Common/PrimaryButton';
import SecondaryButton from '../../Common/SecondaryButton';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeatureComponent = () => {
  const featureRef = useRef(null); // Ref for the feature section

  useEffect(() => {
    const featureElements = featureRef.current?.querySelectorAll('.feature-item');
  
    if (featureElements) {
      gsap.fromTo(
        featureElements[0].querySelector('img'),
        {
          opacity: 0,
          x: -100, // Start from left 
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          // stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: featureRef.current, // Trigger when the feature section is in view
            start: 'top 60%',
            toggleActions: 'play none none reset',
          },
        }
      );

      gsap.fromTo(
        featureElements[0].querySelector('.text'),
        {
          opacity: 0,
          y: 100, // Start from below
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: featureRef.current, // Trigger when the feature section is in view
            start: 'top 60%',
            toggleActions: 'play none none reset',
          },
        }
      );

      //Animate the second feature item
      gsap.fromTo(
        featureElements[1].querySelector('img'), 
        {
          opacity: 0,
          x: 100, // Start from the right
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: featureRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reset',
          },
        }
      );

      gsap.fromTo(
        featureElements[1].querySelector('.text'), // Select the content of the second item
        {
          opacity: 0,
          y: -100, // Start from top
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: featureRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reset',
          },
        }
      );

    }

    // Cleanup function to kill ScrollTrigger on unmount
    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <section ref={featureRef} className='featureSection-background'>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">

          {/* First Mobile Image and Content */}
          <div className="feature-item flex flex-col md:flex-row items-center md:items-start justify-center relative w-full pt-10 md:p-8">
            <img 
              src={mobileImage1} 
              alt="Feature showcasing North Star Metrics for buying and selling cryptocurrencies" 
              className="w-auto h-[550px] mx-auto md:mx-0 pb-7" 
            />
            <div className='text lg:px-12 p-2 w-[70%] relative z-10 md:mt-[15%] mx-auto text-center'>
              <h2 className="text-2xl font-bold text-black mb-2 font-montserrat">North Star Metrics</h2>
              <p className="text-gray-600 mb-4 text-xl md:w-[250px] lg:w-auto font-century-gothic mx-auto">Buy or sell hundreds of cryptocurrencies</p>
              <div className='flex items-center justify-center gap-3'>
                <PrimaryButton title="Buy" />
                <SecondaryButton title="Sell" />
              </div>
            </div>
          </div>

          {/* Second Mobile Image and Content */}
          <div className="feature-item flex flex-col-reverse md:flex-row items-center md:items-end justify-center relative w-full md:p-8">
            <div className='text w-[70%] lg:px-12 p-2 relative z-10 mb-[25%] mx-auto text-center'>
              <h2 className="text-2xl font-bold text-black mb-2 font-montserrat">Advance</h2>
              <p className="text-gray-600 mb-4 text-xl md:w-[250px] lg:w-auto font-century-gothic mx-auto">Powerful tools, designed for the advanced trader</p>
              <div className='flex items-center justify-center gap-3'>
                <SecondaryButton title="Sell" />
                <PrimaryButton title="Buy" />
              </div>
            </div>
            <img 
              src={mobileImage2} 
              alt="Feature showcasing advanced trading tools" 
              className="w-auto h-[550px] pb-7 mx-auto" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureComponent;