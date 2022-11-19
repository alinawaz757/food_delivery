import React from "react";
import {
  SearchRounded,
  ShoppingCartRounded,
  BarChart,
} from "@mui/icons-material";

function Header() {
  const openRightMenu = () => {
    const rightMenu = document.querySelector(".rightMenu");
    rightMenu.classList.toggle("active");
  };
  return (
    <header>
      <img className="logo" src="/logo192.png" alt="" />
      <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className="cart_content">
          <p>2</p>
        </div>
      </div>
      <div className="profileContainer">
        <div className="imgBox">
          <img src="/logo192.png" alt="" />
          <h2 className="username">Ali</h2>
        </div>
      </div>
      <div className="toggleMenu">
        <BarChart className="toggleIcon" onClick={openRightMenu} />
      </div>
    </header>
  );
}

export default Header;
