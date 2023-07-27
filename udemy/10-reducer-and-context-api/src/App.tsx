import { useContext } from "react";
import AuthContext, { AuthProvider } from "./store/auth-context";

function App() {
  return (
    // Provider는 컴포넌트이다.
    // 모든 자식 컴포넌트들이 Context에 접근할 수 있게된다.
    // <AuthContext.Provider
    //   value={{
    //     isLoggedIn: false,
    //     login: () => console.log("login"),
    //   }}
    // >
    <AuthProvider>
      <main>
        <Navgiation />
        <Section />
      </main>
    </AuthProvider>
    // </AuthContext.Provider>
  );
}

// Consumer를 이용한 context 접근
function Navgiation() {
  return (
    <AuthContext.Consumer>
      {(ctx) => <nav>{ctx.isLoggedIn}</nav>}
    </AuthContext.Consumer>
  );
}

function Section() {
  const ctx = useContext(AuthContext);
  return (
    <section>
      {ctx.isLoggedIn}
      <div>
        <button onClick={ctx.login}>login</button>
      </div>
    </section>
  );
}

export default App;
