import { useState } from "react";
// import { Children } from "react/cjs/react.production.min";
import { useCartContext } from "./useCartContext";

export const useCart = () => {
  const { dispatch } = useCartContext();

  const addToCart = (product) => {
    // console.log(Children);
    dispatch({ type: "ADD_TO_CART", payload: { ...product } });
  };

  return { addToCart };
};
