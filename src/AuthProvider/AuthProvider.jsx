import { createContext } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const tofazzal = "tofazzal";
  const userinfo = { tofazzal };
  return (
    <AuthContext.Provider value={userinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
