/* eslint-disable */
import Logo from "../assets/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Logo">
        <img src={Logo} alt="" className="md:w-7" />
        <h3 className="">Findtrend</h3>
      </div>

      <ul className="Navbar__links">
        <a href="">About</a>
        <a href="">How it work</a>
        <a href="">Pricing</a>
        <a href="">Solution</a>
        <a href="">Features</a>
      </ul>

      <div className="Navbar__login">
        <a>Login</a>
        <a>Register</a>
      </div>

      <div className="hamburger">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
