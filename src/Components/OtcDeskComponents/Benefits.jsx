import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import cryptocurrency from "../../assets/Images/OtcDesk/section3_icon1.png";
import transparency from "../../assets/Images/OtcDesk/section3_icon2.png";
import partnerships from "../../assets/Images/OtcDesk/section3_icon3.png";
import transactions from "../../assets/Images/OtcDesk/section3_icon4.png";
import mobile from "../../assets/Images/OtcDesk/section3_icon5.png";
import investment from "../../assets/Images/OtcDesk/section3_icon6.png";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  useEffect(() => {
    gsap.from(".benefit-card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".benefits-container",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section className="bg-gradient-to-b from-cyan-50 to-white">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-center font-montserrat">Benefits With North Star Metrics OTC</h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 md:mb-12 text-center font-century-gothic">Discover the advantages of choosing our OTC desk</p>
        
        <div className="benefits-container grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[
            {
              title: "Secure and Compliant",
              description: "Our OTC desk adheres to strict security protocols and regulatory compliance standards, ensuring the safety of your assets and transactions.",
              icon: cryptocurrency,
              alt: "cryptocurrency"
            },
            {
              title: "Transparent Pricing",
              description: "We provide clear and competitive pricing for all transactions, ensuring you get the best value for your trades.",
              icon: transparency,
              alt: "Rates"
            },
            {
              title: "Partnerships and Collaborations",
              description: "We have established strong partnerships with leading financial institutions and blockchain projects, providing you with a wide range of trading options.",
              icon: partnerships,
              alt: "Support"
            },
            {
              title: "Fast Transactions",
              description: "Execute large volume trades quickly and efficiently, with minimal slippage and maximum convenience and opportunities.",
              icon: transactions,
              alt: "Speed"
            },
            {
              title: "Mobile Trading",
              description: "Trade cryptocurrency anywhere and at any time with our fully optimized mobile platform. Experience effortless buying and selling of cryptocurrency on the go.",
              icon: mobile,
              alt: "Global"
            },
            {
              title: "Personalized Investing Tactics",
              description: "Custom-developed crypto strategies that meet your financial goals. Personalised investment options for beginners and experienced investors.",
              icon: investment,
              alt: "Personalized"
            }
          ].map((benefit, index) => (
            <div key={index} className="benefit-card OtcBenefit-background p-4 sm:p-5 md:p-6 rounded-xl shadow-md relative">
              <div className='p-2 bg-cyan-100 mb-3 inline-block rounded-full'>
                <img src={benefit.icon} className='w-10 h-10' alt="" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 font-century-gothic">{benefit.title}</h3>
              <p className="text-gray-600 mb-8 sm:mb-4 font-century-gothic text-sm sm:text-base">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
