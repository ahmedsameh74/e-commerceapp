import { createContext, useReducer } from "react";

export const AuthContxt = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  return (
    <AuthContxt.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContxt.Provider>
  );
};
