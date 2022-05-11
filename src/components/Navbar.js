import "./navbar.scss";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as MyShop } from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Logo />
      </div>
      <div className="navflex">
        <div className="navbar__links">
          <a className="navbar__links--link" href="#">
            Collections
          </a>
          <a className="navbar__links--link" href="#">
            Men
          </a>
          <a className="navbar__links--link" href="#">
            Women
          </a>
          <a className="navbar__links--link" href="#">
            Women
          </a>
          <a className="navbar__links--link" href="#">
            About
          </a>
          <a className="navbar__links--link" href="#">
            Contact
          </a>
        </div>
        <div className="navicons">
          <MyShop className="navbar__shop" />
          <img src={Avatar} className="navbar__avatar" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
