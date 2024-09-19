import React from 'react';
import '../../index.css';
import bannerImage from '../../assets/Images/Blog/banner.png'; 


const HeroSection = () => {
  return (
    <div className="relative w-full h-auto">
      {/* For larger screens */}
      <div 
        className="hidden lg:block w-full h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
        }}
      >
        
      </div>

      {/* For smaller screens (< 1024px) */}
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
