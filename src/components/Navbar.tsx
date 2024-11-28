import logo from "../assets/logos/hts-xchange-white.png";

const Navbar = () => {
  return (
    <div className="navbar bg-neutral flex justify-between items-center px-8">
      <img src={logo} alt="HTS Xchange Logo" className="w-32" />
      <button className="bg-primary rounded-md p-2 font-bold">
        Connect Wallet
      </button>
    </div>
  );
};

export default Navbar;
