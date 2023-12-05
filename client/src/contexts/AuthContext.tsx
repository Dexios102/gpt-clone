import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from "react";
import { loginUserAPI } from "../helpers/apiConnection";

type User = {
  name: string;
  email: string;
};

type UserAuth = {
  isLoggedIn: boolean;
  user: User | null;
  signin: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  signout: () => Promise<void>;
};

const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {}, []);

  const signin = async (email: string, password: string) => {
    const data = await loginUserAPI(email, password);
    if (data) {
      setUser({ email: data.email, name: data.name });
      setIsLoggedIn(true);
    }
  };
  const signup = async (name: string, email: string, password: string) => {};
  const logout = async () => {};

  const value = {
    user,
    isLoggedIn,
    signin: signin,
    signup: signup,
    signout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
