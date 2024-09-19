import PrimaryButton from "../../Common/PrimaryButton";
import trading from '../../assets/Images/ServicesImages/4th_section_img.png';

const AdvanceUser = () => {
  return (
    <section className="h-auto min-h-[40rem] w-full flex items-center justify-center bg-cover bg-center bg-cyan-50 py-8 md:py-16">
      <div id="main" className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center p-4 md:p-8 h-full">

        {/* Left Section */}
        <div id="left" className="w-full md:w-1/2 h-full space-y-6 md:space-y-10 text-center md:text-left flex flex-col justify-center items-center md:items-start">
          <div id="heading">
            <h2 className="text-2xl md:text-4xl font-montserrat font-bold text-cyan-400">
              For Advanced Users<br />

            </h2>
            <h3 className="text-gray-800 font-montserrat text-2xl md:text-3xl font-bold mt-3">
              Regulated and Professional trading <br />With cryptocurrencies
            </h3>
          </div>
          <div id="heding2">
            <p className="text-sm md:text-lg font-century-gothic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />
              eiusmod tempor incididunt ut la.
            </p>
          </div>
          <div id="button">
            <PrimaryButton title="Know More" />
          </div>
        </div>

        {/* Right Section */}
        <div id="right" className="w-full md:w-1/2 mb-10 lg:mb-0 h-full flex items-center justify-center mt-8 md:mt-0">
          <div id="image" className="w-64 sm:w-80 md:w-[30rem] lg:w-[35rem] xl:w-[40rem]">
            <img src={trading} alt="Crypto Trading" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvanceUser;
