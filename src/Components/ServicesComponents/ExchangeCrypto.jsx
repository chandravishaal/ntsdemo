

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import plate from "../../assets/Images/ServicesImages/hero_bg2.png";
import icon1 from "../../assets/Images/ServicesImages/boy-1.png";
import icon2 from "../../assets/Images/ServicesImages/icon-9.png";
import icon3 from "../../assets/Images/ServicesImages/icon-2.png";
import icon4 from "../../assets/Images/ServicesImages/icon-3.png";
import icon5 from "../../assets/Images/ServicesImages/icon-5.png";
import icon6 from "../../assets/Images/ServicesImages/icon-7.png";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    title: "Exchange Services",
    description:
      "We are an optimal trading platform ensuring user-friendly, fast, and secure cryptocurrency transactions, resulting in an efficient and seamless trading experience.We are an optimal trading platform ensuring user-friendly, fast,It provides a smooth  and efficient trading experience for both buyers and sellers.",
    icon: icon1,
  },
  {
    title: "Volatility Protection",
    description:
      " Crypto volatility protection tools, such as stablecoins hedging, automated trading, and algorithms, mitigate risks associated with digital currency purchases and trading, ensuring money security and minimizing sudden price fluctuations.",
    icon: icon2,
  },
  {
    title: "Investment Services",
    description:
      "Our expert guidance on buying and selling digital assets offers access to the Bitcoin, Ethereum, Ripple, and 70+ cryptocurrency market prospects, allowing traders to make informed decisions about investment in the cryptocurrency market.",
    icon: icon3,
  },
  {
    title: "Fiat Conversion",
    description:
      "We are the most reliable cryptocurrency exchange now offering Crypto-Fiat conversion options, simplifying transactions and making them more convenient for traders. These options are designed to enhance the user experience on the exchange.",
    icon: icon4,
  },
  {
    title: "OTC Desk",
    description:
      "Looking for an OTC (Over-the-counter) Cryptocurrency Exchange Desk that offers over 70+ cryptocurrencies with competite  market rates? Look no further than this global platform, accepting credit/debit cards, net banking, UPI, and other payment methods.",
    icon: icon5,
  },
  {
    title: "Brokerage Services",
    description:
      "Our personalized online brokerage services allow you to effectively manage and grow your cryptocurrency holdings.Our personalized online brokerage services allow you to ensuring a smooth and efficient investment process.services are designed to help you manage and grow your cryptocurrency holdings effectively.",
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
    <section className="bg-cyan-50 py-8 md:py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl md:text-4xl font-montserrat font-bold mb-4">
          Buy, Sell And Exchange Cryptocurrency
        </h2>
        <p className="text-gray-800 text-sm md:text-lg font-century-gothic mb-8 md:mb-12">
          Top crypto platform for trading, investing, OTC desk, and crypto-finance conversion
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 px-5">
          {cardData.map((card) => (
            <div
              key={card.id} // Use a unique identifier
              ref={(el) => (cardsRef.current[card.id] = el)} // Adjust if needed
              className="relative bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col h-[22rem] xs:h-[18.5rem] md:h-[14rem] w-full mx-auto"
            >
              <div className="flex-0 h-9 flex items-center">
                <h3 className="text-lg md:text-xl font-montserrat font-semibold">
                  {card.title}
                </h3>
              </div>
              <div className="flex-1 flex items-start h-[10rem] md:h-[8rem]">
                <p className="text-gray-600 mt-2 text-sm text-start md:text-start font-century-gothic pb-4 md:pb-8">
                  {card.description}
                </p>
              </div>
              <div className="absolute bottom-5 right-5 w-8 h-8 md:w-[3rem] md:h-10 lg:w-15 lg:h-10 text-right">
                <img
                  src={card.icon}
                  alt="Online brokerage services icon"
                  className="w-full h-full"
                />
                <img src={plate} alt="Background design element" className="" />
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ExchangeCrypto;

