import Logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="w-[90%] pt-5 flex justify-between items-center">
      <div className="logo md:flex items-center space-x-2">
        <img src={Logo} alt="" className="md:w-7" />
        <h3 className="hidden text-white font-semibold text-xl md:block">
          Findtrend
        </h3>
      </div>

      <ul className="hidden md:flex items-center md:space-x-6">
        <a href="" className="text-white font-normal text-[18px]">
          About
        </a>
        <a href="" className="text-white font-normal text-[18px]">
          How it work
        </a>
        <a href="" className="text-white font-normal text-[18px]">
          Pricing
        </a>
        <a href="" className="text-white font-normal text-[18px]">
          Solution
        </a>
        <a href="" className="text-white font-normal text-[18px]">
          Features
        </a>
      </ul>

      <div className="hidden md:flex items-center space-x-6">
        <a href="" className="text-white">
          Login
        </a>
        <a href="" className="text-black rounded-full bg-white py-1.5 px-7">
          Register
        </a>
      </div>

      <div className="space-y-2 md:hidden">
        <div className="line bg-white w-6 h-1"></div>
        <div className="line bg-white w-6 h-1"></div>
      </div>
    </div>
  );
};

export default Navbar;
