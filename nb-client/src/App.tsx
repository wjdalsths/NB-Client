import React from "react";
import "./App.css";
import { GlobalStyle } from "./Style/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import WritePage from "./Pages/WritePage/WritePage";
import FreeBoard from "./Components/FreeBoard/FreeBoard";
import StoryPgae from "./Pages/StoryPgae";
import QuestionPage from "./Pages/QuestionPage";
import NoticePage from "./Pages/NoticePage";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/free" element={<FreeBoard />} />
          <Route path="/store" element={<StoryPgae />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/notice" element={<NoticePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
