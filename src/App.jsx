import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutLogin from "./components/LayoutLogin";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="login" element={<LayoutLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
