
const Step3 = ({ nextStep, cryptoAmount, cryptoCurrency ,formData,setFormData }) => {


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContinue=()=>{
    nextStep();
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="container mx-auto  ">
      <div className="bg-white shadow-xl shadow-slate-950 rounded-2xl p-10 border-2 border-cyan-500 mx-[20%] ">
        <h2 className="text-gray-500  text-center">
          Buying {cryptoAmount} {cryptoCurrency}
        </h2>
        <div className="mt-4">
          <h1 className="text-xl text-center ">Enter your personal details</h1>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block font-bold text-gray-700">Enter your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border-cyan-300"
            />
          </div>

          <div>
            <label className="block font-bold text-gray-700">Enter your Phone no</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Number"
              className="w-full p-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border-cyan-300"
            />
          </div>

          <div>
            <label className=" font-bold block text-gray-700">Enter your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 mt-2 mb-16 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border-cyan-300"
            />
          </div>

          <button
            type="submit"
            onClick={handleContinue}
            className="w-full py-2  text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            Continue
          </button>
        </form>

        {/* Footer Text */}
        <div className="text-center text-gray-500 mt-12 ">
          Powered by North Star Metrics
        </div>
      </div>
    </div>
  );
};

export default Step3;
