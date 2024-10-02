import React from 'react';
import CoinMarquees from "../Components/HomeComponents/CoinMarquees";


const Disclaimer = () => {
    return (
      <>
      <div><CoinMarquees /></div>
      
      <div className="flex items-center justify-center my-20">
        
            <div className="bg-white rounded-lg p-0 w-1/2">
                <h2 className="text-xl font-bold text-gray-800 mb-3">North Star Metrics Disclaimer</h2>
                <p className="text-gray-500 mb-2">
                    Trading in cryptocurrencies is subject to market & legal risks. Prices in one country may differ from prices in other countries. North Star Metrics does not guarantee any returns. Use North Star Metrics's services at your own risk. 
                </p>
                <p className="text-gray-500">
                    Please consult with a financial advisor before engaging in trading activities.
                </p>
            </div>
        </div>
      
      </>
        
    );
};

export default Disclaimer;
