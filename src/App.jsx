import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import HomeBuddy from "./pages/HomeBuddy";
import Documentation from "./pages/Documentation";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
        <Route path="home" element={<HomeBuddy />} />
        <Route path="documentation" element={<Documentation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
