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
      answer: 'Cryptocurrency OTC or (Over-The-Counter) trading via cryptocurrency exchanges like North Star Metrics is a method of buying and selling digital assets that involves direct transactions between two parties, typically institutional investors, high-net-worth individuals, or large traders. It is often used for trading significant quantities of cryptocurrencies off the regular exchange order books..',
    },
    {
      question: 'Why Use Our OTC Trading?',
      answer: 'Cryptocurrency OTC or (Over-The-Counter) trading via cryptocurrency exchanges like North Star Metrics is a method of buying and selling digital assets that involves direct transactions between two parties, typically institutional investors, high-net-worth individuals, or large traders. It is often used for trading significant quantities of cryptocurrencies off the regular exchange order books..',
    },
    {
      question: 'How OTC Trading via North Star Metrics Works?',
      answer: 'Cryptocurrency OTC or (Over-The-Counter) trading via cryptocurrency exchanges like North Star Metrics is a method of buying and selling digital assets that involves direct transactions between two parties, typically institutional investors, high-net-worth individuals, or large traders. It is often used for trading significant quantities of cryptocurrencies off the regular exchange order books..',
    },
    {
      question: 'Advantages of OTC Trading via North Star Metrics?',
      answer: 'Cryptocurrency OTC or (Over-The-Counter) trading via cryptocurrency exchanges like North Star Metrics is a method of buying and selling digital assets that involves direct transactions between two parties, typically institutional investors, high-net-worth individuals, or large traders. It is often used for trading significant quantities of cryptocurrencies off the regular exchange order books..',
    },
  ];

  return (
    <section className="h-[50rem] bg-cyan-50 py-10 " id="faq-main">
      <div className="container h-[50rem] mx-auto " id="faq-container">
        <h2 className="text-3xl font-bold font-century-gothic mb-8">FAQ</h2>

        <div className="flex flex-col md:flex-row" id="faq-wrapper">
          <div className="h-[30rem] w-1/2 space-y-5 mt-10" id="faq-left">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className=" rounded-lg overflow-hidden"
                id={`faq-item-${index}`}
              >
                <div
                  className="bg-white text-black font-century-gothic pr-6  cursor-pointer flex items-center justify-between"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className=" flex items-center">
                    <div>
                      <span className=" bg-gradient-to-r  from-[#027392] to-[#3BB9E3] text-white 
                       h-[4rem] w-[4rem] flex items-center justify-center mr-5 ">
                        {index + 1}
                      </span>
                    </div>
                    <h4 className="font-light">{faq.question}</h4>
                  </div>
                  <span className="text-xl flex items-center justify-center bg-white border-2 border-sky-900 rounded-full h-5 w-5">
                    {activeIndex === index ? '-' : '+'}
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="bg-white text-sm text-gray-500 p-6 mt-3">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="hidden md:block md:w-1/2" id="faq-right">
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





// import React, { useState } from 'react';

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const faqData = [
//     {
//       question: "What is a Cryptocurrency OTC Desk via an exchange?",
//       answer: "Cryptocurrency OTC or (Over-The-Counter) trading via cryptocurrency exchanges like North Star Metrics is a method of buying and selling digital assets that involves direct transactions between two parties, typically institutional investors, high-net-worth individuals, or large traders."
//     },
//     {
//       question: "What is OTC Trading?",
//       answer: "OTC trading involves direct transactions between large investors and traders, bypassing standard exchanges."
//     },
//     {
//       question: "Why Use Our OTC Trading?",
//       answer: "Our OTC trading service offers better liquidity and personalized service for large volume trades."
//     },
//     {
//       question: "How OTC Trading via North Star Metrics Works?",
//       answer: "North Star Metrics provides an easy-to-use platform for institutional and high-net-worth individuals to conduct OTC trading."
//     },
//     {
//       question: "Advantages of OTC Trading via North Star Metrics?",
//       answer: "OTC trading provides better pricing, larger trade sizes, and more privacy for big trades."
//     }
//   ];

//   return (
//     <section className="bg-[#F6F9FC] py-10 h-[50rem]">
//       <div className="container mx-auto px-4">
       
//         {/* FAQ Heading */}
//         <h2 className="text-4xl font-bold mb-12 text-gray-800">FAQ</h2>

//         {/* Left-Right Flex Container */}
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Left Div: FAQ Items */}
//           <div className="flex-1">
//             {faqData.map((item, index) => (
//               <div key={index} className="mb-6">
//                 {/* Question Section */}
//                 <div
//                   className="flex items-center bg-[#e6f2fa] p-4 rounded-lg cursor-pointer shadow-md"
//                   onClick={() => toggleFAQ(index)}
//                 >
//                   {/* Number */}
//                   <div className="w-12 h-12 bg-[#3BB9E3] text-white text-center rounded-full flex items-center justify-center font-bold text-xl mr-4">
//                     {index + 1}
//                   </div>
//                   {/* Question Text */}
//                   <h3 className="flex-grow text-lg font-semibold text-gray-800">
//                     {item.question}
//                   </h3>
//                   {/* Toggle Icon */}
//                   <div className="text-2xl text-gray-500">
//                     {openIndex === index ? '-' : '+'}
//                   </div>
//                 </div>

//                 {/* Answer Section */}
//                 {openIndex === index && (
//                   <div className="bg-white p-4 rounded-lg mt-2 shadow-lg">
//                     <p className="text-gray-700 text-sm">{item.answer}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Right Div: Image */}
//           <div className="flex-1 flex justify-center items-center">
//             <img 
//               src="src/assets/Images/OtcDesk/faq.png" 
//               alt="FAQ Illustration" 
//               className="w-full h-auto max-w-md object-contain" 
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;

