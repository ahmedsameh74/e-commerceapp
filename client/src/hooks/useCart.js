import { useState } from "react";
import { useCartContext } from "./useCartContext";

export const useCart = () => {
  const { dispatch, cart } = useCartContext();
  let newCart = [];
  const addToCart = (res) => {
    console.log(res.id);
    newCart = [...cart];
    let shoppingCart = [];
    // console.log(newCart);
    if (shoppingCart.length <= 0) {
      newCart = [...cart, res];
      shoppingCart = newCart;
      console.log(shoppingCart);
    } else {
      newCart.forEach((item) => {
        // console.log(item);
        // console.log(item.product_id);
        // console.log(res.product_id);

        item.product_id !== res.product_id
          ? (shoppingCart = [...cart, res])
          : // : newCart.splice(newCart.indexOf(item),1, {...res});
            console.log("already exist");
      });
      // newCart.map((item) => {
      //   item.id !== res.id
      //     ? (shoppingCart = [...cart, res])
      //     : console.log("exist");
      // });
      console.log(shoppingCart);

      // console.log(newCart);
    }
    // let shoppingCart = newCart.filter((item) => item.id !== res.id)
    // console.log(shoppingCart);
    dispatch({ type: "ADD_TO_CART", payload: shoppingCart });
  };

  return { addToCart };
};
