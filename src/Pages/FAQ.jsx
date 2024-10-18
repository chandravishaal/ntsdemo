import React, { useEffect, useRef, useState } from "react";
import "remixicon/fonts/remixicon.css"; // Import Remix Icons
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [openCategory, setOpenCategory] = useState("General FAQs"); // To track which category is open
  const [visibleCount, setVisibleCount] = useState(6);
  const [openModal, setOpenModal] = useState(false); // To track modal open state

  const toggleCategory = (category) => {
    setVisibleCount(6);
    setOpenCategory(openCategory === category ? null : category);
  };
  const handleLoadMore = (itemsLength) => {
    setVisibleCount(itemsLength); // Load 6 more items when clicked
  };

    const scrollPositionRef = useRef(0);

    // Handle background scroll when the modal is open
    useEffect(() => {
      if (openModal) {
        scrollPositionRef.current = window.scrollY;

        // Lock the body position, effectively hiding scroll
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollPositionRef.current}px`;
        document.body.style.width = "100%";
      } else {
        // Restore body scroll when modal is closed
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";

        // Restore the previous scroll position
        window.scrollTo(0, scrollPositionRef.current);
      }

      // Cleanup function to reset body styles
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
      };
    }, [openModal]);


  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const marginStyle = {
    margin: window.innerWidth >= 310 && window.innerWidth <= 440 ? '2rem' : '0',
  };


  const faqData = [
    {
      category: "General FAQs",
      items: [
        {
          id: 1,
          icon: <i className="ri-gift-line"></i>,
          question: "What is North Star Metrics or ntsmetrics.com?",
          answer:
            "North Star Metrics or ntsmetrics.com is a cryptocurrency exchange platform where users can buy and sell cryptocurrencies using various payment methods.",
        },
        {
          id: 2,
          icon: <i className="ri-refresh-line"></i>,
          question: "How do I create an account on North Star Metrics?",
          answer:
            "To create an account, visit our registration page and follow the steps to verify your email and identity.",
        },
        {
          id: 1,
          icon: <i className="ri-gift-line"></i>,
          question: "What is North Star Metrics or ntsmetrics.com?",
          answer:
            "North Star Metrics or ntsmetrics.com is a cryptocurrency exchange platform where users can buy and sell cryptocurrencies using various payment methods.",
        },
        {
          id: 2,
          icon: <i className="ri-refresh-line"></i>,
          question: "How do I create an account on North Star Metrics?",
          answer:
            "To create an account, visit our registration page and follow the steps to verify your email and identity.",
        },
        {
          id: 1,
          icon: <i className="ri-gift-line"></i>,
          question: "What is North Star Metrics or ntsmetrics.com?",
          answer:
            "North Star Metrics or ntsmetrics.com is a cryptocurrency exchange platform where users can buy and sell cryptocurrencies using various payment methods.",
        },
        {
          id: 2,
          icon: <i className="ri-refresh-line"></i>,
          question: "How do I create an account on North Star Metrics?",
          answer:
            "To create an account, visit our registration page and follow the steps to verify your email and identity.",
        },
        {
          id: 1,
          icon: <i className="ri-gift-line"></i>,
          question: "What is North Star Metrics or ntsmetrics.com?",
          answer:
            "North Star Metrics or ntsmetrics.com is a cryptocurrency exchange platform where users can buy and sell cryptocurrencies using various payment methods.",
        },
        {
          id: 2,
          icon: <i className="ri-refresh-line"></i>,
          question: "How do I create an account on North Star Metrics?",
          answer:
            "To create an account, visit our registration page and follow the steps to verify your email and identity.",
        },
        // Add more questions under General FAQs...
      ],
    },
    {
      category: "OTC Platform FAQs",
      items: [
        {
          id: 3,
          icon: <i className="ri-exchange-dollar-line"></i>,
          question: "What is the North Star Metrics OTC platform?",
          answer:
            "The OTC platform allows users to trade large amounts of cryptocurrency directly with others without using the public exchange.",
        },
        {
          id: 4,
          icon: <i className="ri-key-line"></i>,
          question: "How do I access the OTC platform?",
          answer:
            "You can access the OTC platform through the “OTC” tab after logging into your account.",
        },
        {
          id: 3,
          icon: <i className="ri-exchange-dollar-line"></i>,
          question: "What is the North Star Metrics OTC platform?",
          answer:
            "The OTC platform allows users to trade large amounts of cryptocurrency directly with others without using the public exchange.",
        },
        {
          id: 4,
          icon: <i className="ri-key-line"></i>,
          question: "How do I access the OTC platform?",
          answer:
            "You can access the OTC platform through the “OTC” tab after logging into your account.",
        },
        {
          id: 3,
          icon: <i className="ri-exchange-dollar-line"></i>,
          question: "What is the North Star Metrics OTC platform?",
          answer:
            "The OTC platform allows users to trade large amounts of cryptocurrency directly with others without using the public exchange.",
        },
        {
          id: 4,
          icon: <i className="ri-key-line"></i>,
          question: "How do I access the OTC platform?",
          answer:
            "You can access the OTC platform through the “OTC” tab after logging into your account.",
        },
        {
          id: 3,
          icon: <i className="ri-exchange-dollar-line"></i>,
          question: "What is the North Star Metrics OTC platform?",
          answer:
            "The OTC platform allows users to trade large amounts of cryptocurrency directly with others without using the public exchange.",
        },
        {
          id: 4,
          icon: <i className="ri-key-line"></i>,
          question: "How do I access the OTC platform?",
          answer:
            "You can access the OTC platform through the “OTC” tab after logging into your account.",
        },
        // Add more questions under OTC Platform FAQs...
      ],
    },
    {
      category: "Trading Platform FAQs",
      items: [
        {
          id: 5,
          icon: <i className="ri-bar-chart-box-line"></i>,
          question: "How do I start trading on North Star Metrics?",
          answer:
            "To start trading, deposit funds into your account and choose the cryptocurrency pair you wish to trade.",
        },
        {
          id: 6,
          icon: <i className="ri-file-list-line"></i>,
          question: "What types of orders can I place on the trading platform?",
          answer:
            "You can place market, limit, and stop orders depending on your trading needs.",
        },
        {
          id: 5,
          icon: <i className="ri-bar-chart-box-line"></i>,
          question: "How do I start trading on North Star Metrics?",
          answer:
            "To start trading, deposit funds into your account and choose the cryptocurrency pair you wish to trade.",
        },
        {
          id: 6,
          icon: <i className="ri-file-list-line"></i>,
          question: "What types of orders can I place on the trading platform?",
          answer:
            "You can place market, limit, and stop orders depending on your trading needs.",
        },
        {
          id: 5,
          icon: <i className="ri-bar-chart-box-line"></i>,
          question: "How do I start trading on North Star Metrics?",
          answer:
            "To start trading, deposit funds into your account and choose the cryptocurrency pair you wish to trade.",
        },
        {
          id: 6,
          icon: <i className="ri-file-list-line"></i>,
          question: "What types of orders can I place on the trading platform?",
          answer:
            "You can place market, limit, and stop orders depending on your trading needs.",
        },
        {
          id: 5,
          icon: <i className="ri-bar-chart-box-line"></i>,
          question: "How do I start trading on North Star Metrics?",
          answer:
            "To start trading, deposit funds into your account and choose the cryptocurrency pair you wish to trade.",
        },
        {
          id: 6,
          icon: <i className="ri-file-list-line"></i>,
          question: "What types of orders can I place on the trading platform?",
          answer:
            "You can place market, limit, and stop orders depending on your trading needs.",
        },

        // Add more questions under Trading Platform FAQs...
      ],
    },
    {
      category: "Deposits and Withdrawals FAQs",
      items: [
        {
          id: 7,
          icon: <i className="ri-bar-chart-box-line"></i>,
          question:
            " How do I deposit funds into my North Star Metrics account?",
          answer:
            "To start trading, deposit funds into your account and choose the cryptocurrency pair you wish to trade.",
        },
        {
          id: 8,
          icon: <i className="ri-file-list-line"></i>,
          question: "What types of orders can I place on the trading platform?",
          answer:
            "You can place market, limit, and stop orders depending on your trading needs.",
        },
        {
          id: 9,
          icon: <i className="ri-bar-chart-box-line"></i>,
          question: "How do I start trading on North Star Metrics?",
          answer:
            "To start trading, deposit funds into your account and choose the cryptocurrency pair you wish to trade.",
        },
        {
          id: 10,
          icon: <i className="ri-file-list-line"></i>,
          question: "What types of orders can I place on the trading platform?",
          answer:
            "You can place market, limit, and stop orders depending on your trading needs.",
        },
        {
          id: 11,
          icon: <i className="ri-bar-chart-box-line"></i>,
          question: "How do I start trading on North Star Metrics?",
          answer:
            "To start trading, deposit funds into your account and choose the cryptocurrency pair you wish to trade.",
        },
        {
          id: 12,
          icon: <i className="ri-file-list-line"></i>,
          question: "What types of orders can I place on the trading platform?",
          answer:
            "You can place market, limit, and stop orders depending on your trading needs.",
        },
        {
          id: 13,
          icon: <i className="ri-bar-chart-box-line"></i>,
          question: "How do I start trading on North Star Metrics?",
          answer:
            "To start trading, deposit funds into your account and choose the cryptocurrency pair you wish to trade.",
        },
        {
          id: 14,
          icon: <i className="ri-file-list-line"></i>,
          question: "What types of orders can I place on the trading platform?",
          answer:
            "You can place market, limit, and stop orders depending on your trading needs.",
        },

        // Add more questions under Trading Platform FAQs...
      ],
    },
    // Continue adding other categories (Deposits and Withdrawals FAQs, Security FAQs, etc.)
  ];

  return (
    <section className="md:pt-20 lg:py-10">
      <div className="container mx-auto mb-20 flex flex-col justify-between gap-5 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">
            Frequently Asked Questions
          </h1>
          <div className="ml-auto flex space-x-2 mt-4 md:mt-0 w-full md:w-auto">
            <div className="w-full">
              <button
                className="bg-primaryCyan shadow-xl text-white rounded-full px-4 py-2 text-sm w-full flex items-center justify-center"
                onClick={() => setOpenModal(true)}
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
        <p className="mb-6 text-gray-600 text-center md:text-left">
          Quick answers to questions you may have. Can&apos;t find what
          you&apos;re looking for? Check out our{" "}
          <Link to="/" className="text-primaryCyan">
            FAQs
          </Link>
          .
        </p>

        {/* Render FAQ categories as an accordion */}
        {faqData.map((category) => (
          <div key={category.category} className="mb-8">
            <button
              className="text-2xl font-bold mb-4 w-full text-left focus:outline-none flex justify-between items-center"
              onClick={() => toggleCategory(category.category)}
            >
              {/* Add suitable icons for each category */}
              <span className="flex items-center">
                {category.category === "General FAQs" && (
                  <i className="ri-question-line mr-2"></i>
                )}
                {category.category === "OTC Platform FAQs" && (
                  <i className="ri-exchange-dollar-line mr-2"></i>
                )}
                {category.category === "Trading Platform FAQs" && (
                  <i className="ri-bar-chart-line mr-2"></i>
                )}
                {category.category === "Deposits and Withdrawals FAQs" && (
                  <i className="ri-money-dollar-circle-line mr-2"></i>
                )}
                {category.category}
              </span>

              {/* Expand/collapse icon aligned to the right */}
              <span>
                {openCategory === category.category ? (
                  <i className="ri-arrow-up-s-line"></i>
                ) : (
                  <i className="ri-arrow-down-s-line"></i>
                )}
              </span>
            </button>

            {/* Accordion content with smooth transitions */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out transform ${
                openCategory === category.category
                  ? "lg:max-h-[1000px] scale-y-100 opacity-100"
                  : "max-h-0 scale-y-0 opacity-0"
              }`}
            >
              {openCategory === category.category && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.slice(0, visibleCount).map((faq, index) => {
                    const isLast =
                      index === visibleCount - 1 &&
                      visibleCount !== category.items.length;
                    const isSecondLast =
                      index === visibleCount - 2 &&
                      visibleCount !== category.items.length;

                    return (
                      <FAQItem
                        key={faq.id}
                        icon={faq.icon}
                        question={faq.question}
                        answer={faq.answer}
                        className={`${
                          isLast
                            ? "lg:bg-clip-text lg:text-transparent lg:bg-gradient-to-b lg:from-stone-900 lg:via-stone-100 lg:to-transparent lg:opacity-55"
                            : isSecondLast
                            ? "lg:bg-clip-text lg:text-transparent lg:bg-gradient-to-b lg:from-stone-900 lg:via-stone-100 lg:to-transparent lg:opacity-55"
                            : "text-black"
                        }`}
                      />
                    );
                  })}
                </div>
              )}
            </div>

            {/* "Load More" button */}
            {openCategory === category.category && (
              <div className="flex justify-center">
                {visibleCount < category.items.length && (
                  <button
                    className="border border-gray-300 rounded-full px-4 text-sm w-full md:w-auto -m-5 max-md:py-2 max-md:my-2 transition-opacity duration-500 ease-in-out hover:opacity-80"
                    onClick={() => handleLoadMore(category.items.length)}
                  >
                    Load more
                  </button>
                )}
              </div>
            )}
          </div>
        ))}

        {/* <div className="border border-gray-300 rounded-lg p-4 mt-6 flex items-center flex-col md:flex-row">
                    <img
                        src="https://placehold.co/50x50"
                        alt="Profile picture of a friendly team member"
                        className="rounded-full w-12 h-12 mr-4 mb-4 md:mb-0"
                    />
                    <div className="text-center md:text-left">
                        <h2 className="font-semibold">Still have questions?</h2>
                        <p className="text-gray-600">
                            Can’t find the answer you’re looking for? Please{' '}
                            <a href="#" className="text-blue-600">chat to our friendly team</a>.
                        </p>
                    </div>
                    <div className="ml-auto flex space-x-2 mt-4 md:mt-0">
                        <button className="bg-black text-white rounded-full px-4 py-2 text-sm w-full md:w-auto flex items-center justify-center">
                            Get in touch
                        </button>
                    </div>
                </div> */}

        {/*Modal */}
        <AnimatePresence>
          {openModal && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={handleCloseModal}
            >
              <div style={marginStyle} className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-[500px] h-auto relative top-10">
                <button
                  className="absolute top-4 right-4 text-gray-500 text-4xl z-10"
                  onClick={() => setOpenModal(true)}
                ></button>
                <div className="flex justify-end sm:mb-[-40px]">
                  <button className="text-3xl" onClick={handleCloseModal}>
                    <i className="ri-close-line mt-10"></i>
                  </button>
                </div>
                {/* Modal Heading */}
                <h2 className="text-3xl font-antipasto-pro font-bold tracking-tight pt-5">
                  We'd love to help
                </h2>
                <p className="text-gray-600 mb-5 font-NorthStarsans">
                  Reach out and we'll get in touch within 24 hours
                </p>

                {/* Modal Form */}
                <div className="">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-NorthStarsans font-extrabold text-gray-700"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          placeholder="First name"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-black focus:border-black"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-NorthStarsans font-extrabold text-gray-700"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          placeholder="Last name"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-black focus:border-black"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-NorthStarsans font-extrabold text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Email address"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-black focus:border-black"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-NorthStarsans font-extrabold text-gray-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Leave us a message..."
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-black focus:border-black resize-none"
                      />
                    </div>

                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="mt-1 block w-full px-3 py-2 border sm:pt-5 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-white focus:border-white bg-primaryCyan text-white"
                      >
                        Send message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const FAQItem = ({ icon, question, answer, className }) => {
  return (
    <div
      className={`rounded-lg p-4 flex flex-col md:flex-row items-start ${className}`}
    >
      <div className="text-primaryCyan text-2xl mr-4 border p-2 rounded-lg bg-cyan-50">
        {icon}
      </div>
      <div className="flex-grow">
        <h3 className="font-semibold mb-2">{question}</h3>
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export default FAQ;
