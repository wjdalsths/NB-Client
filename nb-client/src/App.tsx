import React from "react";
import "./App.css";
import { GlobalStyle } from "./Style/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { Slide, toast, ToastContainer } from "react-toastify";

import Router from "./Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
