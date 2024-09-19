import left from '../../assets/Images/ServicesImages/last_section_img.png';
import PrimaryButton from '../../Common/PrimaryButton';

const Partnarship = () => {
  return (
    <section className="Partnarship-bg h-auto w-full flex items-center justify-center bg-cover bg-center py-12 md:py-20">
      <div id="main" className="container mx-auto flex flex-col md:flex-row items-center justify-center p-4 md:p-4 h-full">

        {/* Left Section - Image */}
        <div id="left" className="w-full md:w-1/2 h-full flex items-center justify-center mb-8 md:mb-0">
          <div id="image" className="w-64 sm:w-80 md:w-[30rem] lg:w-[35rem]">
            <img src={left} alt="Partnership Program Illustration" className="w-full h-auto" />
          </div>
        </div>

        {/* Right Section - Content */}
        <div id="right" className="w-full md:w-1/2 h-full space-y-6 md:space-y-10 text-center md:text-left flex flex-col justify-start md:justify-center items-center md:items-start px-4 md:px-9">
          <div id="heading">
            <h2 className="text-2xl md:text-4xl font-montserrat font-bold text-cyan-400">
              Partnership Program
              <br />

            </h2>
            <h3 className="text-gray-800 font-montserrat text-xl md:text-3xl font-bold mt-3">
              Regulated and Professional trading <br />With cryptocurrencies
            </h3>
          </div>

          <div id="heading2">
            <p id='subHeding' className="text-sm md:text-lg font-century-gothic md:max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
              eiusmod tempor incididunt ut la.
            </p>
          </div>

          <div id="button">
            <PrimaryButton title="Know More" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Partnarship;
