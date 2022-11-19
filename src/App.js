import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import "./App.css";
import BannerName from "./components/BannerName";
import Header from "./components/Header";
import MenuContainer from "./components/MenuContainer";
import SubMenuContainer from "./components/SubMenuContainer";
import { MenuItems, Items } from "./components/Data";
import MenuCard from "./components/MenuCard";
import ItemCard from "./components/ItemCard";

function App() {
  const [isMainData, setIsMainData] = useState(
    Items.filter((el) => el.itemId === "burger01")
  );
  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");
    menuLi[0].classList.add("active");
    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuLi.forEach((n) => {
      n.addEventListener("click", setMenuActive);
    });

    // menu Card active class changer
    const menuCard = document.querySelectorAll(".rowMenuCard");

    function setMenuCardActive() {
      menuCard.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [isMainData]);

  const handleCategoryClick = (category) => {
    setIsMainData(Items.filter((el) => el.itemId === category));
  };

  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Main Section */}
      <main>
        <div className="mainContainer">
          <div className="banner">
            <BannerName name="Ali" discount={20} link={"#"} />
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337`}
              alt="delivery"
              className="deliveryPic"
            />
          </div>
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer />
            </div>
            <div className="rowContainer">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div
                    key={data.id}
                    onClick={() => handleCategoryClick(data.itemId)}
                  >
                    <MenuCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id === 1 ? true : false}
                    />
                  </div>
                ))}
            </div>
            <div className="dishItemContainer">
              {isMainData &&
                isMainData.map((data) => (
                  <ItemCard
                    key={data.id}
                    name={data.name}
                    price={data.price}
                    ratings={data.ratings}
                    imgSrc={data.imgSrc}
                    itemId={data.id}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="rightMenu"></div>
      </main>
      {/* Bottom Menu */}
      <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer link={"#"} icon={<HomeRounded />} />
          <MenuContainer link={"#"} icon={<Chat />} />
          <MenuContainer link={"#"} icon={<AccountBalanceWalletRounded />} />
          <MenuContainer link={"#"} icon={<Favorite />} />
          <MenuContainer link={"#"} icon={<SummarizeRounded />} />
          <MenuContainer link={"#"} icon={<Settings />} />
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
