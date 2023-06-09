import React from "react";
import classes from "./Cart.module.css";
import CartCard from "./CartCard";

import { useSelector } from "react-redux";

const Cart = () => {
  const addedItems = useSelector((state) => state.cart.item);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <>
      <div className={classes.container}>
        <div className={classes.itemContainer}>
          {addedItems.length !== 0 &&
            addedItems.map((val) => {
              return <CartCard {...val} key={val.id} val={val} />;
            })}

          <h2>{addedItems.length == 0 && "Oopss Your cart is empty"}</h2>
        </div>
      </div>
      <div className={classes.totalprice}>
        <div className={classes.totalContainer}>
          <h1> Total Price : ₹ {totalPrice}</h1>
          {/* <button>check out</button> */}
        </div>
      </div>
    </>
  );
};

export default Cart;
