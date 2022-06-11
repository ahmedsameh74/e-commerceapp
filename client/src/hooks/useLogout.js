import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    try {
      dispatch({ type: "LOGOUT" });
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };
  return { logout, error };
};
