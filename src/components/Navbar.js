import "./navbar.scss";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as MyShop } from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";

import ShopItems from "./ShopItems";
const Navbar = () => {
  const showShop = () => {
    const shop = document.querySelector(".navbar__shop--onhover");
    shop.style.display = "block";
    setTimeout(() => {
      if (!shop.matches(":hover")) {
        shop.style.display = "none";
      }
    }, 2000);
  };
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
          <div className="navbar__shop">
            <MyShop
              className="navbar__shop--icon"
              onMouseEnter={() => showShop()}
            />
            <ShopItems />
          </div>
          <img src={Avatar} className="navbar__avatar" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
