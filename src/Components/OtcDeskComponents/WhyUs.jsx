import React from 'react';
import '../../index.css';
import phone from '../../assets/Images/OtcDesk/section2_hero_img.png'; 
import secure from '../../assets/Images/OtcDesk/section2_icon1.png';
import Friendly from '../../assets/Images/OtcDesk/section2_icon2.png';
import competitive from '../../assets/Images/OtcDesk/section2_icon3.png';
import support from '../../assets/Images/OtcDesk/section2_icon4.png';
import global from '../../assets/Images/OtcDesk/section2_icon5.png';


const WhyUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Phone Image Section */}
        <div className="w-full md-8 w-1/2">
          <img
            src={phone}
            className="w:l-1/2"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-5xl font-semibold jost-uniquifier mb-12">Why Us</h2>
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4">
              <img
                src={secure} // Replace with actual icon path
        
                className="w-24 mb-4"
              />
              <div>
                <h3 className="text-xl font-semibold jost-uniquifier mb-2">Cutting-Edge Security</h3>
                <p className="text-gray-600 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4">
              <img
                src={Friendly} // Replace with actual icon path
                alt="User-Friendly Platform "
                className="w-24 mb-4"
              />
              <div>
                <h3 className="text-xl font-semibold jost-uniquifier mb-2">User-Friendly Platform</h3>
                <p className="text-gray-600">
               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-4">
              <img
                src={competitive} // Replace with actual icon path
                alt="Competitive Fees"
                className="w-24 mb-4"
              />
              <div>
                <h3 className="text-xl font-semibold jost-uniquifier mb-2">Competitive Fees</h3>
                <p className="text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start space-x-4">
              <img
                src={support} // Replace with actual icon path
                alt="Comprehensive Support"
                className="w-24 mb-4"
              />
              <div>
                <h3 className="text-xl font-semibold jost-uniquifier mb-2">Comprehensive Support</h3>
                <p className="text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex items-start space-x-4">
              <img
                src={global} // Replace with actual icon path
                alt="Local Expertise with Global Reach"
                className="w-24 mb-4"
              />
              <div>
                <h3 className="text-xl font-semibold jost-uniquifier mb-2">Local Expertise with Global Reach</h3>
                <p className="text-gray-600">
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
