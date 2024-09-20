import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../index.css';
import bannerImage from '../../assets/Images/Blog/banner.png';

const HeroSection = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.hero-banner', {
      scrollTrigger: {
        trigger: '.hero-banner', 
        start: 'top center',     
        toggleActions: 'play none none none',
      },
      opacity: 0,
      scale: 0.4,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div className="relative w-full h-auto hero-banner">
      {/* For larger screens */}
      <div 
        className="hidden lg:block w-full h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
        }}
      >
    
      </div>

    
      <div className="lg:hidden">
        <img 
          src={bannerImage} 
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;
