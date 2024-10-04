import overallImage from "/src/assets/Images/9th_section_img.png";
import Button3 from "../../Common/Button3";

const CryptoFreedomSection = () => {
  return (
    <section className="freedomSection-background pt-10 mb-32 px-5">
    <div className="container mx-auto pt-10  text-center">
      <h2 className="text-3xl font-bold mb-4">
        The freedom of crypto for everyone, everywhere
      </h2>
      <p className="text-lg text-gray-600 font-century-gothic mb-8">
        We&apos;re committed to creating more economic freedom through accessible,
        safe, and secure financial tools for everyone.
      </p>
      <div className="relative mx-auto max-w-[600px]">
        <img
          src={overallImage}
          alt="Conceptual graphic illustrating global financial freedom with diverse individuals engaged in cryptocurrency transactions"
          //alt="Crypto Freedom Image"
          className="w-full h-auto mb-10 select-none"
          data-aos="fade-up"
          data-aos-duration="3000"
        />
      </div>
      <Button3 title="Learn More" />
    </div>
    </section>
  );
};

export default CryptoFreedomSection;
