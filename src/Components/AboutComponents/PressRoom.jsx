import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image1 from '../../assets/Images/icon1.jpg';
import Image2 from '../../assets/Images/icon2.jpg';
import Image3 from '../../assets/Images/icon3.jpg';
import Image4 from '../../assets/Images/nts-removebg-preview.png';

gsap.registerPlugin(ScrollTrigger);

function PressRoom() {
  const cardsData = [
    {
      imageSrc: Image1,
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      description:
        'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      logoSrc: Image4,
    },
    {
      imageSrc: Image2,
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      description:
        'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      logoSrc: Image4,
    },
    {
      imageSrc: Image3,
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      description:
        'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      logoSrc: Image4,
    },
  ];

  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardRefs.current[0], // First card (left)
      { opacity: 0, x: -100 }, // Start off-screen to the left
      {
        opacity: 1,
        x: 0,
        duration: 2,
        
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRefs.current[0],
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      cardRefs.current[1], // Middle card (down)
      { opacity: 0, y: 100 }, // Start off-screen below
      {
        opacity: 1,
        y: 0,
        duration: 2,
        
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRefs.current[1],
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      cardRefs.current[2], // Last card (right)
      { opacity: 0, x: 100 }, // Start off-screen to the right
      {
        opacity: 1,
        x: 0,
        duration: 2,
        
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRefs.current[2],
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const PressCard = ({ imageSrc, title, description, logoSrc, index }) => {
    return (
      <div
        ref={(el) => (cardRefs.current[index] = el)} // Assigning the ref to each card
        className="bg-cyan-50 rounded-lg overflow-hidden"
      >
        <img src={imageSrc} alt="Press Image" className="rounded-t-lg object-cover mb-3 h-[200px] w-full" />
        <div className='p-4'>
          <h4 className="text-lg md:text-xl font-bold mb-2 font-montserrat">{title}</h4>
          <p className="text-gray-500 mb-4 text-sm md:text-base font-century-gothic">
            {description}
          </p>
          <div className='flex flex-wrap items-center justify-end'>
            
            <div className="flex flex-wrap justify-end mt-4">
            
              <div className="bg-primaryCyan text-black font-bold py-1 px-4 rounded-full text-xs md:text-sm font-century-gothic">Read more</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white container mx-auto mb-24">
      <div className="text-center font-Antipasto pro">
        <h2 className="text-4xl font-bold mt-8 font-montserrat">Press Room</h2>
        <p className="text-black mt-4 font-semibold text-center font-century-gothic">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
          <br />
          standard dummy text ever since the 1500s,
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-5">
        {cardsData.map((card, index) => (
          <PressCard
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            logoSrc={card.logoSrc}
            index={index} // Passing the index to track each card's reference
          />
        ))}
      </div>
    </section>
  );
}

export default PressRoom;
