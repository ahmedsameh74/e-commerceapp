import { useState } from "react";
import { useCartContext } from "./useCartContext";

export const useCart = () => {
  const { dispatch } = useCartContext();

  const addToCart = (product) => {
    // console.log(product);
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return { addToCart };
};
