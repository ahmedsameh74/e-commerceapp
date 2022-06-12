import { useState, useEffect } from "react";
// import { Children } from "react/cjs/react.production.min";
import { useCartContext } from "./useCartContext";

export const useCart = () => {
  const { dispatch, cart } = useCartContext();

  const addToCart = (res) => {
    console.log(res.id);
    let newCart = [...cart];
    console.log(newCart);
    if (newCart.length <= 0) {
      newCart.push(res);
      console.log(newCart);
    } else {
      newCart.forEach((item) => {
        // console.log(item);
        // console.log(item.id);
        // console.log(res);
        item.product_id !== res.product_id
          ? newCart.push(res)
          : newCart.splice(item.product_id.indexOf(res.product_id), 0);
      });
      console.log(newCart);
    }
    dispatch({ type: "ADD_TO_CART", payload: newCart });
  };
  return { addToCart };

  // return { addToCart };
};
