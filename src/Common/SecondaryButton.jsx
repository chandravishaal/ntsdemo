const SecondaryButton = ({title}) => {
  return (
    <button className="lg:px-4 select-none lg:py-2 px-3 py-2 text-md button text-center cursor-pointer md:w-1/3 lg:w-1/5 whitespace-nowrap lg:text-base text-sm font-semibold transition-all duration-200 outline-none text-black bg-gray-100 rounded-[100px] shadow-[0_4px_#C0C0C0] font-century-gothic">
        {title}
    </button>
  );
};

export default SecondaryButton;
