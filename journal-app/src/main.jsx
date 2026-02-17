import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home"
import LayoutArticle from './components/layout-article';
import Intro from "./components/articles/intro"
import Depart from "./components/articles/depart"

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route element={<LayoutArticle />}>
        <Route path="intro" element={<Intro />} />
        <Route path="depart" element={<Depart />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
