import React from 'react';
import '../../index.css';
import cryptocurrency from '../../assets/Images/OtcDesk/section3_icon1.png';
import transparency from '../../assets/Images/OtcDesk/section3_icon2.png';
import partnerships from '../../assets/Images/OtcDesk/section3_icon3.png';
import transactions from '../../assets/Images/OtcDesk/section3_icon4.png';
import mobile from '../../assets/Images/OtcDesk/section3_icon5.png';
import investment from '../../assets/Images/OtcDesk/section3_icon6.png';
import shadow from '../../assets/Images/OtcDesk/hero_bg2.png';


const Benefits = () => {
  return (
    <div className="min-h-screen w-full py-10 bg-cyan-50 mb-2">
      {/* Title Section */}
      <div className="text-center mt-8 mb-12 flex flex-col items-center px-4">
        <h2 className="text-2xl md:text-4xl jost-uniquifier font-semibold">Benefits With North Star Metrics OTC</h2>
        <p className="mt-5 w-full md:w-2/3 jost-uniquifier lg:w-1/2 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto px-4 lg:px-32">
        {/* Benefit 1 */}
        <div className="bg-white p-4 rounded-lg flex flex-col items-end justify-between ">
          <div>
            <h3 className="text-lg md:text-xl ml-4 mt-4 jost-uniquifier font-semibold">Diverse Cryptocurrency Options</h3>
            <p className="text-gray-600 jost-uniquifier ml-4 mt-4 mb-4 md:-mb-4 w-full md:w-3/4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div> 
          <img src={cryptocurrency} alt="Diverse Cryptocurrency Options" className="w-12 h-12 md:w-18 md:h-18 mr-4" />
          <img src={shadow} className="w-12 md:w-16 mr-4" />
        </div>

        {/* Benefit 2 */}
        <div className="bg-white p-4 rounded-lg jost-uniquifier flex flex-col items-end justify-between ">
          <div>
            <h3 className="text-lg md:text-xl ml-4 mt-4 font-semibold">Instant Transactions</h3>
            <p className="text-gray-600 ml-4 mt-4 mb-4 md:-mb-4 w-full md:w-3/4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <img src={transactions} alt="Instant Transactions" className="w-12 h-12 md:w-18 md:h-18 mr-4" />
          <img src={shadow} className="w-12 md:w-16 mr-4" />
        </div>

        {/* Benefit 3 */}
        <div className="bg-white p-4 rounded-lg jost-uniquifier flex flex-col items-end justify-between ">
          <div>
            <h3 className="text-lg md:text-xl ml-4 mt-4 font-semibold">Transparency and Trust</h3>
            <p className="text-gray-600 ml-4 mt-4 mb-4 md:-mb-4 w-full md:w-3/4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <img src={transparency} alt="Transparency and Trust" className="w-12 h-12 md:w-18 md:h-18 mr-4" />
          <img src={shadow} className="w-12 md:w-16 mr-4" />
        </div>

        {/* Benefit 4 */}
        <div className="bg-white p-4 rounded-lg jost-uniquifier flex flex-col items-end justify-between ">
          <div>
            <h3 className="text-lg md:text-xl ml-4 mt-4 font-semibold">Mobile-Friendly Experience</h3>
            <p className="text-gray-600 ml-4 mt-4 mb-4 md:-mb-4 w-full md:w-3/4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <img src={mobile} alt="Mobile-Friendly Experience" className="w-12 h-12 md:w-18 md:h-18 mr-4" />
          <img src={shadow} className="w-12 md:w-16 mr-4" />
        </div>

        {/* Benefit 5 */}
        <div className="bg-white p-4 rounded-lg jost-uniquifier flex flex-col items-end justify-between ">
          <div>
            <h3 className="text-lg md:text-xl ml-4 mt-4 font-semibold">Partnerships and Collaborations</h3>
            <p className="text-gray-600 ml-4 mt-4 mb-4 md:-mb-4 w-full md:w-3/4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <img src={partnerships} alt="Partnerships and Collaborations" className="w-12 h-12 md:w-18 md:h-18 mr-4" />
          <img src={shadow} className="w-12 md:w-16 mr-4" />
        </div>

        {/* Benefit 6 */}
        <div className="bg-white p-4 rounded-lg jost-uniquifier flex flex-col items-end justify-between ">
          <div>
            <h3 className="text-lg md:text-xl ml-4 mt-4 font-semibold">Tailored Investment Plans</h3>
            <p className="text-gray-600 ml-4 mt-4 mb-4 md:-mb-4 w-full md:w-3/4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <img src={investment} alt="Tailored Investment Plans" className="w-12 h-12 md:w-18 md:h-18 mr-4" />
          <img src={shadow} className="w-12 md:w-16 mr-4" />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
