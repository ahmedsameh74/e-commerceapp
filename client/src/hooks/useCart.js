import { useState } from "react";
import { useCartContext } from "./useCartContext";

let newCart = [];
export const useCart = () => {
  const { dispatch, cart } = useCartContext();

  const addToCart = (res) => {
    console.log(res);
    newCart = [...cart, res];
    let isExist = true;
    // let shoppingCart = [];
    // console.log(newCart);
    isExist = newCart.forEach((item) => {
      if (item.id !== res.id) {
        return false;
      }
    });
    if (isExist === true) {
      newCart.push(res);
    }

    // if (newCart.length <= 0) {
    //   newCart = [...cart, res];
    // shoppingCart = newCart;
    // console.log(shoppingCart);
    // } else {
    // newCart.forEach((item) => {
    //   // console.log(item);
    //   // console.log(item.product_id);
    //   // console.log(res.product_id);

    //   item.product_id !== res.product_id
    //     ? newCart = [...cart, res]
    //     : // : newCart.splice(newCart.indexOf(item),1, {...res});
    //       console.log("already exist");
    // });

    console.log(newCart);

    // console.log(newCart);
    // }
    // let shoppingCart = [...newCart];
    // let cartT = shoppingCart.filter((item) => );
    // console.log(cartT);
    dispatch({ type: "ADD_TO_CART", payload: newCart });
  };

  return { addToCart };
};
