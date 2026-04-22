import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "./assets/PngItem_1506532.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link >
          <img src={Logo} width={100} alt="image" />
        </Link>
      </div>
      <ul className="menus">
        <NavLink to={"products"}>Products</NavLink>
        <NavLink to={"about"}>About</NavLink>
        <NavLink to={"cart"}>Cart</NavLink>
      </ul>
      <div className="search-bar">
        <input type="text" />
      </div>
      <div className="nav-icons">
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faCartShopping} />
        <FontAwesomeIcon icon={faUser} />
      </div>
    </nav>
  );
};

export default Navbar;
