import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import plate from "../../assets/Images/ServicesImages/hero_bg2.png";
import icon1 from "../../assets/Images/ServicesImages/icon1.png";
import icon2 from "../../assets/Images/ServicesImages/icon2.png";
import icon3 from "../../assets/Images/ServicesImages/icon3.png";
import icon4 from "../../assets/Images/ServicesImages/icon4.png";
import icon5 from "../../assets/Images/ServicesImages/icon5.png";
import icon6 from "../../assets/Images/ServicesImages/icon6.png";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    title: "Exchange Services",
    description:
      "Our platform offers user-friendly, fast, and secure cryptocurrency transactions, providing an efficient trading experience for both buyers and sellers.",
    icon: icon1,
  },
  {
    title: "Volatility Protection",
    description:
      "Mitigate risks with our crypto volatility protection tools, including stablecoins, automated trading, and algorithms to safeguard against sudden price fluctuations.",
    icon: icon2,
  },
  {
    title: "Investment Services",
    description:
      "Our expert guidance helps you invest in Bitcoin, Ethereum, Ripple, and 70+ cryptocurrencies, enabling informed decisions in the evolving crypto market.",
    icon: icon3,
  },
  {
    title: "Fiat Conversion",
    description:
      "We offer easy crypto-to-fiat conversion options to simplify transactions, making it convenient for traders to operate seamlessly on our platform.",
    icon: icon4,
  },
  {
    title: "OTC Desk",
    description:
      "Our OTC desk supports over 70+ cryptocurrencies with competitive rates, accepting credit cards, net banking, UPI, and other payment methods globally.",
    icon: icon5,
  },
  {
    title: "Brokerage Services",
    description:
      "Our personalized brokerage services ensure smooth management of your cryptocurrency holdings, helping you grow and optimize your investments.",
    icon: icon6,
  },
];


const ExchangeCrypto = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 }, // Initial state
        {
          opacity: 1,
          y: 0, // End state
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%", // When 80% of the viewport hits the top
            toggleActions: "play none none reset", // Replay animation every time section enters and reset when leaving
            once: false, // Ensure the animation can replay
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-gradient-to-b from-cyan-50 to-white py-8 md:py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl md:text-4xl font-montserrat font-bold mb-4">
          Buy, Sell And Exchange Cryptocurrency
        </h2>
        <p className="text-gray-800 text-sm md:text-lg font-century-gothic mb-8 md:mb-12">
          Top crypto platform for trading, investing, OTC desk, and crypto-finance conversion
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 px-5">
          {cardData.map((card, index) => (
            <div key={index} ref={(el) => (cardsRef.current[index] = el)}  className="benefit-card flex flex-col items-start OtcBenefit-background p-4 sm:p-5 md:p-6 rounded-xl shadow-md relative">
              <div className='p-3 bg-gray-100 mb-3 inline-block rounded-full'>
                <img src={card.icon} className='w-10 h-10' alt="" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 font-century-gothic">{card.title}</h3>
              <p className="text-gray-600 mb-8 sm:mb-4 font-century-gothic text-left text-sm sm:text-base">{card.description}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ExchangeCrypto;
