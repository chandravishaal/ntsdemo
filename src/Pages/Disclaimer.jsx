import React from 'react';
import CoinMarquees from "../Components/HomeComponents/CoinMarquees";


const Disclaimer = () => {
    return (
        <>
            <div>
                <CoinMarquees />
            </div>
            <section className="md:pt-20 lg:py-10">
                <div className="flex items-center ml-4 justify-start mt-10 -mb-10 md:ml-10">

                    <div className="bg-white rounded-lg pr-20 w-full"> 
                        
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">North Star Metrics Disclaimer</h2>
                        <p className="text-gray-500 mb-2">
                            North Star Metrics provides information for general informational purposes. While we strive for accuracy, it is not guaranteed. Trading and investing in cryptocurrencies involve significant risk, and past performance is not indicative of future results.
                        </p>
                        <p className="text-gray-500 mb-2">
                            Cryptocurrencies are subject to market volatility and regulatory uncertainties, and past performance is not indicative of future results.
                        </p>

                        <p className="text-gray-500">
                            By using the platform, users acknowledge that North Star Metrics does not offer warranties and agree to use services at their own risk. Consider your risk before engaging in cryptocurrency transactions.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};


export default Disclaimer;
