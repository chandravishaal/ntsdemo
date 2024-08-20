import React, { useState } from 'react';
import { FaStar, FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import Image from '/src/assets/Images/7th_section_img.png';

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

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const { name, content } = testimonials[currentIndex];

  return (
    <div className="container mx-auto p relative flex items-end">
      {/* Image div */}
      <img src={Image} alt="Testimonial" className="w-auto h-[474px]" />

      {/* Content div */}
      <div className="w-full h-[400px] bg-sky-300 p-6 flex flex-col justify-between m-0 ">
        <div>
          <h2 className="text-6xl text-right mr-8 text-sky-800 -mt-16">TESTIMONIALS</h2>
          <div className="flex items-center mb-10 mt-10 pl-6">
            <FaStar className="text-blue-500 mr-1" />
            <FaStar className="text-blue-500 mr-1" />
            <FaStar className="text-blue-500 mr-1" />
            <FaStar className="text-blue-500 mr-1" />
            <FaStar className="text-blue-500" />
          </div>
          <h3 className="text-2xl font-bold text-sky-800 pl-6">{name}</h3>
          <p className="text-lg text-gray-700 p-6 pr-12">{content}</p>
        </div>
        <div className="flex justify-end space-x-2 mt-3 mr-6">
          <button
            className="text-sky-500 text-4xl border-2 border-white rounded-full bg-white"
            onClick={handlePrev}
          >
            <FaCaretLeft />
          </button>
          <button
            className="text-sky-500 text-4xl border-2 border-white rounded-full bg-white"
            onClick={handleNext}
          >
            <FaCaretRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
