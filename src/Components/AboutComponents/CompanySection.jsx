/*import { useState } from 'react';
import missionImage from '../../assets/Images/handshake.png'; 

const CompanySection = () => {
    const [activeSection, setActiveSection] = useState('Mission');

    const renderButton = (section) => {
        const isActive = activeSection === section;
        return (
            <button
                className={`px-8 py-1 rounded-lg text-lg mt-20 cursor-pointer font-semibold ${
                    isActive
                        ? 'bg-primaryCyan text-white' 
                        : 'border-2 border-primaryCyan text-sky-400 raleway-hero bg-transparent' 
                }`}
                onClick={() => setActiveSection(section)}
            >
                {section}
            </button>
        );
    };

    const renderActiveSection = () => {
        switch (activeSection) {
            case 'Mission':
                return (
                    <div className="py-16 rounded-lg raleway-hero text-blue mt-6">
                        <div className="flex items-center gap-20 justify-between container mx-auto">
                            <img src={missionImage} alt="Mission" className="w-[25rem] rounded-lg shadow-lg" />
                            <div className="">
                                <h3 className="text-3xl text-primaryCyan mb-2">What defines us</h3>
                                <p className="text-3xl font-bold mb-3">
                                    Lorem Ipsum is simply dummy text of the printing and </p>
                                 <p className="text-mb font-light  mb-2 "> 
                                    Typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing. Typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s. 
                                    </p>
                            </div>
                        </div>
                    </div>
                );
            case 'Vision':
                return (
                    <div className="py-16 rounded-lg raleway-hero text-blue mt-6">
                        <div className="flex items-center gap-20 justify-between container mx-auto">
                            <img src={missionImage} alt="Mission" className="w-[25rem] rounded-lg shadow-lg" />
                            <div className="">
                                <h3 className="text-3xl text-primaryCyan mb-2">What defines</h3>
                                <p className="text-3xl font-bold mb-3">
                                    Lorem Ipsum is simply dummy text of the printing and </p>
                                 <p className="text-mb font-light  mb-2 "> 
                                    Typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing. Typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s. 
                                    </p>
                            </div>
                        </div>
                    </div>
                );
            case 'Values':
                return (
                    <div className="py-16 rounded-lg raleway-hero text-blue mt-6">
                        <div className="flex items-center gap-20 justify-between container mx-auto">
                            <img src={missionImage} alt="Mission" className="w-[25rem] rounded-lg shadow-lg" />
                            <div className="">
                                <h3 className="text-3xl text-primaryCyan mb-2">What us</h3>
                                <p className="text-3xl font-bold mb-3">
                                    Lorem Ipsum is simply dummy text of the printing and </p>
                                 <p className="text-mb font-light  mb-2 "> 
                                    Typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing. Typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s. 
                                    </p>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };
*/{/*
    return (
        <div className=" bg-gradient-to-b from-white to-cyan-50 py-16">
            {/* Buttons for Mission, Vision, Values 
            <div className="flex space-x-4 justify-center">
                {['Mission', 'Vision', 'Values'].map(section => renderButton(section))}
            </div>

            {/* Display the active section 
            {renderActiveSection()}
        </div>
    );
};

export default CompanySection;*/}

import { useState } from 'react';
import missionImage from '../../assets/Images/handshake.png';

