import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { Base_URL } from "../service/BaseUrl";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    try {
      await fetch(`${Base_URL}/login`, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "User login successfully.") {
            console.log("logged in");
            console.log(data);
            // console.log(email, password);
            let user = { email, password };
            // console.log(user);
            dispatch({ type: "LOGIN", payload: user });
            setError(null);
          } else {
            setError("you must sign up first");
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

  return { login, error };
};
