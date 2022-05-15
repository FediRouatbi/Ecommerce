import "./navbar.scss";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as MyShop } from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";
import { Data } from "../context/ContextProvider";
import { useContext } from "react";
import ShopItems from "./ShopItems";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { cart } = useContext(Data);

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
          <Link className="navbar__links--link" to="/collections">
            Collections
          </Link>
          <Link className="navbar__links--link" to="/men">
            Men
          </Link>
          <Link className="navbar__links--link" to="/women">
            Women
          </Link>

          <Link className="navbar__links--link" to="/about">
            About
          </Link>
          <Link className="navbar__links--link" to="/contact">
            Contact
          </Link>
        </div>
        <div className="navicons">
          <div className="navbar__shop">
            <MyShop
              className="navbar__shop--icon"
              onMouseEnter={() => showShop()}
            />
            <span className="navbar__shop--itemsnumber">
              {cart.length || ""}
            </span>
            <ShopItems />
          </div>
          <img src={Avatar} className="navbar__avatar" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
