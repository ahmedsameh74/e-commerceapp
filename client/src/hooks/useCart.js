import { useState } from "react";
import { useCartContext } from "./useCartContext";

export const useCart = () => {
  const { dispatch, cart } = useCartContext();
let newCart=[];
  const addToCart = (res) => {
    console.log(res.id);
    newCart = [...cart];
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
          : newCart.splice(newCart.indexOf(item),1, {...res});
      });
      console.log(newCart);
    }
    dispatch({ type: "ADD_TO_CART", payload: newCart });
  };
  return { addToCart, newCart };
>>>>>>> Stashed changes

  return { addToCart };
};
