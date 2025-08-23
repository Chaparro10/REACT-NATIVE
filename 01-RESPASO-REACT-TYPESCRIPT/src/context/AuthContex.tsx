import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

enum AuthStatus {
  "checking",
  "authenticated",
  "unauthenticated",
}
interface User {
  name: string;
  email: string;
  password: string;
}
interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;
  isChecking: boolean;
  isAuthenticated: boolean;

  //metodos
  loginWithEmailPassword: (email: string, password: string) => void;
  logout:()=>void;
}

export const AuthContext = createContext({} as AuthState);
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState<AuthStatus>(AuthStatus.checking);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setTimeout(() => {
      setStatus(AuthStatus.unauthenticated);
    }, 1500);
  }, []);

  const loginWithEmailPassword = (email: string, password: string) => {
    setUser({
      name: "Kevin prueba",
      email: email,
      password: password,
    });
    setStatus(AuthStatus.authenticated);
  };

  const logout=()=>{
    setStatus(AuthStatus.unauthenticated);
    setUser(undefined);
  }

  return (
    <>
      <AuthContext.Provider
        value={{
          status: AuthStatus.checking,
          user: user,
          isChecking: status == AuthStatus.checking,
          isAuthenticated: status == AuthStatus.authenticated,
          loginWithEmailPassword: loginWithEmailPassword,
          logout:logout
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
