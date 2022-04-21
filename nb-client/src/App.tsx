import React from "react";
import "./App.css";
import { GlobalStyle } from "./Style/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import WritePage from "./Pages/WritePage/WritePage";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/write" element={<WritePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
