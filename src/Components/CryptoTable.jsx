import React, { useState, useEffect } from 'react';
import { AreaChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area } from 'recharts';
import bitcoinIcon from '../assets/Images/6th_section_icon1.png';
import ethereumIcon from '../assets/Images/6th_section_icon3.png';

// Example data
const cryptocurrencies = [
  { 
    name: "Bitcoin", 
    symbol: "BTC", 
    icon: bitcoinIcon,
    price: 57974.23, 
    change: -1.97, 
    volume: 14.28, 
    marketCap: 1140,  
    last7days: [ 
        59687.2287362136, 60156.1158868683, 68378.4871619503, 60581.3181829642, 61009.0632411036, 
80584.8239788565, 56298.9850093879, 59940.7838773101, 59618.9721542485, 59354.6856227466, 
59497.7918365469, 59149.2174674876, 59351.5794909728, 39334.9966262005, 59318.1055517782,
59209.6056684091, 59117.2046248223, 58891.8831647288, 38908.0423348246, 6548.6723613281, 
59331.1845224982, 59538.1462243421, 59570.2233876041, 59590.8082851419, 50489.1412515743,
59687.2287362136, 60156.1158868683, 98378.4871619503, 60581.3181829642, 3109.0632411036, 
60584.8239788565, 86298.9850093879, 59940.7838773101, 5918.9721542485, 59354.6856227466, 
19497.7918365469, 59149.2174674876, 59351.5794909728, 39334.9966262005, 99318.1055517782,
59209.6056684091, 59117.2046248223, 58891.8831647288, 38908.0423348246, 55438.6723613281, 
59331.1845224982, 39538.1462243421, 59570.2233876041, 59590.8082851419, 80489.1412515743

    ]
  },
  { 
    name: "Ethereum", 
    symbol: "ETH", 
    icon: ethereumIcon,
    price: 2467.06, 
    change: -2.32, 
    volume: 7.18, 
    marketCap: 2968,  
    last7days: [ 
      59687.2287362136, 60156.1158868683, 68378.4871619503, 60581.3181829642, 61009.0632411036, 
    60584.8239788565, 56298.9850093879, 59940.7838773101, 59618.9721542485, 59354.6856227466, 
    59497.7918365469, 59149.2174674876, 59351.5794909728, 39334.9966262005, 59318.1055517782,
    59687.2287362136, 60156.1158868683, 98378.4871619503, 60581.3181829642, 3109.0632411036, 
    60584.8239788565, 86298.9850093879, 59940.7838773101, 5918.9721542485, 59354.6856227466, 
    19497.7918365469, 59149.2174674876, 59351.5794909728, 39334.9966262005, 99318.1055517782,
    59209.6056684091, 59117.2046248223, 58891.8831647288, 38908.0423348246, 55438.6723613281, 
    59331.1845224982, 39538.1462243421, 59570.2233876041, 59590.8082851419, 80489.1412515743, 
    59497.7918365469, 59149.2174674876, 59351.5794909728, 39334.9966262005, 59318.1055517782,
    59209.6056684091, 59117.2046248223, 58891.8831647288, 58908.0423348246, 55438.6723613281, 
    59331.1845224982, 39538.1462243421, 59570.2233876041, 59590.8082851419, 50489.1412515743
    ]
  },
];

// Tooltip component
const InfoTooltip = ({ text }) => (
  <div className="relative group inline-block ml-1">
    <span className="text-black-500 text-bold hover:text-black-700 margin-left: 0.5rem">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" strokeWidth={3} stroke="currentColor" className="w-4 h-4 inline">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 12h.01M19.78 12.78A9.003 9.003 0 1112 3v0a9.003 9.003 0 017.78 9.78zM12 7h.01M12 12h.01" />
      </svg>
    </span>
    <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-44 p-2 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
      {text}
    </div>
  </div>
);

const CryptoTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedData, setSortedData] = useState([...cryptocurrencies]);
  const [sortDirection, setSortDirection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState({
    name: true,
    price: true,
    change: true,
    volume: true,
    marketCap: true,
    last7days: true,
  });

  useEffect(() => {
    const filteredData = cryptocurrencies.filter(crypto => crypto.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setSortedData(filteredData);
  }, [searchTerm]);

  const sortByMarketCap = () => {
    const direction = sortDirection === 'asc' ? 'desc' : 'asc';
    const sorted = [...sortedData].sort((a, b) => direction === 'asc' ? a.marketCap - b.marketCap : b.marketCap - a.marketCap);
    setSortedData(sorted);
    setSortDirection(direction);
  };
  
  const getTrendColor = (data) => {
    const firstPrice = data[0];
    const lastPrice = data[data.length - 1];
    return lastPrice > firstPrice ? '#00C49F' : '#FF0000'; // Green for upward, Red for downward
  };

// Function to render the sparkline graph with a shaded area and color-specific shadow
const renderSparkline = (data) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const sparklineData = data.map((price, index) => ({ price, index }));
  const trendColor = getTrendColor(data);

  return (
    <div className="flex justify-center items-center h-full">
      <ResponsiveContainer width={180} height={60}>
        <AreaChart data={sparklineData}>
          <defs>
            <linearGradient id={`colorTrend-${trendColor}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={trendColor} stopOpacity={0.4}/>
              <stop offset="100%" stopColor={trendColor} stopOpacity={0.05}/>
            </linearGradient>
          </defs>
          <Area 
            type="monotone" 
            dataKey="price" 
            stroke={trendColor} 
            fill={`url(#colorTrend-${trendColor})`} 
            strokeWidth={2} 
            dot={false} 
          />
          <XAxis hide />
          <YAxis hide />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleColumnVisibilityChange = (column) => {
    setVisibleColumns((prev) => ({ ...prev, [column]: !prev[column] }));
  };

  const handleApplyChanges = () => {
    setIsModalOpen(false);
  };

  const handleResetChanges = () => {
    setVisibleColumns({
      name: true,
      price: true,
      change: true,
      volume: true,
      marketCap: true,
      last7days: true,
    });
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Top Cryptocurrency Prices and Market Cap</h1>
      </div>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search Cryptocurrency"
          className="w-1/2 bg-gray-100 px-8 py-3 border font-semibold rounded-lg "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
          onClick={handleOpenModal}
          className="bg-gray-100 border-gray-300 py-2 px-6 rounded-md hover:bg-gray-300 mr-4"
        >
          Column
        </button>
      </div>
      <table className="min-w-full bg-white border rounded-lg shadow-lg"> 
        <thead>
          <tr>
            <th className="px-8 py-2 border-b text-center">#</th>
            {visibleColumns.name && (
              <th className="px-8 py-2 border-b text-center">
                Name
              </th>
            )}
            {visibleColumns.price && <th className="px-4 py-2 border-b text-center">Price</th>}
            {visibleColumns.change && (
              <th className="px-8 py-2 border-b text-center">
                24h %
                <InfoTooltip text="The percentage of change in the value compared to 24 hours ago." />
              </th>
            )}
            {visibleColumns.volume && (
              <th className="px-4 py-2 border-b text-center">
                Volume (24h)
                <InfoTooltip text="The total value of the currency that has been traded in the last 24 hours." />
              </th>
            )}
            {visibleColumns.marketCap && (
              <th className="px-4 py-2 cursor-pointer border-b text-center" onClick={sortByMarketCap}>
                {sortDirection === 'asc' ? '▲' : '▼'} Market Cap 
                <InfoTooltip text="The total value of the number of coins in circulation multiplied by the current market price of a single coin." />
              </th>
            )}
            
            {visibleColumns.last7days && (
              <th className="px-2 border-b text-center">
                Last 7 Days
                <InfoTooltip text="This shows a sparkline graph of the last 7 days of the currency's value." />
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((crypto, index) => (
            <tr key={index}>
              <td className=" px-8 py-4 border-b text-center">{index + 1}</td>
              {visibleColumns.name && (
                <td className=" px-8 py-4 border-b text-start">
                  <div className="flex items-center justify-stretch">
                  <img
                    src={crypto.icon}
                    alt={crypto.symbol}
                    className="w-8 h-8 mr-4"
                  />
                  <span>{crypto.name}</span>
                  </div>
                </td>
              )}
              {visibleColumns.price && (
                <td className="px-4 py-4 border-b text-center">
                  ${crypto.price.toLocaleString('en-US')}
                </td>
              )}
              {visibleColumns.change && (
                <td
                  className={`border-b text-center px-8 py-4 ${
                    crypto.change < 0 ? 'text-red-500' : 'text-green-500'
                  }`}
                >
                  {crypto.change}%
                </td>
              )}
              {visibleColumns.volume && (
                <td className="border-b text-center px-4 py-4">{crypto.volume}B</td>
              )}
              {visibleColumns.marketCap && (
                <td className="border-b text-center px-4 py-4">{crypto.marketCap}B</td>
              )}
              {visibleColumns.last7days && (
                <td className="border-b center px-4 py-4">
                  {renderSparkline(crypto.last7days)}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white rounded-lg p-8 relative">
            <h2 className="text-xl font-semibold mb-4">Select Columns to Display</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(visibleColumns).map((column) => (
                <label key={column} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={visibleColumns[column]}
                    onChange={() => handleColumnVisibilityChange(column)}
                    className="form-checkbox"
                  />
                  <span className="ml-2">{column.charAt(0).toUpperCase() + column.slice(1)}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleResetChanges}
                className="bg-gray-100 py-2 px-4 rounded-md mr-2"
              >
                Reset
              </button>
              <button
                onClick={handleApplyChanges}
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
              >
                Apply
              </button>
            </div>
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700"
            >
              
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CryptoTable;

