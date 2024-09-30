import { useState } from "react";
import phone from "../../assets/Images/HomeImages/iPhone-16-Plus-Light.png";
import { MdSwapCalls } from "react-icons/md";

const Explore = () => {
  const [activeTab, setActiveTab] = useState("send");

  // Function to toggle between "send" and "receive"
  const handleSwap = () => {
    setActiveTab(activeTab === "send" ? "receive" : "send");
  };

  return (
    <section className="py-20">
      <div className="flex flex-col lg:flex-row items-center justify-between container mx-auto">
        {/* Left-side content */}
        <div className="flex-1">{/* Your content here */}</div>

        {/* Phone image and content inside the phone */}
        <div className="flex-1">
          <div className="bg-gray-500 h-[500px] overflow-y-hidden rounded-3xl p-10 w-full">
            <div className="relative flex justify-center">
              {/* Wrapper for the phone and its content */}
              <div className="relative w-72">
                {/* Content inside the phone */}
                <div className="absolute inset-0 flex flex-col gap-3 top-14 items-center">
                  {/* Swap Button */}
                  <div className="absolute top-[5.2rem] rounded-full bg-white p-1 left-[8rem]">
                    <div className="bg-blue-500 p-1 rounded-full">
                      <button
                        onClick={handleSwap}
                        className="text-white cursor-pointer px-1 py-1 flex items-center justify-center"
                      >
                        <MdSwapCalls />
                      </button>
                    </div>
                  </div>

                  {/* Conditional rendering to swap between Send and Receive */}
                  <div className={`bg-blue-500 select-none ${activeTab === 'send' ? 'order-0' : 'order-1'} font-century-gothic text-white flex flex-col gap-4 p-5 w-5/6 border rounded-2xl`}>
                    <h1 className="font-bold text-xs">Send</h1>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                        <h1 className="text-sm">BTC</h1>
                      </div>
                      <input
                        type="tel"
                        className="bg-transparent w-[100px] outline-none text-right"
                        value={0}
                      />
                    </div>
                  </div>

                  {/* Receive Card */}
                  <div className={`bg-blue-500 select-none ${activeTab === 'send' ? 'order-1' : 'order-0'} font-century-gothic text-white flex flex-col gap-4 p-5 w-5/6 border rounded-2xl`}>
                    <h1 className="font-bold text-xs">Receive</h1>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                        <h1 className="text-sm">INR</h1>
                      </div>
                      <input
                        type="tel"
                        className="bg-transparent w-[100px] outline-none text-right"
                        value={0}
                      />
                    </div>
                  </div>

                  {/* Rate and Exchange Button */}
                  <div className="bg-blue-500 w-5/6 order-2 text-sm rounded-xl flex items-center justify-between px-5 py-2 text-white">
                    <h1>Rate</h1>
                    <h1>1ETH = 0.063 BTC</h1>
                  </div>
                  <button className="bg-primaryCyan order-3 py-2 px-5 text-sm font-bold rounded-xl">
                    Exchange
                  </button>
                </div>
                {/* Phone image */}
                <img src={phone} className="w-full" alt="iPhone" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
