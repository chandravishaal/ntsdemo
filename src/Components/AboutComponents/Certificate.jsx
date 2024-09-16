import iso27001 from '../../assets/Images/iso27001.png';
import iso22301 from '../../assets/Images/iso22301.png';
import csaStar from '../../assets/Images/csa-star.png';
import bankOfSpain from '../../assets/Images/bank-of-spain.png';

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

  const CertificateItem = ({ imageSrc, altText, title, description, isSmall }) => {
    return (
      <div className="text-center">
        <img 
          src={imageSrc} 
          alt={altText} 
          className={`mx-auto ${isSmall ? 'h-24 w-24 mt-5 mb-5' : 'h-32 w-32 mb-4'} object-contain `} 
        />
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm max-w-xs text-gray-600">{description}</p>
      </div>
    );
  };
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
          isSmall={index === 3}  // Set `isSmall` to true for the 4th image
        />
      ))}
    </div>
  );*/}

  return (
    <div className="mt-12 flex justify-around py-24 gap-5 container mx-auto  ">
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  gap-8">
        {certificates.map((certificate, index) => (
          <CertificateItem
            key={index}
            imageSrc={certificate.imageSrc}
            altText={certificate.altText}
            title={certificate.title}
            description={certificate.description}
            isSmall={index === 3}  // Set `isSmall` to true for the 4th image
          />
        ))}
      </div>
    </div>
  );
};

export default Certificate;
