import "./Header.css";
import { useRef, useState } from "react";
import cartIcon from "./shopping-cart.svg";
import userIcon from "./user.svg";
import { Link } from "react-router-dom";
import useOutsideClick from "../useOutsideClick";

export default function Header() {
  const navEl = useRef(null);
  const [responsive, setResponsive] = useState(false);

  useOutsideClick(navEl, () => {
    navEl.current.className = "topnav";
  });

  const mobileMenu = () => {
    let className = navEl.current.className;
    className === "topnav"
      ? (className += " responsive")
      : (className = "topnav");

    navEl.current.className = className;
    setResponsive(true);
  };

  return (
    <div className="header">
      <div className="topnav" id="mytopnav" ref={navEl}>
        <h1>
          <Link to="/">Sunnyside Collective</Link>
        </h1>
        <div>
          <a href="#">Shop</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          {responsive ? (
            <>
              <a href="#">Login</a>
              <Link to="/Cart">Cart</Link>
            </>
          ) : (
            <>
              <a href="#">
                <img style={{ width: "18px" }} src={userIcon} alt="Login" />
              </a>
              <Link to="/Cart">
                <img src={cartIcon} alt="Cart" />
              </Link>
            </>
          )}

          <a href={void 0} className="icon" onClick={() => mobileMenu()}>
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
