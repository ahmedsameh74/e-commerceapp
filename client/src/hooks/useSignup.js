import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { Base_URL } from "../service/BaseUrl";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (user) => {
    setError(null);
    try {
      await fetch(`${Base_URL}/register`, {
        method: "POST",
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          password: user.password,
          phone: user.phone,
          billing_address: user.billingAddress,
          shipping_address: user.shippingAddress,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            console.log("continue to home page");
            console.log(data);
            // console.log(email, password);

            // console.log(user);
            // console.log(user);
            dispatch({ type: "SIGNUP", payload: user });
            setError(null);
          } else {
            setError("sign up again later");
            console.log("failed");
          }
        });
      // console.log(res);
      // dispatch({ type: "LOGIN",  });
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  return { signup, error };
};
