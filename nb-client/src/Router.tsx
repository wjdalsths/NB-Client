import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const MainPage = lazy(() => import("./Pages/MainPage/MainPage"));
const WritePage = lazy(() => import("./Pages/WritePage/WritePage"));
const FreePage = lazy(() => import("./Pages/MainPage/FreePage"));
const StoryPage = lazy(() => import("./Pages/StoryPgae"));
const QuestionPage = lazy(() => import("./Pages/QuestionPage"));
const NoticePage = lazy(() => import("./Pages/NoticePage"));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/free" element={<FreePage />} />
      <Route path="/store" element={<StoryPage />} />
      <Route path="/question" element={<QuestionPage />} />
      <Route path="/notice" element={<NoticePage />} />
    </Routes>
  );
};

export default Router;