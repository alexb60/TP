import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import PageClient from "./pages/PageClient";
import PageAjout from "./pages/PageAjout";
import SuppClient from "./components/SuppClient";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/clients/:id" name="PageClient" element={<PageClient />} /> 
        <Route path="/ajout" name="AjoutClient" element={<PageAjout />} />
        <Route path="/clients/supp/:id" element={<SuppClient />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;