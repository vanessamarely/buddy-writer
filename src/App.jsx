import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutLogin from "./components/LayoutLogin";
import Home from "./pages/Home";
import BuddyWriter from "./pages/BuddyWriter";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="login" element={<LayoutLogin />} />
        <Route path="Buddy Writer" element={<BuddyWriter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
