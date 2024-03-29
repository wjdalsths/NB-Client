// import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

// const MainPage = lazy(() => import("./Pages/MainPage/MainPage"));
// const HomePage = lazy(() => import("./Pages/MainPage/HomePage"));
// const WritePage = lazy(() => import("./Pages/WritePages/FreeWritePage"));
// const FreePage = lazy(() => import("./Pages/MainPage/FreePage"));
// const StoryPage = lazy(() => import("./Pages/MainPage/StoryPage"));
// const QuestionPage = lazy(() => import("./Pages/MainPage/QuestionPage"));
// const NoticePage = lazy(() => import("./Pages/MainPage/NoticePage"));
// const FreeWritePage = lazy(() => import("./Pages/WritePages/FreeWritePage"));
// const StoryWritePage = lazy(() => import("./Pages/WritePages/StoryWritePage"));
// const QuestionWritePage = lazy(
//   () => import("./Pages/WritePages/QuestionWritePage")
// );
import {
  HomePage,
  FreePage,
  NoticePage,
  QuestionPage,
  StoryPage,
  FreeWritePage,
  QuestionWritePage,
  StoryWritePage,
  FreeWatchPage,
  StoryWatchPage,
  QuestionWatchPage,
  NoticeWatchPage,
  MyContentPage,
} from "./Pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/free" element={<FreePage />} />
      <Route path="/story" element={<StoryPage />} />
      <Route path="/question" element={<QuestionPage />} />
      <Route path="/notice" element={<NoticePage />} />
      <Route path="/freeWrite" element={<FreeWritePage />} />
      <Route path="/freeWrite/:id" element={<FreeWritePage />} />
      <Route path="/storyWrite" element={<StoryWritePage />} />
      <Route path="/storyWrite/:id" element={<StoryWritePage />} />
      <Route path="/questionWrite" element={<QuestionWritePage />} />
      <Route path="/questionWrite/:id" element={<QuestionWritePage />} />
      <Route path="/free/:id" element={<FreeWatchPage />} />
      <Route path="/story/:id" element={<StoryWatchPage />} />
      <Route path="/question/:id" element={<QuestionWatchPage />} />
      <Route path="/notice/:id" element={<NoticeWatchPage />} />
      <Route path="/mycontent" element={<MyContentPage />} />
    </Routes>
  );
};

export default Router;
