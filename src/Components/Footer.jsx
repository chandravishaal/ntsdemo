import footerImage from "/src/assets/Images/contact_img.png"; // Assuming the image is in the public folder
import {
  FaLocationDot,

} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";


const Footer = () => {
  return (
    <>
    <section className="footer-background">
      <footer className="container flex flex-row  mx-auto max-w-[1200px] relative z-20  mt-24">
        <div className=" z-10 ">
          <img
            src={footerImage}
            alt="Image Loading ... "
            className="w-[410px] h-[500px]  -mt-[60%] select-none"
            />
        </div>  

        <div className=" py-10 pt-20 w-full  ">
        <div className="flex flex-row justify-between    text-white text-1xl pr-10">
          <div className=" w-1/3">
            <h3 className="font-bold mb-4">Get In Touch</h3>
            <p className="mt-2">
              <FaLocationDot className="inline mr-2" />
              7th Floor, Yamuna Building, 86, Golaghata Rd, Dakshindari,
              Kolkata - 700048
            </p>
            <p className="mt-2">
              <IoCall className="inline mr-2" />+91 8981037010
            </p>
            <p className="mt-2">
              <MdEmail className="inline mr-2" />
              contact@ntsmatrics.com
            </p>
          </div>
          <div >
            <h3 className="font-bold mb-4">Our Services</h3>
            <ul>
              <li>
                <IoIosArrowForward className="inline mr-2" />
                <a href="/">Cryptocurrency Exchange Services</a>
              </li>
              <li>
                <IoIosArrowForward className="inline mr-2" />
                <a href="/">Cryptocurrency Ticker</a>
              </li>
              <li>
                <IoIosArrowForward className="inline mr-2" />
                <a href="/">Blog</a>
              </li>
              <li>
                <IoIosArrowForward className="inline mr-2" />
                <a href="/">Features</a>
              </li>
              <li>
                <IoIosArrowForward className="inline mr-2" />
                <a href="/">Roadmap</a>
              </li>
            </ul>
          </div>
          <div >
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <IoIosArrowForward className="inline mr-2" />
                <a href="/">About Us</a>
                
              </li>
              <li>
                <IoIosArrowForward className="inline mr-2" />
                <a href="/">Contact Us</a>
              </li>
              <li>
                <IoIosArrowForward className="inline mr-2" />
                <a href="/">Aml & Kyc</a>
                
              </li>
              <li>
                <IoIosArrowForward className="inline mr-2" />
                <a href="/">Terms & Condition</a>
                
              </li>
              <li>
                <IoIosArrowForward className="inline mr-2" />
                <a href="/">Privacy Policy</a>
                
              </li>
            </ul>
          </div>

        </div>
      </div>
      </footer>
      </section>
      <section className="bg-black">
        <div className="container mx-auto text-white text-center p-2">
        &copy;2024 NORTH STAR METRICS, All Right Reserved.
        </div>
      </section>
    </>
  );
};

export default Footer;
