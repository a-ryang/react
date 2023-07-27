// 파스켈 케이스 AuthContext는 컴포넌트가 있다는 뜻

import { createContext } from "react";

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

export default AuthContext;
