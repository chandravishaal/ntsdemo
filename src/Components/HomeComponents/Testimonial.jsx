import { useEffect, useState } from 'react';
import { FaStar,  } from 'react-icons/fa';
import { MdOutlineKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

import Image from '/src/assets/Images/7th_section_img.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'RYAN OSCAR WILLIAMS',
    content: `I am an American and was traveling in Kolkata, and I needed to exchange some of my Tron for Indian Rupee. After looking for hours, I was only able to find one exchange, and that was North Star Metrics. I got there as soon as I could and was able to exchange my Tron for Indian rupee. Thank you so much! But there should be more exchanges in Kolkata.`,
  },
  {
    name: 'JANE DOE',
    content: `North Star Metrics has provided an excellent service in helping me exchange my cryptocurrency while I was visiting India. The process was smooth, and the staff was very friendly. Highly recommended!`,
  },
  {
    name: 'JOHN SMITH',
    content: `I had a great experience with North Star Metrics. The staff was very helpful, and I was able to exchange my cryptocurrency quickly and easily. Will definitely use their services again!`,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { name, content } = testimonials[currentIndex];
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };
  
  useEffect(() => {
    gsap.from("#testimonial-heading", {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#testpage",
        start: "top 80%",
      }
    });
  }, []);

  // Automatically change testimonials every 10 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 10000); // 10 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  // GSAP animation for testimonial change
  useEffect(() => {
    gsap.fromTo(
      "#testimonial-content",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }, [currentIndex]); // Trigger animation on testimonial change

  return (
    <div id='testpage' className="container mx-auto p relative flex items-end my-20 overflow-hidden">
      {/* Image div */}
      <img src={Image} alt="Testimonial" className="w-auto h-[474px] select-none" />

      {/* Content div */}
      <div className="w-full h-[400px] testimonial-background p-6 flex rounded-r-lg flex-col justify-between">
          <h2 id='testimonial-heading' className="text-6xl text-right mr-8 text-[#0a6276] -mt-14 select-none">TESTIMONIALS</h2>
        <div id="testimonial-content" className='mt-10'>
          <div className="flex items-center mb-3 gap-1 pl-6">
            <FaStar className="text-[#0a6276]" />
            <FaStar className="text-[#0a6276]" />
            <FaStar className="text-[#0a6276]" />
            <FaStar className="text-[#0a6276]" />
            <FaStar className="text-[#0a6276]" />
          </div>
          <h3 className="text-2xl font-bold text-sky-800 pl-6">{name}</h3>
          <p className="text-lg text-gray-700 p-6 pr-12">{content}</p>
        </div>
        {/* <div className="flex justify-end space-x-2 mt-3 mr-6">
          <button
            className="text-[#0a6276] text-4xl border-2 border-white rounded-full bg-white"
            onClick={handlePrev}
          >
            <FaCaretLeft />
          </button>
          <button
            className="text-[#0a6276] text-4xl border-2 border-white rounded-full bg-white"
            onClick={handleNext}
          >
            <FaCaretRight />
          </button>
        </div> */}

        <div className='flex items-center justify-end gap-2'>
            <div  onClick={handlePrev} className='border-[3px] border-[#0a6276] flex rounded-full items-center justify-center p-1'>
                <button className='text-[#0a6276] text-lg'>
                <MdOutlineKeyboardDoubleArrowLeft />
                </button>
            </div>
            <div  onClick={handleNext} className='border-[3px] border-[#0a6276] flex rounded-full items-center justify-center p-1'>
                <button className='text-[#0a6276] text-lg'>
                <MdOutlineKeyboardDoubleArrowRight />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
