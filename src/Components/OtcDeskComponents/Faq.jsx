import { useState, useEffect, useRef } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import imgfaq from '../../assets/Images/OtcDesk/faq.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqRef = useRef(null); // Ref for FAQ section
  const leftSectionRef = useRef(null); // Ref for left (FAQ) section
  const rightSectionRef = useRef(null); // Ref for right (image) section

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is a Cryptocurrency OTC Desk via an exchange?',
      answer:
        'Cryptocurrency OTC or (Over-The-Counter) trading via cryptocurrency exchanges like North Star Metrics is a method of buying and selling digital assets that involves direct transactions between two parties, typically institutional investors, high-net-worth individuals, or large traders. It is often used for trading significant quantities of cryptocurrencies off the regular exchange order books.',
    },
    {
      question: 'What is OTC Trading?',
      answer:
        'Cryptocurrency OTC or (Over-The-Counter) trading via cryptocurrency exchanges like North Star Metrics is a method of buying and selling digital assets that involves direct transactions between two parties, typically institutional investors, high-net-worth individuals, or large traders. It is often used for trading significant quantities of cryptocurrencies off the regular exchange order books..',
    },
    {
      question: 'Why Use Our OTC Trading?',
      answer:
        'Cryptocurrency OTC or (Over-The-Counter) trading via cryptocurrency exchanges like North Star Metrics is a method of buying and selling digital assets that involves direct transactions between two parties, typically institutional investors, high-net-worth individuals, or large traders. It is often used for trading significant quantities of cryptocurrencies off the regular exchange order books..',
    },
    {
      question: 'How OTC Trading via North Star Metrics Works?',
      answer:
        'Cryptocurrency OTC or (Over-The-Counter) trading via cryptocurrency exchanges like North Star Metrics is a method of buying and selling digital assets that involves direct transactions between two parties, typically institutional investors, high-net-worth individuals, or large traders. It is often used for trading significant quantities of cryptocurrencies off the regular exchange order books..',
    },
    {
      question: 'Advantages of OTC Trading via North Star Metrics?',
      answer:
        'Cryptocurrency OTC or (Over-The-Counter) trading via cryptocurrency exchanges like North Star Metrics is a method of buying and selling digital assets that involves direct transactions between two parties, typically institutional investors, high-net-worth individuals, or large traders. It is often used for trading significant quantities of cryptocurrencies off the regular exchange order books..',
    },
  ];

  useEffect(() => {
    const faqElement = faqRef.current;
    const leftSection = leftSectionRef.current;
    const rightSection = rightSectionRef.current;

    // GSAP animation for left (FAQ) section
    gsap.fromTo(
      leftSection,
      { opacity: 0, x: -150 }, // Start from left
      {
        opacity: 1,
        x: 0, // Move to the original position
        duration: 1.9,
        scrollTrigger: {
          trigger: faqElement,
          start: 'top center+=100',
          toggleActions: 'play none none reset',
        },
      }
    );

    // GSAP animation for right (Image) section
    gsap.fromTo(
      rightSection,
      { opacity: 0, y: 150 }, // Start from below
      {
        opacity: 1,
        y: 0, // Move to the original position
        duration: 1.9,
        scrollTrigger: {
          trigger: faqElement,
          start: 'top center+=100',
          toggleActions: 'play none none reset',
        },
      }
    );
  }, []);

  return (
    <section className="bg-cyan-50 py-10" id="faq-main" ref={faqRef}>
      <div className="container mx-auto px-4 md:px-10" id="faq-container">
        <h2 className="text-4xl font-bold font-century-gothic mb-8 text-center">FAQ</h2>

        {/* Wrapper for image and FAQ section */}
        <div className="flex flex-col-reverse md:flex-row items-start" id="faq-wrapper">
          
          {/* FAQ Section (Left) */}
          <div
            className="w-full md:w-1/2 space-y-5 mt-10"
            id="faq-left"
            ref={leftSectionRef}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden "
                id={`faq-item-${index}`}
              >
                <div
                  className="bg-white text-black font-century-gothic pr-6  cursor-pointer flex items-center justify-between overflow-hidden"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center">
                    <div>
                      <span className="bg-primaryCyan text-black 
                        h-[6rem] md:h-[5rem] w-[5rem] flex items-center justify-center mr-5 text-4xl md:text-xl font-century-gothic">
                        {index + 1}
                      </span>
                    </div>
                    <h4 className="font-light text-sm font-century-gothic">{faq.question}</h4>
                  </div>
                  <span className="text-xl flex items-center justify-center bg-white border-2 border-sky-900 rounded-full w-6 h-6 p-1">
                    {activeIndex === index ? <FiMinus /> : <FaPlus />}
                  </span>
                </div>
                <div
                  className={`transition-all duration-700 overflow-hidden ${
                    activeIndex === index ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {activeIndex === index && (
                    <div className="bg-white text-sm text-gray-500 p-6 mt-3 font-century-gothic">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Image Section (Right) */}
          <div
            className="w-full md:w-1/2 mb-10 md:mb-0 my-auto "
            id="faq-right"
            ref={rightSectionRef}
          >
            <img
              src={imgfaq}
              alt="Question Bubbles"
              className="w-full h-auto object-cover md:ml-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
