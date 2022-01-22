import React from "react";
import "./IndividualItem.css";

export default function IndividualItem({
  itemName,
  itemColor,
  itemPrice,
  itemImg,
}) {
  return (
    <div className="item-container">
      <img src={itemImg} />
      <div className="item-container__desc col-lg">
        <h5> {itemName} </h5>
        <h6>
          Php {itemPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </h6>
      </div>
      <div className="item-container__buyNow">
          <button> Buy Now </button>
      </div>
    </div>
  );
}
