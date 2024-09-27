import React from 'react';
import 'remixicon/fonts/remixicon.css'; // Import Remix Icons

const FAQ = () => {
    const faqData = [
        {
            category: 'General FAQs',
            items: [
                {
                    id: 1,
                    icon: <i className="ri-gift-line"></i>,
                    question: 'What is North Star Metrics or ntsmetrics.com?',
                    answer: 'North Star Metrics or ntsmetrics.com is a cryptocurrency exchange platform where users can buy and sell cryptocurrencies using various payment methods.'
                },
                {
                    id: 2,
                    icon: <i className="ri-refresh-line"></i>,
                    question: 'How do I create an account on North Star Metrics?',
                    answer: 'To create an account, visit our registration page and follow the steps to verify your email and identity.'
                },
                {
                    id: 1,
                    icon: <i className="ri-gift-line"></i>,
                    question: 'What is North Star Metrics or ntsmetrics.com?',
                    answer: 'North Star Metrics or ntsmetrics.com is a cryptocurrency exchange platform where users can buy and sell cryptocurrencies using various payment methods.'
                },
                {
                    id: 2,
                    icon: <i className="ri-refresh-line"></i>,
                    question: 'How do I create an account on North Star Metrics?',
                    answer: 'To create an account, visit our registration page and follow the steps to verify your email and identity.'
                },
                {
                    id: 1,
                    icon: <i className="ri-gift-line"></i>,
                    question: 'What is North Star Metrics or ntsmetrics.com?',
                    answer: 'North Star Metrics or ntsmetrics.com is a cryptocurrency exchange platform where users can buy and sell cryptocurrencies using various payment methods.'
                },
                {
                    id: 2,
                    icon: <i className="ri-refresh-line"></i>,
                    question: 'How do I create an account on North Star Metrics?',
                    answer: 'To create an account, visit our registration page and follow the steps to verify your email and identity.'
                },
                {
                    id: 1,
                    icon: <i className="ri-gift-line"></i>,
                    question: 'What is North Star Metrics or ntsmetrics.com?',
                    answer: 'North Star Metrics or ntsmetrics.com is a cryptocurrency exchange platform where users can buy and sell cryptocurrencies using various payment methods.'
                },
                {
                    id: 2,
                    icon: <i className="ri-refresh-line"></i>,
                    question: 'How do I create an account on North Star Metrics?',
                    answer: 'To create an account, visit our registration page and follow the steps to verify your email and identity.'
                },
                // Add more questions under General FAQs...
            ]
        },
        {
            category: 'OTC Platform FAQs',
            items: [
                {
                    id: 3,
                    icon: <i className="ri-exchange-dollar-line"></i>,
                    question: 'What is the North Star Metrics OTC platform?',
                    answer: 'The OTC platform allows users to trade large amounts of cryptocurrency directly with others without using the public exchange.'
                },
                {
                    id: 4,
                    icon: <i className="ri-key-line"></i>,
                    question: 'How do I access the OTC platform?',
                    answer: 'You can access the OTC platform through the “OTC” tab after logging into your account.'
                },
                {
                    id: 3,
                    icon: <i className="ri-exchange-dollar-line"></i>,
                    question: 'What is the North Star Metrics OTC platform?',
                    answer: 'The OTC platform allows users to trade large amounts of cryptocurrency directly with others without using the public exchange.'
                },
                {
                    id: 4,
                    icon: <i className="ri-key-line"></i>,
                    question: 'How do I access the OTC platform?',
                    answer: 'You can access the OTC platform through the “OTC” tab after logging into your account.'
                },
                {
                    id: 3,
                    icon: <i className="ri-exchange-dollar-line"></i>,
                    question: 'What is the North Star Metrics OTC platform?',
                    answer: 'The OTC platform allows users to trade large amounts of cryptocurrency directly with others without using the public exchange.'
                },
                {
                    id: 4,
                    icon: <i className="ri-key-line"></i>,
                    question: 'How do I access the OTC platform?',
                    answer: 'You can access the OTC platform through the “OTC” tab after logging into your account.'
                },
                {
                    id: 3,
                    icon: <i className="ri-exchange-dollar-line"></i>,
                    question: 'What is the North Star Metrics OTC platform?',
                    answer: 'The OTC platform allows users to trade large amounts of cryptocurrency directly with others without using the public exchange.'
                },
                {
                    id: 4,
                    icon: <i className="ri-key-line"></i>,
                    question: 'How do I access the OTC platform?',
                    answer: 'You can access the OTC platform through the “OTC” tab after logging into your account.'
                },
                // Add more questions under OTC Platform FAQs...
            ]
        },
        {
            category: 'Trading Platform FAQs',
            items: [
                {
                    id: 5,
                    icon: <i className="ri-bar-chart-box-line"></i>,
                    question: 'How do I start trading on North Star Metrics?',
                    answer: 'To start trading, deposit funds into your account and choose the cryptocurrency pair you wish to trade.'
                },
                {
                    id: 6,
                    icon: <i className="ri-file-list-line"></i>,
                    question: 'What types of orders can I place on the trading platform?',
                    answer: 'You can place market, limit, and stop orders depending on your trading needs.'
                },
                {
                    id: 5,
                    icon: <i className="ri-bar-chart-box-line"></i>,
                    question: 'How do I start trading on North Star Metrics?',
                    answer: 'To start trading, deposit funds into your account and choose the cryptocurrency pair you wish to trade.'
                },
                {
                    id: 6,
                    icon: <i className="ri-file-list-line"></i>,
                    question: 'What types of orders can I place on the trading platform?',
                    answer: 'You can place market, limit, and stop orders depending on your trading needs.'
                },
                {
                    id: 5,
                    icon: <i className="ri-bar-chart-box-line"></i>,
                    question: 'How do I start trading on North Star Metrics?',
                    answer: 'To start trading, deposit funds into your account and choose the cryptocurrency pair you wish to trade.'
                },
                {
                    id: 6,
                    icon: <i className="ri-file-list-line"></i>,
                    question: 'What types of orders can I place on the trading platform?',
                    answer: 'You can place market, limit, and stop orders depending on your trading needs.'
                },
                {
                    id: 5,
                    icon: <i className="ri-bar-chart-box-line"></i>,
                    question: 'How do I start trading on North Star Metrics?',
                    answer: 'To start trading, deposit funds into your account and choose the cryptocurrency pair you wish to trade.'
                },
                {
                    id: 6,
                    icon: <i className="ri-file-list-line"></i>,
                    question: 'What types of orders can I place on the trading platform?',
                    answer: 'You can place market, limit, and stop orders depending on your trading needs.'
                },

                // Add more questions under Trading Platform FAQs...
            ]
        }
        // Continue adding other categories (Deposits and Withdrawals FAQs, Security FAQs, etc.)
    ];

    return (
        <section className="md:pt-20 lg:py-10">
            <div className="container mx-auto mb-20 flex flex-col justify-between gap-5 px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold mb-4 md:mb-0">Frequently Asked Questions</h1>
                    <div className="ml-auto flex space-x-2 mt-4 md:mt-0 w-full md:w-auto">
                        <div className="w-full">
                            <button className="bg-black text-white rounded-full px-4 py-2 text-sm w-full flex items-center justify-center">
                                Get in touch
                            </button>
                        </div>
                    </div>

                </div>
                <p className="mb-6 text-gray-600 text-center md:text-left">
                    Quick answers to questions you may have. Can’t find what you’re looking for? Check out our{' '}
                    <a href="#" className="text-blue-600">FAQs</a>.
                </p>

                {/* Render FAQ categories and questions */}
                {faqData.map((category) => (
                    <div key={category.category} className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {category.items.map((faq) => (
                                <FAQItem
                                    key={faq.id}
                                    icon={faq.icon}
                                    question={faq.question}
                                    answer={faq.answer}
                                />
                            ))}
                        </div>
                    </div>
                ))}

                <div className="flex justify-center mt-6">
                    <button className="border border-gray-300 rounded-full px-4 py-2 text-sm w-full md:w-auto">Load more</button>
                </div>
                <div className="border border-gray-300 rounded-lg p-4 mt-6 flex items-center flex-col md:flex-row">
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
                </div>
            </div>
        </section>
    );
};

const FAQItem = ({ icon, question, answer }) => {
    return (
        <div className="rounded-lg p-4 flex flex-col md:flex-row items-start">
            <div className="text-2xl mr-4 border p-2 rounded-lg">
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
