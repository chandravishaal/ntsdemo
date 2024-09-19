import { useEffect, useRef } from 'react';
import iso27001 from '../../assets/Images/iso27001.png';
import iso22301 from '../../assets/Images/iso22301.png';
import csaStar from '../../assets/Images/csa-star.png';
import bankOfSpain from '../../assets/Images/bank-of-spain.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Certificate = () => {
  const certificates = [
    {
      imageSrc: bankOfSpain,
      altText: 'Bank of Spain',
      title: 'Bank of Spain',
      description: 'Registered by the Bank of Spain as a crypto-assets custodian and exchange house.',
    },
    {
      imageSrc: iso27001,
      altText: 'ISO 27001 Certification',
      title: 'ISO 27001 Certification',
      description: 'Endorses the information security management system for the purchase, sale, and custody of crypto-assets.',
    },
    {
      imageSrc: iso22301,
      altText: 'ISO 22301 Certification',
      title: 'ISO 22301 Certification',
      description: 'Endorses the security management system for the purchase, sale, and custody of crypto-assets.',
    },
    {
      imageSrc: csaStar,
      altText: 'CSA STAR',
      title: 'CSA STAR',
      description: 'Ensures protection in cloud environments, covering transparency, audits, and regulatory compliance.',
    },
  ];

  const sectionRef = useRef(null);
  const certificateRefs = useRef([]);

  useEffect(() => {
    // GSAP staggered animation on scroll
    gsap.fromTo(
      certificateRefs.current,
      { opacity: 0, y: 50 }, // Starting properties
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.2, // Staggering animation between each item
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%', // Start when the section reaches 80% of the viewport height
          end: 'bottom 20%',
          toggleActions: 'play none none reset', // Re-animate when entering the viewport
        },
      }
    );
  }, []);

  const CertificateItem = ({ imageSrc, altText, title, description, isSmall, index }) => {
    return (
      <div
        ref={(el) => (certificateRefs.current[index] = el)} // Assign each certificate item a ref
        className="text-center"
      >
        <img
          src={imageSrc}
          alt={altText}
          className={`mx-auto ${isSmall ? 'h-24 w-24 mt-5 mb-5' : 'h-32 w-32 mb-4'} object-contain`}
        />
        <h4 className="font-semibold font-century-gothic">{title}</h4>
        <p className="text-sm max-w-xs text-gray-600 font-century-gothic">{description}</p>
      </div>
    );
  };

  return (
    <div ref={sectionRef} className="mt-12 flex justify-around py-24 gap-5 container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8">
        {certificates.map((certificate, index) => (
          <CertificateItem
            key={index}
            imageSrc={certificate.imageSrc}
            altText={certificate.altText}
            title={certificate.title}
            description={certificate.description}
            isSmall={index === 3} // Set `isSmall` to true for the 4th image
            index={index} // Pass index to use for refs
          />
        ))}
      </div>
    </div>
  );
};

export default Certificate;






{/*
  return (
    <div className="mt-12 flex justify-around py-24 gap-5 container mx-auto">
      {certificates.map((certificate, index) => (
        <CertificateItem
          key={index}
          imageSrc={certificate.imageSrc}
          altText={certificate.altText}
          title={certificate.title}
          description={certificate.description}
          isSmall={index === 3}  // Set isSmall to true for the 4th image
        />
      ))}
    </div>
  );*/}