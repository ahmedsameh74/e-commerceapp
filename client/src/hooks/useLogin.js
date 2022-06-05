import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    try {
      await fetch("http://ecommerce-app0040.herokuapp.com/api/login", {
        method: "POST",
        body: JSON.stringify(email, password),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "User login successfully.") {
            console.log("logged in");
          } else {
            setError("you must sign up first");
            console.log("failed");
          }
        });
      dispatch({ type: "LOGIN" });
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  return { login };
};
