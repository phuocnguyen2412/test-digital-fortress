const Input = ({ icon, type, placeholder, className }) => {
  return (
    <div className={`flex rounded-[12px] bg-[#1A1D21] px-5 py-3 ${className}`}>
      {icon && <img src={icon} alt="Email icon" className="mr-2 h-6 w-6" />}
      <input
        type={type}
        placeholder={placeholder}
        className="text-white-default flex-1 bg-transparent caret-transparent focus:border-green-500 focus:outline-none"
      />
    </div>
  );
};

export default Input;
