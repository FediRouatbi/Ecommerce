import "./navbar.scss";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as MyShop } from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";
import { IoMdTrash } from "react-icons/io";
import small1 from "../images/image-product-1-thumbnail.jpg";
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
          <div className="navbar__shop">
            <MyShop className="navbar__shop--icon" />
            <div className="navbar__shop--onhover">
              <p className="cart">Cart</p>
              <div className="items">
                <div className="item">
                  <img src={small1}></img>
                  <p>
                    Fall Limeted Edition Sneakers
                    <div>
                      $125.00 x 3 <em>$375.00</em>
                    </div>
                  </p>
                  <IoMdTrash size={20} className="trash" />
                </div>
              </div>
            </div>
          </div>

          <img src={Avatar} className="navbar__avatar" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
