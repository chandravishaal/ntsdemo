import overallImage from "/src/assets/Images/9th_section_img.png";

const CryptoFreedomSection = () => {
  return (
    <section className="freedomSection-background pt-10 mb-32">
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
          className="w-full h-auto mb-10 select-none"
          data-aos="fade-up"
          data-aos-duration="3000"
        />
      </div>
      <button className="lg:px-4 select-none lg:py-2 px-3 py-2 text-md button text-center cursor-pointer md:w-1/3 lg:w-1/5 whitespace-nowrap lg:text-base text-sm font-semibold transition-all duration-200 outline-none text-black bg-gray-100 rounded-[100px] shadow-[0_4px_#C0C0C0]">
        Learn More
      </button>
    </div>
    </section>
  );
};

export default CryptoFreedomSection;
