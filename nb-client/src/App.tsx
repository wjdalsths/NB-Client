import React from "react";
import "./App.css";
import { GlobalStyle } from "./Style/GlobalStyle";
import { BrowserRouter } from "react-router-dom";

import Router from "./Router";
import { Slide, toast, ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
        <ToastContainer
          position={toast.POSITION.TOP_RIGHT}
          transition={Slide}
          autoClose={1500}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
