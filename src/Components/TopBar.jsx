import 'remixicon/fonts/remixicon.css';

const TopBar = () => {
  return (
    <div>
      <div className=' hidden lg:block bg-[#252525] w-full  '> 
    <section className=''>
    {/* <div className="bg-gray-950 text-white flex justify-between items-center px-20 py-3"> */}
    <div className="mx-auto container bg-[#252525] border border-[#252525] md:px-10 lg:px-2 flex items-center justify-between p-3">

     
      <div className="flex items-center space-x-4">

        <div className="flex items-center space-x-2 ">
          <i className="ri-mail-line text-cyan-300" ></i>
          <span className='text-gray-500 hover:text-cyan-300'>contact@ntsmetrics.com</span>
        </div>

        {/* Divider Line */}
        <div className="border-l border-gray-600 h-6"></div>

        
        <div className="flex items-center space-x-4">
          <i className="ri-facebook-fill text-gray-500 hover:text-cyan-300"></i>
          <i className="ri-instagram-line text-gray-500 hover:text-cyan-300"></i>
          <i className="ri-linkedin-fill text-gray-500 hover:text-cyan-300"></i>
        </div>
      </div>

      {/* Right Side: Navigation Links and Sign In/Register */}
      <div className="flex items-center space-x-6">
        {/* Navigation Links */}
        <a href="#" className="hover:text-cyan-300 text-gray-500">FAQ&apos;s</a>
        <div className="border-l border-gray-600 h-6"></div>

        <a href="#" className="hover:text-cyan-300 text-gray-500">ICO Calendar</a>
        <div className="border-l border-gray-600 h-6"></div>

        <a href="#" className="hover:text-cyan-300 text-gray-500">Prices</a>

        <div className="mx-4"></div>
        
      </div>
    </div>
    </section>
    </div>
    </div>
  );
};

export default TopBar;
