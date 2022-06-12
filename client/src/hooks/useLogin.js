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
            console.log(data.data.user_id);
            // console.log(email, password);
<<<<<<< HEAD
            let user = { email, password , userId:data.data.user_id,};
=======
            let user = { email, password, userId: data.data.user_id };
>>>>>>> 0beda9152f017158b24a11ec2649d4562e39d5a3
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