const CompanySection = () => {
    const [activeSection, setActiveSection] = useState('Mission');

    const renderButton = (section) => {
        const isActive = activeSection === section;
        return (
            <button
                className={`px-4 py-0.5 md:px-8 md:py-1 rounded-lg md:text-lg mt-4 cursor-pointer font-century-gothic ${isActive
                        ? 'bg-primaryCyan text-black font-eras-bold'
                        : 'border-2 border-primaryCyan text-black raleway-hero bg-transparent font-eras-bold'
                    }`}
                onClick={() => setActiveSection(section)}
            >
                {section}
            </button>
        );
    };

    const renderActiveSection = () => {
        switch (activeSection) {
            case 'Mission':
                return (
                    <div className="container mx-auto py-8">
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-between container mx-auto rounded-lg px-5 py-4">
                            <div className="w-full md:w-1/3 mb-4 md:mb-0">
                                <img
                                    src={missionImage}
                                    alt="North Star Metrics team symbolizing partnership and collaboration"
                                    className="rounded-lg shadow-lg w-full h-[250px] object-cover"
                                />
                            </div>
                            {/* Text */}
                            <div className="md:pl-10 flex flex-col justify-center w-full md:w-2/3">
                                <div className="md:w-11/12">
                                    <h1 className="text-3xl font-bold text-primaryCyan font-montserrat ">What defines us</h1>
                                    <h2 className="text-lg text-black mt-1 font-century-gothic">Join the digital revolution</h2>
                                    <p className="text-gray-800 mt-2 font-century-gothic text-xs">
                                        Sell and Buy Crypto as the New Digital Economy&apos;s Forerunner with North Star Metrics. Experience freedom - watch your financial future in the palm of your hand by ensuring the safe buying and selling of cryptocurrency.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'Vision':
                return (
                    <div className="container mx-auto py-8">
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-between container mx-auto rounded-lg px-5 py-4">
                            <div className="w-full md:w-1/3 mb-4 md:mb-0">
                                <img
                                    src="https://cdn.pixabay.com/photo/2015/08/01/21/11/euro-870761_1280.jpg"
                                    alt="Financial growth and investment opportunities symbolized by currency and graphs"
                                    className="rounded-lg shadow-lg w-full h-[250px] object-cover"
                                />
                            </div>
                            {/* Text */}
                            <div className="md:pl-10 flex flex-col justify-center w-full md:w-2/3">
                                <div className="md:w-11/12">
                                    <h2 className="text-3xl font-bold text-primaryCyan font-montserrat">What defines us</h2>
                                    <h3 className="text-lg text-black mt-1 font-century-gothic">Join the digital revolution</h3>
                                    <p className="text-gray-800 mt-2 font-century-gothic text-xs">
                                        Sell and Buy Crypto as the New Digital Economy&apos;s Forerunner with North Star Metrics. Experience freedom - watch your financial future in the palm of your hand by ensuring the safe buying and selling of cryptocurrency.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'Values':
                return (
                    <div className="container mx-auto py-8">
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-between container mx-auto rounded-lg px-5 py-4">
                            <div className="w-full md:w-1/3 mb-4 md:mb-0">
                                <img
                                     src="https://cdn.pixabay.com/photo/2024/04/05/05/17/technology-8676540_1280.jpg"
                                    alt="Technological innovation and advanced solutions in the financial sector"
                                    className="rounded-lg shadow-lg w-full h-[250px] object-cover"
                                />
                            </div>
                            {/* Text */}
                            <div className="md:pl-10 flex flex-col justify-center w-full md:w-2/3">
                                <div className="md:w-11/12">
                                    <h2 className="text-3xl font-bold text-primaryCyan font-montserrat">What defines us</h2>
                                    <h3 className="text-lg text-black mt-1 font-century-gothic">Join the digital revolution</h3>
                                    <p className="text-gray-800 mt-2 font-century-gothic text-xs">
                                        Sell and Buy Crypto as the New Digital Economy&apos;s Forerunner with North Star Metrics. Experience freedom - watch your financial future in the palm of your hand by ensuring the safe buying and selling of cryptocurrency.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className=" bg-gradient-to-b from-white to-cyan-50 py-16 px-5">
            {/* Buttons for Mission, Vision, Values */}
            <div className="flex md:flex-row space-x-1 md:space-x-4 justify-center ">
                {['Mission', 'Vision', 'Values'].map(section => renderButton(section))}
            </div>

            {/* Display the active section */}
            {renderActiveSection()}
        </div>
    );
};

export default CompanySection;
