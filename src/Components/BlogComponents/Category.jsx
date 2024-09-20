import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import news from '../../assets/Images/Blog/icon1.png';
import Market from '../../assets/Images/Blog/icon2.png';
import investment from '../../assets/Images/Blog/icon3.png';
import Guides from '../../assets/Images/Blog/icon4.png';
import Security from '../../assets/Images/Blog/icon5.png';
import Features from '../../assets/Images/Blog/icon6.png';
import Studies from '../../assets/Images/Blog/icon7.png';
import Spotlight from '../../assets/Images/Blog/icon8.png';
import Interviews from '../../assets/Images/Blog/icon9.png';
import Issues from '../../assets/Images/Blog/icon10.png';
import Education from '../../assets/Images/Blog/icon11.png';
import Future from '../../assets/Images/Blog/icon12.png';

const CategoryList = ({ title, items }) => {
  return (
    <div className="w-full category-list">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <ul className="space-y-7">
        {items.map((item, index) => (
          <li key={index} className="flex items-center feature">
            <img
              src={item.icon}
              alt={item.altText}
              className="w-6 h-6 mr-2"
            />
            <button>{item.description}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Blog = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the category list
    gsap.from('.feature', {
      scrollTrigger: {
        trigger: '.category-list', // Trigger the animation when category list enters the viewport
        start: 'top 75%', // Animation starts when the top of the section is 75% of the way down the viewport
        toggleActions: 'play none none reset',
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.3, // Delay between each feature animation
    });

    // Animate the vertical lines
    gsap.from('.vertical-line', {
      scrollTrigger: {
        trigger: '.category-list',
        start: 'top center',
        toggleActions: 'play none none reset',
      },
      height: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  const categories = [
    {
      title: "Category 1",
      items: [
        { icon: news, altText: "Crypto News", description: "Crypto News and Updates" },
        { icon: Market, altText: "Market Analysis", description: "Market Analysis and Trends" },
        { icon: investment, altText: "Investment Strategies", description: "Investment Strategies" },
        { icon: Guides, altText: "Guides and Tutorials", description: "Guides and Tutorials" },
      ]
    },
    {
      title: "Category 2",
      items: [
        { icon: Security, altText: "Security Tips", description: "Security Tips" },
        { icon: Features, altText: "New Features", description: "New Features and Updates" },
        { icon: Studies, altText: "Case Studies", description: "Case Studies" },
        { icon: Spotlight, altText: "Community Spotlight", description: "Community Spotlight" },
      ]
    },
    {
      title: "Category 3",
      items: [
        { icon: Interviews, altText: "Interviews", description: "Interviews and Expert Opinions" },
        { icon: Issues, altText: "Legal Issues", description: "Legal and Regulatory Issues" },
        { icon: Education, altText: "Cryptocurrency Education", description: "Cryptocurrency Education" },
        { icon: Future, altText: "Future of Crypto", description: "Future of Cryptocurrency" },
      ]
    }
  ];

  return (
    <div className="py-12 -mt-5" style={{ backgroundColor: "#e0ffff" }}>
      <div className="container mx-auto bg-white p-8 rounded-lg jost-uniquifier relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-36 relative">
          {/* Vertical lines */}
          <div className="hidden lg:block absolute left-[33%] top-0 h-full w-0.5 bg-gray-300 opacity-80 -translate-x-16 vertical-line"></div>
          <div className="hidden lg:block absolute left-[66%] top-0 h-full w-0.5 bg-gray-300 opacity-80 vertical-line"></div>
          
          {categories.map((category, index) => (
            <CategoryList key={index} title={category.title} items={category.items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
