const PrimaryButton = ({ title }) => {
    return (
      <button className="lg:px-6 lg:py-2.5 px-6 py-3 min-w-[90px] max-w-[200px] text-md select-none button whitespace-nowrap text-center cursor-pointer lg:text-base text-sm font-semibold transition-all hover:bg-cyan-500 duration-200 outline-none text-black bg-primaryCyan rounded-[100px] shadow-[0_4px_#118baa] font-century-gothic">
        {title}
      </button>
    );
  };
  
  export default PrimaryButton;
  