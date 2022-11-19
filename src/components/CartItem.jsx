import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React, { useState } from "react";

const CartItem = ({ itemId, name, imgSrc, price }) => {
  const [qty, setQty] = useState(1);
  return (
    <div className="cartItem" id={itemId}>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x {qty}</span>
          <div className="quantity">
            <RemoveRounded
              className="itemRemove"
              //   onClick={() => updateQty("remove", itemId)}
            />
            <AddRounded
              className="itemAdd"
              //   onClick={() => updateQty("add", itemId)}
            />
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className="dolorSign">$</span>{" "}
        <span className="itemPriceValue">{price}</span>
      </p>
    </div>
  );
};

export default CartItem;
