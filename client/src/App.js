import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/Auth/AuthPage";
import Header from "./components/header/Header";
import MainPage from "./pages/Main/MainPage";
import Gallery from "./pages/Gallery/Gallery";
import DashBoard from "./pages/DashBoard/DashBoard";
import Community from "./pages/Community/Community";
import SpeedDialCustom from "./components/UI/SpeedDialCustom";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <SpeedDialCustom />
      <Routes>
        <Route path={"/auth/*"} element={<AuthPage />} />
        <Route path={"/main/"} element={<MainPage />} />
        <Route path={"/gallery"} element={<Gallery />} />
        <Route path={"/admin"} element={<DashBoard />} />
        <Route path={"/community/*"} element={<Community />} />
        <Route path={"/contact"} element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
