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
        <ToastContainer
          position={toast.POSITION.TOP_RIGHT}
          transition={Slide}
          autoClose={1500}
        />
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
