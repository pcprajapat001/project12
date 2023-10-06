import React from "react";
import { Login } from "./components/Login";
import { Product } from "./components/Product";
import { Home } from "./components/Home";
import { Navigation } from "./components/Navigation";
import { Contact } from "./components/Contact";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
