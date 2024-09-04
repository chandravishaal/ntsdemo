import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

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
      answer: 'Answer for OTC Trading.',
    },
    {
      question: 'Why Use Our OTC Trading?',
      answer: 'Answer for Why Use Our OTC Trading.',
    },
    {
      question: 'How OTC Trading via North Star Metrics Works?',
      answer: 'Answer for How OTC Trading via North Star Metrics Works.',
    },
    {
      question: 'Advantages of OTC Trading via North Star Metrics?',
      answer: 'Answer for Advantages of OTC Trading via North Star Metrics.',
    },
  ];

  return (
    <section className="bg-[#F6F9FC] py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">FAQ</h2>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden"
              >
                <div
                  className="bg-[#ffffff] text-black px-6 py-4 cursor-pointer flex items-center justify-between"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center">
                    <span className="bg-[#1E5F5A] text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">
                      {index + 1}
                    </span>
                    <h4 className="font-medium">{faq.question}</h4>
                  </div>
                  <span className="text-2xl bg-white">{activeIndex === index ? '-' : '+'}</span>
                </div>
                {activeIndex === index && (
                  <div className="bg-white text-gray-700 p-6">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="hidden md:block md:w-1/2">
            <img
              src="src/assets/Images/OtcDesk/faq.png"
              alt="Question Bubbles"
              className="w-full h-full object-cover ml-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
