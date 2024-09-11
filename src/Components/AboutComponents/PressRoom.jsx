import Image1 from '../../assets/Images/icon1.jpg';
import Image2 from '../../assets/Images/icon2.jpg';
import Image3 from '../../assets/Images/icon3.jpg';
import Image4 from '../../assets/Images/nts-removebg-preview.png';

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

  const PressCard = ({ imageSrc, title, description, logoSrc }) => {
    return (
      <div className="bg-cyan-50 rounded-lg">
        <img src={imageSrc} alt="Press Image" className="rounded-t-lg object-cover mb-3 h-[200px] w-full" />
        <div className='p-4'>
          <h3 className="text-l font-bold mb-2">{title}</h3>
          <p className="text-gray-500 mb-4 text-sm">
            {description}
          </p>
          <div className='flex items-center justify-between'>
            <img src={logoSrc} className='w-24' alt="" />
            <div className="flex justify-end mt-4">
            <div className="bg-primaryCyan text-black font-bold -py-1 px-4 rounded-full">Funding</div>
            <div className="bg-primaryCyan text-black font-bold -py-1 px-4 rounded-full ml-4">Growth</div>
          </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white container mx-auto mb-24">
      <div className="text-center font-Antipasto pro">
        <h2 className="text-4xl font-bold mt-8">Press Room</h2>
        <p className="text-black mt-4 font-semibold text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
          <br />
          standard dummy text ever since the 1500s,
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {cardsData.map((card, index) => (
          <PressCard
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            logoSrc={card.logoSrc}
          />
        ))}
      </div>
    </section>
  );
}

export default PressRoom;
