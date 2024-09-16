import { useParams } from "react-router-dom";
import Bitcoin from "../Components/CryptocurrencyComponents/Bitcoin";
import BitcoinMarketData from "../Components/CryptocurrencyComponents/BitcoinMarketData";
import Resources from "../Components/CryptocurrencyComponents/Resources";
import BuyBit from "../Components/CryptocurrencyComponents/BuyBit";
import BullsAndBears from "../Components/CryptocurrencyComponents/BullsAndBears";
import MarketStats from "../Components/CryptocurrencyComponents/MarketStats";
import CryptoLayout from "../Components/CryptocurrencyComponents/CryptoLayout";
import SocialMedia from "../Components/CryptocurrencyComponents/SocialMedia";
import HowToBuy from "../Components/CryptocurrencyComponents/HowToBuy";
import MetricsBytes from "../Components/CryptocurrencyComponents/MetricsBytes";

const Coin = () => {
  const { coin } = useParams();

  return (
    <>
      <div>{coin}</div>
      <Bitcoin />
      <BitcoinMarketData />
      <Resources />
      <BuyBit />
      <BullsAndBears />
      <MarketStats />
      <CryptoLayout />
      <SocialMedia />
      <HowToBuy />
      <MetricsBytes />
    </>
  );
};

export default Coin;
