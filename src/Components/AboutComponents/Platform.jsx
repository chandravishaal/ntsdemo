import phoneImage from "../../assets/Images/phone.png";

const Platform = () => {
  return (
    <div className="bg-cyan-50 pt-20">
      {/* Main Heading */}
      <h1 className="text-center text-xl md:text-2xl font-semibold text-black raleway-hero mb-6">
        More North Star Metrics
      </h1>
      <h1 className="text-center text-xl md:text-4xl font-bold text-black raleway-hero mb-32">
        The most secure, easy and comprehensive platform
      </h1>

      {/* Phone Image with surrounding text */}
      <div className="relative flex justify-center items-center -mb-4">

        {/* Phone Image */}
        <div className="flex justify-center items-center p-4 relative">
          <img src={phoneImage} alt="Phone" className="w-[30rem] h-auto" />
          <div className="absolute top-9 -left-14 text-xl">
            <p className="text-black raleway-hero font-semibold">
              Buy, sell, trade
            </p>
          </div>
          <div className="absolute top-[3rem] -right-[10rem]">
            <p className="text-black raleway-hero text-xl font-semibold">
                Generate passive rewards <br /> with Earn
            </p>
          </div>
          <div className="absolute top-[12rem] -left-[15rem] text-right">
            <p className="text-black raleway-hero text-xl font-semibold">
                Store, send, receive cryptocurrencies <br /> and money 
            </p>
          </div>

          <div className="absolute top-[18rem] -right-[17rem] text-left">
            <p className="text-black raleway-hero text-xl font-semibold">
                Tax, Pay, Pro, Loan, Launchpad, ... <br /> and many more. Check them out 
            </p>
          </div>

          <div className="absolute top-[23rem] -left-[10rem] text-left">
            <p className="text-black raleway-hero text-xl font-semibold">
                Paying with our card
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
