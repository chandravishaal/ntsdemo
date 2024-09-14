// import React, { useState } from 'react';
// import imgfaq from '../../assets/Images/OtcDesk/faq.png'

// const Faq = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   const faqs = [
//     {
//       question: 'What is a Cryptocurrency OTC Desk via an exchange?',
//       answer:
//         'Cryptocurrency OTC or (Over-The-Counter) trading via cryptocurrency exchanges like North Star Metrics is a method of buying and selling digital assets that involves direct transactions between two parties, typically institutional investors, high-net-worth individuals, or large traders. It is often used for trading significant quantities of cryptocurrencies off the regular exchange order books.',
//     },
//     {
//       question: 'What is OTC Trading?',
//       answer: 'Cryptocurrency OTC or (Over-The-Counter) trading via cryptocurrency exchanges like North Star Metrics is a method of buying and selling digital assets that involves direct transactions between two parties, typically institutional investors, high-net-worth individuals, or large traders. It is often used for trading significant quantities of cryptocurrencies off the regular exchange order books..',
//     },
//     {
//       question: 'Why Use Our OTC Trading?',
//       answer: 'Cryptocurrency OTC or (Over-The-Counter) trading via cryptocurrency exchanges like North Star Metrics is a method of buying and selling digital assets that involves direct transactions between two parties, typically institutional investors, high-net-worth individuals, or large traders. It is often used for trading significant quantities of cryptocurrencies off the regular exchange order books..',
//     },
//     {
//       question: 'How OTC Trading via North Star Metrics Works?',
//       answer: 'Cryptocurrency OTC or (Over-The-Counter) trading via cryptocurrency exchanges like North Star Metrics is a method of buying and selling digital assets that involves direct transactions between two parties, typically institutional investors, high-net-worth individuals, or large traders. It is often used for trading significant quantities of cryptocurrencies off the regular exchange order books..',
//     },
//     {
//       question: 'Advantages of OTC Trading via North Star Metrics?',
//       answer: 'Cryptocurrency OTC or (Over-The-Counter) trading via cryptocurrency exchanges like North Star Metrics is a method of buying and selling digital assets that involves direct transactions between two parties, typically institutional investors, high-net-worth individuals, or large traders. It is often used for trading significant quantities of cryptocurrencies off the regular exchange order books..',
//     },
//   ];

//   return (
//     <section className="h-[50rem] bg-cyan-50 py-10 " id="faq-main">
//       <div className="container h-[50rem] mx-auto " id="faq-container">
//         <h2 className="text-3xl font-bold font-century-gothic mb-8">FAQ</h2>

//         <div className="flex flex-col md:flex-row" id="faq-wrapper">
//           <div className="h-[30rem] w-1/2 space-y-5 mt-10" id="faq-left">
//             {faqs.map((faq, index) => (
//               <div
//                 key={index}
//                 className=" rounded-lg overflow-hidden"
//                 id={`faq-item-${index}`}
//               >
//                 <div
//                   className="bg-white text-black font-century-gothic pr-6  cursor-pointer flex items-center justify-between"
//                   onClick={() => toggleFAQ(index)}
//                 >
//                   <div className=" flex items-center">
//                     <div>
//                       <span className=" bg-gradient-to-r  from-[#027392] to-[#3BB9E3] text-white 
//                        h-[4rem] w-[4rem] flex items-center justify-center mr-5 ">
//                         {index + 1}
//                       </span>
//                     </div>
//                     <h4 className="font-light">{faq.question}</h4>
//                   </div>
//                   <span className="text-xl flex items-center justify-center bg-white border-2 border-sky-900 rounded-full h-5 w-5">
//                     {activeIndex === index ? '-' : '+'}
//                   </span>
//                 </div>
//                 {activeIndex === index && (
//                   <div className="bg-white text-sm text-gray-500 p-6 mt-3">
//                     <p>{faq.answer}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//           <div className="hidden md:block md:w-1/2" id="faq-right">
//             <img
//               src={imgfaq}
//               alt="Question Bubbles"
//               className="w-full h-full object-cover ml-10"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Faq;





import React, { useState } from 'react';
import imgfaq from '../../assets/Images/OtcDesk/faq.png';

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

  return (
    <section className="bg-cyan-50 py-10" id="faq-main">
      <div className="container mx-auto px-4" id="faq-container">
        <h2 className="text-3xl font-bold font-century-gothic mb-8 text-center">FAQ</h2>

        {/* Wrapper for image and FAQ section */}
        <div className="flex flex-col-reverse md:flex-row items-start" id="faq-wrapper">
          
          {/* FAQ Section */}
          <div className="w-full md:w-1/2 space-y-5 mt-10" id="faq-left">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden"
                id={`faq-item-${index}`}
              >
                {/* <div
                  className="bg-white text-black font-century-gothic p-6 cursor-pointer flex items-center justify-between"
                  onClick={() => toggleFAQ(index)}
                > */}
               <div
                  className="bg-white text-black font-century-gothic pr-6  cursor-pointer flex items-center justify-between"
                   onClick={() => toggleFAQ(index)}
                 >


                  <div className="flex items-center">
                    <div>
                      <span className="bg-gradient-to-r from-[#027392] to-[#3BB9E3] text-white 
                        h-[4rem] w-[4rem] flex items-center justify-center mr-5">
                        {index + 1}
                      </span>
                      {/* <span className=" bg-gradient-to-r  from-[#027392] to-[#3BB9E3] text-white 
                        h-[4rem] w-[4rem] flex items-center justify-center mr-5 ">
                         {index + 1}
                      </span> */}


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

          {/* Image Section */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0" id="faq-right">
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
