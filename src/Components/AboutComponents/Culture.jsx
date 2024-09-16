
import PrimaryButton from "../../Common/PrimaryButton";

const Culture = () => {
  return (
    <div className="h-[40rem] w-full flex items-center justify-between">
      <div id='main' className="md:h-4/6 mx-auto container
        bg-gradient-to-b from-white to-cyan-50 md:bg-gradient-to-b md:from-white md:to-cyan-50
        rounded-lg flex flex-col-reverse md:flex-row items-center justify-between overflow-hidden ">

        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-5 text-center md:text-left px-6 md:px-4  md:h-[100%] mt-5">
          <h2 className="text-3xl md:text-4xl font-antipasto-pro font-bold text-gray-800">
            Culture and employment at <br />
            <span className="text-cyan-400 text-4xl md:text-5xl">North Star Metrics</span>
          </h2>
          <h3 className="text-xl md:text-2xl tracking-wide font-century-gothic text-black">Passionate about technology</h3>
          <p className="text-gray-500 font-century-gothic">
            At North Star Metrics, Our team is dedicated to revolutionising crypto buying and selling, seeking talented individuals to join our dynamic, innovative work environment.
          </p>
          <PrimaryButton title="See available vacancies" />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 h-full px-5  md:h-[100%]">
          <img
            src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Company Culture"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );

};

export default Culture;
