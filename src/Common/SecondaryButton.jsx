const SecondaryButton = ({ title }) => {
  return (
    <button className="lg:px-6 lg:py-2.5 px-6 py-3 min-w-[90px] max-w-[200px] text-md select-none button whitespace-nowrap text-center cursor-pointer lg:text-base text-sm font-semibold transition-all duration-200 outline-none text-black bg-gray-100 rounded-[100px] shadow-[0_4px_#C0C0C0] font-century-gothic">
      {title}
    </button>
  );
};

export default SecondaryButton;
