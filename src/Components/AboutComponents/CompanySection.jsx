import { useState } from 'react';
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
            case 'Values':
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
            default:
                return null;
        }
    };

    return (
        <div className=" bg-gradient-to-b from-white to-cyan-50 py-16">
            {/* Buttons for Mission, Vision, Values */}
            <div className="flex space-x-4 justify-center">
                {['Mission', 'Vision', 'Values'].map(section => renderButton(section))}
            </div>

            {/* Display the active section */}
            {renderActiveSection()}
        </div>
    );
};

export default CompanySection;