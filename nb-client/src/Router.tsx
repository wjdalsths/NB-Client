import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const MainPage = lazy(() => import("./Pages/MainPage/MainPage"));
const WritePage = lazy(() => import("./Pages/WritePages/FreeWritePage"));
const FreePage = lazy(() => import("./Pages/MainPage/FreePage"));
const StoryPage = lazy(() => import("./Pages/MainPage/StoryPage"));
const QuestionPage = lazy(() => import("./Pages/MainPage/QuestionPage"));
const NoticePage = lazy(() => import("./Pages/MainPage/NoticePage"));
const FreeWritePage = lazy(() => import("./Pages/WritePages/FreeWritePage"));
const StoryWritePage = lazy(() => import("./Pages/WritePages/StoryWritePage"));
const QuestionWritePage = lazy(
  () => import("./Pages/WritePages/QuestionWritePage")
);

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/free" element={<FreePage />} />
      <Route path="/story" element={<StoryPage />} />
      <Route path="/question" element={<QuestionPage />} />
      <Route path="/notice" element={<NoticePage />} />
      <Route path="/freeWrite" element={<FreeWritePage />} />
      <Route path="/storyWrite" element={<StoryWritePage />} />
      <Route path="/questionWrite" element={<QuestionWritePage />} />
    </Routes>
  );
};

export default Router;
