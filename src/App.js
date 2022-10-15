import React from "react";
import Search from "./Search";
import "./style.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CardInfo from "./CardInfo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/cardinfo" element={<CardInfo/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
