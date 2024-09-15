const SecondaryButton = ({title}) => {
  return (
    <button className="lg:px-4 lg:py-2 px-4 py-3 text-md select-none button text-center cursor-pointer whitespace-nowrap lg:text-base text-sm  max-w-auto min-w-20 font-semibold transition-all duration-200 outline-none text-black bg-white rounded-[100px] shadow-[0_4px_#C0C0C0]">
      {title}
    </button>
  );
};

export default SecondaryButton;
