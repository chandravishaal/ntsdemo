import React from "react";
import '../../index.css';
import news from '../../assets/Images/Blog/icon1.png';
import Market from '../../assets/Images/Blog/icon2.png';
import investment from '../../assets/Images/Blog/icon3.png';
import Guides from '../../assets/Images/Blog/icon4.png';
import Security from '../../assets/Images/Blog/icon5.png';
import Features from '../../assets/Images/Blog/icon6.png';
import Studies from '../../assets/Images/Blog/icon7.png';
import Spotlight from '../../assets/Images/Blog/icon8.png';
import Interviews from '../../assets/Images/Blog/icon9.png';
import Issues from '../../assets/Images/Blog/icon10.png';
import Education from '../../assets/Images/Blog/icon11.png';
import Future from '../../assets/Images/Blog/icon12.png';

const Navbar = () => {
  return (
    <div className="py-12 -mt-5" style={{ backgroundColor: "#e0ffff" }}> 
      <div className="container mx-auto bg-white p-8 rounded-lg jost-uniquifier"> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-36 relative">
          
          {/* Vertical lines */}
          <div className="hidden lg:block absolute left-[340px] h-full w-0.5 bg-gray-300 opacity-80" />
          <div className="hidden lg:block absolute left-[800px] h-full w-0.5 bg-gray-300 opacity-80" />
          
          {/* Column 1 */}
          <div>
            <ul className="space-y-7">
              <li className="flex items-center">
                <img
                  src={news}
                  alt="Crypto News"
                  className="w-6 h-6 mr-2"
                />
                <span>Crypto News and Updates</span>
              </li>
              <li className="flex items-center">
                <img
                  src={Market}
                  alt="Market Analysis"
                  className="w-6 h-6 mr-2"
                />
                <span>Market Analysis and Trends</span>
              </li>
              <li className="flex items-center">
                <img
                  src={investment}
                  alt="Investment Strategies"
                  className="w-6 h-6 mr-2"
                />
                <span>Investment Strategies</span>
              </li>
              <li className="flex items-center">
                <img
                  src={Guides}
                  alt="Guides and Tutorials"
                  className="w-6 h-6 mr-2"
                />
                <span>Guides and Tutorials</span>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-7">
              <li className="flex items-center">
                <img
                  src={Security}
                  alt="Security Tips"
                  className="w-6 h-6 mr-2"
                />
                <span>Security Tips</span>
              </li>
              <li className="flex items-center">
                <img
                  src={Features}
                  alt="New Features"
                  className="w-6 h-6 mr-2"
                />
                <span>New Features and Updates</span>
              </li>
              <li className="flex items-center">
                <img
                  src={Studies}
                  alt="Case Studies"
                  className="w-6 h-6 mr-2"
                />
                <span>Case Studies</span>
              </li>
              <li className="flex items-center">
                <img
                  src={Spotlight}
                  alt="Community Spotlight"
                  className="w-6 h-6 mr-2"
                />
                <span>Community Spotlight</span>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul className="space-y-7">
              <li className="flex items-center">
                <img
                  src={Interviews}
                  alt="Interviews"
                  className="w-6 h-6 mr-2"
                />
                <span>Interviews and Expert Opinions</span>
              </li>
              <li className="flex items-center">
                <img
                  src={Issues}
                  alt="Legal Issues"
                  className="w-6 h-6 mr-2"
                />
                <span>Legal and Regulatory Issues</span>
              </li>
              <li className="flex items-center">
                <img
                  src={Education}
                  alt="Cryptocurrency Education"
                  className="w-6 h-6 mr-2"
                />
                <span>Cryptocurrency Education</span>
              </li>
              <li className="flex items-center">
                <img
                  src={Future}
                  alt="Future of Crypto"
                  className="w-6 h-6 mr-2"
                />
                <span>Future of Cryptocurrency</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
