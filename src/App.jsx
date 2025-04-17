import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mahsulotlar from "./components/Mahsulotlar";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/mahsulotlar" element={<Mahsulotlar />} />
        {/* kerak bo‘lsa boshqa route'lar ham qo‘shiladi */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
