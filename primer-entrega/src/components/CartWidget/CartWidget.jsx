import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = ({ itemCount }) => {
  return (
    <div>
      <button>
        <AiOutlineShoppingCart />
        {itemCount > 0 && <span className="item-count">{itemCount}</span>}
      </button>
    </div>
  );
};

export default CartWidget;