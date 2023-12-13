import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { LikeContextProvider } from "./hooks/useLikeContext";

function App() {
  return (
    <>
      <LikeContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </LikeContextProvider>
    </>
  );
}

export default App;
