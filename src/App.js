import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Components/Home";
import LoginPage from "./Components/LoginPage";
import LogOut from "./Components/LogOut";

import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
     
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      
    </div>
  );
}

export default App;
