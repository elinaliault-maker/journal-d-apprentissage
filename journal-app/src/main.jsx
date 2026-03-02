import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home"
import LayoutArticle from './components/layout-article';
import Intro from "./components/articles/intro"
import Depart from "./components/articles/depart"
import PremierEssai from "./components/articles/PremierEssai";
import LearningGit from "./components/articles/LearningGit";
import Chart from "./components/articles/Chart";
import SideQuest from "./components/articles/SideQuest";
import StyleGitInline from "./components/articles/StyleGitInline";
import DocOverview from "./components/articles/DocOverview";
import TutoToDo from "./components/articles/TutoToDo";
import TutoGame from "./components/articles/TutoGame";
import JournalReact from "./components/articles/JournalReact";
import ScrollToTop from "./ScrollToTop";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route index element={<Home />} />
      <Route element={<LayoutArticle />}>
        <Route path="intro" element={<Intro />} />
        <Route path="depart" element={<Depart />} />
        <Route path="premier-essai" element={<PremierEssai />} />
        <Route path="learning-git" element={<LearningGit />} />
        <Route path="chart" element={<Chart />} />
        <Route path="side-quest" element={<SideQuest />} />
        <Route path="style-git-inline" element={<StyleGitInline />} />
        <Route path="doc-overview" element={<DocOverview />} />
        <Route path="tuto-todo" element={<TutoToDo />} />
        <Route path="tuto-game" element={<TutoGame />} />
        <Route path="journal-react" element={<JournalReact />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
