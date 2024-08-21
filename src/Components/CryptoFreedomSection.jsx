import overallImage from "/src/assets/Images/9th_section_img.png";

const CryptoFreedomSection = () => {
  return (
    <div className="container mx-auto pt-10  text-center">
      <h2 className="text-3xl font-semibold mb-4">
        The freedom of crypto for everyone, everywhere
      </h2>
      <p className="text-lg text-gray-600 mb-8  mx-[20%]">
        We’re committed to creating more economic freedom through accessible,
        safe, and secure financial tools for everyone.
      </p>
      <div className="relative mx-auto max-w-[600px]">
        <img
          src={overallImage}
          alt="Crypto Freedom Image"
          className="w-full h-auto"
        />
      </div>
      <button className="mt-8 px-4 py-2 bg-blue-200 text-black text-2xl  rounded-md border-b-4 border-b-teal-700">
        Learn More
      </button>
    </div>
  );
};

export default CryptoFreedomSection;
