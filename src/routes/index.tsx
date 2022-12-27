import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import DetailAnime from "../pages/detail";

export default function RoutesComponents() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/anime/:id" element={<DetailAnime />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
