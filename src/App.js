import { useSelector } from "react-redux";

import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfiles from "./components/UserProfiles";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {!isAuth ? <Auth /> : <UserProfiles />}
      <Auth />
      <Counter />
    </>
  );
}

export default App;
