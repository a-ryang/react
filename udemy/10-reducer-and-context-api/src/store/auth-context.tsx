import { ReactNode, createContext, useState } from "react";
// 파스켈 케이스 AuthContext는 컴포넌트가 있다는 뜻

interface AuthState {
  isLoggedIn: boolean;
}

interface AuthAction {
  login: () => void;
}

// 1. context는 컴포넌트를 포함하는 객체이므로 파스칼 케이스
// 2. createContext의 인자로 들어가는 `value`는 Provider 없이 사용될때 제공되는 기본 값
const AuthContext = createContext<AuthState & AuthAction>({
  isLoggedIn: false,
  login: () => console.log("logout"),
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login: handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
