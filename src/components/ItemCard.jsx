import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import React, { useState } from "react";

function ItemCard({ imgSrc, name, ratings, price, itemId }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const [currentRatings, setCurrentRatings] = useState(Math.floor(ratings));
  const handleRatingClick = (value) => {
    setCurrentRatings(value);
  };
  return (
    <div className="itemCard" id={itemId}>
      <div
        className={`isFavourite ${isFavourite && "active"}`}
        onClick={() => setIsFavourite(!isFavourite)}
      >
        <Favorite />
      </div>
      <div className="imgBox">
        <img src={imgSrc} alt="" className="itemImg" />
      </div>
      <div className="itemContent">
        <h3 className="itemName">{name}</h3>
        <div className="bottom">
          <div className="ratings">
            {Array.apply(null, { length: 5 }).map((e, i) => (
              <i
                key={i}
                className={`rating ${currentRatings > i ? "orange" : "gray"}`}
                onClick={() => handleRatingClick(i + 1)}
              >
                <StarRounded />
              </i>
            ))}
            <h3 className="price">
              <span>$ </span>
              {price}
            </h3>
          </div>
          <i className="addToCart">
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
