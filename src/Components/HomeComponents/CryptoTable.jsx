import { useState, useEffect } from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";
import bitcoinIcon from "../../assets/Images/6th_section_icon1.png";
import ethereumIcon from "../../assets/Images/6th_section_icon3.png";
import tether from "../../assets/Images/HomeImages/USTD.png";
import bnb from "../../assets/Images/HomeImages/BNB.png";
import rippleIcon from "../../assets/Images/HomeImages/XRP.png";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

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
      59687.2287362136, 60156.1158868683, 68378.4871619503, 60581.3181829642,
      61009.0632411036, 80584.8239788565, 56298.9850093879, 59940.7838773101,
      59618.9721542485, 59354.6856227466, 59497.7918365469, 59149.2174674876,
      59351.5794909728, 39334.9966262005, 59318.1055517782, 59209.6056684091,
      59117.2046248223, 58891.8831647288, 38908.0423348246, 6548.6723613281,
      59331.1845224982, 59538.1462243421, 59570.2233876041, 59590.8082851419,
      50489.1412515743, 59687.2287362136, 60156.1158868683, 98378.4871619503,
      60581.3181829642, 3109.0632411036, 60584.8239788565, 86298.9850093879,
      59940.7838773101, 5918.9721542485, 59354.6856227466, 19497.7918365469,
      59149.2174674876, 59351.5794909728, 39334.9966262005, 99318.1055517782,
      59209.6056684091, 59117.2046248223, 58891.8831647288, 38908.0423348246,
      55438.6723613281, 59331.1845224982, 39538.1462243421, 59570.2233876041,
      59590.8082851419, 80489.1412515743,
    ],
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
      59687.2287362136, 60156.1158868683, 68378.4871619503, 60581.3181829642,
      61009.0632411036, 60584.8239788565, 56298.9850093879, 59940.7838773101,
      59618.9721542485, 59354.6856227466, 59497.7918365469, 59149.2174674876,
      59351.5794909728, 39334.9966262005, 59318.1055517782, 59687.2287362136,
      60156.1158868683, 98378.4871619503, 60581.3181829642, 3109.0632411036,
      60584.8239788565, 86298.9850093879, 59940.7838773101, 5918.9721542485,
      59354.6856227466, 19497.7918365469, 59149.2174674876, 59351.5794909728,
      39334.9966262005, 99318.1055517782, 59209.6056684091, 59117.2046248223,
      58891.8831647288, 38908.0423348246, 55438.6723613281, 59331.1845224982,
      39538.1462243421, 59570.2233876041, 59590.8082851419, 50489.1412515743,
    ],
  },
  {
    name: "Tether",
    symbol: "USDT",
    icon: tether,
    price: 191.45,
    change: 1.27,
    volume: 3.78,
    marketCap: 128,
    last7days: [
      1.00031674568652, 0.999736510594259, 1.00029145074692, 0.999770946589079,
      0.999995265492827, 0.99961451915559, 1.00019831003854, 1.00050336273496,
      0.998471164264762, 0.998175158005473, 1.00515461209256, 1.00069825099503,
      1.00006936679544, 1.00021553392484, 1.00070375819718, 1.00130495773988,
      1.00143632043065, 1.00011778344611, 0.999932923239807, 0.999346164971606,
      0.9995476951477, 0.99978386623381, 0.999825755259273, 1.0005593200505,
      1.00001361019667, 1.00029843425121, 1.00041598812841, 1.00034815751273,
      0.99915579631945, 0.99994522906586, 0.999854896414926, 0.999327367817634,
      1.00057729081182, 1.00036027264829, 0.998361927649726, 0.999249351975883,
      1.00050110381158, 1.00231177290856, 0.998988771549747, 0.999252606109635,
      0.999954825535612, 1.00089347179068, 0.999959327653911, 0.999476396978971,
      1.00035765253492, 0.999297002624056, 0.998631994547929, 0.998279644371629,
      0.999813098238696, 1.00058167635064, 1.00061881437671, 1.0000067346525,
      1.00002775881659, 1.00037829068237, 1.00056270259736, 1.00023931859603,
      0.996845271540085, 0.999798882981655, 1.00018001588518, 1.00145567928953,
      1.00066181087773, 0.999895046641286, 0.999540578246553, 0.999949433239465,
      0.999473779473243, 1.00008098916818, 1.00053591732246, 0.999799344493998,
      1.00044804033154, 1.00015921215827, 1.00057389445341, 0.998301305913585,
      1.00096534158455, 0.999400151090977, 0.999702994519589, 1.00010039471375,
      0.999672057687816, 0.998835202907737, 1.00164615200598, 1.00108728629814,
      0.999489713009424, 1.00059788142733, 0.999662821594037, 1.00051142869179,
      1.00041999422471, 0.99932107487845, 0.999866852975713, 0.999995119773858,
      0.99975327757808, 0.998969192318781, 1.00029292499013, 1.00001663223479,
      1.00023416677611, 1.00001316117877, 0.999525285255826, 1.0004259249007,
      1.00059178126958, 0.999880836754617, 0.999981002024619, 0.999355467155169,
      0.997989141807377, 0.998364517350985, 1.00013722962444, 1.0000009416218,
      1.00046356328559, 1.00077709662013, 0.999879844234913, 0.999702218422381,
      1.00049895688629, 0.999319834441215, 1.00067488379621, 0.99979848313118,
      1.00074994134836, 1.00067376617408, 1.00072016026806, 1.00059530716093,
      1.00033259087405, 1.00024009133937, 1.00033001699057, 0.999951870380179,
      1.0001908563451, 1.00013223225715, 1.00009110983349, 1.00039845386427,
      1.00181919014557, 0.999253112955414, 1.0003891818863, 1.00007477078913,
      1.00065557017188, 1.00007401095063, 0.999902394975017, 1.00015011042739,
      1.0001380747597, 1.00038205945376, 1.00032733414714, 1.00022005118974,
      1.0003854335638, 1.0006169592896, 1.00006434470464, 1.00015985252872,
      1.00048600639952, 1.00032021023334, 1.00019816036019, 1.00006872436599,
      1.00019452333256, 0.999989120015506, 1.00004192409916, 1.00015736456337,
      0.99998683985952, 1.00050762746769, 0.998928814880548, 1.00028133490806,
      1.00029415605412, 1.00025116308233, 1.00006809773693, 1.00002698389168,
      1.0001312562104, 0.998614692488857, 1.00007658601452, 0.999052109289247,
      0.999569320950135, 1.00042368857047, 1.00054030609418, 1.00005873190012,
      0.999807296356153, 1.00008301778718,
    ],
  },
  {
    name: "BNB",
    symbol: "BNB",
    icon: bnb,
    price: 0.244,
    change: 3.92,
    volume: 4.98,
    marketCap: 32,
    last7days: [
      127.720257701867, 128.290095778509, 129.679857466921, 130.289844963856,
      129.45096167501, 129.621782506332, 129.420855818323, 129.250790800817,
      129.466458886323, 127.094699152275, 129.002655411433, 132.856079440771,
      132.850847110401, 133.670919741997, 134.369628446069, 135.46598751595,
      135.522508550913, 134.371194657587, 134.135778795207, 133.624959024313,
      133.027380963329, 133.407116490249, 133.087801746923, 133.5074116488,
      133.937064325507, 134.156226622456, 135.302071748021, 134.305126321777,
      134.625328757942, 135.042987176579, 135.362159826248, 134.215236576511,
      133.893700189772, 135.510075634636, 134.328715315593, 135.51209248287,
      136.122037317203, 136.561898110799, 136.326655233202, 135.422145929149,
      135.55484955013, 136.284619679781, 135.287019943716, 135.535150012923,
      133.985775287399, 133.931842860828, 133.607713515081, 131.935774738564,
      131.998133453979, 131.948622882968, 132.347212121745, 131.63631396803,
      131.197997741069, 131.226253495503, 131.90091919034, 132.721320182427,
      129.796793569778, 128.707143615005, 131.963939589549, 132.632018889953,
      133.173993301793, 132.090659881067, 132.907989827943, 132.574177061167,
      132.547806385223, 132.649419193362, 132.738341050053, 133.888220678008,
      135.676086717549, 135.27466820447, 134.952155251123, 134.523102273169,
      135.090492474208, 134.823158450176, 134.423138529352, 134.278722055145,
      134.883047525402, 134.152856799213, 135.333192775567, 135.568923246491,
      134.323218728997, 134.845758396622, 135.115673233301, 135.092504618641,
      135.20364713252, 135.917414356641, 136.168770549893, 136.332726052988,
      136.035705933989, 135.286103534686, 134.546240292715, 134.7286866227,
      134.61625706753, 134.469790123844, 134.454591129778, 133.912088307221,
      134.321325242133, 134.085308195779, 133.611973606266, 134.046351578222,
      132.551159701357, 132.484397450082, 132.348779862613, 133.766931172126,
      136.915399313552, 136.95112885021, 137.298120843325, 137.686782595494,
      138.029550875464, 138.232936034357, 139.270954641066, 138.782659323898,
      138.973341781097, 138.885417717602, 139.61415345344, 139.44222951662,
      139.545761115804, 139.242706020511, 138.260026943497, 137.967855028063,
      137.608717505021, 137.230743725246, 137.118647234715, 136.961578026164,
      137.039822641889, 137.039600187438, 137.226709266043, 137.957463992795,
      137.4286658631, 137.023582329241, 136.782661563572, 136.694723373887,
      136.642785813232, 137.232035321943, 137.158389333781, 137.192184067049,
      137.214552711088, 137.44511719399, 137.599583006389, 137.726865807715,
      137.5763012009, 137.00405704703, 137.328983706551, 137.099780968842,
      136.908656373315, 136.778061378609, 136.314924665516, 135.994133766494,
      135.269110663615, 135.828391223071, 134.914872683501, 135.545215356463,
      135.248905868334, 133.773175001331, 133.516212622876, 133.720754806179,
      133.406389741265, 132.693991306392, 131.868690996356, 131.406073109754,
      131.422755753194, 130.503741862272, 130.158388886709, 130.229108345137,
      130.762189788839, 130.88527586454,
    ],
  },
  {
    name: "Ripple",
    symbol: "XRP",
    icon: rippleIcon,
    price: 1.12,
    change: -0.67,
    volume: 8.94,
    marketCap: 58,
    last7days: [
      502.718158292167, 504.831417056696, 507.662767984261, 509.263886682536,
      506.884666469587, 506.427678083163, 504.533126852135, 505.087589301272,
      504.327479664511, 504.132777123887, 507.378773140066, 518.363182025524,
      517.119612244575, 518.240972149799, 519.074189559037, 525.30627826203,
      520.9476287069, 519.12121695603, 515.795309485881, 516.222918292247,
      516.199910200401, 516.346560818176, 514.792620637705, 518.047662196344,
      518.86174743644, 517.988059094091, 519.87413762329, 518.743029128437,
      519.118023685902, 521.768454212796, 521.283810269683, 520.772461168807,
      515.706844327215, 516.860311640676, 514.553691631735, 515.45819815645,
      519.242977313073, 520.449394302423, 521.27760600816, 519.103352884266,
      519.227071298511, 521.717200679261, 515.458248627746, 516.947341864886,
      514.347399477699, 513.706630893151, 513.13697665537, 508.995269918484,
      510.622420029536, 512.464297192137, 513.44739296505, 511.675096552359,
      511.637646905427, 510.852015815658, 515.536817338398, 518.168172387515,
      513.857791750832, 515.890724340597, 519.455031127694, 525.740309674388,
      534.650483120014, 531.677770441949, 534.129276294283, 530.388594537689,
      528.376802168098, 529.647345001385, 532.591054136172, 539.531846926856,
      543.163356386554, 544.032029093156, 542.819176473134, 541.602577569841,
      542.335554465031, 543.061125023077, 544.675209832579, 543.742554646152,
      544.839661297386, 541.302632039521, 545.873782714194, 544.267871706866,
      536.940045995291, 540.487742072928, 542.506157759522, 540.87561281586,
      541.716465569485, 539.620914565336, 539.201704676552, 540.858254508331,
      543.994113109409, 542.867816452912, 543.677125896188, 544.340123801341,
      543.599029801208, 543.016767715496, 541.04896597334, 540.040813733671,
      543.180536331142, 540.740146684791, 542.986155791421, 544.403187778011,
      545.980943778019, 547.139177214078, 553.350657216412, 550.037403327122,
      553.847311028608, 553.211988913342, 553.011868800947, 554.554309133563,
      554.330094255302, 555.217978914301, 557.710420241746, 556.463149841824,
      557.300101433576, 555.862254895848, 557.417096985789, 556.766413823547,
      556.515965927951, 554.45929715507, 552.900836948745, 552.509233928136,
      554.355004710619, 552.494797497649, 551.903979981147, 550.830138550758,
      551.753109927288, 552.514538385754, 552.252780632489, 552.147394815458,
      552.528942231666, 552.954164490687, 551.364615109766, 550.809018445651,
      551.316810554316, 553.125186760965, 552.634677238162, 553.412540631333,
      553.878180830734, 555.329972190927, 555.173635632052, 555.303679031688,
      553.235510031844, 553.684491175257, 554.43014861385, 553.93169651804,
      554.081690386533, 554.204747981798, 554.124116094172, 554.06663997359,
      554.975461050704, 559.627490260238, 557.547422589766, 559.029370768413,
      560.274765762622, 557.951002656659, 556.969739568003, 558.149644217868,
      557.00987848582, 558.26257257784, 557.929959293502, 554.930497785736,
      553.531768443783, 548.273488875948, 543.2857858125, 542.82579111884,
      545.629257111657, 547.057815084345,
    ],
  },
];

