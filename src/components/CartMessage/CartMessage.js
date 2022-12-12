import React from "react";
import "./CartMessage.scss";
import { correct } from "../../utils/images";

const CartMessage = () => {
  return (
    <div className="message text-center">
      <div className="icon">
        <img src={correct} alt="" />
        {/* Esm el image ml file */}
      </div>
      <h6 className="text-white fs-14 fw-5">
        {/* styling b white w font */}
        An item has been added to your shopping cart
      </h6>
    </div>
  );
};

export default CartMessage;