// Tooltip component
const InfoTooltip = ({ text }) => (
  <div className="relative group inline-block ml-1">
    <span className="text-black-500 text-bold hover:text-black-700 margin-left: 0.5rem cursor-pointer">
      <IoMdInformationCircleOutline />
    </span>
    <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-44 p-2 bg-gray-700 text-white text-sm rounded hidden group-hover:block transition-opacity duration-200 z-10">
      {text}
    </div>
  </div>
);

const CryptoTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedData, setSortedData] = useState([...cryptocurrencies]);
  const [sortDirection, setSortDirection] = useState(null);
  const [notFound, setNotFound] = useState(false);
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
    const filteredData = cryptocurrencies.filter((crypto) =>
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }

    setSortedData(filteredData);
  }, [searchTerm]);

  const sortByMarketCap = () => {
    const direction = sortDirection === "asc" ? "desc" : "asc";
    const sorted = [...sortedData].sort((a, b) =>
      direction === "asc"
        ? a.marketCap - b.marketCap
        : b.marketCap - a.marketCap
    );
    setSortedData(sorted);
    setSortDirection(direction);
  };

  const getTrendColor = (data) => {
    const firstPrice = data[0];
    const lastPrice = data[data.length - 1];
    return lastPrice > firstPrice ? "#00C49F" : "#FF0000"; // Green for upward, Red for downward
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
              <linearGradient
                id={`colorTrend-${trendColor}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor={trendColor} stopOpacity={0.4} />
                <stop offset="100%" stopColor={trendColor} stopOpacity={0.05} />
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
            {/* <Tooltip /> */}
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
    <div className="container mx-auto mb-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-montserrat font-bold px-5">
          Top Cryptocurrency Prices and Market Cap
        </h1>
      </div>
      <div className="flex items-center justify-between mb-4 px-3">
        <input
          type="text"
          placeholder="Search Cryptocurrency"
          className="w-1/2 bg-gray-100 px-8 py-3 border font-semibold rounded-lg "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleOpenModal}
          className="bg-gray-100 border-gray-300 py-2 px-6 rounded-md hover:bg-gray-300 mr-4 font-montserrat "
        >
          Column
        </button>
      </div>

      <div className="responsiveTable">
        <div className="min-w-full bg-white border rounded-lg shadow-xl overflow-y-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 rounded-xl">
              <tr>
                <th className="px-8 py-2 border-b text-center">#</th>
                {visibleColumns.name && (
                  <th className="px-8 py-2 border-b text-left font-montserrat ">
                    Coin
                  </th>
                )}
                {visibleColumns.price && (
                  <th className="px-4 py-2 border-b text-center font-montserrat ">
                    Price
                  </th>
                )}
                {visibleColumns.change && (
                  <th className="px-8 py-2 border-b text-center whitespace-nowrap lg:whitespace-normal font-montserrat ">
                    24h %
                    <InfoTooltip text="The percentage of change in the value compared to 24 hours ago." />
                  </th>
                )}
                {visibleColumns.volume && (
                  <th className="px-4 py-2 border-b text-center font-montserrat whitespace-nowrap lg:whitespace-normal ">
                    Volume (24h)
                    <InfoTooltip text="The total value of the currency that has been traded in the last 24 hours." />
                  </th>
                )}
                {visibleColumns.marketCap && (
                  <th
                    className="px-4 py-2 cursor-pointer whitespace-nowrap lg:whitespace-normal  border-b text-center font-montserrat "
                    onClick={sortByMarketCap}
                  >
                    {sortDirection === "asc" ? "▲" : "▼"} Market Cap
                    <InfoTooltip text="The total value of the number of coins in circulation multiplied by the current market price of a single coin." />
                  </th>
                )}

                {visibleColumns.last7days && (
                  <th className="px-2 border-b text-center font-montserrat whitespace-nowrap lg:whitespace-normal ">
                    Last 7 Days
                    <InfoTooltip text="This shows a sparkline graph of the last 7 days of the currency's value." />
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {sortedData.map((crypto, index) => (
                <tr key={index} className="bg-white hover:bg-gray-50">
                  <td className=" px-8 py-4 border-b text-center">
                    {index + 1}
                  </td>
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
                      ${crypto.price.toLocaleString("en-US")}
                    </td>
                  )}
                  {visibleColumns.change && (
                    <td
                      className={`border-b text-center px-8 py-4 ${
                        crypto.change < 0 ? "text-red-500" : "text-green-500"
                      }`}
                    >
                      {crypto.change}%
                    </td>
                  )}
                  {visibleColumns.volume && (
                    <td className="border-b text-center px-4 py-4">
                      {crypto.volume}B
                    </td>
                  )}
                  {visibleColumns.marketCap && (
                    <td className="border-b text-center px-4 py-4">
                      {crypto.marketCap}B
                    </td>
                  )}
                  {visibleColumns.last7days && (
                    <td className="border-b center px-4 py-4">
                      {renderSparkline(crypto.last7days)}
                    </td>
                  )}
                </tr>
              ))}
              {notFound && (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center font-century-gothic font-semibold mt-10 py-4"
                  >
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white rounded-lg p-8 relative">
            <h2 className="text-xl font-semibold mb-4">
              Select Columns to Display
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(visibleColumns).map((column) => (
                <label key={column} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={visibleColumns[column]}
                    onChange={() => handleColumnVisibilityChange(column)}
                    className="form-checkbox"
                  />
                  <span className="ml-2">
                    {column.charAt(0).toUpperCase() + column.slice(1)}
                  </span>
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
            ></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CryptoTable;
